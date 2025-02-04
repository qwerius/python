# Go Language (Golang)
## Golang dan Python
Golang dan Python bisa dikolaborasikan untuk membangun sistem yang lebih efisien, scalable, dan cepat. Penggunaan Go dalam ekosistem Python biasanya untuk mempercepat komputasi, membangun backend API, menggunakan gRPC, atau membuat pustaka performa tinggi yang bisa digunakan oleh Python.

##### Kapan Menggunakan Go? 

✅ Backend API yang scalable dan cepat
✅ Memproses data besar dengan efisien
✅ Menggunakan paralelisme (goroutine lebih efisien daripada Python threading)
✅ Membuat pustaka sistem-level (misalnya shared libraries)

##### Kapan Menggunakan Python?

✅ Data Science dan Machine Learning
✅ Skrip automasi dan prototyping cepat
✅ Analisis data dengan Pandas dan NumPy
✅ Backend dengan kebutuhan fleksibilitas tinggi

## **Dasar-Dasar Sintaks Go**

### **1\. Struktur Program Go**

Program Go memiliki struktur dasar yang terdiri dari:

*   **Package**: Setiap file Go dimulai dengan deklarasi package.
*   **Import**: Digunakan untuk mengimpor package lain.
*   **Fungsi** **`main`**: Fungsi utama yang dieksekusi saat program dijalankan.

### Contoh:

```go
package main // Deklarasi package

import "fmt" // Mengimpor package fmt untuk input/output

func main() { // Fungsi utama
    fmt.Println("Hello, World!") // Menampilkan output
}
```


Dalam Go, **`import`** digunakan untuk mengimpor **package**, bukan folder. Namun, ada hubungan erat antara package dan folder karena struktur folder dalam proyek Go menentukan nama package. Berikut penjelasan lengkapnya:



## **Import Package**

*   **Package** adalah kumpulan file Go yang berada dalam direktori yang sama dan memiliki deklarasi `package` yang sama di bagian atas file.
*   Setiap package memiliki nama unik yang digunakan untuk mengimpor dan mengakses fungsionalitasnya.
*   Package yang diimpor harus berupa **path package**, yang biasanya sesuai dengan struktur folder dalam proyek Go.

### **Contoh:**

```go
package main

import (
    "fmt"       // Package standar dari Go
    "math/rand" // Package standar dari Go
)

func main() {
    fmt.Println("Angka acak:", rand.Intn(100))
}
```


### **Import Folder Package**

*   Dalam Go, package disimpan dalam folder. Nama folder biasanya sama dengan nama package, tetapi tidak harus.
*   Saat mengimpor package, Anda menggunakan **path folder** yang relatif terhadap `GOPATH` atau module path (jika menggunakan Go Modules).

### **Contoh Struktur Proyek:**

```plain
myproject/
├── go.mod
├── main.go
└── utils/
    └── math.go
```

### **File** **`utils/math.go`**

```go
package utils // Nama package

func Add(a, b int) int {
    return a + b
}
```

### **File** **`main.go`**

```go
package main

import (
    "fmt"
    "myproject/utils" // Import package dari folder utils
)

func main() {
    hasil := utils.Add(10, 20)
    fmt.Println("Hasil penjumlahan:", hasil)
}
```



## **Aturan Import**

1. **Package Standar**:
    *   Package standar Go (seperti `fmt`, `math`, `os`) diimpor menggunakan nama package saja.
    *   Contoh:

```go
  import "fmt"
```

1. **Package Lokal**:
    *   Package lokal diimpor menggunakan path relatif terhadap module path (jika menggunakan Go Modules) atau `GOPATH`.
    *   Contoh:

```cpp
  import "myproject/utils"
```

1. **Alias Import**:
    *   Jika ada konflik nama package, Anda bisa menggunakan alias.
    *   Contoh:

```dart
  import (
      "fmt"
      myutils "myproject/utils"
  )
```

1. **Import Side Effects**:
    *   Jika Anda hanya ingin menjalankan `init()` function dari package tanpa menggunakannya secara langsung, gunakan `_`.
    *   Contoh:

```haxe
  import _ "github.com/lib/pq" // Import untuk side effect (inisialisasi driver database)
```


## **Go Modules dan Import**

Jika Anda menggunakan **Go Modules**, path package akan mengacu pada nama modul yang didefinisikan di `go.mod`.

### **File** **`go.mod`**

```apache
module myproject

go 1.20
```

### **Import Package Lokal:**

```cpp
import "myproject/utils"
```



### **Contoh Import**

Berikut adalah contoh lengkap penggunaan import package dalam proyek Go:

### **Struktur Proyek:**

```bash
myproject/
├── go.mod
├── main.go
└── utils/
    └── math.go
```

### **File** **`utils/math.go`**

```go
package utils

// Fungsi untuk menambahkan dua bilangan
func Add(a, b int) int {
    return a + b
}
```

### **File** **`main.go`**

```go
package main

import (
    "fmt"
    "myproject/utils" // Import package utils
)

func main() {
    hasil := utils.Add(10, 20)
    fmt.Println("Hasil penjumlahan:", hasil)
}
```

### **Output:**

```yaml
Hasil penjumlahan: 30
```


## Cara import: **`import`** digunakan untuk mengimpor **package**, bukan folder

*   Package disimpan dalam folder, dan path folder digunakan untuk mengimpor package.
*   Jika menggunakan Go Modules, path package mengacu pada nama modul yang didefinisikan di `go.mod`.
*   Package standar diimpor menggunakan nama package, sedangkan package lokal diimpor menggunakan path relatif.

Dengan memahami cara kerja `import`, Anda dapat mengorganisasi dan menggunakan package dengan efektif dalam proyek Go.

## **Variabel dan Konstanta**

### **Variabel**

*   Variabel digunakan untuk menyimpan data.
*   Deklarasi variabel dapat dilakukan dengan `var` atau menggunakan sintaks singkat `:=`.

### Contoh:

```go
package main

import "fmt"

func main() {
    // Deklarasi variabel dengan var
    var nama string = "Alice"
    var umur int = 25

    // Deklarasi variabel dengan := (type inference)
    alamat := "Jakarta"

    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Alamat:", alamat)
}
```

