# Numpy Untuk Komputasi Data


## Pengantar 

**NumPy** (Numerical Python) adalah sebuah pustaka open-source di Python yang dirancang untuk komputasi ilmiah dan numerik. NumPy menyediakan struktur data utama yang disebut **ndarray** (n-dimensional array), yang memungkinkan operasi matematis dengan cepat pada array besar dan multidimensional.

Fitur utama dari NumPy meliputi:

1. **Operasi Array Multidimensi**  
   NumPy memungkinkan Anda membuat, memanipulasi, dan menghitung data dalam bentuk array 1D, 2D, atau bahkan n-dimensi.

2. **Performa Tinggi**  
   Operasi pada array NumPy jauh lebih cepat dibandingkan dengan struktur data Python standar seperti list, karena diimplementasikan menggunakan C.

3. **Fungsi Matematis dan Statistik**  
   NumPy menyediakan berbagai fungsi matematika untuk memudahkan operasi seperti penjumlahan, perkalian matriks, sin, cos, statistik, dan lainnya.

4. **Integrasi dengan Perpustakaan Lain**  
   NumPy adalah dasar untuk banyak pustaka ilmiah Python lainnya, seperti Pandas, SciPy, dan Scikit-learn.


## Fungsi NumPy

Berikut adalah beberapa kategori utama fungsi yang disediakan oleh NumPy:

| **Kategori Fungsi**      | **Deskripsi**                                                                                                                                         | **Contoh Fungsi**                                         |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| **Pembuatan Array**       | Membuat array dari data, range angka, atau bentuk tertentu                                                                                         | `np.array()`, `np.arange()`, `np.linspace()`, `np.zeros()` |
| **Matematika**            | Operasi matematika dasar dan lanjutan                                                                                                              | `np.add()`, `np.subtract()`, `np.multiply()`, `np.exp()`  |
| **Fungsi Trigonometri**   | Fungsi untuk menghitung nilai trigonometri                                                                                                         | `np.sin()`, `np.cos()`, `np.tan()`                        |
| **Operasi Statistik**     | Melakukan perhitungan statistik seperti mean, median, variansi, dll.                                                                               | `np.mean()`, `np.median()`, `np.std()`, `np.var()`        |
| **Indexing & Slicing**    | Memilih data dari array berdasarkan indeks atau bagian tertentu                                                                                   | Menggunakan slicing (`array[start:stop:step]`)            |
| **Transformasi Array**    | Mengubah bentuk, menggabungkan, atau membagi array                                                                                                | `np.reshape()`, `np.hstack()`, `np.vstack()`, `np.split()`|
| **Aljabar Linear**        | Operasi matriks seperti perkalian matriks, invers, atau dekomposisi                                                                               | `np.dot()`, `np.linalg.inv()`, `np.linalg.eig()`          |
| **Pembuatan Acak**        | Membuat array dengan nilai acak                                                                                                                   | `np.random.rand()`, `np.random.randint()`, `np.random.normal()` |
| **Logika dan Perbandingan**| Memeriksa kondisi pada array atau elemen-elemen array                                                                                            | `np.where()`, `np.logical_and()`, `np.logical_or()`       |



### Contoh Sederhana dengan NumPy
Berikut adalah beberapa contoh penggunaan fungsi NumPy:

```python
import numpy as np

# Membuat array
array1 = np.array([1, 2, 3, 4])  # Array 1D
array2 = np.zeros((2, 2))        # Array 2D dengan nilai nol

# Operasi matematika
hasil = np.add(array1, 5)        # Tambahkan 5 ke setiap elemen array1

# Statistik dasar
mean = np.mean(array1)           # Rata-rata array1

# Operasi matriks
matriks1 = np.array([[1, 2], [3, 4]])
matriks2 = np.array([[5, 6], [7, 8]])
hasil_matriks = np.dot(matriks1, matriks2)  # Perkalian matriks

# Transformasi array
reshaped = np.reshape(array1, (2, 2))       # Ubah bentuk array menjadi 2x2
```

