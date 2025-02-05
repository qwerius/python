
# Numpy Arrays
😊😊😊
## Dasar-Dasar NumPy Arrays

Manipulasi data dalam Python hampir identik dengan manipulasi array NumPy. Bahkan, Pandas dibangun di atas array NumPy. 

Beberapa kategori manipulasi dasar array yang akan kita bahas di sini adalah:

- **Atribut dari array**: Menentukan ukuran, bentuk, konsumsi memori, dan tipe data dari array.
- **Indeks array**: Mengambil dan menetapkan nilai elemen individual dalam array.
- **Slicing array**: Mengambil dan menetapkan subarray yang lebih kecil dalam sebuah array besar.
- **Mengubah bentuk array**: Mengubah struktur bentuk dari sebuah array.
- **Menggabungkan dan memisahkan array**: Menggabungkan beberapa array menjadi satu atau memisahkan sebuah array menjadi beberapa bagian.


## Atribut Array NumPy

Pertama, mari kita bahas beberapa atribut penting dari array. Kita akan mulai dengan mendefinisikan array acak satu dimensi, dua dimensi, dan tiga dimensi. Untuk ini, kita akan menggunakan generator angka acak dari NumPy, yang *di-seed* dengan nilai tetap untuk memastikan hasil acak yang konsisten setiap kali kode dijalankan.

```python
import numpy as np
rng = np.random.default_rng(seed=1701)  # Seed untuk reproduksi hasil

x1 = rng.integers(10, size=6)  # Array satu dimensi
x2 = rng.integers(10, size=(3, 4))  # Array dua dimensi
x3 = rng.integers(10, size=(3, 4, 5))  # Array tiga dimensi
```

Setiap array memiliki atribut seperti berikut:

- `ndim`: Menyatakan jumlah dimensi.
- `shape`: Menyatakan ukuran setiap dimensi.
- `size`: Menyatakan total jumlah elemen dalam array.
- `dtype`: Menyatakan tipe data dari elemen array.

Berikut adalah contohnya:

```python
print("x3 ndim: ", x3.ndim)
print("x3 shape:", x3.shape)
print("x3 size: ", x3.size)
print("dtype:   ", x3.dtype)
```

Hasil output:

```
x3 ndim:  3
x3 shape: (3, 4, 5)
x3 size:  60
dtype:    int64
```



## Indeks Array: Mengakses Elemen Tunggal

Jika Anda sudah akrab dengan indeks daftar (list) standar Python, maka indeks pada NumPy akan terasa serupa. Dalam array satu dimensi, nilai pada indeks ke-𝑖 (mulai dari 0) dapat diakses dengan menyebutkan indeks yang diinginkan dalam tanda kurung siku, sama seperti daftar Python:

```python
x1
```

Output:

```
array([9, 4, 0, 3, 8, 6])
```

Mengakses elemen berdasarkan indeks:

```python
x1[0]  # Elemen pertama
```

Output:

```
9
```

```python
x1[4]  # Elemen kelima
```

Output:

```
8
```

Untuk mengakses elemen dari akhir array, Anda bisa menggunakan indeks negatif:

```python
x1[-1]  # Elemen terakhir
```

Output:

```
6
```

```python
x1[-2]  # Elemen kedua dari belakang
```

Output:

```
8
```



#### **Indeks Array pada Array Multidimensi**

Pada array multidimensi, elemen dapat diakses menggunakan pasangan indeks yang dipisahkan oleh koma:

```python
x2
```

Output:

```
array([[3, 8, 3, 9],
       [4, 6, 5, 3],
       [2, 8, 2, 0]])
```

Mengakses elemen tertentu:

```python
x2[0, 0]  # Elemen di baris pertama, kolom pertama
```

Output:

```
3
```

```python
x2[2, 3]  # Elemen di baris ketiga, kolom keempat
```

Output:

```
0
```

Indeks negatif juga dapat digunakan untuk multidimensi:

```python
x2[0, -1]  # Elemen di baris pertama, kolom terakhir
```

Output:

```
9
```

**Modifikasi elemen array** juga dimungkinkan menggunakan notasi yang sama:

```python
x2[0, 0] = 12
print(x2)
```

Output:

```
array([[12,  8,  3,  9],
       [ 4,  6,  5,  3],
       [ 2,  8,  2,  0]])
```

Penting untuk dicatat bahwa array NumPy memiliki tipe data tetap. Jika Anda mencoba menetapkan nilai float ke array integer, nilai float akan dipotong (truncated) menjadi integer:

```python
x2[0, 0] = 3.14159  # Nilai float
print(x2)
```

Output:

```
array([[ 3,  8,  3,  9],
       [ 4,  6,  5,  3],
       [ 2,  8,  2,  0]])
```

---

#### **Slicing Array: Mengakses Subarray**

Indeks array satu dimensi dapat diperluas menggunakan slicing, yaitu menggunakan tanda `:`. Bentuk dasar dari slicing adalah:

```python
x[start:stop:step]
```

- **`start`** adalah indeks awal dari slicing (inklusif).
- **`stop`** adalah indeks akhir dari slicing (eksklusif).
- **`step`** adalah langkah slicing (opsional, default adalah 1).

Jika salah satu parameter dihilangkan, nilai default akan digunakan:

- `start`: Default adalah awal array.
- `stop`: Default adalah akhir array.
- `step`: Default adalah 1.

Sebagai contoh:

```python
x = np.arange(10)  # Membuat array dari 0 hingga 9
x
```

Output:

```
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
x[:5]  # Lima elemen pertama
```

Output:

```
array([0, 1, 2, 3, 4])
```

```python
x[5:]  # Elemen dari indeks kelima hingga akhir
```

Output:

```
array([5, 6, 7, 8, 9])
```

```python
x[::2]  # Setiap elemen kedua
```

Output:

```
array([0, 2, 4, 6, 8])
```

```python
x[1::2]  # Setiap elemen kedua, dimulai dari indeks pertama
```

Output:

```
array([1, 3, 5, 7, 9])
```

Indeks negatif dapat digunakan untuk membuat slicing yang lebih fleksibel:

```python
x[::-1]  # Array terbalik
```

Output:

```
array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
```

```python
x[5::-2]  # Slicing terbalik dengan langkah 2, dimulai dari indeks kelima
```

Output:

```
array([5, 3, 1])
```

---

**Slicing pada Array Multidimensi**

Slicing juga dapat digunakan untuk array multidimensi. Notasi slicing diperluas dengan cara menambahkan tanda koma untuk setiap dimensi:

```python
x2
```

Output:

```
array([[12,  8,  3,  9],
       [ 4,  6,  5,  3],
       [ 2,  8,  2,  0]])
```

```python
x2[:2, :3]  # Dua baris pertama, tiga kolom pertama
```

Output:

```
array([[12,  8,  3],
       [ 4,  6,  5]])
```

```python
x2[:, ::2]  # Semua baris, setiap kolom kedua
```

Output:

```
array([[12,  3],
       [ 4,  5],
       [ 2,  2]])
```


Oke, kita lanjutkan ke **Mengubah Bentuk Array** dan topik berikutnya:



## **Mengubah Bentuk Array**

Salah satu fitur penting dari NumPy adalah kemampuannya untuk mengubah bentuk array tanpa mengubah datanya. Operasi ini sering digunakan untuk mempersiapkan data sebelum melakukan perhitungan lebih lanjut.

#### **Metode `reshape`**
Metode `reshape` memungkinkan Anda untuk menentukan dimensi baru dari array:

```python
grid = np.arange(1, 10).reshape((3, 3))
print(grid)
```

Output:

```
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
```

Di sini, array 1 dimensi dengan 9 elemen (`np.arange(1, 10)`) diubah menjadi array 2 dimensi berukuran (3, 3).

> **Catatan:** Jumlah elemen dalam dimensi baru harus sama dengan jumlah elemen dalam array asli.

---

#### **Menambahkan Dimensi Baru dengan `np.newaxis`**
Kadang, Anda perlu menambahkan dimensi baru untuk membuat array lebih fleksibel. Dimensi baru dapat ditambahkan menggunakan `np.newaxis`.

Misalnya:

```python
x = np.array([1, 2, 3])
print(x.shape)  # Bentuk asli (3,)
```

Output:

```
(3,)
```

Menambahkan dimensi baru:

```python
x_new = x[:, np.newaxis]
print(x_new.shape)  # Bentuk baru (3, 1)
```

Output:

```
(3, 1)
```

---

#### **Meratakan Array dengan `ravel` atau `flatten`**
Jika Anda ingin mengembalikan array multidimensi menjadi 1 dimensi, Anda dapat menggunakan metode `ravel` atau `flatten`.

Contoh:

```python
grid = np.array([[1, 2, 3], [4, 5, 6]])
print(grid)
```

Output:

```
array([[1, 2, 3],
       [4, 5, 6]])
```

Meratakan array:

```python
flat = grid.ravel()
print(flat)
```

Output:

```
array([1, 2, 3, 4, 5, 6])
```


## **Menggabungkan dan Memisahkan Array**

#### **Menggabungkan Array**
NumPy menyediakan beberapa fungsi untuk menggabungkan array, seperti `np.concatenate`, `np.vstack`, dan `np.hstack`.

1. **Menggabungkan Sepanjang Sumbu**
   Anda dapat menggabungkan dua atau lebih array menggunakan `np.concatenate`.

   ```python
   x = np.array([1, 2, 3])
   y = np.array([4, 5, 6])
   z = np.concatenate([x, y])
   print(z)
   ```

   Output:

   ```
   array([1, 2, 3, 4, 5, 6])
   ```

   Untuk array 2D:

   ```python
   grid = np.array([[1, 2, 3], [4, 5, 6]])
   z = np.concatenate([grid, grid])
   print(z)
   ```

   Output:

   ```
   array([[1, 2, 3],
          [4, 5, 6],
          [1, 2, 3],
          [4, 5, 6]])
   ```

2. **Menggabungkan Secara Vertikal atau Horizontal**
   - Gunakan `np.vstack` untuk penggabungan vertikal (menambah baris).
   - Gunakan `np.hstack` untuk penggabungan horizontal (menambah kolom).

   Contoh penggabungan vertikal:

   ```python
   x = np.array([1, 2, 3])
   grid = np.array([[9, 8, 7], [6, 5, 4]])
   z = np.vstack([x, grid])
   print(z)
   ```

   Output:

   ```
   array([[1, 2, 3],
          [9, 8, 7],
          [6, 5, 4]])
   ```

---

#### **Memisahkan Array**
Array dapat dipisahkan menggunakan fungsi seperti `np.split`, `np.hsplit`, atau `np.vsplit`.

1. **Memisahkan Sepanjang Sumbu**
   Gunakan `np.split` untuk memisahkan array menjadi beberapa subarray.

   ```python
   x = np.arange(10)
   x1, x2, x3 = np.split(x, [3, 7])  # Memisahkan di indeks 3 dan 7
   print(x1, x2, x3)
   ```

   Output:

   ```
   array([0, 1, 2]) array([3, 4, 5, 6]) array([7, 8, 9])
   ```

2. **Memisahkan Secara Vertikal atau Horizontal**
   - Gunakan `np.vsplit` untuk memisahkan secara vertikal.
   - Gunakan `np.hsplit` untuk memisahkan secara horizontal.

   Contoh pemisahan horizontal:

   ```python
   grid = np.arange(16).reshape((4, 4))
   left, right = np.hsplit(grid, [2])
   print(left)
   print(right)
   ```

   Output:

   ```
   array([[ 0,  1],
          [ 4,  5],
          [ 8,  9],
          [12, 13]])
   array([[ 2,  3],
          [ 6,  7],
          [10, 11],
          [14, 15]])
   ```




## **Universal Functions (ufunc)**

Universal Functions (ufunc) adalah fungsi yang diterapkan elemen-per-elemen pada array NumPy. Fungsi ini sangat cepat karena dioptimalkan menggunakan operasi vektor (vectorized operations).

#### **Operasi Aritmatika Dasar**
Operasi seperti penjumlahan, pengurangan, perkalian, dan pembagian dapat dilakukan langsung pada array tanpa perlu iterasi:

```python
x = np.array([1, 2, 3, 4, 5])
print(x + 5)  # Penambahan skalar
print(x * 2)  # Perkalian skalar
print(x ** 2) # Pangkat
```

Output:

```
[ 6  7  8  9 10]
[ 2  4  6  8 10]
[ 1  4  9 16 25]
```

Operasi antar array juga didukung:

```python
y = np.array([5, 4, 3, 2, 1])
print(x + y)
print(x * y)
```

Output:

```
[6 6 6 6 6]
[ 5  8  9  8  5]
```

---

#### **Fungsi Matematika Lanjutan**
NumPy menyediakan berbagai fungsi matematika yang dioptimalkan:

1. Fungsi eksponensial dan logaritma:
   ```python
   x = np.array([1, 2, 3])
   print(np.exp(x))    # Eksponensial
   print(np.log(x))    # Logaritma natural
   print(np.log10(x))  # Logaritma basis 10
   ```

   Output:
   ```
   [ 2.71828183  7.3890561  20.08553692]
   [0.         0.69314718 1.09861229]
   [0.         0.30103    0.47712125]
   ```

2. Fungsi trigonometri:
   ```python
   theta = np.linspace(0, np.pi, 3)
   print(np.sin(theta))  # Sinus
   print(np.cos(theta))  # Kosinus
   print(np.tan(theta))  # Tangen
   ```

   Output:
   ```
   [0.000000e+00 1.000000e+00 1.224647e-16]
   [ 1.000000e+00  6.123234e-17 -1.000000e+00]
   [ 0.000000e+00  1.633124e+16 -1.633124e+16]
   ```

3. Operasi lain seperti akar kuadrat:
   ```python
   x = np.array([4, 9, 16])
   print(np.sqrt(x))  # Akar kuadrat
   ```

   Output:
   ```
   [2. 3. 4.]
   ```


## **Agregasi Data**

Agregasi data digunakan untuk merangkum atau menganalisis nilai dalam array, seperti menjumlahkan elemen, mencari rata-rata, atau menghitung nilai maksimum.

#### **Fungsi Agregasi Sederhana**
Fungsi agregasi umum:

- `np.sum` (menjumlahkan elemen)
- `np.mean` (menghitung rata-rata)
- `np.max` (mencari nilai maksimum)
- `np.min` (mencari nilai minimum)
- `np.prod` (mengalikan semua elemen)

Contoh:

```python
x = np.array([1, 2, 3, 4, 5])
print(np.sum(x))  # Jumlah
print(np.mean(x)) # Rata-rata
print(np.max(x))  # Maksimum
print(np.min(x))  # Minimum
```

Output:

```
15
3.0
5
1
```

---

#### **Agregasi pada Array Multidimensi**
Agregasi juga dapat diterapkan pada sumbu tertentu dalam array 2D atau lebih.

Contoh:

```python
grid = np.array([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]])
print(np.sum(grid))          # Semua elemen
print(np.sum(grid, axis=0))  # Sumbu 0 (kolom)
print(np.sum(grid, axis=1))  # Sumbu 1 (baris)
```

Output:

```
45
[12 15 18]
[ 6 15 24]
```



## **Perbandingan dan Boolean**
NumPy juga memungkinkan operasi berbasis boolean seperti perbandingan:

```python
x = np.array([1, 2, 3, 4, 5])
print(x > 3)      # Elemen lebih besar dari 3
print(np.any(x > 3))  # Apakah ada elemen > 3?
print(np.all(x > 3))  # Apakah semua elemen > 3?
```

Output:

```
[False False False  True  True]
True
False
```


## **Broadcasting**

Broadcasting adalah fitur NumPy yang memungkinkan operasi antara array dengan bentuk (shape) berbeda. Dengan broadcasting, NumPy secara otomatis memperluas array lebih kecil agar cocok dengan array yang lebih besar tanpa perlu menyalin data.

#### **Aturan Broadcasting**
1. Jika kedua array memiliki dimensi berbeda, NumPy akan menambahkan dimensi 1 ke array dengan dimensi lebih kecil di bagian depan.
2. Jika ukuran dimensi tidak sama, tetapi salah satu dari dimensinya adalah 1, NumPy akan memperluas dimensi tersebut agar cocok dengan dimensi lainnya.
3. Jika kedua dimensi tidak cocok dan tidak ada dimensi 1, maka terjadi **ValueError**.