### **Konstanta**

*   Konstanta adalah nilai yang tidak dapat diubah setelah dideklarasikan.
*   Deklarasi menggunakan `const`.

### Contoh:

```go
package main

import "fmt"

func main() {
    const pi float64 = 3.14159
    fmt.Println("Nilai Pi:", pi)
}
```

## **Deklarasi Variabel dengan** **`var`**

Dalam Go, ada dua cara utama untuk mendeklarasikan variabel:

1. **Menggunakan** **`var`**
2. **Menggunakan type inference (sintaks** **`:=`**)


Deklarasi menggunakan `var` adalah cara eksplisit untuk mendefinisikan variabel. Anda dapat menentukan tipe data secara manual atau mengandalkan Go untuk menentukan tipe data secara otomatis.

### **Sintaks:**

```java
var namaVariabel tipeData = nilai
```

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Deklarasi variabel dengan tipe data eksplisit
    var nama string = "Alice"
    var umur int = 25

    // Deklarasi variabel tanpa nilai awal (default value)
    var alamat string
    alamat = "Jakarta"

    // Deklarasi multiple variabel
    var (
        tinggi float64 = 165.5
        berat  float64 = 60.2
    )

    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Alamat:", alamat)
    fmt.Println("Tinggi:", tinggi)
    fmt.Println("Berat:", berat)
}
```

### **Kelebihan:**

*   Cocok untuk deklarasi variabel di tingkat package (global).
*   Memungkinkan deklarasi variabel tanpa nilai awal (default value akan digunakan).
*   Berguna ketika tipe data perlu ditentukan secara eksplisit.

### **Default Value:**

Jika variabel dideklarasikan tanpa nilai awal, Go akan memberikan nilai default:

*   `int`: `0`
*   `float64`: `0.0`
*   `string`: `""` (string kosong)
*   `bool`: `false`

* * *

## **Deklarasi Variabel dengan Type Inference (****`:=`****)**

Deklarasi menggunakan `:=` adalah cara singkat untuk mendefinisikan variabel. Go secara otomatis menentukan tipe data berdasarkan nilai yang diberikan.

### **Sintaks:**

```go
namaVariabel := nilai
```

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Deklarasi variabel dengan type inference
    nama := "Alice"
    umur := 25
    alamat := "Jakarta"

    // Deklarasi multiple variabel
    tinggi, berat := 165.5, 60.2

    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Alamat:", alamat)
    fmt.Println("Tinggi:", tinggi)
    fmt.Println("Berat:", berat)
}
```

### **Kelebihan:**

*   Lebih ringkas dan mudah digunakan.
*   Cocok untuk deklarasi variabel di dalam fungsi.
*   Tipe data otomatis ditentukan oleh nilai yang diberikan.

### **Catatan:**

*   Hanya bisa digunakan di dalam fungsi (tidak bisa digunakan di tingkat package).
*   Variabel harus langsung diinisialisasi dengan nilai (tidak bisa dideklarasikan tanpa nilai awal).



## **Perbandingan** **`var`** **dan** **`:=`**

| Fitur | `var` | `:=` |  |
| ---| ---| ---| --- |
| **Sintaks** | `var nama string = "Alice"` | `nama := "Alice"` |  |
| **Tipe Data** | Bisa eksplisit atau implisit | Selalu implisit (type inference) |  |
| **Nilai Awal** | Bisa tanpa nilai awal | Harus dengan nilai awal |  |
| **Scope** | Bisa di package atau fungsi | Hanya di dalam fungsi |  |
| **Multiple Deklarasi** | Bisa | Bisa |  |



### **Contoh Program Lengkap**

Berikut adalah contoh program yang menggabungkan kedua cara deklarasi variabel:

```go
package main

import "fmt"

// Deklarasi variabel di tingkat package (hanya bisa menggunakan var)
var versi string = "1.0"

func main() {
    // Deklarasi variabel dengan var
    var nama string = "Alice"
    var umur int = 25

    // Deklarasi variabel dengan type inference
    alamat := "Jakarta"
    tinggi, berat := 165.5, 60.2

    // Menampilkan nilai variabel
    fmt.Println("Versi:", versi)
    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Alamat:", alamat)
    fmt.Println("Tinggi:", tinggi)
    fmt.Println("Berat:", berat)
}
```

## **Kapan Menggunakan** **`var`** **vs** **`:=`**?

*   Gunakan `var` ketika:
    *   Anda perlu mendeklarasikan variabel di tingkat package.
    *   Anda ingin mendeklarasikan variabel tanpa nilai awal.
    *   Anda ingin menentukan tipe data secara eksplisit.
*   Gunakan `:=` ketika:
    *   Anda mendeklarasikan variabel di dalam fungsi.
    *   Anda ingin sintaks yang lebih ringkas.
    *   Anda tidak perlu menentukan tipe data secara manual.


Berikut adalah contoh penggunaan variabel **tanpa nilai awal** dan **dengan nilai awal** dalam Go. Perbedaan utama terletak pada apakah variabel langsung diinisialisasi dengan nilai atau tidak.


## **Variabel dengan Nilai Awal**

Variabel dengan nilai awal langsung diinisialisasi saat dideklarasikan. Nilai dan tipe data variabel ditentukan pada saat deklarasi.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Variabel dengan nilai awal
    var nama string = "Alice"
    var umur int = 25
    var aktif bool = true

    // Menampilkan nilai variabel
    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Status Aktif:", aktif)
}
```

### **Output:**

```yaml
Nama: Alice
Umur: 25
Status Aktif: true
```



## **Variabel Tanpa Nilai Awal**

Variabel tanpa nilai awal dideklarasikan tanpa inisialisasi nilai. Go akan memberikan **nilai default** sesuai tipe data variabel.

### **Nilai Default dalam Go:**

*   `int`: `0`
*   `float64`: `0.0`
*   `string`: `""` (string kosong)
*   `bool`: `false`

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Variabel tanpa nilai awal
    var nama string
    var umur int
    var aktif bool

    // Menampilkan nilai default variabel
    fmt.Println("Nama:", nama)       // Output: "" (string kosong)
    fmt.Println("Umur:", umur)       // Output: 0
    fmt.Println("Status Aktif:", aktif) // Output: false
}
```

