# Contoh Aplikasi Golang
### go - gRPC - redis - ent


## 1. Setup Project
Buat direktori proyek dan inisialisasi modul Go dengan nama `koperasi`:

```bash
mkdir -p koperasi/cmd/server koperasi/internal/config koperasi/internal/middleware koperasi/internal/service koperasi/internal/repository koperasi/internal/utils koperasi/proto koperasi/ent/schema koperasi/scripts
cd koperasi
go mod init koperasi
```



## 2. Buat `main.go`
Buat file `cmd/server/main.go` sebagai entry point untuk server gRPC:

```go
package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
	"koperasi/internal/service"
	"koperasi/proto"
)

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	proto.RegisterUserServiceServer(grpcServer, &service.UserService{})

	log.Println("Server is running on port 50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
```


## 3. Buat `config.go`
Buat file `internal/config/config.go` untuk mengelola konfigurasi aplikasi:

```go
package config

import (
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	DBHost     string
	DBPort     string
	DBUser     string
	DBPassword string
	DBName     string
	RedisAddr  string
}

func LoadConfig() (*Config, error) {
	if err := godotenv.Load(".env"); err != nil {
		return nil, err
	}

	return &Config{
		DBHost:     os.Getenv("DB_HOST"),
		DBPort:     os.Getenv("DB_PORT"),
		DBUser:     os.Getenv("DB_USER"),
		DBPassword: os.Getenv("DB_PASSWORD"),
		DBName:     os.Getenv("DB_NAME"),
		RedisAddr:  os.Getenv("REDIS_ADDR"),
	}, nil
}
```



## 4. Buat `redis.go`
Buat file `internal/config/redis.go` untuk menginisialisasi koneksi Redis:

```go
package config

import (
	"context"
	"log"

	"github.com/go-redis/redis/v8"
)

func NewRedisClient(cfg *Config) *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr: cfg.RedisAddr,
	})

	if _, err := client.Ping(context.Background()).Result(); err != nil {
		log.Fatalf("Failed to connect to Redis: %v", err)
	}

	return client
}
```



## 5. Buat `database.go`
Buat file `internal/config/database.go` untuk menginisialisasi koneksi database:

```go
package config

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func NewDB(cfg *Config) (*sql.DB, error) {
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		cfg.DBHost, cfg.DBPort, cfg.DBUser, cfg.DBPassword, cfg.DBName)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	log.Println("Connected to the database")
	return db, nil
}
```



## 6. Buat `auth.go`
Buat file `internal/middleware/auth.go` untuk middleware autentikasi gRPC:

```go
package middleware

import (
	"context"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func AuthInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	// Implementasi logika autentikasi di sini
	log.Println("AuthInterceptor called")

	// Contoh: Cek token atau metadata
	// Jika gagal, kembalikan error:
	// return nil, status.Errorf(codes.Unauthenticated, "invalid token")

	return handler(ctx, req)
}
```


## 7. Buat `user_service.go`
Buat file `internal/service/user_service.go` untuk implementasi gRPC service:

```go
package service

import (
	"context"
	"log"

	"koperasi/proto"
)

type UserService struct {
	proto.UnimplementedUserServiceServer
}

func (s *UserService) GetUser(ctx context.Context, req *proto.GetUserRequest) (*proto.GetUserResponse, error) {
	log.Printf("Received request for user ID: %d", req.Id)
	// Implementasi logika bisnis di sini
	return &proto.GetUserResponse{
		User: &proto.User{
			Id:    req.Id,
			Name:  "John Doe",
			Email: "john.doe@example.com",
		},
	}, nil
}
```



## 8. Buat `user_repository.go`
Buat file `internal/repository/user_repository.go` untuk logika database:

```go
package repository

import (
	"context"
	"database/sql"
	"log"

	"koperasi/ent"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) GetUserByID(ctx context.Context, id int) (*ent.User, error) {
	// Implementasi query database di sini
	log.Printf("Fetching user with ID: %d", id)
	return &ent.User{
		ID:    id,
		Name:  "John Doe",
		Email: "john.doe@example.com",
	}, nil
}
```


## 9. Buat `hash.go` dan `jwt.go`
Buat file `internal/utils/hash.go` untuk utilitas hashing:

```go
package utils

import "golang.org/x/crypto/bcrypt"

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
```

Buat file `internal/utils/jwt.go` untuk utilitas JWT:

```go
package utils

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtKey = []byte("your-secret-key")

type Claims struct {
	UserID int `json:"user_id"`
	jwt.RegisteredClaims
}

func GenerateToken(userID int) (string, error) {
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		UserID: userID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

func ValidateToken(tokenString string) (*Claims, error) {
	claims := &Claims{}
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})

	if err != nil || !token.Valid {
		return nil, err
	}

	return claims, nil
}
```


## 10. Buat `user.proto`
Buat file `proto/user.proto` untuk definisi Protobuf:

```proto
syntax = "proto3";

package proto;

service UserService {
  rpc GetUser (GetUserRequest) returns (GetUserResponse);
}

message GetUserRequest {
  int32 id = 1;
}

message GetUserResponse {
  User user = 1;
}

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
}
```

Generate kode gRPC dari file `.proto`:

```bash
protoc --go_out=. --go-grpc_out=. proto/user.proto
```


## 11. Buat `user.go` untuk Ent Schema
Buat file `ent/schema/user.go` untuk mendefinisikan schema Ent:

```go
package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

type User struct {
	ent.Schema
}

func (User) Fields() []ent.Field {
	return []ent.Field{
		field.Int("id"),
		field.String("name"),
		field.String("email"),
	}
}
```

Generate kode Ent:

```bash
go run entgo.io/ent/cmd/ent generate ./ent/schema
```


## 12. Buat `migrate.sh`
Buat file `scripts/migrate.sh` untuk menjalankan migrasi database:

```bash
#!/bin/bash

echo "Running migrations..."
go run entgo.io/ent/cmd/ent migrate --dir ./ent/schema
echo "Migrations completed."
```

Jangan lupa berikan izin eksekusi:

```bash
chmod +x scripts/migrate.sh
```


## 13. Buat `Makefile`
Buat file `Makefile` untuk memudahkan build dan run aplikasi:

```Makefile
.PHONY: build run migrate

build:
	go build -o bin/server ./cmd/server

run:
	go run ./cmd/server

migrate:
	./scripts/migrate.sh
```


## 14. Buat `.env`
Buat file `.env` untuk menyimpan konfigurasi environment:

```text
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=koperasi
REDIS_ADDR=localhost:6379
```


## 15. Install Dependencies
Jalankan perintah berikut untuk menginstal dependensi:

```bash
go mod tidy
```


## 16. Jalankan Aplikasi
Anda dapat menjalankan aplikasi dengan perintah:

```bash
make run
```

Atau jalankan migrasi database terlebih dahulu:

```bash
make migrate
make run
```

---

Dengan struktur ini, Anda memiliki aplikasi microservice berbasis Golang yang siap dikembangkan lebih lanjut. 