<img src="/python.webp" alt="logo" style="margin-bottom: 30px;"/>


<div class="flex flex-row">

<div class="flex items-center  rounded-lg gap-4">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" class="h-10 w-10">
  <H1 class="flex items-center"> Dasar Pemprograman Python</H1>
</div>
</div>

## Pengantar

Python adalah bahasa pemrograman tingkat tinggi yang dirancang untuk kemudahan membaca dan menulis kode. Python dikenal karena sintaksnya yang sederhana dan mudah dipahami. Bahasa ini pertama kali dirancang oleh Guido van Rossum dan pertama kali dirilis pada tahun 1991. Python banyak digunakan untuk berbagai tujuan, mulai dari pengembangan web, analisis data, kecerdasan buatan, hingga pengembangan perangkat lunak.

## Sejarah Python
Python pertama kali dikembangkan oleh Guido van Rossum di Belanda pada akhir 1980-an. Van Rossum terinspirasi oleh bahasa pemrograman ABC, yang memiliki sintaks yang mudah dan digunakan untuk pemrograman pendidikan. Python dirilis pertama kali pada tahun 1991 dan sejak itu terus berkembang dengan tujuan utama untuk menjadi bahasa yang mudah dipelajari dan dipakai.

Seiring berjalannya waktu, Python menjadi semakin populer berkat komunitas yang besar dan banyaknya pustaka (libraries) yang tersedia, yang memungkinkan Python digunakan dalam berbagai bidang seperti data science, machine learning, web development, dan lain-lain.

Berikut adalah tabel yang menjelaskan sejarah perkembangan bahasa pemrograman Python dari awal hingga versi-versi terbarunya:

| **Tahun** | **Peristiwa**                                                                                       |
|-----------|------------------------------------------------------------------------------------------------------|
| **1980**  | **Ide Awal**: Guido van Rossum mulai mengerjakan Python sebagai pengembangan dari bahasa ABC.        |
| **1991**  | **Rilis Pertama**: Python 0.9.0 dirilis, dengan fitur-fitur dasar seperti exception handling, fungsi, dan module. |
| **2000**  | **Python 2.x Rilis**: Python 2.0 dirilis dengan banyak peningkatan, termasuk garbage collection otomatis dan list comprehensions. |
| **2008**  | **Python 3.0 Rilis**: Python 3.0 dirilis dengan perubahan signifikan yang tidak kompatibel dengan versi 2.x (misalnya, perubahan dalam handling string dan penghapusan beberapa modul lama). |
| **2010**  | **Penggunaan Python Meningkat**: Python mulai mendapatkan popularitas besar dalam bidang data science, web development, dan otomatisasi. |
| **2014**  | **Python 3.4 Rilis**: Pengenalan banyak fitur baru termasuk asyncio untuk pemrograman asynchronous dan module `pathlib` untuk bekerja dengan path file. |
| **2015**  | **PEP 8**: Python Enhancement Proposal 8 diupdate untuk menyarankan praktik terbaik dalam penulisan kode Python. |
| **2018**  | **Python 3.7 Rilis**: Fitur baru seperti data classes dan peningkatan performa asyncio diperkenalkan. |
| **2020**  | **Python 3.8 Rilis**: Menambahkan fitur baru seperti f-string yang lebih baik, walrus operator (`:=`), dan peningkatan lainnya. |
| **2021**  | **Python 3.9 Rilis**: Fitur-fitur baru termasuk dictionary merge operator (`|`), typing improvements, dan penghapusan beberapa fitur usang. |
| **2023**  | **Python 3.11 Rilis**: Fokus pada peningkatan kecepatan eksekusi Python, dengan optimasi besar pada CPython interpreter. |
| **Sekarang** | **Pengembangan Berkelanjutan**: Python terus berkembang dengan komunitas yang aktif. Beberapa perubahan minor dan patch dirilis secara rutin untuk meningkatkan stabilitas dan performa. |

Python telah berkembang dengan pesat sejak pertama kali dirilis pada tahun 1991 dan saat ini menjadi salah satu bahasa pemrograman yang paling populer di dunia, digunakan dalam berbagai bidang seperti web development, data science, machine learning, dan otomasi.

## Kelebihan Bahasa Python

- Python dirancang untuk mudah dipahami dan digunakan, dengan sintaks yang lebih mendekati bahasa alami. Ini membuatnya sangat cocok untuk pemula dalam dunia pemrograman.
- Python adalah bahasa yang sangat fleksibel. Kamu bisa menggunakan Python untuk berbagai jenis aplikasi mulai dari pengembangan web, analisis data, kecerdasan buatan, hingga otomasi.
- Python memiliki komunitas pengguna dan pengembang yang besar. Hal ini memastikan bahwa Anda akan menemukan banyak dokumentasi, tutorial, dan pustaka pihak ketiga untuk membantu pemecahan masalah.
- Python memiliki berbagai pustaka standar yang sudah sangat lengkap, seperti NumPy, pandas, matplotlib untuk analisis data, Django, dan Flask untuk pengembangan web, serta TensorFlow dan PyTorch untuk machine learning.
- Python dapat dijalankan di berbagai sistem operasi seperti Windows, Linux, dan macOS tanpa perubahan kode yang berarti.
- Python mendukung paradigma pemrograman berorientasi objek, memungkinkan pengembangan aplikasi yang lebih modular dan terstruktur.

## Kekurangan Bahasa Python

- Python dikenal memiliki kecepatan eksekusi yang lebih lambat dibandingkan dengan bahasa pemrograman lain seperti C atau Java, karena Python adalah bahasa interpretasi.
- Python memerlukan lebih banyak memori dibandingkan dengan bahasa lain yang lebih rendah levelnya, seperti C atau C++. Ini membuat Python kurang cocok untuk aplikasi dengan keterbatasan memori.
- Python bukan bahasa utama untuk pengembangan aplikasi mobile. Meskipun ada pustaka seperti Kivy, tetapi Python tidak sepopuler Java atau Swift untuk pengembangan aplikasi mobile.
- Python memiliki Global Interpreter Lock (GIL), yang membatasi eksekusi thread dalam aplikasi Python. Hal ini bisa menjadi masalah ketika memanfaatkan aplikasi berbasis multi-threading untuk pekerjaan yang membutuhkan performa tinggi.
- Meskipun Python dapat dijalankan di banyak platform, terkadang pengembangannya di perangkat keras atau perangkat lunak tertentu masih lebih rumit dibandingkan dengan bahasa lain.

## 1. Variables, Numbers, and Strings {#1-variables-numbers-and-strings}


### 1.1 Variables {#11-variables}

Di bawah ini adalah catatan singkat tentang variabel Python dan hal
terpenting lainnya yang perlu diketahui sebelum menulis kode Python
sebenarnya:

- `Variabel` adalah lokasi di memori tempat kita menyimpan data.
- `Variabel` di Python dapat berupa 3 tipe data: `integer`, `float`, atau
`string`. Tipe data menentukan kategori variabel. 
- Kita dapat
menggunakan `type(nama_variabel)` untuk menemukan tipe `nama_variabel`
yang diberikan. 
- Simbol `#` untuk menambahkan
`komentar`. 
- Jika komentar Anda lebih dari satu baris, Anda dapat menggunakan tanda
kutip tiga. Baris di dalam tanda kutip rangkap tiga diabaikan selama
runtime.

    """
    Di Python, tidak ada cara resmi untuk menulis komentar panjang, tetapi Anda bisa menggunakan tanda kutip tiga.
    Kalimat di antara tanda kutip tiga kali lipat diabaikan saat runtime.     
    """