### **Output:**

```yaml
Nama:
Umur: 0
Status Aktif: false
```


## **Kapan Menggunakan** **`var`** **vs** **`const`**?

*   Gunakan **`var`** ketika:
    *   Nilai data mungkin berubah selama program berjalan.
    *   Anda perlu mendeklarasikan variabel tanpa nilai awal.
    *   Anda memerlukan fleksibilitas untuk mengubah nilai.
*   Gunakan **`const`** ketika:
    *   Nilai data tetap dan tidak akan berubah selama program berjalan.
    *   Anda ingin memastikan nilai tidak diubah secara tidak sengaja.
    *   Anda bekerja dengan nilai-nilai tetap seperti konstanta matematis atau konfigurasi.

### **Contoh Program Lengkap**

Berikut adalah contoh program yang menggabungkan variabel **dengan nilai awal** dan **tanpa nilai awal**:

```go
package main


```

```go
import "fmt"

func main() {
```

```go
    // Variabel dengan nilai awal
    var nama string = "Alice"
    var umur int = 25
    var aktif bool = true

    // Variabel tanpa nilai awal
    var alamat string
    var gaji float64
    var menikah bool

    // Menampilkan nilai variabel dengan nilai awal
    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Status Aktif:", aktif)

    // Menampilkan nilai default variabel tanpa nilai awal
    fmt.Println("Alamat:", alamat)   // Output: "" (string kosong)
    fmt.Println("Gaji:", gaji)       // Output: 0.0
    fmt.Println("Status Menikah:", menikah) // Output: false

    // Mengisi nilai variabel yang sebelumnya tanpa nilai awal
    alamat = "Jakarta"
    gaji = 5000.75
    menikah = false

    // Menampilkan nilai setelah diisi
    fmt.Println("Alamat:", alamat)
    fmt.Println("Gaji:", gaji)
    fmt.Println("Status Menikah:", menikah)
}
```

### **Output:**

```yaml
Nama: Alice
Umur: 25
Status Aktif: true
Alamat:
Gaji: 0
Status Menikah: false
Alamat: Jakarta
Gaji: 5000.75
Status Menikah: false
```



## **Tipe Data Dasar**

Go memiliki beberapa tipe data dasar:

*   **`int`**: Bilangan bulat (e.g., `int8`, `int16`, `int32`, `int64`).
*   **`float64`**: Bilangan desimal (presisi ganda).
*   **`string`**: Teks.
*   **`bool`**: Boolean (`true` atau `false`).

### Contoh:

```go
package main

import "fmt"

func main() {
    var a int = 42
    var b float64 = 3.14
    var c string = "Go Lang"
    var d bool = true

    fmt.Println("a:", a)
    fmt.Println("b:", b)
    fmt.Println("c:", c)
    fmt.Println("d:", d)
}
```


## **Operator**

### **Operator Aritmatika**

*   `+` (penjumlahan)
*   (pengurangan)
*   (perkalian)
*   `/` (pembagian)
*   `%` (modulus)

### Contoh:

```css
package main

import "fmt"

func main() {
    x := 10
    y := 3

    fmt.Println("x + y =", x+y)
    fmt.Println("x - y =", x-y)
    fmt.Println("x * y =", x*y)
    fmt.Println("x / y =", x/y)
    fmt.Println("x % y =", x%y)
}
```

### **Operator Perbandingan**

*   `==` (sama dengan)
*   `!=` (tidak sama dengan)
*   `>` (lebih besar)
*   `<` (lebih kecil)
*   `>=` (lebih besar atau sama dengan)
*   `<=` (lebih kecil atau sama dengan)

### Contoh:

```stylus
package main


```

```plain
import "fmt"

func main() {
```

```stylus
    a := 5
    b := 10

    fmt.Println("a == b:", a == b)
    fmt.Println("a != b:", a != b)
    fmt.Println("a > b:", a > b)
    fmt.Println("a < b:", a < b)
}
```

### **Operator Logika**

*   `&&` (AND)
*   `||` (OR)
*   `!` (NOT)

### Contoh:

```go
package main

import "fmt"

func main() {
    x := true
    y := false

    fmt.Println("x && y:", x && y)
    fmt.Println("x || y:", x || y)
    fmt.Println("!x:", !x)
}
```



## **Input dan Output Sederhana**

### **Output dengan** **`fmt.Println`**

*   Menampilkan teks ke console.

### Contoh:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### **Input dengan** **`fmt.Scan`**

*   Membaca input dari pengguna.

### Contoh:

```go
package main


import "fmt"

func main() {

    var nama string
    var umur int

    fmt.Print("Masukkan nama Anda: ")
    fmt.Scan(&nama) // & digunakan untuk mengambil alamat variabel

    fmt.Print("Masukkan umur Anda: ")
    fmt.Scan(&umur)

    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
}
```

### **Input dengan** **`fmt.Scanln`** **(untuk string dengan spasi)**

*   `fmt.Scanln` dapat membaca input string yang mengandung spasi.

### Contoh:

```go
package main

import "fmt"

func main() {
    var nama string

    fmt.Print("Masukkan nama lengkap Anda: ")
    fmt.Scanln(&nama) // Membaca seluruh baris input

    fmt.Println("Nama Lengkap:", nama)
}
```



### **Contoh Program Lengkap**

Berikut adalah contoh program lengkap yang menggabungkan semua konsep di atas:

```go
package main

import "fmt"

func main() {
    // Variabel dan konstanta
    var nama string = "Alice"
    umur := 25
    const pi float64 = 3.14159

    // Output
    fmt.Println("Nama:", nama)
    fmt.Println("Umur:", umur)
    fmt.Println("Nilai Pi:", pi)

    // Operator
    x := 10
    y := 3
    fmt.Println("x + y =", x+y)

    // Input
    var alamat string
    fmt.Print("Masukkan alamat Anda: ")
    fmt.Scanln(&alamat)
    fmt.Println("Alamat:", alamat)
}
```



## **Kontrol Alur Program**