NumPy sangat kuat dan efisien untuk analisis data dan komputasi numerik. Anda dapat menggunakannya sebagai dasar dalam proyek data science, machine learning, atau analisis statistik lainnya.

## 1. Membuat Array di NumPy

Dalam NumPy, array dapat berupa **vektor** (array satu dimensi) atau **matriks** (array dua dimensi atau lebih). Berikut adalah langkah-langkah untuk membuat berbagai jenis array menggunakan NumPy:

#### 1. Mengimpor NumPy
Untuk menggunakan NumPy, kita perlu mengimpornya terlebih dahulu:
```python
import numpy as np
```

#### 2. Membuat Array Sederhana
- **Vektor (1 dimensi):**
```python
np.array([1, 2, 3, 4, 5])
```
Hasil:
```
array([1, 2, 3, 4, 5])
```

- **Matriks (2 dimensi):**
```python
np.array([(1, 2, 3, 4, 5), (6, 7, 8, 9, 10)])
```
Hasil:
```
array([[ 1,  2,  3,  4,  5],
       [ 6,  7,  8,  9, 10]])
```

#### 3. Membuat Array dari Daftar (List)
Anda juga dapat membuat array dari daftar Python:
```python
num_list = [1, 2, 3, 4, 5]
np.array(num_list)
```
Hasil:
```
array([1, 2, 3, 4, 5])
```

#### 4. Membuat Berbagai Jenis Array
NumPy menyediakan berbagai fungsi untuk menghasilkan array sesuai kebutuhan:

##### a. **Array Identitas**
Array identitas adalah matriks dengan elemen diagonal berupa 1 dan sisanya 0:
```python
np.identity(4)
```
Hasil:
```
[[1. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 1.]]
```

##### b. **Array Nol**
- **Array Nol 1 Dimensi:**
```python
np.zeros(5)
```
Hasil:
```
array([0., 0., 0., 0., 0.])
```

- **Array Nol 2 Dimensi:**
```python
np.zeros((5, 6))  # 5 baris, 6 kolom
```
Hasil:
```
array([[0., 0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0., 0.],
       ...
       [0., 0., 0., 0., 0., 0.]])
```

##### c. **Array Satu**
- **Array Satu 1 Dimensi:**
```python
np.ones(5)
```
Hasil:
```
array([1., 1., 1., 1., 1.])
```

- **Array Satu 2 Dimensi:**
```python
np.ones((5, 6))
```
Hasil:
```
array([[1., 1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1., 1.],
       ...
       [1., 1., 1., 1., 1., 1.]])
```

##### d. **Array dengan Rentang Nilai**
- **Array dengan Rentang Tetap:**
```python
np.arange(0, 5)
```
Hasil:
```
array([0, 1, 2, 3, 4])
```

- **Array dengan Langkah Tertentu:**
```python
np.arange(0, 20, 2)
```
Hasil:
```
array([ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18])
```

##### e. **Array dengan Interval Terbagi Rata**
Untuk membuat array dengan nilai yang terdistribusi merata dalam interval tertentu:
```python
np.linspace(0, 20, 5)
```
Hasil:
```
array([ 0.,  5., 10., 15., 20.])
```

Baik, saya akan menjelaskan dan menyusun ulang pembahasan dengan tetap mempertahankan seluruh isi, kecuali sintaks atau bagian yang tidak berguna. Berikut penjelasan untuk **Data Selection: Indexing and Slicing an Array**. 

---

## 2. Data Selection: Indexing and Slicing sebuah Array

Dalam NumPy, **Indexing** dan **Slicing** adalah cara untuk memilih elemen, baik individu maupun grup, dari array.  

- **Indexing**: Memilih elemen individu dari array.  
- **Slicing**: Memilih grup elemen dari array.

---

### 2.1 1D Array Indexing and Selection

#### Membuat 1D Array