-   Menggunakan `=` untuk memberikan nilai pada nama variabel.
    Contoh: `nama_var = 1`. Perhatikan bahwa ini berbeda dengan operator
    perbandingan yang sama dengan (`==`).
-   Kita dapat menggunakan `print()` untuk menampilkan nilai variabel
    atau hasil ekspresi apa pun.
-   Setiap baris kode dimulai pada baris baru.
-   Tab indentasi sangat berpengaruh. Python serius dengan indentasi.


``` python
# CONTOH

jumlah_bola = 1     # variabel integer
waktu = 'Sekarang'  # variabel string
```

### 1.2 Numbers 

Angka dalam `Python` bisa berupa bilangan bulat `int` atau float
`float`. Bilangan bulat adalah bilangan real, terbatas, natural, atau
bilangan bulat. Ambil contoh: `1`,`2`,`3`,`4` adalah bilangan bulat.
Float adalah angka yang memiliki koma desimal seperti`4.6`, `6.0`,
`7.7`. Perhatikan bahwa `4.0` juga dianggap sebagai tipe data float.

``` python
int_var = 10
float_var = 12.8

```
Operasi angka:

``` python
# Operasi angka

1 + 100 
1 * 100
1 / 100
7 // 100      # Floor Division atau pembagian bulat, pembulatan ke bawah. Hasilnya adalah 0, karena 7 dibagi 100 menghasilkan 0.07, dan setelah dibulatkan ke bawah menjadi 0.
100 % 1       # 100/1 = 100, sisa 0
1 ** 100      # 1 pangakat 100
2 ** 2        # 2 pangkat 2
```
Cara menampilkan output menggunakan fungsi `print()`
``` python
print(1 + 100)
```

### 1.3 Strings {#13-strings}

Python mendukung string. String adalah rangkaian karakter.

String adalah salah satu tipe data yang umum digunakan dan penting.
Kebanyakan masalah melibatkan bekerja dengan string. Oleh karena itu,
mengetahui cara bekerja dengan string adalah hal yang luar biasa.

String dinyatakan dalam `"..."` atau `'...'`.

    "teks di dalam sini akan menjadi string"
    'teks di dalam sini juga akan berupa string'

Kita dapat memanipulasi string dengan banyak cara. Contoh sederhananya
adalah dengan menggabungkan string.


``` python
str_var = 'One'
str_var2 = 'Hundred'
print(str_var + str_var2)   # ouput OneHundred
```

``` python
str_var + ' ' + 'and' + ' '+ str_var2 + '.'
```

``` python

print("This is a string")   # Jika di print() output: This is a string
```

``` python
"A string" == "a string"    # Jika di print() output False
```
Konvensi penuisan variabel di python:
Penulisan variabel dalam Python yang disarankan untuk membuat kode lebih bersih dan mudah dipahami:

| **Kriteria**                     | **Penjelasan**                                                                 | **Contoh**                                         |
|-----------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------|
| **Nama variabel menggunakan huruf kecil** | Gunakan huruf kecil dan pisahkan kata dengan tanda underscore (`_`) untuk nama variabel yang terdiri dari lebih dari satu kata. | `user_name`, `total_amount`, `is_active`         |
| **Gunakan nama yang deskriptif**  | Pilih nama variabel yang menggambarkan tujuan atau nilai yang disimpan oleh variabel tersebut. | `age`, `temperature`, `is_valid`                  |
| **Hindari penggunaan nama variabel yang sama dengan nama bawaan Python** | Hindari nama variabel yang sama dengan nama fungsi atau tipe data yang sudah ada di Python. | Hindari menggunakan `list`, `str`, `input`, dll. |
| **Gunakan huruf kapital untuk konstanta** | Untuk variabel yang nilainya tidak berubah (konstan), gunakan huruf kapital. | `MAX_VALUE = 100`, `PI = 3.14`                    |
| **Gunakan nama yang mudah dipahami** | Pilih nama variabel yang mudah dipahami dan sesuai dengan konteks fungsinya. | `number_of_students`, `file_path`, `email_address` |
| **Gunakan konvensi snake_case**   | Gunakan format penulisan `snake_case` (semua huruf kecil, kata dipisahkan dengan underscore) untuk variabel dan fungsi. | `user_data`, `calculate_total_price`              |
| **Jangan mulai dengan angka**     | Variabel tidak boleh dimulai dengan angka. Gunakan huruf atau karakter lain di awal. | Valid: `data1`, Invalid: `1data`                  |
| **Gunakan nama yang konsisten**   | Gunakan gaya penulisan yang konsisten di seluruh proyek untuk mempermudah pemahaman kode. | Gunakan `user_name` di seluruh proyek, bukan `username` di beberapa tempat. |
| **Hindari nama yang terlalu pendek atau terlalu umum** | Hindari nama variabel yang terlalu pendek atau tidak memberikan informasi yang jelas. | Hindari `x`, `y`, lebih baik gunakan `user_age` atau `item_price`. |

Dengan mengikuti konvensi ini, kode Python Anda akan lebih terstruktur dan lebih mudah dipahami, baik oleh Anda maupun oleh orang lain yang membaca kode tersebut.
#### Strings Methods

Python menyediakan banyak metode bawaan untuk memanipulasi string.

Ada banyak metode string. Anda dapat menemukannya 

``` python
# Membuat awal kalimat format Kapital
sentence = 'This IS A String'
sentence.capitalize()  # output 'This is a string'
sentence.title()   # Membuat setiap kata huruf awalnya Kapital, output 'This Is A String'
sentence.upper()   # output 'THIS IS A STRING'
sentence.lower()   # output 'this is a string'

```

``` python
# Splitting the string

sentence.split()  # ountput ['This', 'IS', 'A', 'String']
```

Terakhir, kita bisa menggunakan metode `replace()` untuk mengganti
beberapa karakter dalam string dengan karakter lain. Metode penggantian
membutuhkan dua input: karakter yang akan diganti, dan karakter baru
yang akan dimasukkan ke dalam string,
`replace('karakter yang akan diganti', 'karakter baru')`.

Misalnya:

``` python
stri = "This movie was awesome"
stri.replace('movie', 'project')  # output: 'This project was awesome'
```

``` python
# Mengganti spasi kosong dengan `%20'

