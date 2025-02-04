

# Memahami Tipe Data dalam Python
<p class="p-2 bg-gray-100 inline-flex  rounded-lg ">
Secara lengkap tipe data python ada di <span class="pl-2">  <a href="/dasar_python/index">Tipe data Python</a></span>
</p>

Untuk melakukan analisis berbasis data dan komputasi secara efektif, kita perlu memahami cara data disimpan dan dimanipulasi. Bagian ini menjelaskan perbedaan bagaimana array data ditangani dalam bahasa Python secara langsung, dan bagaimana NumPy meningkatkan kinerja di atasnya. Pemahaman ini sangat mendasar untuk memahami materi lainnya.

Python dikenal sebagai bahasa pemrograman yang mudah digunakan, salah satunya karena memiliki **dynamic typing**. Dalam bahasa seperti C atau Java (yang menggunakan **statically typed language**), setiap variabel harus dideklarasikan dengan tipe tertentu. Sebaliknya, Python tidak memerlukan deklarasi tipe eksplisit. Sebagai contoh:

### Deklarasi di C:
```c
/* Kode dalam C */
int result = 0;
for(int i = 0; i < 100; i++) {
    result += i;
}
```

### Deklarasi di Python:
```python
# Kode dalam Python
result = 0
for i in range(100):
    result += i
```

Perbedaan utama terlihat: di C, tipe data setiap variabel dideklarasikan eksplisit, sementara Python secara otomatis menginferensikan tipe variabel. Sebagai contoh, dalam Python kita dapat mengubah tipe data variabel kapan saja:

```python
x = 4        # Awalnya tipe integer
x = "four"   # Berubah menjadi string
```

Namun, jika hal serupa dilakukan dalam C, itu akan menyebabkan error atau konsekuensi lain yang tidak diinginkan:

```c
/* Kode dalam C */
int x = 4;
x = "four"; // ERROR
```

Fleksibilitas ini menjadi salah satu alasan Python sangat mudah digunakan. Namun, fleksibilitas ini juga membawa konsekuensi: setiap variabel Python tidak hanya menyimpan nilainya tetapi juga informasi tambahan tentang tipe data. Memahami bagaimana ini bekerja sangat penting untuk analisis data yang efisien.



## Integer dalam Python: Lebih dari Sekadar Integer

Python ditulis menggunakan C. Oleh karena itu, setiap objek Python sebenarnya adalah struktur C yang menyimpan lebih banyak informasi daripada sekadar nilai. Sebagai contoh, jika kita mendefinisikan integer di Python:

```python
x = 10000
```

Variabel `x` tidak hanya menyimpan angka 10.000, tetapi juga mengarah ke struktur C yang lebih kompleks. Dalam kode sumber Python 3.10, integer didefinisikan seperti ini:

```c
struct _longobject {
    long ob_refcnt;
    PyTypeObject *ob_type;
    size_t ob_size;
    long ob_digit[1];
};
```

Struktur ini memiliki empat elemen:
1. **`ob_refcnt`**: Menyimpan jumlah referensi untuk manajemen memori.
2. **`ob_type`**: Menyimpan tipe variabel.
3. **`ob_size`**: Menentukan ukuran elemen data berikutnya.
4. **`ob_digit`**: Menyimpan nilai integer sebenarnya.

Struktur ini menyebabkan Python membutuhkan memori lebih banyak dibandingkan integer mentah di C, seperti yang digambarkan:


Di C, integer hanya menyimpan nilai mentahnya. Sebaliknya, integer Python adalah pointer ke memori yang mencakup informasi tambahan. Informasi ekstra ini memungkinkan Python untuk dinamis, tetapi membawa overhead pada penggunaan memori.



## List di Python

List adalah salah satu struktur data dinamis yang paling umum digunakan di Python. Misalnya, kita dapat membuat list integer:

```python
L = list(range(10))
print(L)  # Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Setiap elemen dalam list ini adalah objek Python lengkap, sehingga menyimpan tipe dan referensinya sendiri. Kita juga dapat membuat list string:

```python
L2 = [str(c) for c in L]
print(L2)  # Output: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
```

Python bahkan memungkinkan kita membuat list heterogen yang menyimpan tipe data campuran:

```python
L3 = [True, "2", 3.0, 4]
print([type(item) for item in L3])  # Output: [bool, str, float, int]
```

Namun, fleksibilitas ini memiliki konsekuensi: setiap elemen list harus menyimpan informasi tipe, referensi, dan data lainnya. Sebaliknya, array tipe tetap (seperti di NumPy) jauh lebih efisien. Perbedaannya dapat dilihat di sini:


Array NumPy hanya menyimpan satu pointer ke blok memori kontigu, sementara list Python menyimpan pointer ke objek-objek Python individual. Oleh karena itu, array NumPy lebih efisien untuk data dengan tipe tetap.


## Array Tipe Tetap di Python

Python menyediakan beberapa opsi untuk menyimpan data dalam buffer tipe tetap. Salah satunya adalah modul `array`, yang memungkinkan kita membuat array dengan tipe seragam:

```python
import array
L = list(range(10))
A = array.array('i', L)
print(A)  # Output: array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

Di sini, `'i'` menunjukkan bahwa elemen array adalah integer. Namun, modul `array` memiliki kemampuan terbatas dibandingkan dengan **NumPy**, yang menawarkan array dengan tipe tetap dan operasi matematis yang lebih cepat.



## Membuat Array dengan NumPy

NumPy memungkinkan kita membuat array dari list Python:

```python
import numpy as np
arr = np.array([1, 4, 2, 5, 3])
print(arr)  # Output: [1 4 2 5 3]
```