```python
import numpy as np

# Membuat array 1 dimensi
array_1d = np.array([1, 2, 3, 4, 5])
```

#### Indexing: Memilih Elemen Individu

Untuk memilih elemen berdasarkan indeks, gunakan tanda kurung siku `[]`. Indeks dimulai dari 0.  

- Memilih elemen kedua (`array_1d[1]`):  
  ```python
  array_1d[1]
  ```
  Output:
  
  ```
  2
  ```

- Memilih elemen terakhir menggunakan indeks negatif:  
  ```python
  array_1d[-1]
  ```
  Output:

  ```
  5
  ```

#### Slicing: Memilih Grup Elemen

Gunakan `:` untuk memilih rentang elemen. Formatnya adalah `[start:end]`, di mana `start` adalah indeks awal (termasuk), dan `end` adalah indeks akhir (tidak termasuk).  

- Memilih elemen ketiga hingga keempat:  
  ```python
  array_1d[2:4]
  ```
  Output:

  ```
  array([3, 4])
  ```

---

### 2.2  Array 2D Indexing and Selection

#### Membuat 2D Array

```python
array_2d = np.array([[1, 2, 3], 
                     [4, 5, 6], 
                     [7, 8, 9]])
```

#### Indexing: Memilih Elemen Individu

Untuk memilih elemen spesifik, gunakan format `array_2d[row, column]`.  

- Memilih elemen di baris ke-2 dan kolom ke-2 (`array_2d[1][1]`):  
  ```python
  array_2d[1, 1]
  ```
  Output:

  ```
  5
  ```

- Memilih elemen di baris ke-3 dan kolom ke-3:  
  ```python
  array_2d[2, 2]
  ```
  Output:

  ```
  9
  ```

#### Slicing: Memilih Grup Elemen

Gunakan format `array_2d[rows, columns]` untuk memilih grup elemen dari array.  

- Memilih baris kedua:  
  ```python
  array_2d[1, :]
  ```
  Output:

  ```
  array([4, 5, 6])
  ```

- Memilih dua baris pertama:  
  ```python
  array_2d[:2, :]
  ```
  Output:

  ```
  array([[1, 2, 3],
         [4, 5, 6]])
  ```

- Memilih dua baris pertama dan dua kolom pertama:  
  ```python
  array_2d[:2, :2]
  ```
  Output:
  ```
  array([[1, 2],
         [4, 5]])
  ```

- Memilih kolom terakhir:  
  ```python
  array_2d[:, -1]
  ```
  Output:
  ```
  array([3, 6, 9])
  ```

---

### 2.3 Conditional Selection

Anda dapat menggunakan operator perbandingan untuk memilih elemen berdasarkan kondisi tertentu.

- Contoh: Memilih elemen yang lebih besar dari 5 pada array `array_2d`:  
  ```python
  array_2d[array_2d > 5]
  ```
  Output:

  ```
  array([6, 7, 8, 9])
  ```



**Catatan Penting**:  
- Ketika Anda memilih seluruh baris atau kolom, maka seluruh elemen di dalamnya akan dipilih.
- Memahami **indexing** dan **slicing** memerlukan latihan untuk menjadi terbiasa, terutama untuk array 2D atau lebih.




## 3. Basic Array Operations {#3-basic-array-operations}

### 3.1 Quick Arithmetic operation: Addition, Subtraction, Multiplication, Division, Squaring {#31-quick-arithmetic-operation-addition-subtraction-multiplication-division-squaring}

``` python
# Let's create two arrays

arr1 = np.arange(0,5)
arr2 = np.arange(6,11)
```

``` python
## Addition

arr1 + arr2
```

``` python
## Subtraction

arr2 - arr1
```

``` python
## Multiplication

arr1 * arr2
```

``` python
## Division

arr1 / arr2
```

    array([0.        , 0.14285714, 0.25      , 0.33333333, 0.4       ])

``` python
## Squaring

arr1 ** 2
```

    array([ 0,  1,  4,  9, 16])