stri_2 = "The future is great"
stri_2.replace(' ', '%20')       # output 'The%20future%20is%20great'
```
## 2. Tipe Data

Tipe data di Python beserta contoh penggunaannya sebagai berikut:

| **Tipe Data**            | **Kategori**    | **Penjelasan**                                                                                                                                          | **Contoh**                                                                                                                                                              |
|--------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **`str`**                 | Teks            | Digunakan untuk menyimpan teks (karakter) dalam bentuk urutan.                                                                                        | `nama = "Alice"`                                                                                                                                                       |
| **`int`**                 | Numerik         | Digunakan untuk menyimpan bilangan bulat tanpa desimal.                                                                                                | `umur = 25`                                                                                                                                                            |
| **`float`**               | Numerik         | Digunakan untuk menyimpan bilangan pecahan atau desimal.                                                                                                | `berat = 60.5`                                                                                                                                                         |
| **`complex`**             | Numerik         | Digunakan untuk menyimpan bilangan kompleks yang memiliki bagian real dan imajiner.                                                                   | `bilangan_kompleks = 3 + 4j`                                                                                                                                            |
| **`list`**                | Sequence        | Digunakan untuk menyimpan urutan data yang dapat diubah (mutable), bisa menyimpan berbagai tipe data.                                                  | `buah = ['apel', 'jeruk', 'mangga']`                                                                                                                                    |
| **`tuple`**               | Sequence        | Digunakan untuk menyimpan urutan data yang tidak dapat diubah (immutable).                                                                             | `koordinat = (10, 20)`                                                                                                                                                 |
| **`range`**               | Sequence        | Digunakan untuk menghasilkan urutan angka secara bertahap. Biasanya digunakan dalam perulangan.                                                        | `angka = range(5)`                                                                                                                                                     |
| **`dict`**                | Mapping         | Digunakan untuk menyimpan pasangan key-value. Setiap elemen dalam dictionary terdiri dari kunci unik dan nilainya.                                       | `data = {'nama': 'Alice', 'umur': 25}`                                                                                                                                 |
| **`set`**                 | Set             | Digunakan untuk menyimpan sekumpulan data unik yang tidak berurutan dan tidak dapat diubah (immutable).                                                  | `angka_set = {1, 2, 3, 4, 5}`                                                                                                                                          |
| **`frozenset`**           | Set             | Mirip dengan `set`, namun bersifat immutable, tidak bisa diubah setelah dibuat.                                                                        | `angka_frozenset = frozenset([1, 2, 3, 4])`                                                                                                                           |
| **`bool`**                | Boolean         | Digunakan untuk menyimpan nilai `True` atau `False`, sering digunakan dalam percabangan logika.                                                         | `is_berhasil = True`                                                                                                                                                   |
| **`bytes`**               | Binary          | Digunakan untuk menyimpan data biner dalam bentuk yang tidak dapat diubah (immutable).                                                                 | `data_bytes = b'Hello'`                                                                                                                                                 |
| **`bytearray`**           | Binary          | Mirip dengan `bytes`, tetapi bersifat mutable dan memungkinkan perubahan data biner setelah pembuatan.                                                   | `data_bytearray = bytearray([65, 66, 67])`                                                                                                                           |
| **`memoryview`**          | Binary          | Digunakan untuk memberikan pandangan (view) ke objek yang menyimpan data biner, memungkinkan akses data tanpa menyalin data tersebut.                    | `data_memoryview = memoryview(bytearray([65, 66, 67]))`                                                                                                             |

Tabel ini merupakan tipe data di Python beserta contoh penggunaannya, yang dapat membantu memahami tipe data mana yang digunakan untuk kebutuhan tertentu dalam pengembangan.
## 3. Data Structures 

Struktur data digunakan untuk mengatur dan menyimpan data. Algoritma
mendukung operasi pada data.

Python memiliki 4 struktur data utama: `list`, `Dictionary(dict)`, `Tupel` dan
`Set`.

### 3.1 List 

List (daftar) adalah sekumpulan nilai yang diurutkan. Setiap nilai dalam
daftar disebut `elemen` atau `item` dan dapat diidentifikasi dengan
indeks. List mendukung tipe data yang berbeda, kita dapat memiliki
daftar bilangan bulat, string, dan float.

```python
# Membuat list
my_list = [1, 2, 3, 4, 5]
```
Fitur list:
- Urut (berdasarkan indeks).
- Bisa mengubah elemen (mutable).
- Bisa menyimpan berbagai tipe data.
- Dapat berisi elemen duplikat.

```python
my_list = [1, 2, 3]
my_list[0] = 10  # Mengubah elemen pertama menjadi 10
print(my_list)  # Output: [10, 2, 3]
```

Operasi dasar pada list di Python:

<h3 class="text-blueink"> Membuat List </h3>

List dapat dibuat dengan menempatkan elemen di dalam tanda kurung siku []. List dapat berisi elemen dengan tipe data yang sama atau berbeda.


```
hari_dalam_minggu = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum']
angka_genap = [2, 4, 6, 8, 10]
list_campuran = ['Sen', 1, 'Sel', 2, 'Rab', 3]
```
<h3 class="text-blueink"> Menampilkan elemen list </h3>

```
print(hari_dalam_minggu)

Output:
['Sen', 'Sel', 'Rab', 'Kam', 'Jum']
```

<h3 class="text-blueink"> Mengakses Elemen List</h3>

Elemen list dapat diakses menggunakan indeks. Ingat bahwa indeks dimulai dari 0.

#### a. Mengakses elemen pertama dalam list
```
print(hari_dalam_minggu[0])  # Output: 'Sen'
```

#### b. Mengakses elemen ketiga dalam list angka_genap
```
print(angka_genap[2])  # Output: 6
```

#### c. Mengakses elemen terakhir dalam list
```
print(angka_genap[-1])  # Output: 10
```
<h3 class="text-blueink"> Menslicing List</h3>

Kita dapat menggunakan slicing untuk mengambil bagian tertentu dari list.

#### a. Mengambil elemen dari indeks 0 hingga 2 (indeks 2 tidak disertakan)
```
print(hari_dalam_minggu[0:2])  # Output: ['Sen', 'Sel']
```

#### b. Mengambil elemen dari indeks terakhir keempat hingga pertama
```
print(hari_dalam_minggu[-4:])  # Output: ['Sel', 'Rab', 'Kam', 'Jum']
```

#### c. Mengambil semua elemen hingga indeks keempat
```
print(hari_dalam_minggu[:4])  # Output: ['Sen', 'Sel', 'Rab', 'Kam']
```

#### d. Mengambil semua elemen mulai dari indeks ke-2
```
print(hari_dalam_minggu[2:])  # Output: ['Rab', 'Kam', 'Jum']
```
<h3 class="text-blueink"> Mengubah Elemen dalam List</h3>

List di Python bersifat mutable, artinya elemen dalam list dapat diubah.

```
nama = ['James', 'Jean', 'Sebastian', 'Prit']
```

#### a. Mengubah 'Jean' menjadi 'Ratamsing' dan 'Sebastian' menjadi 'Vijey'
```
nama[1:3] = ['Ratamsing', 'Ras']
print(nama)  # Output: ['James', 'Ratamsing', 'Vijey', 'Prit']
```

#### b. Mengubah elemen terakhir menjadi 'Sun'
```
nama[-1] = 'Sun'
print(nama)  # Output: ['James', 'Nyandwi', 'Ras', 'Sun']
```

#### c. Mengubah 'James' menjadi 'Francois'
```
nama[0] = 'Francois'
print(nama)  # Output: ['Francois', 'Nyandwi', 'Ras', 'Sun']
```
<h3 class="text-blueink">Menghapus Elemen dalam List</h3>

Untuk menghapus elemen dari list, bisa menggunakan del, pop(), atau remove().

#### a. Menghapus elemen 'Ratamsing' dengan del
```
del nama[1]
print(nama)  # Output: ['Francois', 'Ras', 'Sun']
```

#### b. Menghapus elemen pada indeks 2 dengan pop
```
nama.pop(2)
print(nama)  # Output: ['Francois', 'Ras']
```

#### c. Menghapus elemen 'Francois' dengan remove
```
nama.remove('Francois')
print(nama)  # Output: ['Ras']
```
<h3 class="text-blueink">Menambahkan Elemen dalam List</h3>

Kita bisa menambahkan elemen ke dalam list menggunakan append() atau extend().

#### a. Menambahkan elemen dengan append
```
nama.append('Jess')
nama.append('Jac')
print(nama)  # Output: ['Ras', 'Jess', 'Jac']
```
<h3 class="text-blueink">Menelusuri List (Traversing)</h3>

Untuk melakukan operasi iterasi, kita bisa menggunakan for loop untuk menelusuri elemen dalam list.

#### a. Menampilkan semua elemen dalam list
```
for nama_item in nama:
    print(nama_item)