#### **Contoh Broadcasting**
1. **Penambahan antara skalar dan array:**
   ```python
   x = np.array([1, 2, 3])
   print(x + 5)
   ```
   Output:
   ```
   [6 7 8]
   ```

2. **Operasi antara array 1D dan 2D:**
   ```python
   x = np.array([1, 2, 3])
   y = np.array([[10], [20], [30]])
   print(x + y)
   ```
   Output:
   ```
   [[11 12 13]
    [21 22 23]
    [31 32 33]]
   ```

3. **Array dengan dimensi berbeda:**
   ```python
   a = np.array([1, 2, 3])
   b = np.array([[1], [2], [3]])
   print(a * b)
   ```
   Output:
   ```
   [[1 2 3]
    [2 4 6]
    [3 6 9]]
   ```


## **Manipulasi Data Boolean**

NumPy mendukung operasi berbasis boolean untuk memfilter, mencari, atau memodifikasi data dalam array.

#### **Masking (Penyaringan Data)**
Masking menggunakan ekspresi boolean untuk menyeleksi elemen tertentu dalam array.

Contoh:

```python
x = np.array([1, 2, 3, 4, 5, 6])
mask = x > 3
print(mask)         # Masking
print(x[mask])      # Elemen > 3
```

Output:

```
[False False False  True  True  True]
[4 5 6]
```

#### **Operasi Logika Boolean**
Anda dapat menggunakan operator logika seperti `&` (and), `|` (or), dan `~` (not).

Contoh:

```python
x = np.array([1, 2, 3, 4, 5, 6])
mask = (x > 2) & (x < 5)
print(x[mask])  # Elemen antara 2 dan 5
```

Output:

```
[3 4]
```

#### **Mengganti Nilai dengan Masking**
Masking dapat digunakan untuk mengganti nilai tertentu dalam array.

Contoh:

```python
x = np.array([1, 2, 3, 4, 5])
x[x > 3] = 0
print(x)
```

Output:

```
[1 2 3 0 0]
```



## **Indexing Lanjutan**

Indexing lanjutan memungkinkan Anda memilih elemen dengan cara lebih fleksibel dibandingkan slicing biasa.

#### **Indexing dengan Array**
Anda dapat memberikan array lain sebagai indeks.

Contoh:

```python
x = np.array([10, 20, 30, 40, 50])
indices = [0, 2, 4]
print(x[indices])
```

Output:

```
[10 30 50]
```

#### **Indexing dengan Kondisi Boolean**
Contoh:

```python
x = np.array([1, 2, 3, 4, 5])
print(x[x > 3])  # Elemen lebih besar dari 3
```

Output:

```
[4 5]
```

#### **Indexing Multidimensi**
Indexing lanjutan juga bisa digunakan pada array multidimensi.

Contoh:

```python
x = np.array([[1, 2], [3, 4], [5, 6]])
rows = [0, 1, 2]
cols = [1, 0, 1]
print(x[rows, cols])
```

Output:

```
[2 3 6]
```



## **Perbandingan Performa dengan Python List**

NumPy lebih cepat dibandingkan Python list karena menggunakan array terstruktur (C-level) dan mendukung operasi tervektorisasi.

#### **1. Perbandingan Kecepatan**
Contoh penjumlahan elemen pada array besar:
```python
import numpy as np
import time

# Dengan Python List
list_data = list(range(1, 10**6))
start = time.time()
result = [x * 2 for x in list_data]
end = time.time()
print(f"Python List: {end - start:.5f} detik")

# Dengan NumPy
np_data = np.arange(1, 10**6)
start = time.time()
result = np_data * 2
end = time.time()
print(f"NumPy: {end - start:.5f} detik")
```

Hasilnya:
```
Python List: 0.05012 detik
NumPy: 0.00123 detik
```

#### **2. Penggunaan Memori**
NumPy menggunakan lebih sedikit memori dibandingkan Python list karena tipe datanya seragam.

Contoh:
```python
import sys

list_data = list(range(1, 1000))
np_data = np.arange(1, 1000)

print(f"Memori Python List: {sys.getsizeof(list_data)} bytes")
print(f"Memori NumPy Array: {np_data.nbytes} bytes")
```

Output:
```
Memori Python List: 8056 bytes
Memori NumPy Array: 4000 bytes
```

---

