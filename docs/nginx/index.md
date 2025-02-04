
# Nginx {#nginx .page-title}


  ------------ -------------------------------------------------------------------------------------------------------------------------------------
  Created      @December 11, 2024 1:13 AM
  Created by   ![](https://lh3.googleusercontent.com/a/AGNmyxb0HhE8djDvnqm1NoPJCOgFfq3hrLZ7W11UfXVpVMw=s100)
  Thank to     [Gravita Hat | Gravatar](https://gravatar.com/werisuweri)
  sub          Server HTTP dan Reverse Proxy Open Source
 

<div class="page-body">

## Pendahuluan {#15809095-dc41-80ac-9d90-ccb5abc3cb9a}


Nginx (diucapkan "engine-x") adalah server web yang sangat populer dan
juga berfungsi sebagai reverse proxy, load balancer, dan HTTP cache.
Berikut adalah ringkasan sejarah Nginx:

### **1. Awal Mula (2002)** {#15d09095-dc41-8075-9022-da23fba26f22}

Nginx dikembangkan oleh Igor Sysoev, seorang insinyur perangkat lunak
asal Rusia, pada tahun 2002. Sysoev mulai mengembangkan Nginx untuk
mengatasi masalah yang dihadapi oleh server web yang ada pada saat itu,
terutama dalam hal menangani banyak koneksi secara bersamaan. Dia ingin
menciptakan server yang dapat menangani ribuan koneksi secara efisien,
terutama untuk situs web dengan lalu lintas tinggi.

### **2. Rilis Pertama (2004)** {#15d09095-dc41-80ff-93ed-c29d2adb224e}

Versi pertama Nginx dirilis pada tahun 2004. Sejak saat itu, Nginx mulai
mendapatkan perhatian dari komunitas pengembang dan administrator sistem
karena kemampuannya untuk menangani beban tinggi dengan penggunaan
sumber daya yang rendah.

### **3. Popularitas Meningkat (2000-an)** {#15d09095-dc41-8062-8764-f45f1c38640c}

Selama pertengahan hingga akhir 2000-an, Nginx mulai digunakan oleh
banyak situs web besar, termasuk WordPress.com, Netflix, dan GitHub.
Keunggulan Nginx dalam hal performa dan skalabilitas membuatnya menjadi
pilihan populer di kalangan penyedia layanan hosting dan perusahaan
teknologi.

### **4. Rilis Versi Stabil (2011)** {#15d09095-dc41-808c-95b2-f70a4189afd9}

Pada tahun 2011, Nginx mencapai tonggak penting dengan rilis versi
stabil 1.0.0. Versi ini membawa banyak fitur baru dan perbaikan, serta
meningkatkan stabilitas dan keamanan.

### **5. Nginx, Inc. (2011)** {#15d09095-dc41-8010-825e-fdeea738e004}

Igor Sysoev mendirikan Nginx, Inc. pada tahun 2011 untuk mendukung
pengembangan dan distribusi Nginx. Perusahaan ini juga mulai menawarkan
layanan dukungan komersial dan produk tambahan, seperti Nginx Plus, yang
merupakan versi komersial dari Nginx dengan fitur tambahan seperti
manajemen dan pemantauan.

### **6. Pertumbuhan dan Adopsi (2010-an)** {#15d09095-dc41-807f-9571-f393444a872b}

Nginx terus tumbuh dalam popularitas dan menjadi salah satu server web
paling banyak digunakan di dunia. Pada tahun 2019, Nginx dilaporkan
digunakan oleh lebih dari 30% situs web di seluruh dunia, menjadikannya
salah satu server web terpopuler, bersaing dengan Apache.

### **7. Akuisisi oleh F5 Networks (2019)** {#15d09095-dc41-804d-880e-e73cf7df9e65}

Pada tahun 2019, F5 Networks mengakuisisi Nginx, Inc. Akuisisi ini
bertujuan untuk memperluas portofolio F5 dalam hal solusi aplikasi dan
keamanan.

### **8. Fokus pada Cloud dan Microservices (2020-an)** {#15d09095-dc41-80f3-8142-cdcb50cc095c}

Dengan meningkatnya adopsi arsitektur microservices dan cloud-native,
Nginx terus beradaptasi dengan menambahkan fitur-fitur baru yang
mendukung pengembangan aplikasi modern, termasuk dukungan untuk
Kubernetes dan layanan berbasis kontainer.

Berikut adalah penjelasan lengkap untuk **Pendahuluan Nginx**, termasuk
teori dan langkah praktis disertai kode.



## **Apa itu Nginx?** {#15809095-dc41-804a-88f8-f95236648afa}

Nginx adalah server HTTP dan reverse proxy open-source yang sangat
populer, dirancang untuk menangani koneksi secara asinkron dan efisien.
Dengan kemampuannya yang unggul dalam mengelola banyak koneksi secara
bersamaan, Nginx sering digunakan sebagai server web untuk melayani file
statis atau aplikasi web, memberikan performa tinggi dan respons yang
cepat. Selain itu, Nginx berfungsi sebagai reverse proxy, yang berarti
dapat meneruskan permintaan dari klien ke backend seperti aplikasi
Node.js, Django, atau PHP, sehingga memudahkan pengelolaan dan
pengembangan aplikasi. Nginx juga berperan sebagai load balancer,
membagi lalu lintas ke beberapa server backend untuk meningkatkan
skalabilitas dan keandalan sistem, menjadikannya pilihan utama bagi
banyak perusahaan dan pengembang dalam membangun infrastruktur web yang
efisien dan handal.

Nginx adalah server HTTP dan reverse proxy open-source yang sangat
populer. Dibuat untuk menangani koneksi secara asinkron dan efisien,
Nginx digunakan sebagai:

-   **Server web:** Melayani file statis atau aplikasi web.

<!-- -->

-   **Reverse proxy:** Meneruskan permintaan ke backend seperti aplikasi
    Node.js, Django, atau PHP.

<!-- -->

-   **Load balancer:** Membagi lalu lintas ke beberapa server backend
    untuk skalabilitas.

------------------------------------------------------------------------

## **Perbedaan antara Nginx dan Apache** {#15809095-dc41-80b7-af0b-fbbdee6c1c57}

Berikut adalah tabel yang membandingkan perbedaan antara Nginx dan Apache berdasarkan fitur-fitur yang disebutkan:

| **Fitur**                    | **Nginx**                           | **Apache**                              |
|------------------------------|-------------------------------------|-----------------------------------------|
| **Arsitektur**                | Event-driven, asinkron              | Process/thread-based                    |
| **Kinerja untuk file statis** | Sangat cepat                        | Relatif lebih lambat                    |
| **Modul**                     | Modul statis atau dinamis          | Modul dinamis                           |
| **Konfigurasi**               | Berbasis blok (`server`, dll.)      | Berbasis direktori (`.htaccess`)        |
| **Konsumsi resource**         | Lebih hemat memori                  | Lebih banyak memori                     |

Tabel ini memberikan gambaran yang jelas mengenai perbedaan utama antara Nginx dan Apache berdasarkan berbagai fitur penting, seperti arsitektur, kinerja, dan penggunaan sumber daya.



## **Kegunaan Utama Nginx** {#15809095-dc41-804e-8ee9-ee1983d0d0c4}

1.  **Server Web:** Hosting file statis atau dinamis.
    Nginx dapat berfungsi sebagai server web, yang berarti ia dapat
    menyimpan dan mengirimkan file-file seperti gambar, halaman HTML,
    dan file lainnya ke pengguna yang mengakses situs web. Ini seperti
    toko yang menyimpan barang dan memberikan barang tersebut kepada
    pelanggan yang datang.

<!-- -->

2.  **Reverse Proxy:** Meneruskan permintaan ke aplikasi backend.
    Nginx juga bisa bertindak sebagai "perantara" antara pengguna dan
    aplikasi yang lebih kompleks. Ketika seseorang mengakses situs web,
    Nginx menerima permintaan tersebut dan meneruskannya ke aplikasi
    backend (seperti server yang menjalankan logika bisnis). Ini
    membantu mengelola lalu lintas dan meningkatkan keamanan.

<!-- -->

3.  **Load Balancer:** Mendukung metode round-robin, least connections,
    dll.\
    Nginx dapat membagi beban kerja di antara beberapa server. Misalnya,
    jika ada banyak pengunjung ke situs web, Nginx dapat
    mendistribusikan permintaan ke beberapa server agar tidak ada satu
    server pun yang terlalu terbebani. Ini seperti membagi tugas di
    antara beberapa karyawan di sebuah toko agar semua pelanggan
    dilayani dengan cepat.



4.  **Caching:** Menyimpan konten untuk meningkatkan kecepatan.
    Nginx dapat menyimpan salinan konten yang sering diakses, sehingga
    ketika pengguna meminta konten yang sama lagi, Nginx dapat
    memberikannya lebih cepat tanpa harus mengambilnya dari server lain.
    Ini seperti menyimpan barang-barang yang sering dibeli di depan toko
    agar pelanggan bisa mendapatkannya dengan cepat.

<!-- -->

5.  **HTTPS:** Mendukung TLS/SSL untuk komunikasi aman.
    Nginx mendukung protokol HTTPS, yang membuat komunikasi antara
    pengguna dan situs web menjadi lebih aman. Dengan menggunakan
    TLS/SSL, data yang dikirimkan akan dienkripsi, sehingga tidak bisa
    dibaca oleh pihak yang tidak berwenang. Ini seperti mengunci pintu
    toko agar hanya pelanggan yang berhak yang bisa masuk.



## **Instalasi Nginx** {#15809095-dc41-8053-9572-dec924c7a06e}

### **1. Instalasi Nginx di Ubuntu** {#15809095-dc41-8085-a575-cd265e93600c}

1.  **Update sistem:**

    ``` {#15809095-dc41-8093-9c82-f95712c195c9 .code}
    sudo apt update && sudo apt upgrade -y
    ```

<!-- -->

2.  **Instal Nginx:**

    ``` {#15809095-dc41-808a-8090-c63be8b065bb .code}
    sudo apt install nginx -y
    ```

<!-- -->

3.  **Mulai dan aktifkan layanan Nginx:**

    ``` {#15809095-dc41-8066-ae74-d394ae269962 .code}
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```

<!-- -->

4.  **Cek status Nginx:**

    ``` {#15809095-dc41-80b5-8f5b-e93fee1b2b25 .code}
    sudo systemctl status nginx
    ```

### **2. Instalasi Nginx di CentOS** {#15809095-dc41-8040-96b2-d3e087969219}

1.  **Update sistem:**

    ``` {#15809095-dc41-8052-89a9-e388edd7bdf9 .code}
    sudo yum update -y
    ```

<!-- -->

2.  **Instal Nginx (dari repositori EPEL):**

    ``` {#15809095-dc41-8051-a2f1-e0626e9b8966 .code}
    sudo yum install epel-release -y
    sudo yum install nginx -y
    ```

<!-- -->

3.  **Mulai dan aktifkan layanan Nginx:**

    ``` {#15809095-dc41-8015-8194-dead36cb04b1 .code}
    sudo systemctl start nginx
    sudo systemctl enable nginx
    ```

<!-- -->

4.  **Cek status Nginx:**

    ``` {#15809095-dc41-80f1-9d28-f18699bc161d .code}
    sudo systemctl status nginx
    ```

### **3. Instalasi Nginx di Windows WSL** {#15809095-dc41-80dc-ae82-f92b12872adc}

1.  **Pastikan Anda memiliki WSL dan Ubuntu terinstal di Windows.**\
    Jalankan WSL, lalu:\

    ``` {#15809095-dc41-80a7-b964-fab8b38101da .code}
    sudo apt update && sudo apt upgrade -y
    sudo apt install nginx -y
    sudo service nginx start
    ```

<!-- -->

2.  **Akses Nginx melalui browser:**
    -   Gunakan URL `http://localhost`.

------------------------------------------------------------------------

### 4. Instalasi Nginx di Docker {#15d09095-dc41-80d0-82f0-f77348cf7a21}

Untuk menginstal Nginx menggunakan Docker, Anda dapat mengikuti
langkah-langkah umum berikut:

1.  **Pastikan Docker Terinstal**: Pastikan Docker sudah terpasang di
    sistem Anda. Anda dapat memeriksa dengan menjalankan
    perintah `docker --version`.

<!-- -->

2.  \* Tarik Gambar Nginx\*\*: Unduh gambar Nginx dari Docker Hub dengan
    perintah berikut:

    ``` {#15d09095-dc41-8063-8d32-de21cf148aa5 .code}
    docker pull nginx:stable-alpine
    ```

<!-- -->

3.  **Jalankan Kontainer Nginx**: Setelah gambar berhasil diunduh,
    jalankan kontainer Nginx dengan perintah:

    ``` {#15d09095-dc41-8092-b36e-cdaaeacb4373 .code}
    docker run --name docker-nginx -p 80:80 nginx:stable-alpine
    ```

<!-- -->

4.  **Periksa Kontainer yang Berjalan**: Pastikan kontainer Nginx
    berjalan dengan perintah:

    ``` {#15d09095-dc41-8085-b9a0-ce3440bc4a73 .code}
    docker ps
    ```

<!-- -->

5.  **Akses Nginx**: Buka browser dan akses `http://localhost`. Anda
    seharusnya melihat halaman default Nginx.

<!-- -->

6.  **Pengaturan Tambahan (Opsional)**: Jika Anda ingin menambahkan
    pengaturan khusus, Anda bisa membuat file konfigurasi dan
    mengaitkannya dengan kontainer saat menjalankannya.

### **Memverifikasi Instalasi** {#15809095-dc41-801c-8f8f-dfee96bf7ea9}

1.  **Cek versi Nginx:**

    ``` {#15809095-dc41-8062-98c1-c68eeccd0297 .code}
    nginx -v
    ```

    Output:

    ``` {#15809095-dc41-802d-b78d-fe2df88bfbe8 .code}
    nginx version: nginx/1.x.x
    ```

<!-- -->

2.  **Akses halaman default Nginx:**
    -   Buka browser dan akses `http://<IP_SERVER>` atau
        `http://localhost`.

<!-- -->

3.  **Tes konfigurasi:**

    ``` {#15809095-dc41-806e-8566-c65c3a6be639 .code}
    sudo nginx -t
    ```

    Output:

    ``` {#15809095-dc41-8014-99a4-dcb235656915 .code}
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    ```

------------------------------------------------------------------------

## **Struktur Direktori Utama Nginx** {#15809095-dc41-8016-9752-f9ae6b3bfc61}

-   `/etc/nginx/`**:** Direktori konfigurasi utama.
    -   `nginx.conf`**:** File konfigurasi utama.

    <!-- -->

    -   `sites-available/`**:** Konfigurasi server blok (opsional di
        beberapa distro).

    <!-- -->

    -   `sites-enabled/`**:** Simbolik link ke file di
        `sites-available/`.

<!-- -->

-   `/var/www/html/`**:** Direktori untuk file web default.

<!-- -->

-   `/var/log/nginx/`**:** Log akses dan error.

Contoh tampilan **nginx.conf** default:

``` {#15809095-dc41-80b1-95c4-c008871e3a75 .code}
user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 768;
}

http {
    server {
        listen 80;
        server_name localhost;

        root /var/www/html;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```


Jika instalasi berhasil, halaman default Nginx akan terlihat di browser:

**"Welcome to nginx!"**


## Struktur File Konfigurasi {#15809095-dc41-808e-9f83-ef31910cd2f4}


1.  **File Utama (**`nginx.conf`**):**
    -   Lokasi: `/etc/nginx/nginx.conf`.

    <!-- -->

    -   File ini adalah file konfigurasi utama yang digunakan Nginx saat
        dijalankan.

    <!-- -->

    -   Terdiri dari beberapa blok utama:
        -   `events`**:** Mengatur koneksi.

        <!-- -->

        -   `http`**:** Konfigurasi HTTP (server, caching, dll).

        <!-- -->

        -   `server`**:** Konfigurasi server individu.

        <!-- -->

        -   `location`**:** Menangani URL tertentu pada server.

<!-- -->

2.  **Direktori Konfigurasi Tambahan:**
    -   `/etc/nginx/sites-available/`**:**
        -   Tempat untuk menyimpan konfigurasi server blok.

        <!-- -->

        -   Tidak otomatis aktif, perlu di-link ke `sites-enabled`.

    <!-- -->

    -   `/etc/nginx/sites-enabled/`**:**
        -   Berisi symbolic link dari file di `sites-available`.

    <!-- -->

    -   `/etc/nginx/conf.d/`**:**
        -   Direktori tambahan untuk file konfigurasi modul spesifik.

### **Contoh Struktur Konfigurasi Default:** {#15809095-dc41-80c3-bf35-d9388b60e422}

``` {#15809095-dc41-8034-828d-c99ac9faf986 .code}
/etc/nginx/
├── nginx.conf
├── conf.d/
│   └── default.conf
├── sites-available/
│   └── example.com
├── sites-enabled/
│   └── example.com -> ../sites-available/example.com
├── logs/
│   ├── access.log
│   └── error.log
```

## **Blok** `http`**:**
    Digunakan untuk konfigurasi HTTP global.\

<div class="indented">

Contoh:

``` {#15809095-dc41-805a-9e3e-edab262b7fac .code}
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
    }
}
```

</div>

Blok `http` adalah bagian penting dari konfigurasi Nginx yang mengatur
pengaturan untuk server HTTP. Berikut adalah beberapa direktif yang umum
digunakan dalam blok `http`, beserta penjelasan dan contoh
penggunaannya:

### **1. include** {#15d09095-dc41-8055-bd76-c431415f4f4a}

-   **Deskripsi**: Mengizinkan Anda untuk menyertakan file konfigurasi
    lain.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80aa-8593-f1e4ab2ac90d .code}
    include /etc/nginx/conf.d/*.conf;
    ```

### **2. default\_type** {#15d09095-dc41-801b-9ee0-c43de4cababf}

-   **Deskripsi**: Menentukan tipe MIME default untuk file yang tidak
    memiliki tipe yang ditentukan.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8003-9bd9-f085ca7e8fc5 .code}
    default_type application/octet-stream;
    ```

### **3. log\_format** {#15d09095-dc41-80a5-b31a-f9b24f1cab75}

-   **Deskripsi**: Menentukan format log untuk akses.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8025-909f-f539ea86bd87 .code}
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
    '$status $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
    ```

### **4. access\_log dan error\_log** {#15d09095-dc41-80fd-bdfc-d3839613905f}

-   **Deskripsi**: Menentukan lokasi file log untuk akses dan kesalahan.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8007-806c-cd433b19d053 .code}
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;
    ```

### **5. sendfile** {#15d09095-dc41-8078-b912-dc0ca4731f75}

-   **Deskripsi**: Mengaktifkan penggunaan `sendfile()` untuk mengirim
    file.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80c2-9d69-f2d11ee4c50c .code}
    sendfile on;
    ```

### **6. tcp\_nopush dan tcp\_nodelay** {#15d09095-dc41-80cb-b065-fea3c5125e2e}

-   **Deskripsi**: Mengatur pengaturan TCP untuk meningkatkan kinerja.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80f9-ba8a-e12ffc5d8a0a .code}
    tcp_nopush on;
    tcp_nodelay on;
    ```

### **7. keepalive\_timeout** {#15d09095-dc41-80ef-bfad-d5e4eeacd033}

-   **Deskripsi**: Mengatur waktu tunggu untuk koneksi keep-alive.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8009-9ae2-dd9a96e0aa6f .code}
    keepalive_timeout 65;
    ```

### **8. gzip** {#15d09095-dc41-8032-a452-f062ddfe98b7}

-   **Deskripsi**: Mengaktifkan kompresi gzip untuk mengurangi ukuran
    respons.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80e4-81f1-dbf0b12da067 .code}
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    ```

### **9. client\_max\_body\_size** {#15d09095-dc41-8007-b9d2-df4542eef8f2}

-   **Deskripsi**: Mengatur ukuran maksimum untuk tubuh permintaan dari
    klien.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80e8-8a8d-eb0706b69418 .code}
    client_max_body_size 10M;
    ```

### **10. server** {#15d09095-dc41-80a7-b75a-c2a6ae2c18df}

-   **Deskripsi**: Blok `server` digunakan untuk mendefinisikan server
    virtual.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8030-9554-d0f2d764fe5d .code}
    server {
        listen 80;
        server_name example.com www.example.com;

        location / {
            root /var/www/html;
            index index.html index.htm;
        }
    }
    ```

### **11. location** {#15d09095-dc41-805e-80e3-d7612f2a564f}

-   **Deskripsi**: Blok `location` digunakan untuk menentukan bagaimana
    Nginx menangani permintaan untuk URL tertentu.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8054-bfef-f42b92cc468a .code}
    location /images/ {
        root /var/www/html;
    }
    ```

### **12. proxy\_pass** {#15d09095-dc41-80f7-ba9e-dc0d6bbe11ed}

-   **Deskripsi**: Digunakan untuk meneruskan permintaan ke server
    backend (misalnya, aplikasi web).

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-802c-bb51-fbd1cbf42ace .code}
    location /api/ {
        proxy_pass http://localhost:3000;
    }
    ```

### **13. error\_page** {#15d09095-dc41-80bb-a177-dcb9fdc059ec}

-   **Deskripsi**: Menentukan halaman yang akan ditampilkan untuk kode
    status HTTP tertentu.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-80d9-8efe-df18df47717e .code}
    error_page 404 /404.html;
    ```

### **14. ssl** {#15d09095-dc41-809f-a882-e9fbe43c8f67}

-   **Deskripsi**: Mengatur pengaturan SSL untuk HTTPS.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-805c-afe9-f457df5df066 .code}
    server {
        listen 443 ssl;
        ssl_certificate /etc/ssl/certs/example.com.crt;
        ssl_certificate_key /etc/ssl/private/example.com.key;
    }
    ```

### **15. limit\_req** {#15d09095-dc41-80fb-8fc1-f4c0663dcb6c}

-   **Deskripsi**: Mengatur pembatasan laju permintaan untuk mencegah
    serangan DDoS.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-800b-a52a-d6225c93d965 .code}
    limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
    location / {
        limit_req zone=one burst=5;
    }
    ```

### **16 . add\_header** {#15d09095-dc41-80f1-b803-d29548c2487d}

-   **Deskripsi**: Menambahkan header HTTP ke respons.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8024-b32c-c21bb2f9d239 .code}
    add_header X-Content-Type-Options nosniff;
    ```

### **17. try\_files** {#15d09095-dc41-8028-9222-c13b2dd0a76f}

-   **Deskripsi**: Mencoba untuk melayani file tertentu sebelum
    meneruskan permintaan ke lokasi lain.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8055-9ff9-c8214da809f0 .code}
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    ```

### **18. rewrite** {#15d09095-dc41-8052-8df6-f3d6fce9fd6b}

-   **Deskripsi**: Mengubah URL permintaan menggunakan ekspresi reguler.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-800f-a1d3-f3f800316182 .code}
    rewrite ^/oldpath/(.*)$ /newpath/$1 permanent;
    ```

### **19. set** {#15d09095-dc41-80db-a06a-d3815665c368}

-   **Deskripsi**: Mengatur variabel untuk digunakan dalam konfigurasi.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-8034-ad0c-f97b168e0205 .code}
    set $my_var "value";
    ```

### **20. return** {#15d09095-dc41-8077-b63d-e502e7a94067}

-   **Deskripsi**: Mengembalikan kode status HTTP dan/atau konten.

<!-- -->

-   **Contoh**:

    ``` {#15d09095-dc41-807e-b69c-dbff74de3fb2 .code}
    location /oldpage {
        return 301 /newpage;
    }
    ```

### **Contoh Blok **`http`** Lengkap** {#15d09095-dc41-80df-96cf-e90f225288c0}

Berikut adalah contoh konfigurasi blok `http` yang lebih lengkap dengan
beberapa pengaturan di atas:

``` {#15d09095-dc41-8049-aaf4-fa73d515d944 .code}
1http {
2    include       mime.types;
3    default_type  application/octet-stream;
4
5    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
6                      '$status $body_bytes_sent "$http_referer" '
7                      '"$http_user_agent" "$http_x_forwarded_for"';
8
9    access_log  /var/log/nginx/access.log  main;
10    error_log   /var/log/nginx/error.log warn;
11
12    sendfile        on;
13    tcp_nopush      on;
14    tcp_nodelay     on;
15    keepalive_timeout  65;
16
17    gzip  on;
18    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
19
20    client_max_body_size 10M;
21
22    server {
23        listen 80;
24        server_name example.com www.example.com;
25
26        location / {
27            root /var/www/html;
28            index index.html index.htm;
29            try_files $uri $uri/ /index.php?$query_string;
30        }
31
32        location /api/ {
33            proxy_pass http://localhost:3000;
34        }
35
36        error_page 404 /404.html;
37
38        add_header X-Content-Type-Options nosniff;
39    }
40
41    server {
42        listen 443 ssl;
43        server_name secure.example.com;
44
45        ssl_certificate /etc/ssl/certs/secure.example.com.crt;
46        ssl_certificate_key /etc/ssl/private/secure.example.com.key;
47
48        location / {
49            root /var/www/secure;
50            index index.html index.htm;
51        }
52    }
53}
```

Dengan konfigurasi ini, Anda dapat mengelola berbagai aspek dari server
HTTP Nginx, termasuk pengaturan untuk server virtual, pengelolaan
permintaan, dan pengaturan keamanan.

##  **Blok** `server`**:**
    Mewakili konfigurasi server individu (server blok).\

    Contoh:

    ``` {#15809095-dc41-8001-81ca-e75a4543c2f4 .code}
    server {
        listen 80;
        server_name example.com www.example.com;

        root /var/www/example;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

<!-- -->

##  **Blok** `location`**:**
    Mengatur respon Nginx terhadap URL spesifik.

    Contoh:

    ``` {#15809095-dc41-80ce-b960-d40aa21907ff .code}
    location /images/ {
        root /var/www/assets;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
    }
    ```

------------------------------------------------------------------------

**Konfigurasi Dasar** {#15809095-dc41-8044-a363-e8e40589f9af}
---------------------

### **1. Menyediakan Halaman Web Statis** {#15809095-dc41-80aa-885a-c15d90045389}

1.  Buat folder untuk file statis:

    ``` {#15809095-dc41-8094-912d-ff8e86c216c0 .code}
    sudo mkdir -p /var/www/mysite
    echo "<h1>Welcome to MySite!</h1>" | sudo tee /var/www/mysite/index.html
    ```

<!-- -->

2.  Buat server blok di `sites-available`:\
    \
    Isi:\

    ``` {#15809095-dc41-8028-85ab-c75af2cbede9 .code}
    sudo nano /etc/nginx/sites-available/mysite
    ```

    ``` {#15809095-dc41-80c2-ad13-e5ddc7d53f58 .code}
    server {
        listen 80;
        server_name mysite.com www.mysite.com;

        root /var/www/mysite;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

<!-- -->

3.  Aktifkan konfigurasi:

    ``` {#15809095-dc41-80b6-9df8-fcee61b1b39c .code}
    sudo ln -s /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/
    ```

<!-- -->

4.  Tes dan reload Nginx:

    ``` {#15809095-dc41-80e4-8d08-ee3cfef35b31 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

### **2. Mengatur Root Direktori Dokumen** {#15809095-dc41-80d7-aa16-fc8d71d1e81b}

-   Direktori root ditentukan dalam blok `server` atau `location` dengan
    direktif `root`.\
    Contoh:\

    ``` {#15809095-dc41-803f-b5fe-ca95953137c0 .code}
    server {
        root /var/www/html;
        index index.html index.htm;
    }
    ```

### **3. Memahami Port dan Server Name** {#15809095-dc41-8078-9126-cc84cd7f1e99}

-   **Port:**
    -   Nginx mendengarkan port tertentu menggunakan direktif `listen`.

    <!-- -->

    -   Default: `listen 80;` untuk HTTP, `listen 443;` untuk HTTPS.

<!-- -->

-   **Server Name:**
    -   Mengidentifikasi domain yang dilayani Nginx dengan
        `server_name`.

    <!-- -->

    -   Contoh:

        ``` {#15809095-dc41-8041-a16c-edbdd97d5910 .code}
        server_name example.com www.example.com;
        ```

------------------------------------------------------------------------

**Tes dan Reload** {#15809095-dc41-80c7-a57e-c5fc3155b8c8}
------------------

### **1. Mengecek Konfigurasi dengan** `nginx -t` {#15809095-dc41-801b-8695-dade6469585d}

Sebelum menerapkan konfigurasi, selalu tes terlebih dahulu:

``` {#15809095-dc41-802b-9d66-fef7214da1d2 .code}
sudo nginx -t
```

-   **Output sukses:**

    ``` {#15809095-dc41-808b-b77c-feaa34255a3c .code}
    nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
    nginx: configuration file /etc/nginx/nginx.conf test is successful
    ```

<!-- -->

-   Jika ada kesalahan, periksa file yang disebutkan dalam error log.

### **2. Reload Nginx Tanpa Menghentikan Server** {#15809095-dc41-80ef-bb3c-cd06c61096d8}

Setelah mengubah konfigurasi, reload untuk menerapkan perubahan:

``` {#15809095-dc41-80da-b20e-f97582eed8d1 .code}
sudo systemctl reload nginx
```

-   Reload tidak memutus koneksi aktif, berbeda dengan restart
    (`systemctl restart nginx`).

------------------------------------------------------------------------

### **Hasil** {#15809095-dc41-80c3-abb9-c8e954c46327}

-   Setelah langkah-langkah di atas, Anda dapat membuka browser dan
    mengakses `http://<IP_SERVER>` atau `http://mysite.com` untuk
    melihat halaman web statis yang Anda konfigurasi.

Berikut adalah penjelasan detail dan praktis tentang **file utama**
`nginx.conf` yang digunakan oleh Nginx untuk konfigurasi server. Nginx
mengandalkan file ini untuk mengatur cara server bekerja, bagaimana
menangani permintaan HTTP, dan pengaturan koneksi serta pemrosesan
lainnya.

------------------------------------------------------------------------

**1. Lokasi dan Fungsi File Utama** `nginx.conf` {#15809095-dc41-8097-b884-e1ca11552a80}
------------------------------------------------

File utama konfigurasi Nginx terletak di:

``` {#15809095-dc41-8091-88cb-dcf4167bd3af .code}
/etc/nginx/nginx.conf
```

File ini berfungsi untuk menentukan bagaimana Nginx beroperasi saat
dijalankan. File ini bisa diubah untuk menyesuaikan berbagai aspek dari
Nginx seperti pengaturan koneksi, pengaturan server, server blok, URL
routing, caching, dan lainnya.

------------------------------------------------------------------------

**2. Blok-Konfigurasi dalam** `nginx.conf` {#15809095-dc41-80b7-9637-d54aa60d50e2}
------------------------------------------

File `nginx.conf` terdiri dari beberapa blok konfigurasi utama yang
dapat diatur:

### **A. Blok** `events` {#15809095-dc41-8073-9ecf-cf3a42ca73a1}

Blok `events` digunakan untuk mengonfigurasi aspek-aspek yang terkait
dengan koneksi dan pengelolaan sumber daya sistem. Blok `events` adalah
bagian di dalam `nginx.conf` yang digunakan untuk mengatur bagaimana
Nginx menangani koneksi dari pengguna. Ini berfokus pada pengelolaan
sumber daya sistem dan pengaturan yang berkaitan dengan koneksi.

1.  **worker\_connections:**
    -   Ini adalah pengaturan yang menentukan berapa banyak koneksi yang
        dapat ditangani oleh setiap "worker process" (proses pekerja)
        Nginx. Semakin banyak koneksi yang bisa ditangani, semakin
        banyak pengguna yang dapat dilayani secara bersamaan. Misalnya,
        jika Anda mengatur `worker_connections` ke 1024, maka setiap
        proses pekerja dapat menangani hingga 1024 koneksi sekaligus.

    <!-- -->

    -   Jika Anda memiliki banyak pengguna yang mengakses situs web Anda
        secara bersamaan, Anda perlu memastikan bahwa Nginx dapat
        menangani semua permintaan tersebut. Dengan
        mengatur `worker_connections` ke nilai yang lebih tinggi, Anda
        memungkinkan setiap proses pekerja untuk melayani lebih banyak
        koneksi sekaligus.

    <!-- -->

    -   **Contoh:**

        Jika Anda mengatur `worker_connections` ke 1024, itu berarti
        setiap proses pekerja dapat menangani hingga 1024 koneksi aktif
        pada saat yang sama. Jika Anda memiliki 4 proses pekerja, maka
        total koneksi yang dapat ditangani oleh Nginx adalah 4 x 1024 =
        4096 koneksi.

        Nilai ini harus disesuaikan dengan kapasitas server Anda dan
        jumlah pengguna yang diharapkan. Jika terlalu tinggi, bisa
        menyebabkan penggunaan sumber daya yang berlebihan, sedangkan
        jika terlalu rendah, bisa menyebabkan pengguna tidak dapat
        terlayani dengan baik.

<!-- -->

2.  **use:**
    -   Anda juga bisa menentukan metode yang digunakan untuk menangani
        koneksi. Misalnya, Anda bisa memilih untuk menggunakan
        metode `epoll` (yang efisien untuk sistem Linux) atau metode
        lain yang sesuai dengan sistem operasi yang Anda gunakan. Ini
        membantu Nginx bekerja lebih baik dengan sumber daya yang ada.

    <!-- -->

    -   Memilih metode yang tepat dapat meningkatkan kinerja Nginx,
        terutama saat menangani banyak koneksi. Dengan menggunakan
        metode yang sesuai dengan sistem operasi, Nginx dapat
        memanfaatkan sumber daya sistem dengan lebih baik.

    <!-- -->

    -   **Metode yang umum digunakan:**
        -   **epoll:** Metode ini sangat efisien untuk sistem operasi
            Linux. Ia memungkinkan Nginx untuk menangani banyak koneksi
            secara bersamaan dengan cara yang lebih efisien dibandingkan
            metode lain.

        <!-- -->

        -   **kqueue:** Metode ini digunakan pada sistem operasi BSD
            (seperti FreeBSD).

        <!-- -->

        -   **select dan poll:** Metode ini lebih umum dan dapat
            digunakan di berbagai sistem operasi, tetapi tidak seefisien
            epoll atau kqueue dalam menangani banyak koneksi.

<!-- -->

3.  **multi\_accept:**
    -   Pengaturan ini memungkinkan Nginx untuk menerima beberapa
        koneksi sekaligus dalam satu waktu. Jika diaktifkan, Nginx dapat
        lebih cepat dalam menangani banyak permintaan yang datang secara
        bersamaan.

    <!-- -->

    -   Dengan mengaktifkan `multi_accept`, Nginx dapat lebih cepat
        dalam menangani banyak permintaan yang datang secara bersamaan.
        Ini sangat berguna dalam situasi di mana banyak pengguna mencoba
        mengakses situs web pada saat yang sama, seperti saat peluncuran
        produk atau promosi besar.

    <!-- -->

    -   Contoh: Jika `multi_accept` diatur ke `on`, dan ada 10 koneksi
        baru yang datang pada saat yang sama, Nginx dapat menerima semua
        10 koneksi tersebut dalam satu siklus, bukan satu per satu. Ini
        mengurangi waktu yang dibutuhkan untuk memproses setiap koneksi
        dan meningkatkan responsivitas server.

**Contoh konfigurasi:**

``` {#15d09095-dc41-800b-87de-d762e1231cbd .code}
events {
    worker_connections 1024;  # Setiap worker dapat menangani hingga 1024 koneksi
    use epoll;                # Menggunakan metode epoll untuk menangani koneksi
    multi_accept on;          # Mengizinkan penerimaan beberapa koneksi sekaligus
}
```

**Penjelasan Setiap Baris**

1.  `events { ... }`
    -   Ini adalah blok `events` yang digunakan untuk mengonfigurasi
        pengaturan yang berkaitan dengan koneksi dan pengelolaan sumber
        daya di Nginx. Semua pengaturan yang ada di dalam kurung
        kurawal `{}` ini akan mempengaruhi bagaimana Nginx menangani
        koneksi dari pengguna.

<!-- -->

2.  `worker_connections 1024;`
    -   **Apa itu?**: Baris ini mengatur jumlah maksimum koneksi yang
        dapat ditangani oleh setiap proses pekerja (worker process)
        Nginx.

    <!-- -->

    -   **Penjelasan**: Dengan mengatur `worker_connections` ke 1024,
        Anda memberi tahu Nginx bahwa setiap proses pekerja dapat
        menangani hingga 1024 koneksi aktif secara bersamaan. Ini
        berarti jika Anda memiliki beberapa proses pekerja, total
        koneksi yang dapat ditangani oleh Nginx adalah hasil kali dari
        jumlah proses pekerja dan nilai ini. Misalnya, jika Anda
        memiliki 4 proses pekerja, maka total koneksi yang dapat
        ditangani adalah 4 x 1024 = 4096 koneksi.

<!-- -->

3.  `use epoll;`
    -   **Apa itu?**: Baris ini menentukan metode yang digunakan oleh
        Nginx untuk menangani koneksi.

    <!-- -->

    -   **Penjelasan**: Dengan menggunakan `epoll`, Nginx akan
        memanfaatkan metode yang efisien untuk menangani banyak koneksi
        secara bersamaan, khususnya pada sistem operasi
        Linux. `epoll` dirancang untuk menangani banyak koneksi dengan
        lebih baik dibandingkan metode lain
        seperti `select` atau `poll`, sehingga dapat meningkatkan
        kinerja Nginx saat ada banyak pengguna yang mengakses situs web
        secara bersamaan.

<!-- -->

4.  `multi_accept on;`
    -   **Apa itu?**: Baris ini mengatur apakah Nginx dapat menerima
        beberapa koneksi baru dalam satu waktu.

    <!-- -->

    -   **Penjelasan**: Dengan mengatur `multi_accept` ke `on`, Anda
        mengizinkan Nginx untuk menerima lebih dari satu koneksi baru
        dalam satu siklus. Ini berarti jika ada beberapa permintaan
        koneksi yang datang secara bersamaan, Nginx dapat menerima
        semuanya sekaligus, bukan satu per satu. Ini membantu
        meningkatkan kecepatan dan efisiensi dalam menangani banyak
        permintaan, terutama saat ada lonjakan lalu lintas.

### **B. Blok** `http` {#15809095-dc41-80e4-9f9f-ebbd08c64704}

Blok `http` adalah blok yang digunakan untuk mengonfigurasi pengaturan
HTTP secara keseluruhan seperti server, lokasi file statis, pengaturan
caching, SSL, dan lain-lain.

**Contoh konfigurasi:**

``` {#15809095-dc41-8060-86a6-c318e78f1b96 .code}
http {
    include       mime.types;
    default_type  application/octet-stream;

    server {
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }
}
```

**Penjelasan:**

-   `include mime.types`: Mengimpor file tipe MIME, yang digunakan untuk
    menentukan tipe konten file yang akan disajikan oleh Nginx.

<!-- -->

-   `default_type`: Menentukan tipe MIME default jika tidak ditemukan
    tipe untuk file tertentu.

<!-- -->

-   `server`: Di dalam blok `http`, kita dapat menentukan beberapa blok
    `server` yang akan menangani konfigurasi untuk server yang berbeda.

### **C. Blok** `server` {#15809095-dc41-80bf-8cfb-c89df2b6f810}

Blok `server` digunakan untuk mendefinisikan konfigurasi untuk server
web tertentu, seperti server virtual (hostname, port, dan lainnya). Di
dalam blok `server`, Anda bisa menambahkan konfigurasi untuk menangani
alamat IP, port, dan host yang berbeda.

**Contoh konfigurasi:**

``` {#15809095-dc41-80d5-af72-f325eb03df6d .code}
server {
    listen       80;
    server_name  example.com;

    location / {
        root   /var/www/example;
        index  index.html index.htm;
    }
}
```

**Penjelasan:**

-   `listen 80`: Nginx akan mendengarkan pada port 80 (HTTP).

<!-- -->

-   `server_name`: Nama domain yang ditangani oleh server ini. Misalnya,
    `example.com`.

<!-- -->

-   `location /`: Menentukan lokasi root direktori untuk file yang
    disajikan ketika permintaan datang ke root URL (`/`).

<!-- -->

-   `root /var/www/example`: Lokasi direktori web untuk menyajikan file.

<!-- -->

-   `index index.html index.htm`: Menentukan file index yang akan
    dilayani oleh Nginx jika tidak ada file lain yang diminta.

### **D. Blok** `location` {#15809095-dc41-800d-b343-d6a6d77a3857}

Blok `location` digunakan untuk menangani URL tertentu pada server. Ini
memungkinkan Anda untuk menentukan pengaturan lebih rinci berdasarkan
pola URL. Blok ini digunakan untuk menangani permintaan spesifik
berdasarkan path.

**Contoh konfigurasi:**

``` {#15809095-dc41-8011-a6c4-f3d2ef063c2c .code}
server {
    listen 80;
    server_name example.com;

    location /images/ {
        root /var/www/example;
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_pass http://127.0.0.1:8000;
    }
}
```

**Penjelasan:**

-   `location /images/`: Blok ini menangani semua permintaan yang
    diawali dengan `/images/`. Misalnya, jika pengguna meminta
    `http://example.com/images/logo.png`, maka file `logo.png` akan
    dicari di `/var/www/example/images/`.

<!-- -->

-   `location /api/`: Blok ini menangani permintaan yang diawali dengan
    `/api/`. Misalnya, permintaan ke `http://example.com/api/` akan
    diteruskan ke aplikasi lain (seperti server backend) melalui
    `proxy_pass`.
    -   `proxy_pass http://127.0.0.1:8000`: Artinya, permintaan tersebut
        diteruskan ke aplikasi backend yang berjalan di localhost pada
        port 8000.

### **E. Blok** `http` **lebih lanjut (Pengaturan Caching, SSL, dll)** {#15809095-dc41-80e6-85a7-fc758a13d5ce}

Di dalam blok `http`, Anda bisa menambahkan banyak pengaturan lanjutan
seperti caching, pengaturan header HTTP, atau pengaturan SSL.

**Contoh konfigurasi caching:**

``` {#15809095-dc41-8010-b9ff-fdb06209dec2 .code}
http {
    include       mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name example.com;

        location / {
            root /var/www/example;
            try_files $uri $uri/ /index.html;
        }

        location ~* \.(jpg|jpeg|png|gif|css|js)$ {
            expires 30d;
            access_log off;
        }
    }
}
```

**Penjelasan:**

-   `location ~* \.(jpg|jpeg|png|gif|css|js)$`: Menangani permintaan
    untuk file gambar dan file statis lainnya (CSS, JS).

<!-- -->

-   `expires 30d`: Mengatur agar file yang diminta disimpan di cache
    browser selama 30 hari.

<!-- -->

-   `access_log off`: Mematikan pencatatan akses untuk file statis
    tersebut untuk mengurangi beban pada server.

------------------------------------------------------------------------

**3. Mengedit dan Memverifikasi Konfigurasi** {#15809095-dc41-805b-baf8-e85e308d4308}
---------------------------------------------

Setelah Anda mengedit file `nginx.conf`, Anda perlu memverifikasi
konfigurasi dan memuat ulang Nginx agar perubahan dapat diterapkan:

1.  **Memverifikasi Konfigurasi:**\
    Gunakan perintah ini untuk memeriksa apakah ada kesalahan dalam
    konfigurasi:\

    ``` {#15809095-dc41-80b2-8ae3-f2a0e7471433 .code}
    sudo nginx -t
    ```

<!-- -->

2.  **Muat Ulang Nginx:**\
    Jika tidak ada kesalahan, muat ulang konfigurasi agar perubahan
    diterapkan tanpa menghentikan layanan Nginx:\

    ``` {#15809095-dc41-8092-ac7b-f295c47a7ecc .code}
    sudo systemctl reload nginx
    ```

------------------------------------------------------------------------

**Kesimpulan** {#15809095-dc41-8026-b19b-fa6309389326}
--------------

File `nginx.conf` adalah file konfigurasi utama Nginx yang digunakan
untuk mengonfigurasi berbagai aspek dari server web, mulai dari
pengaturan koneksi hingga cara menangani permintaan HTTP, SSL, dan
caching. Dengan memahami blok-blok utama dalam `nginx.conf`, seperti
`events`, `http`, `server`, dan `location`, Anda dapat mengonfigurasi
server Nginx sesuai dengan kebutuhan aplikasi Anda.

3. Konfigurasi Server Web {#15809095-dc41-806d-af41-cd7155348d85}
=========================

Berikut adalah penjelasan lengkap dan praktis untuk **Konfigurasi Server
Web** dengan Nginx:

------------------------------------------------------------------------

**1. Hosting Website** {#15809095-dc41-800f-b2b6-cd694ddd3cf5}
----------------------

### **A. Konfigurasi Virtual Hosts (Server Blocks)** {#15809095-dc41-80a5-b5ed-c3c3720ae4d4}

**Virtual hosts** memungkinkan Nginx melayani beberapa domain pada satu
server fisik dengan konfigurasi berbeda.

1.  **Buat direktori untuk website:**

    ``` {#15809095-dc41-8089-9eb4-f6132a082aef .code}
    sudo mkdir -p /var/www/example.com
    echo "<h1>Welcome to example.com</h1>" | sudo tee /var/www/example.com/index.html
    ```

<!-- -->

2.  **Buat file konfigurasi server blok:**

    ``` {#15809095-dc41-80fa-9bbe-e9c219a07bc5 .code}
    sudo nano /etc/nginx/sites-available/example.com
    ```

    Isi file:

    ``` {#15809095-dc41-80ba-af5e-f6ff446a3731 .code}
    server {
        listen 80;
        server_name example.com www.example.com;

        root /var/www/example.com;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

<!-- -->

3.  **Aktifkan konfigurasi dengan symbolic link:**

    ``` {#15809095-dc41-80db-9c9e-e030a533e4c3 .code}
    sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
    ```

<!-- -->

4.  **Nonaktifkan konfigurasi (jika diperlukan):**

    ``` {#15809095-dc41-8003-9d96-d79c819bec6c .code}
    sudo rm /etc/nginx/sites-enabled/example.com
    ```

<!-- -->

5.  **Tes dan reload Nginx:**

    ``` {#15809095-dc41-809f-99a5-da7316cdcdfe .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

6.  **Uji domain:**
    -   Arahkan domain Anda ke IP server melalui DNS.

    <!-- -->

    -   Akses `http://example.com` untuk memverifikasi.

------------------------------------------------------------------------

**2. Konfigurasi SSL** {#15809095-dc41-80a4-9fea-c37fc9443fb9}
----------------------

### **A. Memasang Let's Encrypt dengan Certbot** {#15809095-dc41-8053-ac16-dd641f74e1b4}

1.  **Instal Certbot dan plugin Nginx:**
    -   **Ubuntu:**

        ``` {#15809095-dc41-807e-a3f9-f4f325d9d1d3 .code}
        sudo apt update
        sudo apt install certbot python3-certbot-nginx -y
        ```

    <!-- -->

    -   **CentOS/AlmaLinux:**

        ``` {#15809095-dc41-8032-ace3-d6c7f8ea4e7d .code}
        sudo yum install epel-release -y
        sudo yum install certbot python3-certbot-nginx -y
        ```

<!-- -->

2.  **Dapatkan sertifikat SSL:**

    ``` {#15809095-dc41-80ab-9d8d-d83c1093d842 .code}
    sudo certbot --nginx -d example.com -d www.example.com
    ```

    -   Ikuti panduan interaktif untuk mengatur SSL.

    <!-- -->

    -   Certbot otomatis mengubah file konfigurasi Nginx Anda untuk
        menggunakan HTTPS.

<!-- -->

3.  **Perbarui sertifikat otomatis (opsional):**
    -   Tambahkan ke crontab:\
        \
        Tambahkan baris:\

        ``` {#15809095-dc41-80b0-b20b-dbec133c8fe3 .code}
        sudo crontab -e
        ```

        ``` {#15809095-dc41-8016-b677-d3743580e1ad .code}
        0 0 * * * certbot renew --quiet
        ```

### **B. Mengaktifkan Pengalihan Otomatis dari HTTP ke HTTPS** {#15809095-dc41-804d-9a65-f33652933a2a}

Edit file konfigurasi `example.com`:

``` {#15809095-dc41-8081-b62a-e4f71aebb084 .code}
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name example.com www.example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    root /var/www/example.com;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Reload Nginx:

``` {#15809095-dc41-803e-81a9-e41d95b42a57 .code}
sudo nginx -t
sudo systemctl reload nginx
```

Akses `http://example.com`, yang akan dialihkan ke
`https://example.com`.

------------------------------------------------------------------------

**3. Caching** {#15809095-dc41-8081-9610-d9c20553e2e8}
--------------

### **A. Menyimpan Cache Statis** {#15809095-dc41-8012-abd1-cdf4e1ff1fbb}

1.  Tambahkan konfigurasi caching di dalam blok `server`:

    ``` {#15809095-dc41-80ff-97bb-cdfbe4083cc0 .code}
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|otf|eot|html)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
    ```

<!-- -->

2.  **Penjelasan:**
    -   `expires 30d;`: Memberitahu browser untuk menyimpan file selama
        30 hari.

    <!-- -->

    -   `add_header Cache-Control "public";`: Mengizinkan semua pengguna
        mengakses cache.

<!-- -->

3.  Reload konfigurasi:

    ``` {#15809095-dc41-80a4-b0ae-cb903a88d329 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji caching:**
    -   Buka alat developer browser (F12).

    <!-- -->

    -   Akses tab **Network**, pastikan file memiliki header
        **Cache-Control**.

------------------------------------------------------------------------

### **B. Mengatur Header Caching (**`Cache-Control`**,** `Expires`**)** {#15809095-dc41-8018-8521-fd618272ab0f}

1.  **Cache halaman statis dengan** `proxy_cache`**:**\
    Tambahkan konfigurasi caching di blok\
    `http`:

    ``` {#15809095-dc41-807a-8dd8-c49af39e6d98 .code}
    proxy_cache_path /etc/nginx/cache keys_zone=cache_zone:10m max_size=10g;
    ```

    Di dalam blok `server` atau `location`:

    ``` {#15809095-dc41-80a1-a090-e3bcf90d6c87 .code}
    location / {
        proxy_cache cache_zone;
        proxy_pass http://127.0.0.1:8000; # Aplikasi backend
        add_header X-Cache-Status $upstream_cache_status;
        expires 1h;
        add_header Cache-Control "public";
    }
    ```

<!-- -->

2.  **Penjelasan:**
    -   `proxy_cache_path`**:** Direktori penyimpanan cache dengan
        ukuran maksimum.

    <!-- -->

    -   `X-Cache-Status`**:** Menunjukkan status cache (HIT/MISS).

    <!-- -->

    -   `expires 1h;`: Konten disimpan dalam cache selama 1 jam.

<!-- -->

3.  **Tes caching:**\
    Akses URL yang sesuai dan periksa header di browser atau gunakan\
    `curl`:

    ``` {#15809095-dc41-80fe-8727-f976942ed31c .code}
    curl -I http://example.com
    ```

    Hasil akan menunjukkan header `X-Cache-Status`.

------------------------------------------------------------------------

### **Hasil Akhir** {#15809095-dc41-80d9-a517-f2661e25c02f}

-   Anda sekarang memiliki:
    1.  Virtual host untuk melayani domain tertentu.

    <!-- -->

    2.  HTTPS aktif dengan Let's Encrypt.

    <!-- -->

    3.  Caching untuk konten statis dan backend.

<!-- -->

-   Akses domain Anda di browser untuk memverifikasi semua konfigurasi
    berjalan dengan baik.

5. Konfigurasi Reverse Proxy dengan Nginx {#15809095-dc41-8037-bbcd-da6d98916a66}
=========================================

Berikut adalah panduan lengkap dan praktis untuk **Konfigurasi Reverse
Proxy dengan Nginx**, termasuk implementasi dan contoh penggunaan.

------------------------------------------------------------------------

**1. Dasar Reverse Proxy** {#15809095-dc41-80ce-83ef-fd1183a622a7}
--------------------------

### **A. Konfigurasi Nginx Sebagai Reverse Proxy** {#15809095-dc41-8067-8a48-f9d9477e2504}

**Reverse Proxy** bertindak sebagai perantara antara klien dan server
backend (seperti Django, Node.js, atau PHP). Nginx menerima permintaan
klien dan meneruskannya ke server aplikasi backend.

**Reverse Proxy** adalah sebuah konsep dalam jaringan komputer di mana
sebuah server bertindak sebagai perantara (proxy) untuk menangani
permintaan yang datang ke server lainnya. Istilah "reverse" merujuk pada
arah aliran lalu lintas yang berlawanan dengan proxy biasa, di mana
proxy biasa biasanya mengarahkan klien ke server yang lebih banyak atau
berbeda.

### **Analogi yang Masuk Akal** {#15809095-dc41-80d1-8e0f-ebd7bad5dba4}

Bayangkan sebuah restoran dengan banyak dapur yang masing-masing
menyajikan menu spesial. Ketika seorang pengunjung datang ke restoran
tersebut, mereka tidak langsung menuju dapur. Sebaliknya, ada seorang
pelayan (yang bertindak sebagai "reverse proxy") yang menerima pesanan
dari pengunjung.

-   **Pelayan (Reverse Proxy):** Pelayan ini menerima pesanan dari
    pengunjung, kemudian memutuskan ke dapur mana pesanan tersebut harus
    dikirim berdasarkan menu yang diminta. Jika pengunjung meminta
    makanan dari dapur A, pelayan akan mengarahkannya ke dapur A. Jika
    menu lain, pelayan akan mengarahkannya ke dapur B.

<!-- -->

-   **Dapur (Server Backend):** Dapur-dapur ini bertanggung jawab untuk
    menyiapkan makanan, tetapi pengunjung tidak langsung berinteraksi
    dengan dapur tersebut. Mereka hanya berinteraksi dengan pelayan.

Dengan cara ini, pengunjung tidak perlu tahu dapur mana yang sedang
menyiapkan makanan mereka, dan pelayan dapat melakukan beberapa hal di
balik layar seperti mendistribusikan pesanan secara adil ke dapur atau
menyembunyikan kompleksitas dari pengunjung.

### **Mengapa Ada Istilah "Reverse Proxy"?** {#15809095-dc41-809d-8cfd-e0e0d683674b}

Istilah **"reverse"** digunakan untuk membedakan dari proxy biasa. Pada
**proxy biasa**, yang sering digunakan dalam konteks klien dan server,
klien mengirimkan permintaan ke proxy yang kemudian meneruskannya ke
server yang sesuai. Jadi, proxy di sini bertindak atas nama klien.

Namun, pada **reverse proxy**, arahannya terbalik. Server yang melayani
permintaan tidak langsung melayani klien, melainkan permintaan klien
diteruskan terlebih dahulu ke reverse proxy yang kemudian meneruskannya
ke server yang sesuai di belakangnya.

------------------------------------------------------------------------

### **Bagaimana Reverse Proxy Bekerja?** {#15809095-dc41-806a-bf3c-efe1f9b6e9a0}

1.  **Menerima Permintaan dari Klien:**\
    Reverse proxy pertama kali menerima permintaan dari pengguna atau
    klien (seperti permintaan HTTP atau HTTPS).\

<!-- -->

2.  **Menentukan Tujuan Permintaan:**\
    Reverse proxy kemudian memutuskan ke server mana permintaan tersebut
    akan diteruskan. Ini bisa berdasarkan banyak faktor seperti load
    balancing, jenis konten yang diminta, atau faktor lainnya.\

<!-- -->

3.  **Meneruskan Permintaan ke Server Backend:**\
    Setelah menentukan tujuan, reverse proxy akan mengarahkan permintaan
    ke server yang sesuai di belakangnya (misalnya, server A, server B,
    dll).\

<!-- -->

4.  **Menerima Respons dari Server Backend:**\
    Server yang menerima permintaan akan memprosesnya dan mengirimkan
    respons kembali ke reverse proxy.\

<!-- -->

5.  **Meneruskan Respons ke Klien:**\
    Reverse proxy kemudian mengirimkan respons yang diterima dari server
    backend kembali ke klien.\

------------------------------------------------------------------------

### **Fungsi dan Kegunaan Reverse Proxy** {#15809095-dc41-80e2-bf6a-d13ce11b7222}

1.  **Load Balancing:**\
    Reverse proxy sering digunakan untuk mendistribusikan permintaan
    dari klien ke beberapa server backend yang dapat mengelola beban
    secara merata. Ini membantu mengoptimalkan penggunaan sumber daya
    dan meningkatkan performa situs web atau aplikasi.\

<!-- -->

2.  **Keamanan:**\
    Reverse proxy dapat menyembunyikan detail tentang server backend.
    Misalnya, klien hanya berinteraksi dengan reverse proxy dan tidak
    mengetahui alamat atau jenis server yang sebenarnya melayani
    permintaan. Ini dapat mengurangi risiko serangan langsung ke server
    backend.\

<!-- -->

3.  **SSL Termination:**\
    Reverse proxy bisa mengelola enkripsi SSL/TLS (HTTPS) dengan cara
    mengakhiri koneksi SSL di tingkat proxy, yang meringankan beban
    enkripsi pada server backend.\

<!-- -->

4.  **Caching:**\
    Reverse proxy dapat menyimpan salinan data yang diminta oleh klien
    dalam cache untuk mempercepat respons di masa depan tanpa harus
    memproses ulang permintaan yang sama oleh server backend.\

<!-- -->

5.  **Penyembunyian Kompleksitas Infrastruktur:**\
    Dengan menggunakan reverse proxy, klien tidak perlu mengetahui
    tentang banyak server yang terlibat. Ini memberikan keuntungan dalam
    hal penyembunyian kompleksitas dan mengelola perubahan infrastruktur
    tanpa mempengaruhi klien.\

------------------------------------------------------------------------

### **Contoh Penggunaan Reverse Proxy** {#15809095-dc41-806b-a41e-f63fd9533a7d}

1.  **Nginx sebagai Reverse Proxy:**\
    Nginx adalah salah satu aplikasi yang banyak digunakan sebagai
    reverse proxy. Misalnya, Nginx dapat menerima permintaan dari
    pengguna dan mendistribusikan permintaan tersebut ke beberapa server
    web backend (seperti aplikasi Django, Node.js, atau PHP).\

    Berikut adalah contoh konfigurasi reverse proxy menggunakan Nginx:

    ``` {#15809095-dc41-80ee-ae4d-e34714898bae .code}
    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://127.0.0.1:8000; # Arahkan permintaan ke server backend
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

<!-- -->

2.  **Load Balancer dengan Reverse Proxy:**\
    Jika aplikasi Anda dihosting di beberapa server, reverse proxy dapat
    digunakan untuk mendistribusikan permintaan ke server yang berbeda,
    membantu dalam\
    **load balancing**.

    ``` {#15809095-dc41-8055-86c8-e4bd82ad64f8 .code}
    upstream backend_servers {
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend_servers;  # Balancing ke beberapa backend
        }
    }
    ```

------------------------------------------------------------------------

### **Kesimpulan** {#15809095-dc41-80e9-9160-ce45cd9b6f54}

Reverse proxy adalah konsep yang sangat penting dalam arsitektur
jaringan modern, terutama untuk menangani beban lalu lintas yang tinggi,
meningkatkan keamanan, dan menyembunyikan detail server backend dari
klien. Dengan cara kerja yang mirip pelayan di restoran, reverse proxy
memastikan bahwa klien tidak perlu tahu server mana yang menangani
permintaan mereka, yang memberikan fleksibilitas, keamanan, dan
manajemen lalu lintas yang lebih baik.

### **1. Menyiapkan Aplikasi Backend (Contoh: Django)** {#15809095-dc41-8050-884c-c36d33f510ec}

1.  **Jalankan aplikasi Django di port tertentu** (misalnya,
    `127.0.0.1:8000`):

    ``` {#15809095-dc41-8080-90d3-db5b311d8d44 .code}
    python manage.py runserver 127.0.0.1:8000
    ```

<!-- -->

2.  **Konfigurasi Nginx untuk meneruskan permintaan ke backend:**\
    Buat file konfigurasi di\
    `/etc/nginx/sites-available/reverse-proxy`:

    ``` {#15809095-dc41-8090-9299-c9e5cffa695e .code}
    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://127.0.0.1:8000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

<!-- -->

3.  **Aktifkan konfigurasi:**

    ``` {#15809095-dc41-80f3-9aa7-d0d6fb0962ed .code}
    sudo ln -s /etc/nginx/sites-available/reverse-proxy /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji koneksi:**

    Buka browser dan akses `http://example.com`.

    Hasilnya, Nginx akan meneruskan permintaan ke aplikasi Django di
    `127.0.0.1:8000`.

### **2. Reverse Proxy untuk Aplikasi Node.js** {#15809095-dc41-80f4-af55-e0bee09607eb}

1.  **Jalankan aplikasi Node.js di port tertentu** (misalnya,
    `127.0.0.1:3000`):

    ``` {#15809095-dc41-809f-8f76-d744cfe35489 .code}
    node app.js
    ```

<!-- -->

2.  **Tambahkan konfigurasi di Nginx:**

    ``` {#15809095-dc41-80e7-bcf2-c6b3a5f5bbb1 .code}
    server {
        listen 80;
        server_name node.example.com;

        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

<!-- -->

3.  Reload Nginx dan uji koneksi.

------------------------------------------------------------------------

**2. Load Balancing** {#15809095-dc41-80bc-a17b-fd0d6d109572}
---------------------

**Load Balancing** adalah teknik membagi lalu lintas antara beberapa
server backend untuk meningkatkan performa dan keandalan.

### **A. Metode Load Balancing** {#15809095-dc41-80f6-a89e-cbb8c3753584}

1.  **Round-Robin (Default):**

    Permintaan dibagi rata ke setiap server backend.

    ``` {#15809095-dc41-8070-98e6-f57f2369d36a .code}
    upstream backend {
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }
    ```

<!-- -->

2.  **Least Connections:**

    Permintaan diarahkan ke server dengan jumlah koneksi aktif paling
    sedikit.

    ``` {#15809095-dc41-8009-886b-c4b65c3d76fe .code}
    upstream backend {
        least_conn;
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }
    ```

<!-- -->

3.  **IP Hash:**

    Permintaan dari klien yang sama selalu diarahkan ke server yang
    sama.

    ``` {#15809095-dc41-8079-836a-d7958d86bd08 .code}
    upstream backend {
        ip_hash;
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }
    ```

------------------------------------------------------------------------

### **B. Contoh Penggunaan Load Balancer** {#15809095-dc41-8012-9282-c917808d0821}

1.  **Menyiapkan Server Backend:**
    -   Jalankan 3 instance aplikasi pada port berbeda (misalnya,
        `8001`, `8002`, `8003`).

<!-- -->

2.  **Konfigurasi Load Balancer di Nginx:**

    ``` {#15809095-dc41-8064-8a0a-e058e35cb33c .code}
    upstream backend {
        least_conn; # Pilih metode balancing
        server 127.0.0.1:8001;
        server 127.0.0.1:8002;
        server 127.0.0.1:8003;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

<!-- -->

3.  **Tes dan Reload Nginx:**

    ``` {#15809095-dc41-8004-b99c-c42252f98df0 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji Balancing:**\
    Akses\
    `http://example.com` dari beberapa browser atau gunakan alat seperti
    `curl`:

    ``` {#15809095-dc41-8027-a023-e866639d812d .code}
    curl -I http://example.com
    ```

    Perhatikan distribusi permintaan pada log setiap server backend.

------------------------------------------------------------------------

### **Hasil Akhir** {#15809095-dc41-8094-b4b3-f566b812b2ff}

1.  **Reverse Proxy:** Nginx meneruskan permintaan dari klien ke
    aplikasi backend seperti Django, Node.js, atau PHP.

<!-- -->

2.  **Load Balancer:** Permintaan secara efisien dibagi ke beberapa
    backend menggunakan metode balancing yang sesuai (round-robin, least
    connections, IP hash).

<!-- -->

3.  **Pengujian:** Pastikan semua pengaturan bekerja dengan mengamati
    distribusi permintaan ke server backend.

6. Logging dan Monitoring pada Nginx {#15809095-dc41-80aa-8a63-c1d25f657f56}
====================================

Berikut adalah panduan praktis untuk **Logging dan Monitoring pada
Nginx**, mencakup pengaturan log, analisis log, dan monitoring
menggunakan berbagai alat.

------------------------------------------------------------------------

**1. Log** {#15809095-dc41-8076-b016-e6a99592e5ba}
----------

### **A. Menyesuaikan Log Akses dan Log Error** {#15809095-dc41-801f-b728-eb80163df388}

1.  **Lokasi Default Log:**
    -   Akses log: `/var/log/nginx/access.log`

    <!-- -->

    -   Error log: `/var/log/nginx/error.log`

<!-- -->

2.  **Menyesuaikan Format Log Akses:**\
    Edit file\
    `nginx.conf`:

    ``` {#15809095-dc41-80ae-8844-f25d4ecb79a4 .code}
    http {
        log_format custom_format '$remote_addr - $remote_user [$time_local] '
                                 '"$request" $status $body_bytes_sent '
                                 '"$http_referer" "$http_user_agent"';

        access_log /var/log/nginx/custom_access.log custom_format;
    }
    ```

<!-- -->

3.  **Menyesuaikan Level Log Error:**\
    Edit file konfigurasi\
    `nginx.conf` atau file `server block`:

    ``` {#15809095-dc41-8040-8296-c7da71689784 .code}
    error_log /var/log/nginx/custom_error.log warn;
    ```

    -   **Level Log:**
        -   `debug`: Untuk debug rinci (hanya saat troubleshooting).

        <!-- -->

        -   `info`: Informasi umum.

        <!-- -->

        -   `warn`: Peringatan.

        <!-- -->

        -   `error`: Hanya kesalahan kritis.

<!-- -->

4.  **Reload Nginx:**

    ``` {#15809095-dc41-8097-b7b8-fac21a96c67f .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

5.  **Uji Hasil Log:**
    -   Buat permintaan HTTP untuk mengisi log:

        ``` {#15809095-dc41-808b-b868-d939252b603c .code}
        curl http://localhost
        ```

    <!-- -->

    -   Lihat isi log:

        ``` {#15809095-dc41-8079-bb77-c7f77a6bac99 .code}
        tail -f /var/log/nginx/custom_access.log
        tail -f /var/log/nginx/custom_error.log
        ```

------------------------------------------------------------------------

### **B. Menganalisis Log dengan GoAccess** {#15809095-dc41-801c-a5c1-cac6b4c9b81d}

1.  **Instal GoAccess:**
    -   **Ubuntu:**

        ``` {#15809095-dc41-80cd-bdcb-c4336498bccb .code}
        sudo apt update
        sudo apt install goaccess -y
        ```

    <!-- -->

    -   **CentOS:**

        ``` {#15809095-dc41-80f0-a988-fee6ccfd5d9a .code}
        sudo yum install epel-release -y
        sudo yum install goaccess -y
        ```

<!-- -->

2.  **Analisis Log Akses:**\
    Jalankan perintah:\

    ``` {#15809095-dc41-808a-8595-f0ad9f0bc09b .code}
    goaccess /var/log/nginx/access.log -o report.html --log-format=COMBINED
    ```

    -   Hasilnya berupa file HTML (`report.html`) yang dapat dibuka di
        browser.

<!-- -->

3.  **Live Monitoring dengan GoAccess:**\
    Jalankan GoAccess dalam mode real-time:\

    ``` {#15809095-dc41-80d3-b22b-f931df69edd2 .code}
    goaccess /var/log/nginx/access.log --log-format=COMBINED --real-time-html -o /var/www/html/report.html
    ```

    Akses laporan di `http://<server-ip>/report.html`.

------------------------------------------------------------------------

**2. Monitoring** {#15809095-dc41-8053-be9f-fada44ec59f8}
-----------------

### **A. Menggunakan Modul Status Nginx** {#15809095-dc41-8081-ad0c-e0c16045e17b}

1.  **Aktifkan Modul Status:**\
    Edit file konfigurasi Nginx (\
    `nginx.conf` atau `server block`):

    ``` {#15809095-dc41-8063-9acf-e754080e3508 .code}
    server {
        listen 8080;
        server_name localhost;

        location /nginx_status {
            stub_status;
            allow 127.0.0.1;  # Hanya izinkan akses lokal
            deny all;
        }
    }
    ```

<!-- -->

2.  **Reload Nginx:**

    ``` {#15809095-dc41-8030-9ef9-de8263f51301 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Akses Status:**\
    Jalankan perintah:\

    ``` {#15809095-dc41-80f9-aa61-cdd6d54aeb06 .code}
    curl http://127.0.0.1:8080/nginx_status
    ```

    Output:

    ``` {#15809095-dc41-802d-83ea-f93a23c6b8ac .code}
    Active connections: 2
    server accepts handled requests
     100 100 200
    Reading: 0 Writing: 1 Waiting: 1
    ```

------------------------------------------------------------------------

### **B. Integrasi dengan Prometheus dan Grafana** {#15809095-dc41-807f-92df-fe8563f7c02f}

1.  **Instal Exporter Nginx untuk Prometheus:**
    -   Unduh Nginx Exporter:

        ``` {#15809095-dc41-8073-9d6c-e64accd34f55 .code}
        wget https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter-0.11.0-linux-amd64.tar.gz
        ```

    <!-- -->

    -   Ekstrak dan jalankan:

        ``` {#15809095-dc41-80fc-8e4b-cf8b47805fe1 .code}
        tar -xvzf nginx-prometheus-exporter-*.tar.gz
        ./nginx-prometheus-exporter -nginx.scrape-uri http://127.0.0.1:8080/nginx_status
        ```

<!-- -->

2.  **Konfigurasi Prometheus:**\
    Tambahkan target di file\
    `prometheus.yml`:

    ``` {#15809095-dc41-80f1-852e-f30878c31ce6 .code}
    scrape_configs:
      - job_name: 'nginx'
        static_configs:
          - targets: ['localhost:9113']
    ```

<!-- -->

3.  **Instal Grafana dan Tambahkan Dashboard:**
    -   Tambahkan Prometheus sebagai data source.

    <!-- -->

    -   Import dashboard Nginx dari [Grafana
        Labs](https://grafana.com/grafana/dashboards/).

------------------------------------------------------------------------

### **Hasil Akhir** {#15809095-dc41-80e1-b058-c0676384bcd1}

1.  **Log:** Anda dapat memonitor dan menyesuaikan log akses dan error
    Nginx sesuai kebutuhan, serta menganalisisnya dengan GoAccess.

<!-- -->

2.  **Monitoring:** Status real-time Nginx dapat diakses dengan modul
    `stub_status` atau divisualisasikan melalui Prometheus dan Grafana
    untuk pengawasan yang lebih lengkap.

7. Lanjutan Nginx {#15809095-dc41-8086-aa36-f345f7013407}
=================

Berikut adalah penjelasan lengkap dan praktis untuk fitur lanjutan pada
Nginx, meliputi FastCGI, WebSocket, HTTP/2, gRPC, serta pengaturan file
upload dan download.

------------------------------------------------------------------------

**1. FastCGI dan PHP** {#15809095-dc41-8047-bce7-fc513a4f7600}
----------------------

### **A. Menghubungkan Nginx dengan PHP menggunakan FastCGI** {#15809095-dc41-80c4-8ab9-e2b791853df2}

1.  **Instal PHP dan FastCGI Process Manager (FPM):**
    -   **Ubuntu:**

        ``` {#15809095-dc41-8078-9f1e-d15bb38ce226 .code}
        sudo apt update
        sudo apt install php-fpm -y
        ```

    <!-- -->

    -   **CentOS:**

        ``` {#15809095-dc41-80bf-96f1-d68def2c9f38 .code}
        sudo yum install php-fpm -y
        ```

<!-- -->

2.  **Konfigurasi Nginx untuk PHP:**\
    Buat file konfigurasi:\

    ``` {#15809095-dc41-80b0-b6ce-c1bccd328ae3 .code}
    server {
        listen 80;
        server_name example.com;

        root /var/www/html;
        index index.php index.html;

        location / {
            try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
            include fastcgi_params;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }
    }
    ```

<!-- -->

3.  **Restart PHP-FPM dan Reload Nginx:**

    ``` {#15809095-dc41-804a-91c7-e58a84793451 .code}
    sudo systemctl restart php-fpm
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji PHP:**\
    Buat file\
    `/var/www/html/info.php`:

    ``` {#15809095-dc41-808e-8c8c-d4a017cfebfa .code}
    <?php
    phpinfo();
    ?>
    ```

    Akses `http://example.com/info.php` untuk memastikan PHP bekerja
    dengan baik.

------------------------------------------------------------------------

### **B. Konfigurasi FastCGI Caching** {#15809095-dc41-80fc-ba45-ed140454e0a6}

1.  **Aktifkan Cache Directory:**

    ``` {#15809095-dc41-80d4-afc7-c02f6a5c294d .code}
    sudo mkdir /var/cache/nginx/fastcgi_cache
    sudo chown -R www-data:www-data /var/cache/nginx/fastcgi_cache
    ```

<!-- -->

2.  **Tambahkan Konfigurasi Cache di Nginx:**\
    Tambahkan di blok\
    `http`:

    ``` {#15809095-dc41-805c-8b53-fcd0c2ff3300 .code}
    fastcgi_cache_path /var/cache/nginx/fastcgi_cache levels=1:2 keys_zone=FASTCGI_CACHE:10m inactive=60m;
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    ```

    Di blok `location ~ \.php$`:

    ``` {#15809095-dc41-8068-98f6-caf4e76c4803 .code}
    fastcgi_cache FASTCGI_CACHE;
    fastcgi_cache_valid 200 60m;
    fastcgi_cache_bypass $http_cache_control;
    add_header X-FastCGI-Cache $upstream_cache_status;
    ```

<!-- -->

3.  **Reload Nginx:**

    ``` {#15809095-dc41-801e-a583-d53c39ddba2f .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji Cache:**\
    Periksa header respons:\

    ``` {#15809095-dc41-8090-a542-c6cc1d580161 .code}
    curl -I http://example.com/info.php
    ```

------------------------------------------------------------------------

**2. WebSocket** {#15809095-dc41-80f3-a995-ed2bcf31dbd3}
----------------

1.  **Konfigurasi WebSocket di Nginx:**\
    Tambahkan di blok\
    `server`:

    ``` {#15809095-dc41-80e8-8eef-d2d9a44dbd68 .code}
    location /ws/ {
        proxy_pass http://127.0.0.1:8080; # Backend WebSocket
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
    ```

<!-- -->

2.  **Reload Nginx:**

    ``` {#15809095-dc41-8014-a3d5-c8a2122999c3 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Uji WebSocket:**\
    Jalankan backend WebSocket di\
    `127.0.0.1:8080` dan gunakan alat seperti `wscat` untuk menguji:

    ``` {#15809095-dc41-8008-a3a8-fe5d3522c94d .code}
    wscat -c ws://example.com/ws/
    ```

------------------------------------------------------------------------

**3. HTTP/2 dan gRPC** {#15809095-dc41-8052-a8a0-de298d4bc14b}
----------------------

### **A. Mengaktifkan HTTP/2** {#15809095-dc41-802f-9700-df4854c04af0}

1.  **Aktifkan Modul HTTP/2 di Nginx:**\
    Tambahkan\
    `http2` di blok `listen`:

    ``` {#15809095-dc41-807e-9b92-c7c8ce5f0307 .code}
    server {
        listen 443 ssl http2;
        server_name example.com;

        ssl_certificate /path/to/cert.pem;
        ssl_certificate_key /path/to/key.pem;

        root /var/www/html;
    }
    ```

<!-- -->

2.  **Reload Nginx:**

    ``` {#15809095-dc41-8003-ba25-c1ccc44c8dd3 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Verifikasi HTTP/2:**\
    Gunakan\
    `curl`:

    ``` {#15809095-dc41-80c4-888e-d32bc479ac61 .code}
    curl -I --http2 https://example.com
    ```

------------------------------------------------------------------------

### **B. Dasar Penggunaan gRPC** {#15809095-dc41-803d-a307-d23cd5d1054e}

1.  **Konfigurasi Nginx sebagai Proxy gRPC:**\
    Tambahkan di blok\
    `server`:

    ``` {#15809095-dc41-8058-8fed-da8f60a30802 .code}
    server {
        listen 80 http2;
        server_name grpc.example.com;

        location / {
            grpc_pass grpc://127.0.0.1:50051;
            error_page 502 = /error502grpc;
        }

        location = /error502grpc {
            internal;
            default_type application/grpc;
            add_header grpc-status 14;
            return 204;
        }
    }
    ```

<!-- -->

2.  **Reload Nginx:**

    ``` {#15809095-dc41-8065-adcc-f723b59134ab .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Uji gRPC:**\
    Jalankan server gRPC di\
    `127.0.0.1:50051` dan gunakan alat pengujian seperti `grpcurl`.

------------------------------------------------------------------------

**4. File Upload dan Download** {#15809095-dc41-802d-ae7b-ee6acad81c46}
-------------------------------

### **A. Membatasi Ukuran File Upload** {#15809095-dc41-8003-833b-db52b9afc2ca}

1.  **Tambahkan Konfigurasi di Nginx:**\
    Di dalam blok\
    `http` atau `server`:

    ``` {#15809095-dc41-80d3-8962-c1e99564b20b .code}
    client_max_body_size 10M;
    ```

<!-- -->

2.  **Reload Nginx:**

    ``` {#15809095-dc41-8055-b1d0-c8a23063fb54 .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Uji:**\
    Coba unggah file lebih besar dari 10MB. Anda akan menerima error\
    `413 Request Entity Too Large`.

------------------------------------------------------------------------

### **B. Mengatur Rate Limiting untuk Download File** {#15809095-dc41-8055-97a0-ca2f6defbbf6}

1.  **Aktifkan Modul Limit Rate:**\
    Tambahkan di blok\
    `http`:

    ``` {#15809095-dc41-8081-b1d0-d388a4b66f3a .code}
    limit_rate_after 1m;
    limit_rate 50k;
    ```

<!-- -->

2.  **Tambahkan di blok** `server` **atau** `location`**:**

    ``` {#15809095-dc41-806c-a9fa-c5a9335894a3 .code}
    location /files/ {
        root /var/www/html;
        limit_rate 50k; # Batas 50 KB/s
    }
    ```

<!-- -->

3.  **Reload Nginx:**

    ``` {#15809095-dc41-80ef-acfd-db61b3bfd66a .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Uji Rate Limiting:**\
    Unduh file besar dan perhatikan kecepatan unduhan:\

    ``` {#15809095-dc41-8085-8984-d8ea76ed8367 .code}
    curl -O http://example.com/files/largefile.zip
    ```

------------------------------------------------------------------------

### **Hasil Akhir** {#15809095-dc41-8083-bbca-d50c712a2d3f}

1.  **FastCGI:** PHP dapat dijalankan dengan caching untuk performa
    lebih baik.

<!-- -->

2.  **WebSocket:** Mendukung komunikasi real-time.

<!-- -->

3.  **HTTP/2 & gRPC:** Menyediakan protokol modern untuk pengiriman data
    lebih cepat.

<!-- -->

4.  **File Upload & Download:** Ukuran file dapat dibatasi, dan
    kecepatan unduhan dapat dikontrol.

8. Studi Kasus Nginx {#15809095-dc41-80ab-857a-d65271e05925}
====================

Berikut adalah panduan detail untuk menyelesaikan **studi kasus Nginx**
meliputi proyek praktis dan troubleshooting umum.

------------------------------------------------------------------------

**1. Proyek Praktis** {#15809095-dc41-80af-9a18-c77d846b795e}
---------------------

### **A. Deploy Aplikasi Django dengan Nginx sebagai Reverse Proxy** {#15809095-dc41-8000-b670-c19670764a28}

1.  **Instalasi Gunicorn:**\
    Instal Gunicorn di lingkungan aplikasi Django:\

    ``` {#15809095-dc41-80fe-8396-f666d664aaa3 .code}
    pip install gunicorn
    ```

<!-- -->

2.  **Jalankan Gunicorn untuk Django:**\
    Di direktori proyek Django, jalankan:\

    ``` {#15809095-dc41-809a-b2c7-d189fdf055a5 .code}
    gunicorn --workers 3 --bind 127.0.0.1:8000 myproject.wsgi
    ```

    -   **myproject** adalah nama aplikasi utama Django.

<!-- -->

3.  **Konfigurasi Nginx sebagai Reverse Proxy:**\
    Buat file\
    `/etc/nginx/sites-available/django`:

    ``` {#15809095-dc41-8039-9166-d62b2ac5d949 .code}
    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://127.0.0.1:8000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

    Aktifkan konfigurasi:

    ``` {#15809095-dc41-8084-8f56-d43ea65afae2 .code}
    sudo ln -s /etc/nginx/sites-available/django /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

4.  **Tes Deployment:**\
    Akses\
    `http://example.com` untuk memastikan Django berjalan melalui Nginx.

------------------------------------------------------------------------

### **B. Load Balancer untuk Beberapa Instance Node.js** {#15809095-dc41-800c-8837-c17076921b02}

1.  **Jalankan Beberapa Server Node.js:**\
    Contoh:\
    `app.js`

    ``` {#15809095-dc41-80f7-9c84-ec8f68f3f72a .code}
    const http = require('http');
    const port = process.argv[2] || 3000;

    const server = http.createServer((req, res) => {
        res.end(`Server running on port ${port}`);
    });

    server.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
    ```

    Jalankan dengan port berbeda:

    ``` {#15809095-dc41-806c-970e-ee8945f75dbb .code}
    node app.js 3001 &
    node app.js 3002 &
    node app.js 3003 &
    ```

<!-- -->

2.  **Konfigurasi Nginx sebagai Load Balancer:**\
    Tambahkan di\
    `/etc/nginx/sites-available/loadbalancer`:

    ``` {#15809095-dc41-8095-a205-f1f045051bea .code}
    upstream node_backend {
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://node_backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
    ```

    Aktifkan konfigurasi:

    ``` {#15809095-dc41-80d2-8720-d0b3c877c774 .code}
    sudo ln -s /etc/nginx/sites-available/loadbalancer /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Tes Load Balancer:**\
    Akses\
    `http://example.com` dan lihat bahwa request dialihkan ke server
    Node.js secara bergantian.

------------------------------------------------------------------------

### **C. Hosting Website Statis dengan HTTPS** {#15809095-dc41-80ec-91ca-db27ca7ab051}

1.  **Struktur Direktori Website:**\
    Tempatkan file HTML di\
    `/var/www/html/website`.

<!-- -->

2.  **Konfigurasi Nginx untuk Website Statis:**\
    Tambahkan di\
    `/etc/nginx/sites-available/website`:

    ``` {#15809095-dc41-80e4-8e5b-ee40200ce17d .code}
    server {
        listen 80;
        server_name example.com;

        root /var/www/html/website;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
    ```

    Aktifkan konfigurasi:

    ``` {#15809095-dc41-80ab-b6c1-e36919676c86 .code}
    sudo ln -s /etc/nginx/sites-available/website /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
    ```

<!-- -->

3.  **Pasang HTTPS dengan Let's Encrypt:**\
    Instal Certbot:\

    ``` {#15809095-dc41-803f-8138-c1294a445f74 .code}
    sudo apt install certbot python3-certbot-nginx -y
    ```

    Dapatkan sertifikat:

    ``` {#15809095-dc41-804a-94d1-e05b34ce93b6 .code}
    sudo certbot --nginx -d example.com
    ```

<!-- -->

4.  **Tes HTTPS:**\
    Akses\
    `https://example.com` dan pastikan sertifikat aktif.

------------------------------------------------------------------------

**2. Troubleshooting Umum** {#15809095-dc41-80ae-b643-eb7d12c67f70}
---------------------------

### **A. Error 404/403** {#15809095-dc41-80f0-8f18-eb8912a890c5}

1.  **Periksa Root Direktori:**\
    Pastikan direktori root yang diatur di konfigurasi Nginx benar dan
    file ada.\

    ``` {#15809095-dc41-80da-9980-ef3701c47379 .code}
    ls -l /var/www/html
    ```

<!-- -->

2.  **Periksa Izin File:**\
    Pastikan Nginx memiliki akses ke file:\

    ``` {#15809095-dc41-80e6-be0f-ef83495df07a .code}
    sudo chown -R www-data:www-data /var/www/html
    ```

<!-- -->

3.  **Cek Konfigurasi Nginx:**

    ``` {#15809095-dc41-80f5-a6fb-ea9a0939490c .code}
    sudo nginx -t
    sudo systemctl reload nginx
    ```

------------------------------------------------------------------------

### **B. Debugging Error Log Nginx** {#15809095-dc41-80ff-8ea6-c761d9d64009}

1.  **Lokasi Log:**
    -   Error log: `/var/log/nginx/error.log`

    <!-- -->

    -   Akses log: `/var/log/nginx/access.log`

<!-- -->

2.  **Tingkatkan Level Debug:**\
    Tambahkan di\
    `nginx.conf`:

    ``` {#15809095-dc41-80a1-a502-d0942caa6d84 .code}
    error_log /var/log/nginx/error.log debug;
    ```

<!-- -->

3.  **Reload Nginx dan Lihat Log:**

    ``` {#15809095-dc41-8019-80f0-e68892ca186c .code}
    sudo nginx -t
    sudo systemctl reload nginx
    tail -f /var/log/nginx/error.log
    ```

------------------------------------------------------------------------

### **C. Mengatasi Masalah Timeout** {#15809095-dc41-8037-b2fb-cc66a3c44d0d}

1.  **Periksa Timeout di Nginx:**\
    Tambahkan di konfigurasi\
    `http` atau `server`:

    ``` {#15809095-dc41-8020-9da2-d9cce5bb3096 .code}
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
    ```

<!-- -->

2.  **Periksa Backend:**\
    Pastikan backend aplikasi (Django, Node.js) berfungsi dengan benar.\

<!-- -->

3.  **Tes dengan Curl:**

    ``` {#15809095-dc41-802e-bb16-eecd23006942 .code}
    curl -I http://example.com
    ```

------------------------------------------------------------------------

### **Hasil Akhir** {#15809095-dc41-8055-98ca-ceb9895cd4a9}

1.  **Proyek Praktis:**
    -   Aplikasi Django berjalan melalui Nginx.

    <!-- -->

    -   Load balancer berhasil mendistribusikan request ke backend
        Node.js.

    <!-- -->

    -   Website statis berjalan dengan HTTPS.

<!-- -->

2.  **Troubleshooting:**
    -   Error umum dapat diidentifikasi melalui log.

    <!-- -->

    -   Masalah timeout dapat diatasi dengan pengaturan yang tepat.

Thank you to @ [Gravita Hat | Gravatar](https://gravatar.com/werisuweri)

</div>

[]{.sans style="font-size:14px;padding-top:2em"}