Output:

python
Copy
Edit
Ras
Jess
Jac
```
<h3 class="text-blueink"> Operasi pada List </h3>

Beberapa operasi dasar pada list, seperti penggabungan dan pengulangan list.

```
# Menggabungkan dua list
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
print(c)  # Output: [1, 2, 3, 4, 5, 6]


# Mengulangi list
print([None] * 5)  # Output: [None, None, None, None, None]
print([True] * 4)  # Output: [True, True, True, True]
```
<h3 class="text-blueink"> List Bertingkat (Nested Lists) </h3>

List bisa berisi list lain di dalamnya. Ini disebut nested list.

```
# List bertingkat
nested_list = [1, 2, 3, ['a', 'b', 'c']]

# Mengakses list dalam nested list
print(nested_list[3])  # Output: ['a', 'b', 'c']

# Mengakses elemen dalam nested list
print(nested_list[3][1])  # Output: 'b'
```
<h3 class="text-blueink"> Metode pada List </h3>

Beberapa metode penting pada list di Python antara lain sort(), reverse(), dan count().

```
# Mengurutkan list dengan sort()
angka_genap = [2, 14, 16, 12, 20, 8, 10]
angka_genap.sort()
print(angka_genap)  # Output: [2, 8, 10, 12, 14, 16, 20]

# Membalik urutan list dengan reverse()
angka_genap.reverse()
print(angka_genap)  # Output: [20, 16, 14, 12, 10, 8, 2]
```
Ini adalah beberapa operasi dasar pada list di Python. Dengan list, Anda bisa melakukan berbagai manipulasi data yang fleksibel!


### 3.2 Dictionaries {#22-dictionaries}

Data dictionaries data dengan struktur ``` {"key" : value} ```

1. **Membuat Dictionary (Creating a Dictionary)**

   ```python
   my_dict = {"nama": "John", "umur": 30, "kota": "Jakarta"}
   ```

2. **Mengakses Nilai dan Key dalam Dictionary (Accessing Values and Keys)**

   - Mengakses nilai berdasarkan key:
     ```python
     print(my_dict["nama"])  # Output: John
     ```
   
   - Mengakses semua key:
     ```python
     for key in my_dict.keys():
         print(key)  # Output: nama, umur, kota
     ```
   
   - Mengakses semua nilai:
     ```python
     for value in my_dict.values():
         print(value)  # Output: John, 30, Jakarta
     ```

3. **Menyelesaikan Masalah Penghitungan dengan Dictionary (Solving Counting Problems)**

   ```python
   word_list = ["apel", "pisang", "apel", "jeruk", "pisang", "pisang"]
   count_dict = {}
   for word in word_list:
       count_dict[word] = count_dict.get(word, 0) + 1
   print(count_dict)  # Output: {'apel': 2, 'pisang': 3, 'jeruk': 1}
   ```

4. **Menelusuri Dictionary (Traversing a Dictionary)**

   - Menggunakan `.items()` untuk mengakses key dan value:
     ```python
     for key, value in my_dict.items():
         print(f"{key}: {value}")  # Output: nama: John, umur: 30, kota: Jakarta
     ```

5. **Metode `setdefault()` (The `setdefault()` Method)**

   - Menambahkan key dan nilai jika key belum ada:
     ```python
     my_dict = {"nama": "John", "umur": 30}
     result = my_dict.setdefault("kota", "Jakarta")
     print(result)  # Output: Jakarta
     print(my_dict)  # Output: {'nama': 'John', 'umur': 30, 'kota': 'Jakarta'}
     ```


> ***Catatan***
>
> - Dictionary tidak terurut dan tidak dapat diurutkan - sedangkan list terurut (dan tidak terurut) dan dapat diurutkan.
> - Dictionary dapat menyimpan data dengan tipe yang berbeda: float, integer, dan string, dan juga dapat menyimpan list.



### 3.3 Tuples {#23-tuples}

Tuple itu mirip seperti list tapi bersifat immutability atau tidak bisa diubah. Contohnya kodepos, code negara, dan lainnya.

``` python
tup = (1,4,5,6,7,8)
```

``` python
# Indexing

tup[4]
```

``` python
## Tuple tidak bisa dirubah, menjalankan ini akan error

tup[2] = 10
```

``` python
# Selain tidak bisa dirubah, juga tidak bisa ditambah, ini error
tup.append(12)
```
:::

::: {.cell .markdown id="IELzAECOycaI"}
`<a name='2-4'>`{=html}`</a>`{=html}

### 3.4 Sets 

**Sets** digunakan untuk menyimpan elemen-elemen unik dan tidak berurutan. Berbeda dengan **list**, **set** tidak menyimpan elemen yang berulang. Berikut adalah contoh penggunaannya:

1. **Membuat Set**:
   ```python
   set_1 = {1, 2, 3, 4, 5, 6, 7, 8}
   print(set_1)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}
   ```

2. **Menangani elemen duplikat**:
   ```python
   set_2 = {1, 1, 2, 3, 5, 3, 2, 2, 4, 5, 7, 8, 8, 5}
   print(set_2)  # Output: {1, 2, 3, 4, 5, 7, 8}
   ```
   Pada contoh ini, elemen yang berulang akan dihapus dan hanya elemen unik yang tersisa.

3. **Perbandingan antara List dan Set**:
   ```python
   odd_numbers = [1, 1, 3, 7, 9, 3, 5, 7, 9, 9]
   print("List:", odd_numbers)

   print("********")

   set_odd_numbers = {1, 1, 3, 7, 9, 3, 5, 7, 9, 9}
   print("Set:", set_odd_numbers)
   ```
   Output:
   ```
   List: [1, 1, 3, 7, 9, 3, 5, 7, 9, 9]
   ********
   Set: {1, 3, 5, 7, 9}
   ```
   Set secara otomatis menghapus duplikasi dan hanya menyimpan elemen yang unik.

### Kesimpulan:
- **Set** sangat berguna untuk menyimpan data unik dan menghindari duplikasi.
- Tidak ada urutan yang terjamin dalam set, elemen bisa disimpan dalam urutan yang berbeda saat setiap kali diakses.

## 4. Operator Perbandingan dan Logika

**Operator perbandingan** digunakan untuk membandingkan nilai. Hasil dari perbandingan ini adalah **True** atau **False**.

#### Operator Perbandingan:
- **Greater than (lebih besar dari)**:
  ```python
  100 > 1  # Output: True
  ```

- **Equal to (sama dengan)**:
  ```python
  100 == 1  # Output: False
  ```

- **Less than (kurang dari)**:
  ```python
  100 < 1  # Output: False
  ```

- **Greater or equal to (lebih besar atau sama dengan)**:
  ```python
  100 >= 1  # Output: True
  ```

- **Less or equal to (kurang atau sama dengan)**:
  ```python
  100 <= 1  # Output: False
  ```

- **Membandingkan string**:
  ```python
  'Intro to Python' == 'intro to python'  # Output: False
  'Intro to Python' == 'Intro to Python'  # Output: True
  ```

#### Operator Logika:
Operator logika digunakan untuk membandingkan dua ekspresi yang dibentuk oleh operator perbandingan.

- **and**: Mengembalikan **True** hanya jika kedua ekspresi adalah **True**.
  ```python
  100 == 100 and 100 == 100  # Output: True
  ```

- **or**: Mengembalikan **True** jika salah satu dari ekspresi adalah **True**, dan hanya **False** jika kedua ekspresi **False**.
  ```python
  100 <= 10 and 100 == 100  # Output: False
  100 == 10 or 100 == 100  # Output: True
  ```

- **not**: Mengembalikan kebalikan dari ekspresi yang diberikan.
  ```python
  not 1 == 2  # Output: True
  not 1 == 1  # Output: False
  ``` 

Operator perbandingan dan logika ini sangat berguna dalam pengambilan keputusan atau **conditional statements** di dalam program.

Contoh penerapan dalam machine learning:

Berikut adalah contoh blok kode yang sering digunakan dalam machine learning yang menggabungkan **operator perbandingan** dan **operator logika** untuk melakukan seleksi atau evaluasi kondisi dalam suatu model:

```python
import numpy as np