### **1\. Percabangan**

Percabangan digunakan untuk mengeksekusi blok kode tertentu berdasarkan kondisi.

### **a.** **`if`**

*   Mengeksekusi blok kode jika kondisi bernilai `true`.

### Contoh:

```go
package main

import "fmt"

func main() {
    umur := 20

    if umur >= 18 {
        fmt.Println("Anda sudah dewasa.")
    }
}
```

### **b.** **`else`**

*   Mengeksekusi blok kode jika kondisi `if` bernilai `false`.

### Contoh:

```go
package main

import "fmt"

func main() {
    umur := 15

    if umur >= 18 {
        fmt.Println("Anda sudah dewasa.")
    } else {
        fmt.Println("Anda masih di bawah umur.")
    }
}
```

### **c.** **`else if`**

*   Mengeksekusi blok kode jika kondisi sebelumnya (`if` atau `else if`) bernilai `false` dan kondisi saat ini bernilai `true`.

### Contoh:

```go
package main


import "fmt"

func main() {


    nilai := 75

    if nilai >= 90 {
        fmt.Println("Grade: A")
    } else if nilai >= 80 {
        fmt.Println("Grade: B")
    } else if nilai >= 70 {
        fmt.Println("Grade: C")
    } else {
        fmt.Println("Grade: D")
    }
}
```



### **2\.** **`switch case`**

*   Digunakan untuk mengeksekusi blok kode berdasarkan nilai tertentu.
*   Lebih ringkas daripada `if-else` ketika ada banyak kondisi.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    hari := "Senin"

    switch hari {
    case "Senin":
        fmt.Println("Hari kerja.")
    case "Sabtu", "Minggu":
        fmt.Println("Hari libur.")
    default:
        fmt.Println("Hari tidak valid.")
    }
}
```

### **`switch`** **tanpa kondisi**:

*   Mirip dengan `if-else`, tetapi lebih fleksibel.

### Contoh:

```go
package main

import "fmt"

func main() {

    nilai := 85

    switch {

    case nilai >= 90:
        fmt.Println("Grade: A")
    case nilai >= 80:
        fmt.Println("Grade: B")
    case nilai >= 70:
        fmt.Println("Grade: C")
    default:
        fmt.Println("Grade: D")
    }
}
```



### **3\. Perulangan**

Go hanya memiliki satu jenis perulangan, yaitu `for`, tetapi dapat digunakan dalam berbagai bentuk.

### **a.** **`for`** **dasar**

*   Mengeksekusi blok kode selama kondisi bernilai `true`.

### Contoh:

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println("Iterasi ke:", i)
    }
}
```

### **b.** **`for`** **tanpa kondisi (seperti** **`while`**)

*   Mengeksekusi blok kode tanpa kondisi awal, mirip dengan `while` di bahasa lain.

### Contoh:

```go
package main

import "fmt"

func main() {
    i := 1
    for i <= 5 {
        fmt.Println("Iterasi ke:", i)
        i++
    }
}
```

### **c.** **`for`** **tanpa argumen (infinite loop)**

*   Perulangan tak terhingga, dapat dihentikan dengan `break`.

### Contoh:

```go
package main

import "fmt"

func main() {
    i := 1
    for {
        fmt.Println("Iterasi ke:", i)
        i++
        if i > 5 {
            break
        }
    }
}
```

### **d.** **`for range`**

*   Digunakan untuk mengiterasi array, slice, string, map, atau channel.

### Contoh:

```go
package main

import "fmt"

func main() {
    buah := []string{"Apel", "Mangga", "Pisang"}

    for index, nama := range buah {
        fmt.Println("Index:", index, "Buah:", nama)
    }
}
```


### **4\. Penggunaan** **`break`** **dan** **`continue`**

*   **`break`**: Menghentikan perulangan secara paksa.
*   **`continue`**: Melompati iterasi saat ini dan melanjutkan ke iterasi berikutnya.

### **Contoh** **`break`**:

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        if i == 5 {
            break // Menghentikan perulangan saat i == 5
        }
        fmt.Println("Iterasi ke:", i)
    }
}
```

### **Contoh** **`continue`**:

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        if i == 3 {
            continue // Melompati iterasi saat i == 3
        }
        fmt.Println("Iterasi ke:", i)
    }
}
```


### **Contoh Program Lengkap**

Berikut adalah contoh program yang menggabungkan semua konsep kontrol alur program:

```go
package main

import "fmt"

func main() {
    // Percabangan if-else
    umur := 20
    if umur >= 18 {
        fmt.Println("Anda sudah dewasa.")
    } else {
        fmt.Println("Anda masih di bawah umur.")
    }

    // Switch case
    hari := "Sabtu"
    switch hari {
    case "Senin", "Selasa", "Rabu", "Kamis", "Jumat":
        fmt.Println("Hari kerja.")
    case "Sabtu", "Minggu":
        fmt.Println("Hari libur.")
    default:
        fmt.Println("Hari tidak valid.")
    }

    // Perulangan for
    for i := 1; i <= 3; i++ {
        fmt.Println("For loop ke:", i)
    }

    // Perulangan for range
    buah := []string{"Apel", "Mangga", "Pisang"}
    for index, nama := range buah {
        fmt.Println("Index:", index, "Buah:", nama)
    }

    // Penggunaan break dan continue
    for i := 1; i <= 5; i++ {
        if i == 3 {
            continue // Lewati iterasi saat i == 3
        }
        if i == 5 {
            break // Hentikan perulangan saat i == 5
        }
        fmt.Println("Iterasi ke:", i)
    }
}
```

### **Output:**

```yaml
Anda sudah dewasa.
Hari libur.
For loop ke: 1
For loop ke: 2
For loop ke: 3
Index: 0 Buah: Apel
Index: 1 Buah: Mangga
Index: 2 Buah: Pisang
Iterasi ke: 1
Iterasi ke: 2
Iterasi ke: 4
```


## **Fungsi dalam Go**

### **1\. Mendefinisikan dan Memanggil Fungsi**

Fungsi adalah blok kode yang dapat dipanggil untuk melakukan tugas tertentu. Fungsi didefinisikan menggunakan kata kunci `func`.