Berbeda dengan list Python, array NumPy hanya dapat menyimpan elemen dengan tipe yang sama. Jika tipe tidak cocok, NumPy akan melakukan **upcasting**. Misalnya:

```python
arr = np.array([3.14, 4, 2, 3])
print(arr)  # Output: [3.14 4.   2.   3.  ]
```

Kita juga dapat menentukan tipe data eksplisit dengan parameter `dtype`:

```python
arr = np.array([1, 2, 3], dtype='float32')
print(arr)  # Output: [1. 2. 3.]
```



Dengan memahami bagaimana Python menyimpan data dan membandingkannya dengan array NumPy, kita dapat memilih struktur data yang tepat untuk kebutuhan komputasi kita. Memanfaatkan array NumPy dapat meningkatkan efisiensi dan performa program kita secara signifikan.

## Fixed-Type Arrays in Python

Python menawarkan beberapa opsi untuk menyimpan data dalam buffer dengan tipe tetap yang efisien. Modul bawaan `array` (tersedia sejak Python 3.3) dapat digunakan untuk membuat array padat dengan tipe yang seragam:

```python
import array
L = list(range(10))
A = array.array('i', L)
A
```

Output:
```
array('i', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

Di sini, `'i'` adalah kode tipe yang menunjukkan bahwa isinya berupa bilangan bulat.

Namun, yang lebih berguna adalah objek `ndarray` dari pustaka NumPy. Objek `array` Python menyediakan penyimpanan data berbasis array yang efisien, tetapi NumPy menambahkan *operasi* yang efisien pada data tersebut. Operasi ini akan dibahas lebih lanjut di bab berikutnya. Berikut ini beberapa cara untuk membuat array NumPy.



## Membuat Array dari Daftar Python

Langkah pertama adalah mengimpor NumPy dengan alias `np`:

```python
import numpy as np
```

Kemudian, gunakan `np.array` untuk membuat array dari daftar Python:

```python
# Array bilangan bulat
np.array([1, 4, 2, 5, 3])
```

Output:
```
array([1, 4, 2, 5, 3])
```

Perlu diingat bahwa tidak seperti daftar Python, array NumPy hanya dapat berisi data dengan tipe yang sama. Jika tipe tidak cocok, NumPy akan melakukan *upcasting* sesuai aturan promosi tipe:

```python
np.array([3.14, 4, 2, 3])
```

Output:
```
array([3.14, 4.  , 2.  , 3.  ])
```

Untuk menentukan tipe data secara eksplisit, gunakan kata kunci `dtype`:

```python
np.array([1, 2, 3, 4], dtype=np.float32)
```

Output:
```
array([1., 2., 3., 4.], dtype=float32)
```

Array NumPy juga dapat bersifat multidimensi:

```python
# Daftar bersarang menghasilkan array multidimensi
np.array([range(i, i + 3) for i in [2, 4, 6]])
```

Output:
```
array([[2, 3, 4],
       [4, 5, 6],
       [6, 7, 8]])
```


## Membuat Array dari Awal

Untuk array yang lebih besar, lebih efisien menggunakan fungsi bawaan NumPy. Berikut beberapa contohnya:

| Fungsi                                    | Deskripsi                                                   |
|------------------------------------------|-------------------------------------------------------------|
| `np.zeros(10, dtype=int)`                | Membuat array sepanjang 10 dengan nilai 0.                  |
| `np.ones((3, 5), dtype=float)`           | Membuat array 3x5 dengan nilai 1.                           |
| `np.full((3, 5), 3.14)`                  | Membuat array 3x5 dengan nilai 3.14.                        |
| `np.arange(0, 20, 2)`                    | Membuat array dengan urutan linear mulai dari 0 hingga 20.   |
| `np.linspace(0, 1, 5)`                   | Membuat 5 nilai yang terdistribusi merata antara 0 dan 1.    |
| `np.random.random((3, 3))`               | Array 3x3 dengan nilai acak antara 0 dan 1.                 |
| `np.random.normal(0, 1, (3, 3))`         | Array 3x3 dengan distribusi normal (mean=0, std=1).          |
| `np.random.randint(0, 10, (3, 3))`       | Array 3x3 dengan bilangan bulat acak antara 0 dan 10.        |
| `np.eye(3)`                              | Membuat matriks identitas 3x3.                              |
| `np.empty(3)`                            | Membuat array tanpa inisialisasi nilai.                     |

Contoh:

```python
np.zeros(10, dtype=int)
```

Output:
```
array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```



## Tipe Data Standar NumPy

Array NumPy mengandung nilai dengan satu tipe data. Tipe data NumPy mirip dengan tipe di C atau Fortran. Berikut beberapa tipe data standar:

| Tipe Data   | Deskripsi                                 |
|-------------|-------------------------------------------|
| `bool_`     | Boolean (True atau False).                |
| `int_`      | Bilangan bulat default (biasanya int32).  |
| `int8`      | Bilangan bulat 8-bit (-128 hingga 127).   |
| `int16`     | Bilangan bulat 16-bit (-32.768 hingga 32.767). |
| `int32`     | Bilangan bulat 32-bit.                    |
| `float_`    | Bilangan desimal default (float64).       |
| `float32`   | Bilangan desimal 32-bit.                  |
| `complex_`  | Bilangan kompleks (64 bit real + imaginer). |

Anda dapat menentukan tipe data saat membuat array:

```python
np.zeros(10, dtype='int16')
```

Atau dengan objek tipe NumPy:

```python
np.zeros(10, dtype=np.int16)
```