# Misalkan kita memiliki data prediksi dan label yang benar
predictions = np.array([0, 1, 1, 0, 1, 1, 0, 1])
true_labels = np.array([0, 1, 0, 0, 1, 1, 1, 1])

# Menghitung akurasi model
correct_predictions = predictions == true_labels  # Membandingkan hasil prediksi dengan label yang benar
accuracy = np.sum(correct_predictions) / len(true_labels)

# Evaluasi menggunakan logika: jika akurasi lebih besar atau sama dengan 0.8, model dianggap baik
if accuracy >= 0.8:
    print("Model memiliki akurasi yang baik: {:.2f}".format(accuracy))
else:
    print("Model perlu diperbaiki: {:.2f}".format(accuracy))

# Misalnya kita ingin memeriksa jika model tidak berhasil dalam satu kasus saja
if not np.any(correct_predictions == False):  # Cek jika tidak ada kesalahan prediksi
    print("Model sempurna!")
else:
    print("Model tidak sempurna.")
```

### Penjelasan:
1. **Operator Perbandingan**:
   - `predictions == true_labels` digunakan untuk memeriksa apakah prediksi sama dengan label yang benar (True jika sama, False jika berbeda).
   - `accuracy >= 0.8` digunakan untuk memeriksa apakah akurasi model lebih besar atau sama dengan 80%.

2. **Operator Logika**:
   - `if accuracy >= 0.8` adalah logika untuk memeriksa apakah model memiliki akurasi yang memadai.
   - `if not np.any(correct_predictions == False)` menggunakan operator `not` untuk memeriksa apakah ada prediksi yang salah. Jika tidak ada kesalahan, berarti model sempurna.

Contoh ini umum ditemukan dalam pengembangan model machine learning untuk mengevaluasi dan memastikan kinerja model.

Berikut penjelasan yang lebih rapi dalam bahasa Indonesia mengenai **Control Flow**:

## 5. Alur Kontrol 

Anda perlu membuat keputusan berdasarkan situasi tertentu. Anda juga perlu mengontrol alur program, dan di sinilah konsep `Alur Kontrol` berperan.

Berikut adalah tabel perbandingan alur kontrol dalam Python, yang menjelaskan berbagai perintah untuk pengendalian alur eksekusi program:

| **Jenis Alur Kontrol** | **Deskripsi**                                                                 | **Contoh**                                                                                       |
|------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **If Statement**        | Mengeksekusi blok kode jika kondisi tertentu bernilai benar (`True`).          | ```python if x > 10: print("x lebih besar dari 10")```                                          |
| **If-Else Statement**   | Mengeksekusi blok kode jika kondisi benar, atau blok lain jika kondisi salah. | ```python if x > 10: print("x lebih besar dari 10") else: print("x kurang dari atau sama dengan 10")``` |
| **Elif Statement**      | Mengeksekusi kondisi tambahan jika kondisi sebelumnya salah.                  | ```python if x > 10: print("x lebih besar dari 10") elif x == 10: print("x sama dengan 10") else: print("x kurang dari 10")``` |
| **While Loop**          | Menjalankan blok kode selama kondisi tertentu bernilai benar.                 | ```python while x < 10: x += 1```                                                               |
| **For Loop**            | Mengulang blok kode untuk setiap item dalam urutan (seperti list, tuple, dsb). | ```python for i in range(5): print(i)```                                                        |
| **Break**               | Menghentikan perulangan (baik `for` maupun `while`) sebelum selesai.           | ```python for i in range(10): if i == 5: break; print(i)```                                      |
| **Continue**            | Melewati sisa iterasi saat ini dan melanjutkan ke iterasi berikutnya dalam perulangan. | ```python for i in range(10): if i == 5: continue; print(i)```                                 |
| **Pass**                | Placeholder yang tidak melakukan apa-apa, berguna untuk struktur kontrol yang kosong. | ```python if x > 10: pass```                                                                     |
| **Try-Except**          | Menangani exception atau error yang terjadi selama eksekusi kode.              | ```python try: x = 10 / 0 except ZeroDivisionError: print("Tidak bisa membagi dengan nol")```    |
| **Try-Except-Finally**  | Menangani exception dan selalu menjalankan blok kode di `finally`, apapun yang terjadi. | ```python try: x = 10 / 0 except ZeroDivisionError: print("Tidak bisa membagi dengan nol") finally: print("Proses selesai")``` |

Tabel ini memberikan gambaran singkat mengenai berbagai alur kontrol dalam Python dan penggunaannya. Dengan memahami dan menggunakan alur kontrol ini, Anda dapat menulis kode yang lebih fleksibel dan efisien.

Kita akan membahas beberapa struktur kontrol alur berikut:

- Pernyataan If
- Perulangan For
- Perulangan While

### 5.1 `If, Elif, Else` 

Struktur dari kondisi `if` adalah sebagai berikut:

```python
if kondisi:
    lakukan sesuatu
else:
    lakukan hal lain
```

Contoh implementasinya:

```python
if 100 < 2:
    print("Seperti yang diharapkan, tidak ada yang akan ditampilkan")
else:
    print("Tampil")
```

Contoh lainnya dengan beberapa kondisi:

```python
john_age = 30
luck_age = 20

if john_age > luck_age:
    print("John lebih tua dari Luck")
else:
    print("John lebih muda dari Luck")
```

Jika ingin menggunakan lebih dari satu kondisi, bisa menggunakan `elif`:

```python
john_age = 30
luck_age = 20
yan_age = 30

if john_age < luck_age:
    print("John lebih tua dari Luck")
elif yan_age == luck_age:
    print("Usia Yan sama dengan Luck")
elif luck_age > john_age:
    print("Luck lebih tua dari John")
else:
    print("Usia John sama dengan Yan")
```

Selain itu, kita juga bisa menyusun kondisi `if` dalam satu baris kode:

```python
'Even' if num % 2 == 0 else 'Odd'
```

Contoh penggunaannya:

```python
num = 45
print('Even' if num % 2 == 0 else 'Odd')  # Output: Odd
```

### 5.2 Perulangan `For` 

Perulangan `for` digunakan untuk iterasi atau pengulangan elemen dalam suatu list, string, tuple, atau dictionary.

Struktur dasar perulangan `for` adalah:

```python
for item in items:
    lakukan sesuatu
```

Contoh penggunaan `for` untuk mengiterasi sebuah list:

```python
even_nums = [2, 4, 6, 8, 10]
for num in even_nums:
    print(num)
```

Selain itu, kita juga bisa menggunakan perulangan `for` untuk iterasi string, atau bahkan dictionary:

```python
sentence = "Belajar Python itu menyenangkan!"
for letter in sentence:
    print(letter)
```

Untuk iterasi dictionary, kita bisa mengakses key atau value-nya:

```python
countries_code = {"Indonesia": 62, "India": 91, "China": 86}
for country in countries_code:
    print(country)  # Menampilkan nama negara