### **Sintaks:**

```go
func namaFungsi(parameter tipeData) tipeReturn {
    // Blok kode
    return nilai
}
```

### **Contoh:**

```go
package main

import "fmt"

// Mendefinisikan fungsi
func sapa(nama string) {
    fmt.Println("Halo,", nama)
}

func main() {
    // Memanggil fungsi
    sapa("Alice")
}
```

### **Output:**

```go
Halo, Alice
```

* * *

### **2\. Parameter dan Return Value**

Fungsi dapat menerima parameter dan mengembalikan nilai (return value).

### **Contoh Fungsi dengan Parameter dan Return Value:**

```go
package main

import "fmt"

// Fungsi dengan parameter dan return value
func tambah(a int, b int) int {
    return a + b
}

func main() {
    hasil := tambah(10, 20)
    fmt.Println("Hasil penjumlahan:", hasil)
}
```

### **Output:**

```yaml
Hasil penjumlahan: 30
```

* * *

### **3\. Fungsi dengan Multiple Return Values**

Go mendukung fungsi yang mengembalikan lebih dari satu nilai (multiple return values).

### **Contoh:**

```go
package main

import "fmt"

// Fungsi dengan multiple return values
func hitung(a int, b int) (int, int) {
    jumlah := a + b
    selisih := a - b
    return jumlah, selisih
}

func main() {
    jumlah, selisih := hitung(20, 10)
    fmt.Println("Jumlah:", jumlah)
    fmt.Println("Selisih:", selisih)
}
```

### **Output:**

```yaml
Jumlah: 30
Selisih: 10
```

### **Mengabaikan Salah Satu Return Value:**

Jika Anda hanya membutuhkan satu nilai dari multiple return values, gunakan `_` untuk mengabaikan nilai lainnya.

### Contoh:

```go
package main

import "fmt"

func hitung(a int, b int) (int, int) {
    jumlah := a + b
    selisih := a - b
    return jumlah, selisih
}

func main() {
    jumlah, _ := hitung(20, 10) // Mengabaikan selisih
    fmt.Println("Jumlah:", jumlah)
}
```

### **Output:**

```yaml
Jumlah: 30
```


### **4\. Anonymous Functions (Closures)**

Anonymous functions adalah fungsi yang tidak memiliki nama dan dapat didefinisikan langsung di dalam blok kode. Mereka sering digunakan sebagai **closures**, yaitu fungsi yang dapat mengakses variabel di sekitarnya.

### **Contoh Anonymous Function:**

```go
package main

import "fmt"

func main() {
    // Mendefinisikan anonymous function
    sapa := func(nama string) {
        fmt.Println("Halo,", nama)
    }

    // Memanggil anonymous function
    sapa("Alice")
}
```

### **Output:**

```go
Halo, Alice
```

### **Contoh Closure:**

Closure adalah anonymous function yang dapat mengakses variabel di luar scope-nya.

### Contoh:

```go
package main

import "fmt"

func main() {
    counter := 0

    // Closure: anonymous function yang mengakses variabel counter
    increment := func() {
        counter++
        fmt.Println("Counter:", counter)
    }

    increment() // Counter: 1
    increment() // Counter: 2
}
```

### **Output:**

```yaml
Counter: 1
Counter: 2
```


### **Contoh Program Lengkap**

Berikut adalah contoh program yang menggabungkan semua konsep fungsi:

```go
package main

import "fmt"

// Fungsi dengan parameter dan return value
func tambah(a int, b int) int {
    return a + b
}

// Fungsi dengan multiple return values
func hitung(a int, b int) (int, int) {
    jumlah := a + b
    selisih := a - b
    return jumlah, selisih
}

func main() {
    // Memanggil fungsi tambah
    hasilTambah := tambah(10, 20)
    fmt.Println("Hasil penjumlahan:", hasilTambah)

    // Memanggil fungsi hitung
    jumlah, selisih := hitung(20, 10)
    fmt.Println("Jumlah:", jumlah)
    fmt.Println("Selisih:", selisih)

    // Anonymous function
    sapa := func(nama string) {
        fmt.Println("Halo,", nama)
    }
    sapa("Alice")

    // Closure
    counter := 0
    increment := func() {
        counter++
        fmt.Println("Counter:", counter)
    }
    increment() // Counter: 1
    increment() // Counter: 2
}
```

### **Output:**

```yaml
Hasil penjumlahan: 30
Jumlah: 30
Selisih: 10
Halo, Alice
Counter: 1
Counter: 2
```


### Catatan

*   **Fungsi** adalah blok kode yang dapat dipanggil untuk melakukan tugas tertentu.
*   Fungsi dapat memiliki **parameter** dan **return value**.
*   Go mendukung **multiple return values**.
*   **Anonymous functions** (closures) adalah fungsi tanpa nama yang dapat didefinisikan langsung di dalam blok kode dan mengakses variabel di sekitarnya.

Dengan memahami konsep fungsi, Anda dapat memecah program menjadi bagian-bagian yang lebih kecil dan terorganisir. Selamat belajar! 🚀

## **Array**

Array adalah kumpulan elemen dengan tipe data yang sama dan ukuran tetap.

### **Deklarasi dan Inisialisasi**

*   Ukuran array harus ditentukan saat deklarasi.
*   Indeks array dimulai dari `0`.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Deklarasi array dengan ukuran 5
    var numbers [5]int

    // Inisialisasi array
    numbers = [5]int{10, 20, 30, 40, 50}

    // Deklarasi dan inisialisasi langsung
    names := [3]string{"Alice", "Bob", "Charlie"}

    fmt.Println("Numbers:", numbers)
    fmt.Println("Names:", names)
}
```

### **Output:**

```yaml
Numbers: [10 20 30 40 50]
Names: [Alice Bob Charlie]
```

### **Iterasi Array**

*   Menggunakan perulangan `for` dengan indeks atau `range`.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    numbers := [5]int{10, 20, 30, 40, 50}

    // Iterasi dengan indeks
    for i := 0; i < len(numbers); i++ {
        fmt.Println("Index:", i, "Value:", numbers[i])
    }

    // Iterasi dengan range
    for index, value := range numbers {
        fmt.Println("Index:", index, "Value:", value)
    }
}
```

