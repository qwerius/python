# Komputasi Numpy dengan Universal Functions 
## Pengenalan tentang ufuncs

NumPy adalah salah satu library yang sangat penting di dunia data science Python karena memungkinkan komputasi dengan array data secara lebih efisien. Salah satu cara untuk meningkatkan efisiensi komputasi ini adalah dengan menggunakan operasi vektorisasi, yang biasanya diimplementasikan melalui *universal functions* (ufuncs) dari NumPy. Dalam bab ini, dijelaskan mengenai kebutuhan akan ufuncs, yang memungkinkan perhitungan berulang pada elemen array menjadi jauh lebih efisien. Ufuncs dapat diartikan sebagai fungsi yang dioptimalkan untuk bekerja pada array data dengan kecepatan tinggi, yang merupakan alasan utama mengapa NumPy begitu populer.

#### Perlambatan karena Penggunaan Loop

Python, dalam implementasi default-nya yaitu CPython, melakukan beberapa operasi dengan sangat lambat, terutama jika dibandingkan dengan bahasa pemrograman lain seperti C atau Fortran. Hal ini disebabkan oleh sifat dinamis dan interpretasi bahasa Python, yang memungkinkan tipe data fleksibel tetapi menyebabkan setiap operasi dalam loop memerlukan pemeriksaan tipe dan pencarian fungsi yang sesuai. Misalnya, saat kita ingin menghitung resiprokal dari elemen-elemen array, kita mungkin melakukan hal tersebut dengan menggunakan loop seperti yang akan dijelaskan di bawah.

Contoh implementasi dengan loop di Python untuk menghitung resiprokal dari elemen array adalah sebagai berikut:

```python
import numpy as np
rng = np.random.default_rng(seed=1701)

def compute_reciprocals(values):
    output = np.empty(len(values))
    for i in range(len(values)):
        output[i] = 1.0 / values[i]
    return output

values = rng.integers(1, 10, size=5)
compute_reciprocals(values)
```

Walaupun ini terasa cukup alami bagi seseorang yang berpengalaman dengan bahasa seperti C atau Java, apabila kita mengukur waktu eksekusi untuk input besar, kita akan menyadari bahwa operasi ini cukup lambat. Sebagai contoh, saat menghitung resiprokal untuk satu juta elemen dalam array, prosesnya bisa memakan waktu beberapa detik. Hal ini menunjukkan bahwa masalah bukan terletak pada operasi matematika itu sendiri, tetapi pada pemeriksaan tipe data dan pencarian fungsi yang dilakukan Python pada setiap iterasi dalam loop.

## Mengenal Ufuncs

Ufuncs atau universal functions di NumPy adalah cara untuk melakukan operasi matematika secara vektorisasi, yaitu dengan mengeksekusi operasi di dalam kode yang telah dikompilasi, yang jauh lebih cepat daripada menggunakan loop biasa. Misalnya, untuk menghitung resiprokal menggunakan ufuncs, kita bisa langsung menggunakan operasi pembagian array dengan angka skalar, seperti berikut:

```python
print(1.0 / values)
```

Hasilnya akan sama dengan menggunakan loop sebelumnya, namun jauh lebih cepat. Begitu juga dengan array yang lebih besar, operasi vektorisasi menggunakan ufuncs bisa menghemat waktu eksekusi secara signifikan.

Ufuncs di NumPy memiliki fleksibilitas yang sangat tinggi. Misalnya, ufuncs dapat digunakan untuk operasi antara dua array, bukan hanya antara skalar dan array. Sebagai contoh, kita bisa menggunakan operasi pembagian antar array:

```python
np.arange(5) / np.arange(1, 6)
```

Selain itu, ufuncs tidak hanya terbatas pada array satu dimensi, tetapi juga bisa digunakan pada array multidimensi:

```python
x = np.arange(9).reshape((3, 3))
2 ** x
```

## Manfaat Menggunakan Ufuncs

Komputasi dengan menggunakan ufuncs hampir selalu lebih efisien daripada menggunakan loop Python tradisional, terutama saat bekerja dengan array yang besar. Oleh karena itu, jika kita melihat loop dalam skrip NumPy, kita harus mempertimbangkan untuk menggantinya dengan ekspresi vektorisasi yang menggunakan ufuncs.

## Jenis Ufuncs di NumPy

Ufuncs terbagi menjadi dua jenis:

- Unary ufuncs: Beroperasi pada satu input, seperti negasi atau eksponensiasi.
- Binary ufuncs: Beroperasi pada dua input, seperti operasi penjumlahan atau pembagian.

NumPy mendukung operasi aritmatika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian menggunakan ufuncs. Setiap operator Python seperti ` +, -, *, / `berfungsi sebagai pembungkus untuk ufunc yang ada dalam NumPy, seperti np.add, np.subtract, dan lain-lain.

## Operasi Aritmatika Array

NumPy menyediakan berbagai operasi aritmatika yang sangat mudah digunakan, seperti penjumlahan, pengurangan, perkalian, dan pembagian. Semua operator ini bekerja langsung dengan array NumPy:

```python
x = np.arange(4)
print("x      =", x)
print("x + 5  =", x + 5)
print("x - 5  =", x - 5)
print("x * 2  =", x * 2)
print("x / 2  =", x / 2)
print("x // 2 =", x // 2)  # floor division
```

Selain itu, ada juga ufunc untuk negasi, eksponensiasi (`**`), dan modulus (`%`):

```python
print("-x     = ", -x)
print("x ** 2 = ", x ** 2)
print("x % 2  = ", x % 2)
```

Semua operasi ini adalah pembungkus yang sangat nyaman di sekitar ufuncs spesifik yang ada di NumPy. Sebagai contoh, operator `+` adalah pembungkus untuk ufunc `np.add`, yang mengimplementasikan penjumlahan. Anda bisa menggunakan fungsi `np.add` secara langsung seperti ini:

```python
np.add(x, 2)
```

Berikut adalah tabel operator aritmatika yang diimplementasikan dalam NumPy:

| Operator   | Ufunc Setara  | Deskripsi                                 |
|------------|---------------|-------------------------------------------|
| `+`        | `np.add`      | Penjumlahan (misalnya, `1 + 1 = 2`)        |
| `-`        | `np.subtract` | Pengurangan (misalnya, `3 - 2 = 1`)        |
| `-`        | `np.negative` | Negasi unary (misalnya, `-2`)              |
| `*`        | `np.multiply` | Perkalian (misalnya, `2 * 3 = 6`)          |
| `/`        | `np.divide`   | Pembagian (misalnya, `3 / 2 = 1.5`)        |
| `//`       | `np.floor_divide` | Pembagian lantai (misalnya, `3 // 2 = 1`) |
| `**`       | `np.power`    | Eksponensiasi (misalnya, `2 ** 3 = 8`)      |
| `%`        | `np.mod`      | Modulus/sisa (misalnya, `9 % 4 = 1`)       |

Selain itu, ada juga operator boolean/bitwise yang akan dibahas lebih lanjut terkait perbandingan, masker, dan logika boolean di NumPy.