```

`range()` digunakan untuk menghasilkan urutan angka. Contohnya:

```python
for number in range(10, 20):
    print(number)
```

Perulangan `for` juga dapat digunakan untuk membuat sebuah list baru menggunakan list comprehension:

```python
letters = [letter for letter in 'MachineLearning']
print(letters)
```

### 5.3 Perulangan `While` 

Perulangan `while` akan terus mengeksekusi pernyataan selama kondisi yang diberikan bernilai `True`. Struktur dasar dari `while` adalah:

```python
while kondisi:
    lakukan sesuatu
```

Contoh implementasinya:

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

Perulangan `while` ini akan berhenti ketika kondisi `count < 5` tidak lagi terpenuhi.

---

Dengan memanfaatkan struktur kontrol seperti `if`, `for`, dan `while`, Anda dapat mengontrol alur program dengan lebih baik dan mengimplementasikan berbagai logika dalam kode Anda.

## 6. Fungsi 

Fungsi digunakan untuk menulis kode atau pernyataan yang bisa digunakan berulang kali dengan parameter yang berbeda.

Salah satu prinsip dasar dalam pemrograman adalah "DRY" atau **Do Not Repeat Yourself**. Fungsi akan membantu agar Anda tidak menulis kode yang sama berulang kali.

Berikut adalah cara mendefinisikan fungsi di Python:

```python
def nama_fungsi(parameter):

  """
  Ini adalah Doc String
  Anda bisa menggunakannya untuk memberi catatan tentang fungsi
  """
  pernyataan 

  return hasil
```

- `nama_fungsi` adalah nama fungsi yang Anda buat. Nama ini tidak boleh sama dengan fungsi bawaan. Kita akan melihat fungsi bawaan nanti.
- `parameter` adalah nilai yang diteruskan ke dalam fungsi.
- `Doc String` digunakan untuk menambahkan catatan atau penjelasan tentang fungsi. Ini bukan kewajiban, tetapi merupakan **praktik yang baik**.
- `return` digunakan untuk menentukan sesuatu atau nilai yang ingin Anda kembalikan setiap kali fungsi dipanggil atau dijalankan.

### Contoh Fungsi Penjumlahan

Berikut adalah contoh fungsi untuk menambahkan dua angka:

```python
def add_nums(a, b):

  """
  Fungsi untuk menambahkan dua angka yang diberikan sebagai input
  Fungsi ini akan mengembalikan hasil penjumlahan kedua angka
  """
  
  total = a + b
  
  return total
```

Jika Anda memanggil fungsi `add_nums(2, 4)`, hasilnya adalah 6.

### Menampilkan Doc String

Doc string yang ditambahkan ke dalam fungsi bisa ditampilkan dengan menggunakan `.__doc__`. Berikut contoh penggunaannya:

```python
print(add_nums.__doc__)
```

Hasilnya adalah:

```
Fungsi untuk menambahkan dua angka yang diberikan sebagai input
Fungsi ini akan mengembalikan hasil penjumlahan kedua angka
```

### Fungsi Tanpa `return`

Fungsi tidak selalu harus memiliki pernyataan `return`. Jika Anda hanya ingin menampilkan pesan kustom, cukup menggunakan `print()`.

Contoh fungsi untuk menampilkan pesan:

```python
def activity(name_1, name_2):
  print("{} dan {} sedang bermain bola basket!".format(name_1, name_2))
```

Ketika Anda memanggil `activity("Chris", "Francois")`, hasilnya akan tampil seperti ini:

```
Chris dan Francois sedang bermain bola basket!
```

Dengan menggunakan fungsi, Anda dapat menghindari pengulangan kode dan membuat program Anda lebih modular serta mudah dipelihara.

## 7. Fungsi Lambda 

Ada kalanya Anda ingin membuat fungsi anonim (tanpa nama). Fungsi jenis ini hanya membutuhkan satu ekspresi saja.

Contoh fungsi penjumlahan dua angka yang biasa ditulis menggunakan fungsi biasa adalah sebagai berikut:

```python
def add_nums(a, b):
  sum = a + b
  return sum
```

Namun, kita bisa menggunakan **lambda** untuk membuat fungsi yang sama dalam satu baris kode!

Berikut adalah contoh penggunaan lambda untuk menjumlahkan dua angka:

```python
sum_of_two_nums = lambda c, d: c + d
```

Ketika fungsi `sum_of_two_nums(4, 5)` dipanggil, hasilnya adalah 9.

### Penjelasan
- `lambda` adalah kata kunci untuk mendefinisikan fungsi anonim.
- `c, d` adalah parameter yang diterima oleh fungsi.
- `c + d` adalah ekspresi yang akan dieksekusi dan hasilnya akan dikembalikan.

Fungsi lambda sangat berguna ketika Anda hanya perlu fungsi kecil yang tidak memerlukan definisi lengkap dan dapat digunakan secara langsung dalam operasi tertentu.

## 8. Fungsi Bawaan 

Python, sebagai bahasa pemrograman tingkat tinggi, memiliki banyak fungsi bawaan yang memudahkan kita untuk melakukan perhitungan dengan cepat.

Contoh fungsi bawaan yang sering digunakan adalah `len()`, yang memberikan panjang dari sebuah string atau daftar yang diberikan sebagai input.

Berikut adalah contoh penggunaan `len()` untuk menghitung panjang string:

```python
message = 'Do not give up!'
len(message)
```

Hasilnya adalah 15, karena jumlah karakter dalam string tersebut adalah 15.

Selain itu, kita juga bisa menggunakan `len()` untuk menghitung panjang daftar:

```python
odd_numbers = [1, 3, 5, 7]
len(odd_numbers)
```

Hasilnya adalah 4, karena ada 4 elemen dalam daftar `odd_numbers`.

### Fungsi Bawaan Lainnya

- **max()**: Mencari nilai maksimum dalam sebuah daftar.

```python
odd_numbers = [1, 3, 5, 7]
max(odd_numbers)
```
Hasil: 7

- **min()**: Mencari nilai minimum dalam sebuah daftar.

```python
min(odd_numbers)
```
Hasil: 1

- **sorted()**: Mengurutkan elemen dalam sebuah daftar.

```python
odd_numbers = [9, 7, 3, 5, 11, 13, 15, 1]
sorted(odd_numbers)
```
Hasil: `[1, 3, 5, 7, 9, 11, 13, 15]`

### Fungsi `map()` dan `filter()`

Selain fungsi-fungsi dasar di atas, Python juga memiliki fungsi `map()` dan `filter()` yang sangat berguna.

#### 8.1 Fungsi `map()`

Fungsi `map()` memungkinkan kita untuk menerapkan sebuah fungsi pada setiap elemen dalam struktur data yang dapat diiterasi, seperti daftar.

Contoh penggunaan `map()` untuk mengkuadratkan setiap elemen dalam daftar:

```python
def cubic(number):
  return number ** 3

num_list = [0, 1, 2, 3, 4]
list(map(cubic, num_list))
```

Hasil: `[0, 1, 8, 27, 64]`

#### 8.2 Fungsi `filter()`

Fungsi `filter()` memungkinkan kita untuk memfilter elemen-elemen dalam daftar berdasarkan fungsi yang mengembalikan nilai boolean (`True` atau `False`).

Contoh penggunaan `filter()` untuk memfilter angka ganjil:

```python
def odd_check(number):
  return number % 2 != 0