### **Output:**

```apache
Index: 0 Value: 10
Index: 1 Value: 20
Index: 2 Value: 30
Index: 3 Value: 40
Index: 4 Value: 50
```



## **Slice**

Slice adalah referensi ke bagian dari array. Slice memiliki ukuran dinamis dan lebih fleksibel daripada array.

### **Konsep Slice**

*   Slice tidak menyimpan data sendiri, melainkan merujuk ke array yang mendasarinya.
*   Slice memiliki tiga komponen: pointer, length, dan capacity.

### **Deklarasi dan Inisialisasi**

*   Slice dapat dibuat dari array atau langsung diinisialisasi.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Membuat slice dari array
    numbers := [5]int{10, 20, 30, 40, 50}
    slice1 := numbers[1:4] // Slice dari index 1 sampai 3

    // Membuat slice langsung
    slice2 := []int{1, 2, 3, 4, 5}

    fmt.Println("Slice1:", slice1)
    fmt.Println("Slice2:", slice2)
}
```

### **Output:**

```go
Slice1: [20 30 40]
Slice2: [1 2 3 4 5]
```

### **Operasi pada Slice**

### **a.** **`append`**

*   Menambahkan elemen ke slice.

### Contoh:

```go
package main

import "fmt"

func main() {
    slice := []int{1, 2, 3}
    slice = append(slice, 4, 5) // Menambahkan elemen
    fmt.Println("Slice setelah append:", slice)
}
```

### **Output:**

```go
Slice setelah append: [1 2 3 4 5]
```

### **b.** **`copy`**

*   Menyalin elemen dari satu slice ke slice lainnya.

### Contoh:

```go
package main

import "fmt"

func main() {
    slice1 := []int{1, 2, 3}
    slice2 := make([]int, len(slice1))

    copy(slice2, slice1) // Menyalin slice1 ke slice2
    fmt.Println("Slice2 setelah copy:", slice2)
}
```

### **Output:**

```go
Slice2 setelah copy: [1 2 3]
```

### **c. Slicing**

*   Membuat slice baru dari slice yang sudah ada.

### Contoh:

```go
package main

import "fmt"

func main() {
    slice := []int{10, 20, 30, 40, 50}
    newSlice := slice[1:4] // Membuat slice dari index 1 sampai 3
    fmt.Println("New Slice:", newSlice)
}
```

### **Output:**

```go
New Slice: [20 30 40]
```


## Sintak `:=` pada array dan slice

Sintaks `:=` (short variable declaration) **secara otomatis menentukan tipe data variabel** berdasarkan nilai yang diberikan. Namun, pada contoh :

```go
names := [3]string{"Alice", "Bob", "Charlie"}
```

Ada alasan khusus mengapa tipe data `string` tetap ditulis secara eksplisit. Mari kita bahas lebih detail:


## **Short Variable Declaration (****`:=`**)

*   Short variable declaration (`:=`) digunakan untuk mendeklarasikan dan menginisialisasi variabel sekaligus.
*   Go akan **secara otomatis menentukan tipe data** variabel berdasarkan nilai yang diberikan.

### **Contoh:**

```go
nama := "Alice" // Tipe data otomatis string
umur := 25      // Tipe data otomatis int
```


### **Array dalam Go**

*   Array dalam Go memiliki **ukuran tetap** yang harus ditentukan saat deklarasi.
*   Tipe data array terdiri dari **ukuran** dan **tipe elemen**. Contoh: `[3]string` adalah array dengan 3 elemen bertipe `string`.

### **Contoh Deklarasi Array:**

```go
var names [3]string // Deklarasi array dengan ukuran 3 dan tipe elemen string
```


## **Kenapa** **`[3]string`** **Ditulis Secara Eksplisit?**

Pada contoh:

```go
names := [3]string{"Alice", "Bob", "Charlie"}


```

*   `[3]string` adalah **tipe data array** yang terdiri dari 3 elemen bertipe `string`.
*   Go tidak bisa **menyimpulkan ukuran array** secara otomatis hanya dari nilai yang diberikan. Oleh karena itu, **ukuran array (****`[3]`****)** dan **tipe elemen (****`string`****)** harus ditulis secara eksplisit.

### **Jika Tanpa Tipe Data:**

```go
names := {"Alice", "Bob", "Charlie"} // Error: tidak valid di Go


```

Kode di atas akan menghasilkan error karena Go tidak tahu apakah `{"Alice", "Bob", "Charlie"}` adalah array, slice, atau tipe data lainnya.


### **Solusi: Gunakan Slice untuk Inferensi Otomatis**

Jika Anda ingin Go **secara otomatis menentukan tipe data** tanpa menulis `[3]string`, Anda bisa menggunakan **slice** (yang ukurannya dinamis).

### **Contoh dengan Slice:**

```go
names := []string{"Alice", "Bob", "Charlie"} // Tipe data otomatis []string


```

*   `[]string` adalah slice, bukan array.
*   Slice tidak memerlukan ukuran yang tetap, sehingga Go bisa menentukan tipe datanya secara otomatis.



## **Perbandingan Array dan Slice**

| Fitur | Array (<br>`[3]string`<br>) | Slice (<br>`[]string`<br>) |
| ---| ---| --- |
| **Ukuran** | Tetap (harus ditentukan saat deklarasi) | Dinamis (tidak perlu menentukan ukuran) |
| **Inferensi Tipe** | Tidak bisa otomatis | Bisa otomatis |
| **Fleksibilitas** | Kurang fleksibel | Lebih fleksibel |



### **Contoh Lengkap**

Berikut adalah contoh perbandingan antara array dan slice:

```go
package main

import "fmt"

func main() {
    // Array: ukuran dan tipe elemen harus ditulis eksplisit
    namesArray := [3]string{"Alice", "Bob", "Charlie"}
    fmt.Println("Array:", namesArray)

    // Slice: tipe data otomatis ditentukan
    namesSlice := []string{"Alice", "Bob", "Charlie"}
    fmt.Println("Slice:", namesSlice)
}