### 3.2 Universal functions {#32-universal-functions}

NumPy universal functions (`ufunc`) allows to compute math,
trigonometric, logical and comparison operations such as sin, cos, tan,
exponent(exp), log, square, greater, less, etc\...

``` python
## creating two arrays 

arr1 = np.arange(0,5)
arr2 = np.arange(6,11)
```

``` python
## Calculating the sum of two arrays

np.add(arr1, arr2)
```

    array([ 6,  8, 10, 12, 14])


``` python
## Calculating the product of two arrays

np.multiply(arr1, arr2)
```

    array([ 0,  7, 16, 27, 40])

``` python
## Calculating the difference between two arrays

np.subtract(arr1, arr2)
```

    array([-6, -6, -6, -6, -6])


``` python
## Calculating the division of two arrays

np.divide(arr1, arr2)
```

    array([0.        , 0.14285714, 0.25      , 0.33333333, 0.4       ])


``` python
## Calculating the sin of arr1

np.sin(arr1)
```

    array([ 0.        ,  0.84147098,  0.90929743,  0.14112001, -0.7568025 ])


``` python
np.sin([0,45,90,180])
```

    array([ 0.        ,  0.85090352,  0.89399666, -0.80115264])

``` python
## Calculating the cosine of arr 1

np.cos(arr1)
```

    array([ 1.        ,  0.54030231, -0.41614684, -0.9899925 , -0.65364362])


``` python
np.cos([0,45,90,180])
```

    array([ 1.        ,  0.52532199, -0.44807362, -0.59846007])


``` python
## Calculating the tangent(tan) of the array

np.tan(arr2)
```

    array([-0.29100619,  0.87144798, -6.79971146, -0.45231566,  0.64836083])


``` python
## Calculating the logarithmic(log) of the array

np.log(arr2)
```

    array([1.79175947, 1.94591015, 2.07944154, 2.19722458, 2.30258509])

``` python
## Calculating the exponent(exp or e^) of the array

np.exp(arr2)
```

    array([  403.42879349,  1096.63315843,  2980.95798704,  8103.08392758,
           22026.46579481])


``` python
## Calculating the power  of the array
## Array 1 is powered array 2...0^6=0, 1^7=1, 2^8=256, etc..

np.power(arr1, arr2)
```

    array([      0,       1,     256,   19683, 1048576])


``` python
## Comparison operations return true or false
## Arr 1 is less than arr 2...so that's false

np.greater(arr1, arr2)
```

    array([False, False, False, False, False])


``` python
## Comparison operations return true or false
## Arr 1 is less than arr 2...so that's true

np.less(arr1, arr2)
```

    array([ True,  True,  True,  True,  True])



## 4. Basic Statistics {#4-basic-statistics}

With NumPy, we can compute the basic statistics such as the standard
deviation (std), variance (var),mean, median, minimum value, maximum
value of an array.



``` python
## Creating an array 

arr = np.arange(0,5)
arr
```

    array([0, 1, 2, 3, 4])

### 4.1 Standard Deviation {#41-standard-deviation}

``` python
## calculating the standard deviation of the array
## Std is how much an element of the array deviates from the mean of the array

np.std(arr)
```

    1.4142135623730951


``` python
arr2 = np.array([[3,4], [5,6]])

np.std(arr2)
```

    1.118033988749895


``` python
## Specifying the axis
## By default, the std is computed on the flattened values (or converted into a single column vector)

np.std(arr2, axis=0)
```

    array([1., 1.])


``` python
np.std(arr2, axis=1)
```

    array([0.5, 0.5])


### 4.2 Variance {#42-variance}

``` python
## Calculating the Variance (var)

arr = np.arange(0,5)

np.var(arr)
```

    2.0


``` python
np.var(arr2)
```

    1.25


### 4.3 Mean {#43-mean}

``` python
## Calculating the mean of the array

np.mean(arr)
```

    2.0

``` python
## mean gives the same results as the average
np.average(arr)
```

    2.0