num_list = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]
list(filter(odd_check, num_list))
```

Hasil: `[1, 5, 7, 9, 11]`

Dengan menggunakan fungsi `map()` dan `filter()`, kita dapat melakukan operasi yang lebih kompleks secara efisien pada daftar atau struktur data lainnya.

Berikut adalah tabel yang berisi beberapa fungsi bawaan yang sering digunakan dalam Python:

| **Fungsi**              | **Deskripsi**                                                                                     | **Contoh Penggunaan**                                                                                         |
|-------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **`print()`**            | Menampilkan output ke layar.                                                                      | `print("Hello, World!")`                                                                                       |
| **`len()`**              | Mengembalikan panjang (jumlah item) dari objek seperti string, list, atau tuple.                 | `len([1, 2, 3])` -> `3`                                                                                         |
| **`type()`**             | Mengembalikan tipe data dari objek.                                                                | `type(42)` -> `<class 'int'>`                                                                                   |
| **`int()`**              | Mengubah data menjadi tipe integer.                                                                | `int("123")` -> `123`                                                                                           |
| **`str()`**              | Mengubah data menjadi tipe string.                                                                 | `str(123)` -> `"123"`                                                                                           |
| **`float()`**            | Mengubah data menjadi tipe float.                                                                  | `float("3.14")` -> `3.14`                                                                                       |
| **`sum()`**              | Mengembalikan jumlah total dari iterabel.                                                          | `sum([1, 2, 3])` -> `6`                                                                                         |
| **`max()`**              | Mengembalikan nilai terbesar dari iterabel atau dua argumen.                                       | `max([1, 2, 3])` -> `3`                                                                                        |
| **`min()`**              | Mengembalikan nilai terkecil dari iterabel atau dua argumen.                                       | `min([1, 2, 3])` -> `1`                                                                                        |
| **`abs()`**              | Mengembalikan nilai absolut (positif) dari angka.                                                  | `abs(-5)` -> `5`                                                                                               |
| **`round()`**            | Membulatkan angka ke jumlah desimal tertentu.                                                     | `round(3.14159, 2)` -> `3.14`                                                                                   |
| **`range()`**            | Mengembalikan urutan angka, yang bisa digunakan untuk perulangan.                                 | `range(5)` -> `range(0, 5)`                                                                                     |
| **`enumerate()`**        | Menyediakan pasangan indeks dan elemen dalam sebuah iterabel.                                      | `list(enumerate(['a', 'b', 'c']))` -> `[(0, 'a'), (1, 'b'), (2, 'c')]`                                         |
| **`sorted()`**           | Mengembalikan list yang diurutkan dari sebuah iterabel.                                            | `sorted([3, 1, 2])` -> `[1, 2, 3]`                                                                             |
| **`zip()`**              | Menggabungkan beberapa iterabel menjadi iterator yang mengembalikan tuple berpasangan.             | `list(zip([1, 2, 3], ['a', 'b', 'c']))` -> `[(1, 'a'), (2, 'b'), (3, 'c')]`                                    |
| **`all()`**              | Mengembalikan `True` jika semua elemen dalam iterabel bernilai `True`.                             | `all([True, True, False])` -> `False`                                                                          |
| **`any()`**              | Mengembalikan `True` jika ada elemen dalam iterabel yang bernilai `True`.                          | `any([False, False, True])` -> `True`                                                                          |
| **`sorted()`**           | Mengembalikan list yang diurutkan dari iterabel yang diberikan.                                    | `sorted([5, 3, 9])` -> `[3, 5, 9]`                                                                             |
| **`id()`**               | Mengembalikan ID unik untuk objek yang diberikan.                                                  | `id('hello')`                                                                                                  |
| **`dir()`**              | Mengembalikan daftar atribut dan metode dari objek.                                                | `dir([1, 2, 3])` -> Menampilkan daftar metode yang dimiliki list                                               |
| **`isinstance()`**       | Mengecek apakah objek adalah instansi dari kelas atau tipe tertentu.                               | `isinstance(42, int)` -> `True`                                                                                |
| **`input()`**            | Mengambil input dari pengguna dalam bentuk string.                                                 | `name = input("Enter your name: ")`                                                                           |
| **`help()`**             | Menampilkan dokumentasi tentang objek atau modul.                                                 | `help(str)` -> Menampilkan dokumentasi untuk tipe data string                                                 |
| **`eval()`**             | Mengevaluasi ekspresi Python yang diberikan sebagai string dan mengembalikannya.                   | `eval('3 + 5')` -> `8`                                                                                         |
| **`exec()`**             | Menjalankan pernyataan Python yang diberikan sebagai string.                                       | `exec('x = 5')`                                                                                               |

Tabel ini mencakup beberapa fungsi bawaan yang sering digunakan dalam Python untuk berbagai keperluan, mulai dari manipulasi data, pengulangan, hingga evaluasi kode.

## 9. Fitur Python
Berikut adalah penjelasan mengenai beberapa fitur Python yang berguna:

### 9.1 List Comprehension
- **List comprehension** memungkinkan kamu untuk membuat daftar baru berdasarkan daftar yang sudah ada, membuat kode lebih ringkas dan mudah dibaca. Contoh:
  ```python
  nums = range(1, 20)
  even_nums = [num for num in nums if num % 2 == 0]
  print(even_nums)
  ```
  Ini akan mencetak angka genap antara 1 dan 19.

### 9.2 Fungsi Enumerate
- Fungsi `enumerate()` menambahkan penghitung pada iterable, sehingga memudahkan kita untuk mengakses elemen dan indeksnya. Kamu juga bisa mengubah indeks mulai dari angka tertentu:
  ```python
  seasons = ['Spring', 'Summer', 'Fall', 'Winter']
  for index, season in enumerate(seasons, start=1):
      print(index, season)
  ```
  Ini akan mencetak musim-musim dengan indeksnya dimulai dari 1.

### 9.3 Fungsi Zip
- Fungsi `zip()` menggabungkan dua iterable (seperti daftar) menjadi pasangan (tuple). Contoh:
  ```python
  names = ['Jessy', 'Joe', 'Jeannette']
  roles = ['ML Engineer', 'Web Developer', 'Data Engineer']
  zipped = zip(names, roles)
  print(list(zipped))
  ```
  Ini akan mencetak pasangan nama dan peran dalam bentuk tuple.

Berikut adalah tabel yang berisi beberapa fitur utama yang ada di Python:

| **Fitur**                | **Deskripsi**                                                                                                  | **Contoh Penggunaan**                                                                                                   |
|--------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Interpreter**           | Python menggunakan interpreter untuk mengeksekusi kode secara langsung, tanpa kompilasi terlebih dahulu.        | Menulis dan menjalankan kode Python langsung di shell atau editor.                                                       |
| **Dynamically Typed**     | Tipe data variabel ditentukan secara otomatis saat runtime, tanpa perlu mendeklarasikan tipe secara eksplisit.   | `x = 10` -> Tipe `int` ditentukan otomatis saat runtime.                                                                |
| **Garbage Collection**    | Python otomatis mengelola memori dengan menghapus objek yang tidak lagi digunakan.                             | Memori untuk objek yang tidak dirujuk lagi akan dibersihkan secara otomatis.                                             |
| **Object-Oriented**       | Python mendukung pemrograman berorientasi objek dengan dukungan kelas dan objek.                               | Membuat kelas: `class MyClass: pass`                                                                                    |
| **Multiple Inheritance**  | Python mendukung pewarisan ganda, memungkinkan kelas untuk mewarisi atribut dan metode dari lebih dari satu kelas. | `class B(A, C): pass` – Kelas `B` mewarisi dari kelas `A` dan `C`.                                                     |
| **Extensive Standard Library** | Python memiliki pustaka standar yang sangat besar dan kaya untuk berbagai kebutuhan pemrograman.              | `import math` untuk menggunakan fungsi matematika atau `import datetime` untuk bekerja dengan tanggal dan waktu.        |
| **Cross-platform**        | Python dapat dijalankan di berbagai sistem operasi seperti Windows, macOS, dan Linux tanpa modifikasi besar.      | Program Python yang sama dapat dijalankan di Windows dan Linux tanpa perubahan.                                           |
| **Comprehensions**        | Python mendukung penggunaan list, set, dan dictionary comprehensions untuk membuat koleksi dengan lebih mudah.   | `squares = [x**2 for x in range(5)]` -> `[0, 1, 4, 9, 16]`                                                            |
| **Lambda Functions**      | Fungsi anonim yang dapat dibuat menggunakan kata kunci `lambda` untuk membuat fungsi kecil secara cepat.         | `f = lambda x: x + 2` -> Fungsi yang menambah 2 ke argumen.                                                              |
| **Decorators**            | Fungsi yang digunakan untuk mengubah fungsi atau metode lain tanpa mengubah kode aslinya.                        | `@staticmethod` untuk mendekorasi metode dalam kelas, atau membuat fungsi dekorator kustom.                               |
| **Generators**            | Python mendukung pembuatan generator, yang memungkinkan pembuatan iterator secara efisien.                       | `def countdown(n): while n > 0: yield n; n -= 1`                                                                        |
| **Context Managers**      | Python menggunakan `with` untuk mengelola sumber daya seperti file dengan cara yang lebih aman dan bersih.        | `with open('file.txt', 'r') as f: data = f.read()`                                                                      |
| **Exception Handling**    | Menyediakan mekanisme penanganan kesalahan dengan `try`, `except`, `finally`.                                   | `try: 1 / 0 except ZeroDivisionError: print("Tidak bisa membagi dengan nol")`                                             |
| **Unpacking**             | Mendukung teknik unpacking untuk mendekonstruksi objek dalam bentuk lebih sederhana.                             | `a, b = (1, 2)` atau `x, *y, z = (1, 2, 3, 4)`                                                                         |
| **Type Hinting**          | Python 3.5+ mendukung type hinting untuk memberikan petunjuk tipe variabel dan fungsi.                          | `def add(a: int, b: int) -> int:`                                                                                        |
| **Asyncio**               | Mendukung pemrograman asinkron dengan menggunakan `async` dan `await` untuk menangani operasi yang lama.         | `async def fetch_data(): await some_io_operation()`                                                                     |
| **Metaclasses**           | Python mendukung penggunaan metaclass untuk memodifikasi kelas saat dibuat.                                       | `class MyMeta(type): pass`                                                                                              |
| **Unit Testing**          | Python memiliki pustaka `unittest` untuk pengujian unit dan otomatisasi pengujian kode.                          | `import unittest; class TestMyClass(unittest.TestCase): def test_method(self): pass`                                     |
| **F-strings (Formatted String Literals)** | Memungkinkan format string dengan cara yang lebih mudah dan efisien menggunakan f-string.                    | `name = "Alice"; greeting = f"Hello, {name}!"`                                                                           |
| **Argument Unpacking**    | Memungkinkan untuk menyebarkan elemen dari list, tuple, atau dictionary menjadi argumen fungsi.                 | `def func(a, b, c): pass; args = [1, 2, 3]; func(*args)`                                                                 |

Tabel ini mencakup berbagai fitur utama Python yang membuat bahasa ini sangat fleksibel dan mudah digunakan dalam berbagai jenis pemrograman.

## Keywords Python
Berikut adalah tabel yang berisi beberapa **kata kunci (keywords)** dalam Python yang tidak boleh digunakan sembarangan, khususnya sebagai key dalam struktur data seperti dictionary (`in`).

| **Kata Kunci (Keyword)** | **Deskripsi**                                                                                      |
|--------------------------|----------------------------------------------------------------------------------------------------|
| `False`                  | Nilai boolean untuk false.                                                                        |
| `None`                   | Menunjukkan nilai kosong atau tidak ada.                                                           |
| `True`                   | Nilai boolean untuk true.                                                                          |
| `and`                    | Operator logika untuk "dan".                                                                        |
| `as`                     | Digunakan untuk memberikan alias pada module atau exception.                                      |
| `assert`                 | Digunakan untuk debugging, memastikan suatu kondisi benar.                                         |
| `async`                  | Menandakan bahwa fungsi adalah asynchronous.                                                      |
| `await`                  | Digunakan untuk menunggu hasil dari fungsi asynchronous.                                           |
| `break`                  | Digunakan untuk keluar dari loop atau switch.                                                      |
| `class`                  | Digunakan untuk mendefinisikan kelas (class) dalam OOP.                                            |
| `continue`               | Digunakan untuk melanjutkan iterasi berikutnya dalam loop.                                         |
| `def`                    | Digunakan untuk mendefinisikan fungsi.                                                             |
| `del`                    | Digunakan untuk menghapus objek atau elemen dalam struktur data.                                   |
| `elif`                   | Digunakan dalam percabangan (else-if).                                                             |
| `else`                   | Digunakan dalam percabangan untuk kondisi selain yang ditentukan.                                  |
| `except`                 | Digunakan untuk menangani exception atau error.                                                   |
| `finally`                | Digunakan untuk blok kode yang selalu dijalankan setelah blok `try-except`.                        |
| `for`                    | Digunakan untuk membuat loop.                                                                      |
| `from`                   | Digunakan untuk mengimpor bagian tertentu dari modul.                                              |
| `global`                 | Digunakan untuk mendeklarasikan variabel global.                                                  |
| `if`                     | Digunakan untuk memulai percabangan kondisi.                                                       |
| `import`                 | Digunakan untuk mengimpor modul.                                                                   |
| `in`                     | Digunakan untuk memeriksa keberadaan elemen dalam koleksi.                                         |
| `is`                     | Digunakan untuk memeriksa identitas objek, apakah dua objek sama secara identitas.                |
| `lambda`                 | Digunakan untuk membuat fungsi anonim (fungsi satu baris).                                         |
| `match`                  | Digunakan untuk pola pencocokan (pattern matching), diperkenalkan di Python 3.10.                 |
| `nonlocal`               | Digunakan untuk mengubah variabel yang berada di lingkup fungsi induk.                             |
| `not`                    | Operator logika untuk negasi (tidak).                                                              |
| `or`                     | Operator logika untuk "atau".                                                                       |
| `pass`                   | Digunakan untuk membuat blok kode yang tidak melakukan apa-apa.                                    |
| `raise`                  | Digunakan untuk memunculkan exception (error).                                                    |
| `return`                 | Digunakan untuk mengembalikan nilai dari fungsi.                                                  |
| `try`                    | Digunakan untuk menangkap error dengan block `except`.                                             |
| `while`                  | Digunakan untuk membuat loop dengan kondisi tertentu.                                              |
| `with`                   | Digunakan untuk mengelola sumber daya, seperti membuka file.                                       |
| `yield`                  | Digunakan untuk menghasilkan nilai dalam fungsi generator.                                         |

Kata-kata ini merupakan kata kunci yang sudah memiliki fungsi tertentu dalam Python, dan menggunakan kata kunci tersebut sebagai key dalam dictionary atau struktur data lainnya bisa menyebabkan kebingungannya atau bahkan menyebabkan error. Pastikan untuk menghindari menggunakan kata-kata ini sebagai nama variabel atau key dalam struktur data.