```

### **Output:**

```yaml
Array: [Alice Bob Charlie]
Slice: [Alice Bob Charlie]


```


*   Pada array (`[3]string`), **ukuran array** dan **tipe elemen** harus ditulis secara eksplisit karena Go tidak bisa menyimpulkan ukuran array secara otomatis.
*   Jika Anda ingin Go **secara otomatis menentukan tipe data**, gunakan **slice** (`[]string`) yang lebih fleksibel dan tidak memerlukan ukuran tetap.



## **Map**

Map adalah koleksi pasangan key-value yang tidak terurut. Key harus unik dan memiliki tipe data yang dapat dibandingkan (seperti `string` atau `int`).

### **Deklarasi dan Inisialisasi**

*   Map dideklarasikan menggunakan sintaks `map[keyType]valueType`.

### **Contoh:**

```go
package main

import "fmt"

func main() {
    // Deklarasi map
    var person map[string]string

    // Inisialisasi map
    person = map[string]string{
        "name": "Alice",
        "age":  "25",
    }

    // Deklarasi dan inisialisasi langsung
    scores := map[string]int{
        "math":    90,
        "science": 85,
    }

    fmt.Println("Person:", person)
    fmt.Println("Scores:", scores)
}


```

### **Output:**

```apache
Person: map[age:25 name:Alice]
Scores: map[math:90 science:85]


```

### **Operasi pada Map**

### **a. Menambah atau Mengubah Elemen**

*   Gunakan sintaks `map[key] = value`.

### Contoh:

```go
package main

import "fmt"

func main() {
    person := map[string]string{
        "name": "Alice",
    }

    person["age"] = "25" // Menambah elemen
    person["name"] = "Bob" // Mengubah elemen

    fmt.Println("Person:", person)
}


```

### **Output:**

```
Person: map[age:25 name:Bob]


```

### **b. Mengakses Elemen**

*   Gunakan sintaks `map[key]`.

### Contoh:

```go
package main

import "fmt"

func main() {
    person := map[string]string{
        "name": "Alice",
        "age":  "25",
    }

    name := person["name"]
    fmt.Println("Nama:", name)
}


```

### **Output:**

```yaml
Nama: Alice


```

### **c. Menghapus Elemen**

*   Gunakan fungsi `delete(map, key)`.

### Contoh:

```go
package main

import "fmt"

func main() {
    person := map[string]string{
        "name": "Alice",
        "age":  "25",
    }

    delete(person, "age") // Menghapus elemen dengan key "age"
    fmt.Println("Person setelah delete:", person)
}
```

### **Output:**

```go
Person setelah delete: map[name:Alice]
```

### **d. Iterasi Map**

*   Menggunakan perulangan `for range`.

### Contoh:

```go
package main

import "fmt"

func main() {
    person := map[string]string{
        "name": "Alice",
        "age":  "25",
    }

    for key, value := range person {
        fmt.Println("Key:", key, "Value:", value)
    }
}
```

### **Output:**

```go
Key: name Value: Alice
Key: age Value: 25
```


### **Contoh Program Lengkap**

Berikut adalah contoh program yang menggabungkan array, slice, dan map:

```go
package main

import "fmt"

func main() {
    // Array
    numbers := [5]int{10, 20, 30, 40, 50}
    fmt.Println("Array:", numbers)

    // Slice
    slice := numbers[1:4]
    fmt.Println("Slice:", slice)

    // Append ke slice
    slice = append(slice, 60)
    fmt.Println("Slice setelah append:", slice)

    // Map
    person := map[string]string{
        "name": "Alice",
        "age":  "25",
    }
    fmt.Println("Map:", person)

    // Iterasi map
    for key, value := range person {
        fmt.Println("Key:", key, "Value:", value)
    }
}
```

### **Output:**

```yaml
Array: [10 20 30 40 50]
Slice: [20 30 40]
Slice setelah append: [20 30 40 60]
Map: map[age:25 name:Alice]
Key: name Value: Alice
Key: age Value: 25
```


## Perintah pertama untuk buat “Hello world!”

Buat workspace dulu dengan go run mod “nama\_folder”

```go
/> go mod init "nama_folder"
```

Kemudian buka folder space di vscode, dan buat contoh main.go

```go
package main

import "fmt"

func main(){
		fmt.Printl("Hello world!")
}
```

lalu diterminal jalankan

```plain
go run main.go