### 4.4 Median {#44-median}

``` python
## Calculating the median of the array

np.median(arr)
```

    2.0

### 4.3 Minimum and Maximum {#43-minimum-and-maximum}


``` python
## Calculating the minimum value

np.min(arr)
```

    0


``` python
## Calculating the maximum value

np.max(arr)
```

    4


`<a name='5'>`{=html}`</a>`{=html}

## 5. Data Manipulation {#5-data-manipulation}

Data Manipulation is important step in Machine Learning project. Let\'s
some of NumPy methods and functions which are useful in data
manipulation.

### 5.1 Shape of the array {#51-shape-of-the-array}

``` python
## Creating an array 

arr1 = np.arange(0,10)
arr2 = np.array(([1,2,3],[4,5,6],[7,8,9]))
```

``` python
arr1
```

    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])


``` python
arr2
```

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])


``` python
np.shape(arr1)
```

    (10,)

``` python
np.shape(arr2)
```

    (3, 3)


``` python
arr2.shape
```

### 5.2 Shaping the Array {#52-shaping-the-array}

`np.reshape(array_name, newshape=(rows, columns)` or
`array_name.reshape(rows, columns)` change the shape of the array. The
rows and columns of the new shape has to comform with the existing data
of the array. Otherwise, it won\'t work. Take an example, you can
convert (3,3) array into (1,9) but you can\'t convert it into (5,5).

``` python
### arr1 is (10,)....10 rows, 1 column. Let's reshape it into (5,2)
np.reshape(arr1, newshape=(5,2))
```

``` python
## This would also work
arr1.reshape(5,2)
```


``` python
arr2_reshaped = arr2.reshape(9,1)
arr2_reshaped.T
```

::: {.output .execute_result execution_count="90"}
    array([[1, 2, 3, 4, 5, 6, 7, 8, 9]])
:::

``` python
arr2_reshaped.reshape(3,3)
```

::: {.output .execute_result execution_count="91"}
    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])
:::

``` python
## np.resize can also be used to change the shape of the array into a specific size

np.resize(arr2, (1,9))
```

::: {.output .execute_result execution_count="92"}
    array([[1, 2, 3, 4, 5, 6, 7, 8, 9]])
:::
:::

### 5.3 Copying array {#53-copying-array}

``` python
arr1 = np.arange(0,10)
arr1
```

::: {.output .execute_result execution_count="93"}
    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
:::

``` python
arr1_copy = arr1.copy()
arr1_copy
```

::: {.output .execute_result execution_count="94"}
    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
:::
:::

::: {.cell .code execution_count="95" id="WQy97R5Wo375"}
``` python
## Copying the values of one array into the other 

## Let's copy array 2 into 1 --they have the same shape

arr1 = np.arange(0,6)
arr2 = np.arange(6,12)
```
:::

::: {.cell .code execution_count="96" id="DdE9pVVdppQ8"}
``` python
## arr1 is destination, arr2 is source
np.copyto(arr1, arr2)
```

``` python
arr1
```

::: {.output .execute_result execution_count="97"}
    array([ 6,  7,  8,  9, 10, 11])
:::
:::

::: {.cell .markdown id="EScZw0b9rDV-"}
### 5.4 Joining arrays {#54-joining-arrays}
:::

::: {.cell .code execution_count="98" id="yVm7cXphrLQD"}
``` python
### Creating two arrays

arr1 = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2 = np.array([[10,11,12]])
```

``` python
## Joining them

np.concatenate((arr1, arr2))
```

::: {.output .execute_result execution_count="99"}
    array([[ 1,  2,  3],
           [ 4,  5,  6],
           [ 7,  8,  9],
           [10, 11, 12]])
:::

``` python
## Transposing arr2
## arr2.T is transpose operation

np.concatenate((arr1, arr2.T), axis=1)
```

::: {.output .execute_result execution_count="100"}
    array([[ 1,  2,  3, 10],
           [ 4,  5,  6, 11],
           [ 7,  8,  9, 12]])