```

## Type Data (Lebih kompleks)

Go memiliki berbagai tipe data yang memungkinkan Anda untuk bekerja dengan berbagai jenis data, dari yang sederhana (seperti integer dan string) hingga yang kompleks (seperti struct dan interface). Keuntungan utama Go adalah fleksibilitas dalam bekerja dengan tipe data, yang didukung oleh sistem tipe statis yang kuat dan konsisten.

Jika Anda mengembangkan aplikasi besar, Go menyediakan kombinasi yang baik antara tipe data dasar dan tipe data yang lebih kompleks untuk memudahkan pengelolaan memori, pengaturan data, dan pemrograman paralel.

Tipe data di Go (Golang) dibagi dalam beberapa kategori, dan Go menggunakan tipe data statis yang artinya tipe data variabel harus didefinisikan pada saat kompilasi. Berikut penjelasan lengkap tentang berbagai **type construct** atau tipe data di Go.

### 1\. **Tipe Data Bawaan (Primitive Types)**

Tipe data bawaan adalah tipe data yang sudah disediakan oleh bahasa Go. Mereka dapat dikategorikan menjadi beberapa jenis berdasarkan kategori fungsionalnya.

#### a. **Numerik**

1. **Integer (Bilangan Bulat)**
2. Tipe ini menyimpan nilai bilangan bulat, baik yang positif maupun negatif. Tipe integer di Go dibedakan berdasarkan ukuran dan tanda.
    *   **signed integer**:
        *   `int8`: 8-bit signed integer (-128 to 127)
        *   `int16`: 16-bit signed integer (-32,768 to 32,767)
        *   `int32`: 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
        *   `int64`: 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
        *   `int`: Bergantung pada sistem (32-bit atau 64-bit)
    *   **unsigned integer**:
        *   `uint8`: 8-bit unsigned integer (0 to 255)
        *   `uint16`: 16-bit unsigned integer (0 to 65,535)
        *   `uint32`: 32-bit unsigned integer (0 to 4,294,967,295)
        *   `uint64`: 64-bit unsigned integer (0 to 18,446,744,073,709,551,615)
        *   `uint`: Bergantung pada sistem (32-bit atau 64-bit)
3. **Floating-point (Bilangan Pecahan)**
4. Untuk menyimpan bilangan dengan desimal.
    *   `float32`: 32-bit floating point
    *   `float64`: 64-bit floating point (lebih presisi)
5. **Complex Numbers (Bilangan Kompleks)**
6. Tipe data untuk bilangan kompleks.
    *   `complex64`: Bilangan kompleks dengan bagian real dan imajiner masing-masing bertipe `float32`.
    *   `complex128`: Bilangan kompleks dengan bagian real dan imajiner masing-masing bertipe `float64`.
7. **Boolean**
8. Menyimpan nilai logika `true` atau `false`.
    *   `bool`: tipe data boolean (`true` atau `false`)
9. **String**
10. Tipe data untuk menyimpan teks.
    *   `string`: Tipe data string yang menyimpan urutan karakter Unicode.

#### b. **Tipe Data Khusus**

1. **Rune**
2. `rune` adalah alias untuk `int32` yang digunakan untuk mewakili satu karakter Unicode. Biasanya digunakan dalam operasi karakter atau string.
    *   `rune`: Tipe data untuk karakter Unicode.
3. **Byte**
4. `byte` adalah alias untuk `uint8`, yang digunakan untuk representasi data byte.
    *   `byte`: Tipe data untuk menyimpan data byte.

* * *

### 2\. **Tipe Data Kumpulan (Composite Types)**

Tipe data ini memungkinkan Anda untuk membuat tipe data yang lebih kompleks dengan menggabungkan tipe data lainnya.

#### a. **Array**

Array adalah kumpulan elemen dengan tipe yang sama dan ukuran tetap.

```cs
var arr [5]int
```

*   Ukuran array tetap dan tidak bisa diubah setelah deklarasi.
*   Semua elemen dalam array memiliki tipe data yang sama.

#### b. **Slice**

Slice adalah kumpulan elemen dengan tipe yang sama, namun ukuran dinamis (berbeda dengan array yang memiliki ukuran tetap). Slice adalah struktur data yang lebih fleksibel daripada array.

```python
var slice []int
slice = append(slice, 10, 20)
```

*   Slice tidak menyimpan ukuran di dalamnya, melainkan menyimpan referensi ke array yang lebih besar.
*   Slice dapat berubah ukurannya dengan fungsi seperti `append()`.

#### c. **Struct**

Struct adalah tipe data yang memungkinkan penggabungan beberapa tipe data yang berbeda dalam satu entitas.

```haskell
type Person struct {
    Name  string
    Age   int
    Email string
}
```

*   Setiap elemen dalam struct disebut **field**.
*   Field dapat memiliki tipe data yang berbeda.

#### d. **Map**

Map adalah koleksi pasangan key-value (seperti dictionary di Python atau objek di JavaScript).

```go
var m map[string]int
m = make(map[string]int)
m["age"] = 25
```

*   Key bersifat unik, sedangkan value bisa berupa tipe data apa saja.
*   Memiliki operasi akses dan manipulasi yang cepat berdasarkan key.

#### e. **Pointer**

Pointer adalah tipe data yang menyimpan alamat memori dari variabel lain.

```nim
var ptr *int
```

*   Digunakan untuk mengakses nilai yang ada di alamat memori yang ditunjukkan oleh pointer.
*   Pointer berguna dalam pengelolaan memori dan modifikasi data tanpa menyalin nilai.

---
### 3\. **Tipe Data Khusus di Go**

#### a. **Interface**

Interface adalah tipe data yang mendefinisikan serangkaian metode yang harus diimplementasikan oleh tipe data lain. Tidak ada kata kunci untuk mendeklarasikan implementasi interface, cukup dengan memastikan bahwa tipe tersebut memiliki metode yang sesuai.

```go
type Speaker interface {
    Speak() string
}

type Person struct {
    Name string
}

func (p Person) Speak() string {
    return "Hello, my name is " + p.Name
}
```

*   Interface dapat digunakan untuk mendeklarasikan metode yang dapat diterapkan oleh berbagai tipe.

#### b. **Channel**

Channel digunakan untuk komunikasi antar goroutine (fungsi yang berjalan secara paralel). Channel adalah tipe data yang memungkinkan goroutine untuk mengirim dan menerima data.

```go
ch := make(chan int)
go func() {
    ch <- 42
}()
val := <-ch
```

*   Digunakan dalam konteks **concurrent programming** untuk sinkronisasi data antar goroutine.

* * *

### 4\. **Alias Tipe**

Tipe alias adalah cara membuat nama baru untuk tipe data yang sudah ada. Tipe alias tidak membuat tipe baru, tetapi hanya memberikan nama lain untuk tipe yang sudah ada.

```go
type MyInt int
```

*   `MyInt` akan menjadi alias untuk tipe `int`, namun masih memiliki sifat dan kemampuan tipe data yang sama dengan `int`.

* * *

### 5\. **Tipe Data Khusus yang Diimplementasikan Pengguna**

Anda juga dapat mendefinisikan tipe data baru yang lebih kompleks dengan menggunakan keyword `type`. Ini memberi Anda kontrol penuh atas tipe data yang dibangun di atas tipe data yang ada.

```go
type Celsius float64
type Fahrenheit float64
```

*   Tipe data `Celsius` dan `Fahrenheit` adalah tipe alias untuk `float64`, namun dapat dioperasikan dengan cara yang berbeda.

* * *

### 6\. **Tipe Data Enumerasi**

Go tidak memiliki enum seperti bahasa lain (misalnya C atau Java), tetapi Anda bisa membuatnya dengan menggunakan konstanta dan tipe data khusus.

```go
type Status int
const (
    Pending Status = iota
    Approved
    Rejected
)
```

*   `iota` digunakan untuk membuat urutan nilai yang terhubung dengan setiap konstanta.