:::
:::

``` python
### Setting axis to none flatten the array

np.concatenate((arr1, arr2), axis=None)
```

::: {.output .execute_result execution_count="101"}
    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])
:::
:::

``` python
### Joining two 1Ds array into 2D array: Stacking

# Column stacking

arr1 = np.arange(0,6)
arr2 = np.arange(6,12)

np.column_stack((arr1, arr2))
```

::: {.output .execute_result execution_count="102"}
    array([[ 0,  6],
           [ 1,  7],
           [ 2,  8],
           [ 3,  9],
           [ 4, 10],
           [ 5, 11]])
:::

``` python
## Row stacking 

np.row_stack((arr1, arr2))
```

::: {.output .execute_result execution_count="103"}
    array([[ 0,  1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10, 11]])
:::
:::

::: {.cell .markdown id="pSk67COOuFJw"}
### 5.5 Splitting arrays {#55-splitting-arrays}

``` python
arr1 = np.arange(0,6)
arr1
```

::: {.output .execute_result execution_count="104"}
    array([0, 1, 2, 3, 4, 5])
:::

``` python
### Splitting the array into two arrays

np.split(arr1, 2)
```

::: {.output .execute_result execution_count="105"}
    [array([0, 1, 2]), array([3, 4, 5])]
:::

``` python
### Splitting the array into three arrays

np.split(arr1, 3)
```

::: {.output .execute_result execution_count="106"}
    [array([0, 1]), array([2, 3]), array([4, 5])]
:::
:::

::: {.cell .markdown id="rwOOipKsxEBl"}
### 5.6 Adding and repeating elements in an array {#56-adding-and-repeating-elements-in-an-array}

``` python
arr1 = np.arange(0,6)
arr1
```

::: {.output .execute_result execution_count="107"}
    array([0, 1, 2, 3, 4, 5])
:::

``` python
## Adding the values at the end of the array
np.append(arr1,7)
```

::: {.output .execute_result execution_count="108"}
    array([0, 1, 2, 3, 4, 5, 7])
:::

``` python
### Given an array, can you add itself multiple times? or repeat it?

arr = np.array([[1,2,3]])
np.tile(arr, 3)
```

::: {.output .execute_result execution_count="109"}
    array([[1, 2, 3, 1, 2, 3, 1, 2, 3]])
:::

``` python
np.repeat(arr,3)
```

::: {.output .execute_result execution_count="110"}
    array([1, 1, 1, 2, 2, 2, 3, 3, 3])
:::
:::

::: {.cell .markdown id="3mg3ZMav4HIb"}
### 5.7 Sorting elements in an array {#57-sorting-elements-in-an-array}

``` python
arr = np.array([[1,2,3,4,5,3,2,1,3,5,6,7,7,5,9,5]])

np.sort(arr)
```

::: {.output .execute_result execution_count="111"}
    array([[1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 7, 9]])
:::

``` python
## Finding the unique elements in an array

arr = np.array([[1,2,3,4,5,3,2,1,3,5,6,7,7,5,9,5]])

np.unique(arr)
```

::: {.output .execute_result execution_count="112"}
    array([1, 2, 3, 4, 5, 6, 7, 9])
:::
:::

::: {.cell .markdown id="assBn6MPAOaW"}
### 5.8 Reversing an array {#58-reversing-an-array}
:::

``` python
## You can also flip the array

arr = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr
```

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])


``` python
## Up/down flipping

np.flipud(arr)
```

    array([[7, 8, 9],
           [4, 5, 6],
           [1, 2, 3]])

``` python
## left/right flipping

np.fliplr(arr)
```

    array([[3, 2, 1],
           [6, 5, 4],
           [9, 8, 7]])





That\'s it for NumPy. In this lab, you learned how to create an array,
perform basic operations, and also how to manipulate an array.

In the next lab, we will learn about the Pandas, another important tool
used for real world data manipulation.

