
# Linear Algebra

Aljabar linear adalah pondasi yang paling dasar dalam statistik maupun machine learning. Penyelesaian aljabar linear dalam dasar-dasar machine learning akan dijelaskan dalam catatan ini. Machine learning menerima data dalam dimensi tinggi yang sulit diprediksi oleh statistik konvensional.


### Aljabar Linear

Aljabar linear adalah cabang matematika yang mempelajari ruang vektor dan transformasi linear antar ruang tersebut. Ini melibatkan studi tentang sifat-sifat aljabar objek matematika yang terkait dengan vektor, matriks, dan sistem persamaan linear. Aljabar linear memiliki banyak aplikasi dalam berbagai bidang, seperti ilmu komputer, ilmu data, fisika, ekonomi, dan lainnya.

Sejarah Aljabar Linear:
Aljabar linear berkembang dari ide-ide tentang ruang vektor dan matriks pada abad ke-19. Matematikawan seperti Arthur Cayley, Camille Jordan, dan Josiah Willard Gibbs adalah beberapa tokoh penting dalam pengembangan konsep ini. Pada awalnya, fokus utama adalah pada sistem persamaan linear dan transformasi linier di dalam ruang Euclidean, tetapi seiring waktu, aljabar linear berkembang menjadi teori yang lebih abstrak dengan menerapkan konsep-konsep ini ke berbagai struktur matematika.

Struktur Data dalam Aljabar Linear:

1. **Vektor**:
   Vektor adalah objek dalam ruang vektor yang memiliki magnitude (panjang) dan arah. Mereka dapat diwakili sebagai kumpulan bilangan yang memiliki aturan penjumlahan dan perkalian dengan skalar. Vektor bisa dalam ruang 2D (seperti bidang) atau ruang 3D (seperti ruang tiga dimensi), tetapi konsep vektor tidak terbatas pada dimensi itu saja.
2. **Ruang Vektor**:
   Ruang vektor adalah himpunan vektor yang memenuhi aksioma-aksioma aljabar linear. Ruang tersebut dapat memiliki dimensi yang berbeda-beda. Misalnya, ruang vektor 2D terdiri dari semua vektor yang dapat diwakili oleh dua bilangan, dan ruang vektor 3D terdiri dari semua vektor yang dapat diwakili oleh tiga bilangan.
3. **Transformasi Linear**:
   Transformasi linear adalah fungsi matematika antara dua ruang vektor yang memelihara sifat-sifat aljabar linear. Transformasi ini memetakan vektor dari satu ruang ke ruang vektor lainnya, mempertahankan operasi penjumlahan vektor dan perkalian dengan skalar.
4. **Matriks**:
   Matriks adalah representasi aljabar linear yang terdiri dari baris dan kolom bilangan. Matriks dapat digunakan untuk merepresentasikan transformasi linear dan sistem persamaan linear. Operasi pada matriks termasuk penjumlahan, perkalian, dan invers matriks.
5. **Tensor**:
   Tensor adalah objek matematika yang umumnya memperluas konsep vektor dan matriks ke dimensi yang lebih tinggi. Mereka digunakan untuk merepresentasikan dan memanipulasi data yang memiliki struktur multidimensi. Tensor dapat memiliki berbagai orde, seperti tensor skalar (orde 0), vektor (orde 1), matriks (orde 2), dan tensor berorde tinggi lainnya.

Aljabar linear memiliki aplikasi yang luas dalam pemrosesan sinyal, fisika, machine learning, grafika komputer, analisis data statistik, dan banyak bidang lainnya karena kemampuannya untuk menggambarkan dan memanipulasi struktur data yang kompleks secara matematis.

In [1]:
```
import numpy as np
import matplotlib.pyplot as plt

```

In [2]:
```
t = np.linspace(0, 40, 1000) # start, finish, n points

```

Distance travelled by robber: $d = 2.5t$

In [3]:
```
d_r = 2.5 * t

```

Distance travelled by sheriff: $d = 3(t-5)$

In [4]:
```
d_s = 3 * (t-5)

```

In [5]:
```
fig, ax = plt.subplots()
plt.title('A Bank Robber Caught')
plt.xlabel('time (in minutes)')
plt.ylabel('distance (in km)')
ax.set_xlim([0, 40])
ax.set_ylim([0, 100])
ax.plot(t, d_r, c='green')
ax.plot(t, d_s, c='brown')
plt.axvline(x=30, color='purple', linestyle='--')
_ = plt.axhline(y=75, color='purple', linestyle='--')

```

![No description has been provided for this image](data:image/png;base64...)

**Return to slides here.**

## Tensor

Tensor adalah objek matematika yang digunakan untuk merepresentasikan hubungan multilinear antara himpunan vektor, skalar, dan objek-objek multilinear lainnya dalam ruang vektor. Tensor memiliki berbagai orde, misalnya, tensor orde pertama adalah vektor, tensor orde kedua adalah matriks, dan tensor orde tinggi memiliki struktur yang lebih kompleks.

Berikut adalah contoh-contoh tensor:

### Tensor Orde Pertama (Vektor)

Vektor adalah tensor orde pertama yang memiliki satu set komponen. Contohnya:

$$
\mathbf{v} = \begin{bmatrix} v\_1 \\ v\_2 \\ v\_3 \end{bmatrix}
$$

### Tensor Orde Kedua (Matriks)

Matriks adalah tensor orde kedua yang memiliki dua set indeks. Contohnya:

$$
\mathbf{M} = \begin{bmatrix}
m\_{11} & m\_{12} & m\_{13} \\
m\_{21} & m\_{22} & m\_{23} \\
m\_{31} & m\_{32} & m\_{33}
\end{bmatrix}
$$

### Tensor Orde Tinggi

Tensor orde tinggi memiliki struktur yang lebih kompleks dengan lebih dari dua set indeks. Misalnya, tensor orde tiga dapat direpresentasikan sebagai kubus bilangan:

$$
\mathbf{T} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

Tensor memiliki banyak aplikasi dalam matematika, fisika, rekayasa, dan pembelajaran mesin, memungkinkan representasi yang kuat dari berbagai fenomena multidimensi.

### 1. Scalars (Rank 0 Tensors) in Base Python[¶](#1.-Scalars-(Rank-0-Tensors)-in-Base-Python)

In [6]:
```
x = 25
x

```

Out[6]:
```
25
```

In [7]:
```
type(x) # if we'd like more specificity (e.g., int16, uint8), we need NumPy or another numeric library

```

Out[7]:
```
int
```

In [8]:
```
y = 3

```

In [9]:
```
py_sum = x + y
py_sum

```

Out[9]:
```
28
```

In [10]:
```
type(py_sum)

```

Out[10]:
```
int
```

In [11]:
```
x_float = 25.0
float_sum = x_float + y
float_sum

```

Out[11]:
```
28.0
```

In [12]:
```
type(float_sum)

```

Out[12]:
```
float
```

### Scalars in PyTorch[¶](#Scalars-in-PyTorch)

* PyTorch and TensorFlow are the two most popular *automatic differentiation* libraries (a focus of the [*Calculus I*](https://github.com/jonkrohn/ML-foundations/blob/master/notebooks/3-calculus-i.ipynb) and [*Calculus II*](https://github.com/jonkrohn/ML-foundations/blob/master/notebooks/4-calculus-ii.ipynb) subjects in the *ML Foundations* series) in Python, itself the most popular programming language in ML
* PyTorch tensors are designed to be pythonic, i.e., to feel and behave like NumPy arrays
* The advantage of PyTorch tensors relative to NumPy arrays is that they easily be used for operations on GPU (see [here](https://pytorch.org/tutorials/beginner/examples_tensor/two_layer_net_tensor.html) for example)
* Documentation on PyTorch tensors, including available data types, is [here](https://pytorch.org/docs/stable/tensors.html)

In [13]:
```
import torch

```

In [14]:
```
x_pt = torch.tensor(25) # type specification optional, e.g.: dtype=torch.float16
x_pt

```

Out[14]:
```
tensor(25)
```

In [15]:
```
x_pt.shape

```

Out[15]:
```
torch.Size([])
```

### Scalars in TensorFlow (version 2.0 or later)[¶](#Scalars-in-TensorFlow-(version-2.0-or-later))

Tensors created with a wrapper, all of which [you can read about here](https://www.tensorflow.org/guide/tensor):

* `tf.Variable`
* `tf.constant`
* `tf.placeholder`
* `tf.SparseTensor`

Most widely-used is `tf.Variable`, which we'll use here.

As with TF tensors, in PyTorch we can similarly perform operations, and we can easily convert to and from NumPy arrays

Also, a full list of tensor data types is available [here](https://www.tensorflow.org/api_docs/python/tf/dtypes/DType).

In [1]:
```
import tensorflow as tf

```

In [17]:
```
x_tf = tf.Variable(25, dtype=tf.int16) # dtype is optional
x_tf

```

Out[17]:
```
<tf.Variable 'Variable:0' shape=() dtype=int16, numpy=25>
```

In [5]:
```
x_tf=tf.Variable(25, dtype=tf.int16)
x_tf.shape

```

Out[5]:
```
TensorShape([])
```

In [19]:
```
y_tf = tf.Variable(3, dtype=tf.int16)

```

In [20]:
```
x_tf + y_tf

```

Out[20]:
```
<tf.Tensor: shape=(), dtype=int16, numpy=28>
```

In [21]:
```
tf_sum = tf.add(x_tf, y_tf)
tf_sum

```

Out[21]:
```
<tf.Tensor: shape=(), dtype=int16, numpy=28>
```

In [22]:
```
tf_sum.numpy() # note that NumPy operations automatically convert tensors to NumPy arrays, and vice versa

```

Out[22]:
```
28
```

In [23]:
```
type(tf_sum.numpy())

```

Out[23]:
```
numpy.int16
```

In [24]:
```
tf_float = tf.Variable(25., dtype=tf.float16)
tf_float

```

Out[24]:
```
<tf.Variable 'Variable:0' shape=() dtype=float16, numpy=25.0>
```

**Return to slides here.**

### 2. Vectors (Rank 1 Tensors) in NumPy[¶](#2.-Vectors-(Rank-1-Tensors)-in-NumPy)

In [25]:
```
x = np.array([25, 2, 5]) # type argument is optional, e.g.: dtype=np.float16
x

```

Out[25]:
```
array([25,  2,  5])
```

In [26]:
```
len(x)

```

Out[26]:
```
3
```

In [27]:
```
x.shape

```

Out[27]:
```
(3,)
```

In [28]:
```
type(x)

```

Out[28]:
```
numpy.ndarray
```

In [29]:
```
x[0] # zero-indexed

```

Out[29]:
```
25
```

In [30]:
```
type(x[0])

```

Out[30]:
```
numpy.int64
```

### Vector Transposition[¶](#Vector-Transposition)

In [31]:
```
# Transposing a regular 1-D array has no effect...
x_t = x.T
x_t

```

Out[31]:
```
array([25,  2,  5])
```

In [32]:
```
x_t.shape

```

Out[32]:
```
(3,)
```

In [33]:
```
# ...but it does we use nested "matrix-style" brackets:
y = np.array([[25, 2, 5]])
y

```

Out[33]:
```
array([[25,  2,  5]])
```

In [34]:
```
y.shape

```

Out[34]:
```
(1, 3)
```

In [35]:
```
# ...but can transpose a matrix with a dimension of length 1, which is mathematically equivalent:
y_t = y.T
y_t

```

Out[35]:
```
array([[25],
       [ 2],
       [ 5]])
```

In [36]:
```
y_t.shape # this is a column vector as it has 3 rows and 1 column

```

Out[36]:
```
(3, 1)
```

In [37]:
```
# Column vector can be transposed back to original row vector:
y_t.T

```

Out[37]:
```
array([[25,  2,  5]])
```

In [38]:
```
y_t.T.shape

```

Out[38]:
```
(1, 3)
```

### Zero Vectors[¶](#Zero-Vectors)

Have no effect if added to another vector

## Zero Matrix[¶](#Zero-Matrix)

Untuk membuat matriks nol, kita dapat menggunakan sintaks LaTeX berikut:

$$
\mathbf{0}\_{m \times n} = \begin{bmatrix}
0 & 0 & \ldots & 0 \\
0 & 0 & \ldots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \ldots & 0 \\
\end{bmatrix}
$$

Dalam LaTeX, $\mathbf{0}\_{m \times n}$ adalah representasi matriks nol dengan $m$ baris dan $n$ kolom. Anda dapat mengganti nilai $m$ dan $n$ sesuai dengan ukuran matriks nol yang diinginkan.

In [39]:
```
z = np.zeros(3)
z

```

Out[39]:
```
array([0., 0., 0.])
```

### Vectors in PyTorch and TensorFlow[¶](#Vectors-in-PyTorch-and-TensorFlow)

In [40]:
```
x_pt = torch.tensor([25, 2, 5])
x_pt

```

Out[40]:
```
tensor([25,  2,  5])
```

In [41]:
```
x_tf = tf.Variable([25, 2, 5])
x_tf

```

Out[41]:
```
<tf.Variable 'Variable:0' shape=(3,) dtype=int32, numpy=array([25,  2,  5], dtype=int32)>
```


### Norma $L^2$ Norm

## Norma $L^2$ Norm

$L^2$ norm, juga dikenal sebagai Euclidean norm atau norm Euclidean, adalah salah satu jenis norm dalam ruang vektor yang mengukur "panjang" atau "jarak" dari sebuah vektor dalam ruang tersebut. Dalam matematika, norm $L^2$ dari suatu vektor $\mathbf{x}$ dalam ruang vektor $\mathbb{R}^n$ dinyatakan sebagai berikut:

$$
||\mathbf{x}||\_2 = \sqrt{x\_1^2 + x\_2^2 + \ldots + x\_n^2} = \sqrt{\sum\_{i=1}^{n} x\_i^2}
$$

Di sini, $x\_1, x\_2, \ldots, x\_n$ adalah komponen-komponen vektor $\mathbf{x}$ dalam ruang vektor $n$-dimensi, dan $||\cdot||\_2$ menunjukkan norm $L^2$.

Beberapa poin penting tentang norm $L^2$:

* **Sifat Euclidean:** $L^2$ norm dihitung dengan mengambil akar kuadrat dari jumlah kuadrat dari komponen vektor.
* **Representasi Geometris:** Dalam ruang dua dimensi ($\mathbb{R}^2$), norm $L^2$ dari vektor $(x, y)$ adalah panjang garis lurus dari titik awal ke titik akhir yang diwakili oleh vektor tersebut di dalam ruang Euclidean.
* **Kasus Khusus di Bidang Machine Learning:** $L^2$ norm sering digunakan dalam konteks pembelajaran mesin sebagai fungsi objektif atau fungsi kehilangan (loss function), terutama dalam regularisasi seperti ridge regression, di mana tujuannya adalah untuk meminimalkan $L^2$ norm dari parameter.

Norm $L^2$ memiliki banyak aplikasi dalam matematika, fisika, dan ilmu komputer, terutama dalam pengolahan sinyal, pembelajaran mesin, optimisasi, dan bidang-bidang lain yang melibatkan perhitungan jarak atau kehilangan dalam ruang vektor.

In [42]:
```
x

```

Out[42]:
```
array([25,  2,  5])
```

In [43]:
```
(25**2 + 2**2 + 5**2)**(1/2)

```

Out[43]:
```
25.573423705088842
```

In [44]:
```
np.linalg.norm(x)

```

Out[44]:
```
25.573423705088842
```


### $L^1$ Norm

## Norma $L^1$ (Norma Manhattan atau Norma Taxicab)

Norma $L^1$, juga dikenal sebagai norma Manhattan atau norma taxicab, adalah salah satu jenis norma dalam matematika yang mengukur jarak antara dua titik dalam ruang vektor berdasarkan jumlah nilai absolut perbedaan dari komponen-komponen vektor tersebut.

Untuk suatu vektor $\mathbf{x}$ dalam ruang vektor $\mathbb{R}^n$, norma $L^1$ didefinisikan sebagai:

$$ ||\mathbf{x}||\_1 = |x\_1| + |x\_2| + \ldots + |x\_n| = \sum\_{i=1}^{n} |x\_i| $$

Di sini, $x\_1, x\_2, \ldots, x\_n$ adalah komponen-komponen vektor $\mathbf{x}$, dan $||\cdot||\_1$ menunjukkan norma $L^1$.

Beberapa poin penting tentang norma $L^1$:

* **Sifat Manhattan:** Norma $L^1$ dihitung dengan menjumlahkan nilai absolut dari perbedaan antara komponen-komponen vektor.
* **Representasi Geometris:** Dalam ruang dua dimensi ($\mathbb{R}^2$), norma $L^1$ dari vektor $(x, y)$ adalah jarak yang ditempuh jika hanya diizinkan berjalan sepanjang garis horizontal dan vertikal (seperti jalan dalam kota).
* **Kasus Khusus di Bidang Machine Learning:** Norma $L^1$ sering digunakan dalam konteks regularisasi, terutama dalam LASSO (Least Absolute Shrinkage and Selection Operator), di mana tujuannya adalah untuk meminimalkan nilai dari norma $L^1$ dari parameter.

Norma $L^1$ memiliki berbagai aplikasi dalam matematika, rekayasa, optimisasi, dan bidang-bidang lain yang melibatkan perhitungan jarak atau regularisasi dalam ruang vektor.

In [45]:
```
x

```

Out[45]:
```
array([25,  2,  5])
```

In [46]:
```
np.abs(25) + np.abs(2) + np.abs(5)

```

Out[46]:
```
32
```


### Squared $L^2$ Norm

In [47]:
```
x

```

Out[47]:
```
array([25,  2,  5])
```

In [48]:
```
(25**2 + 2**2 + 5**2)

```

Out[48]:
```
654
```

In [49]:
```
# we'll cover tensor multiplication more soon but to prove point quickly:
np.dot(x, x)

```

Out[49]:
```
654
```

**Return to slides here.**

### Max Norm[¶](#Max-Norm)

In [50]:
```
x

```

Out[50]:
```
array([25,  2,  5])
```

In [51]:
```
np.max([np.abs(25), np.abs(2), np.abs(5)])

```

Out[51]:
```
25
```

**Return to slides here.**

### Orthogonal Vectors[¶](#Orthogonal-Vectors)

In [52]:
```
i = np.array([1, 0])
i

```

Out[52]:
```
array([1, 0])
```

In [53]:
```
j = np.array([0, 1])
j

```

Out[53]:
```
array([0, 1])
```

In [54]:
```
np.dot(i, j) # detail on the dot operation coming up...

```

Out[54]:
```
0
```

**Return to slides here.**

### 3. Matrices (Rank 2 Tensors) in NumPy[¶](#3.-Matrices-(Rank-2-Tensors)-in-NumPy)

In [55]:
```
# Use array() with nested brackets:
X = np.array([[25, 2], [5, 26], [3, 7]])
X

```

Out[55]:
```
array([[25,  2],
       [ 5, 26],
       [ 3,  7]])
```

In [56]:
```
X.shape

```

Out[56]:
```
(3, 2)
```

In [57]:
```
X.size

```

Out[57]:
```
6
```

In [58]:
```
# Select left column of matrix X (zero-indexed)
X[:,0]

```

Out[58]:
```
array([25,  5,  3])
```

In [59]:
```
# Select middle row of matrix X:
X[1,:]

```

Out[59]:
```
array([ 5, 26])
```

In [60]:
```
# Another slicing-by-index example:
X[0:2, 0:2]

```

Out[60]:
```
array([[25,  2],
       [ 5, 26]])
```

### Matrices in PyTorch[¶](#Matrices-in-PyTorch)

In [61]:
```
X_pt = torch.tensor([[25, 2], [5, 26], [3, 7]])
X_pt

```

Out[61]:
```
tensor([[25,  2],
        [ 5, 26],
        [ 3,  7]])
```

In [62]:
```
X_pt.shape # more pythonic

```

Out[62]:
```
torch.Size([3, 2])
```

In [63]:
```
X_pt[1,:]

```

Out[63]:
```
tensor([ 5, 26])
```

### Matrices in TensorFlow[¶](#Matrices-in-TensorFlow)

In [64]:
```
X_tf = tf.Variable([[25, 2], [5, 26], [3, 7]])
X_tf

```

Out[64]:
```
<tf.Variable 'Variable:0' shape=(3, 2) dtype=int32, numpy=
array([[25,  2],
       [ 5, 26],
       [ 3,  7]], dtype=int32)>
```

In [65]:
```
tf.rank(X_tf)

```

Out[65]:
```
<tf.Tensor: shape=(), dtype=int32, numpy=2>
```

In [66]:
```
tf.shape(X_tf)

```

Out[66]:
```
<tf.Tensor: shape=(2,), dtype=int32, numpy=array([3, 2], dtype=int32)>
```

In [67]:
```
X_tf[1,:]

```

Out[67]:
```
<tf.Tensor: shape=(2,), dtype=int32, numpy=array([ 5, 26], dtype=int32)>
```

**Return to slides here.**

### Higher-Rank Tensors[¶](#Higher-Rank-Tensors)

As an example, rank 4 tensors are common for images, where each dimension corresponds to:

1. Number of images in training batch, e.g., 32
2. Image height in pixels, e.g., 28 for [MNIST digits](http://yann.lecun.com/exdb/mnist/)
3. Image width in pixels, e.g., 28
4. Number of color channels, e.g., 3 for full-color images (RGB)

In [68]:
```
images_pt = torch.zeros([32, 28, 28, 3])

```

In [69]:
```
# images_pt

```

In [70]:
```
images_tf = tf.zeros([32, 28, 28, 3])

```

In [71]:
```
# images_tf

```

## Tensor

Tensor adalah objek matematika yang digunakan untuk merepresentasikan hubungan multilinear antara himpunan vektor, skalar, dan objek-objek multilinear lainnya dalam ruang vektor. Tensor memiliki berbagai orde, misalnya, tensor orde pertama adalah vektor, tensor orde kedua adalah matriks, dan tensor orde tinggi memiliki struktur yang lebih kompleks.

Berikut adalah contoh-contoh tensor:

### Tensor Orde Pertama (Vektor)

Vektor adalah tensor orde pertama yang memiliki satu set komponen. Contohnya:

$$
\mathbf{v} = \begin{bmatrix} v\_1 \\ v\_2 \\ v\_3 \end{bmatrix}
$$

### Tensor Orde Kedua (Matriks)

Matriks adalah tensor orde kedua yang memiliki dua set indeks. Contohnya:

$$
\mathbf{M} = \begin{bmatrix}
m\_{11} & m\_{12} & m\_{13} \\
m\_{21} & m\_{22} & m\_{23} \\
m\_{31} & m\_{32} & m\_{33}
\end{bmatrix}
$$

### Tensor Orde Tinggi

Tensor orde tinggi memiliki struktur yang lebih kompleks dengan lebih dari dua set indeks. Misalnya, tensor orde tiga dapat direpresentasikan sebagai kubus bilangan:

$$
\mathbf{T} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

Tensor memiliki banyak aplikasi dalam matematika, fisika, rekayasa, dan pembelajaran mesin, memungkinkan representasi yang kuat dari berbagai fenomena multidimensi.

**Return to slides here.**

## Segment 2: Common Tensor Operations[¶](#Segment-2:-Common-Tensor-Operations)

### Tensor Transposition

In [72]:
```
X

```

Out[72]:
```
array([[25,  2],
       [ 5, 26],
       [ 3,  7]])
```

In [73]:
```
X.T

```

Out[73]:
```
array([[25,  5,  3],
       [ 2, 26,  7]])
```

In [74]:
```
X_pt.T

```

Out[74]:
```
tensor([[25,  5,  3],
        [ 2, 26,  7]])
```

In [75]:
```
tf.transpose(X_tf) # less Pythonic

```

Out[75]:
```
<tf.Tensor: shape=(2, 3), dtype=int32, numpy=
array([[25,  5,  3],
       [ 2, 26,  7]], dtype=int32)>
```

### Basic Arithmetical Properties[¶](#Basic-Arithmetical-Properties)

Adding or multiplying with scalar applies operation to all elements and tensor shape is retained:

In [76]:
```
X*2

```

Out[76]:
```
array([[50,  4],
       [10, 52],
       [ 6, 14]])
```

In [77]:
```
X+2

```

Out[77]:
```
array([[27,  4],
       [ 7, 28],
       [ 5,  9]])
```

In [78]:
```
X*2+2

```

Out[78]:
```
array([[52,  6],
       [12, 54],
       [ 8, 16]])
```

In [79]:
```
X_pt*2+2 # Python operators are overloaded; could alternatively use torch.mul() or torch.add()

```

Out[79]:
```
tensor([[52,  6],
        [12, 54],
        [ 8, 16]])
```

In [80]:
```
torch.add(torch.mul(X_pt, 2), 2)

```

Out[80]:
```
tensor([[52,  6],
        [12, 54],
        [ 8, 16]])
```

In [81]:
```
X_tf*2+2 # Operators likewise overloaded; could equally use tf.multiply() tf.add()

```

Out[81]:
```
<tf.Tensor: shape=(3, 2), dtype=int32, numpy=
array([[52,  6],
       [12, 54],
       [ 8, 16]], dtype=int32)>
```

In [82]:
```
tf.add(tf.multiply(X_tf, 2), 2)

```

Out[82]:
```
<tf.Tensor: shape=(3, 2), dtype=int32, numpy=
array([[52,  6],
       [12, 54],
       [ 8, 16]], dtype=int32)>
```

If two tensors have the same size, operations are often by default applied element-wise. This is **not matrix multiplication**, which we'll cover later, but is rather called the **Hadamard product** or simply the **element-wise product**.

The mathematical notation is $A \odot X$

In [83]:
```
X

```

Out[83]:
```
array([[25,  2],
       [ 5, 26],
       [ 3,  7]])
```

In [84]:
```
A = X+2
A

```

Out[84]:
```
array([[27,  4],
       [ 7, 28],
       [ 5,  9]])
```

In [85]:
```
A + X

```

Out[85]:
```
array([[52,  6],
       [12, 54],
       [ 8, 16]])
```

In [86]:
```
A * X

```

Out[86]:
```
array([[675,   8],
       [ 35, 728],
       [ 15,  63]])
```

In [87]:
```
A_pt = X_pt + 2

```

In [88]:
```
A_pt + X_pt

```

Out[88]:
```
tensor([[52,  6],
        [12, 54],
        [ 8, 16]])
```

In [89]:
```
A_pt * X_pt

```

Out[89]:
```
tensor([[675,   8],
        [ 35, 728],
        [ 15,  63]])
```

In [90]:
```
A_tf = X_tf + 2

```

In [91]:
```
A_tf + X_tf

```

Out[91]:
```
<tf.Tensor: shape=(3, 2), dtype=int32, numpy=
array([[52,  6],
       [12, 54],
       [ 8, 16]], dtype=int32)>
```

In [92]:
```
A_tf * X_tf

```

Out[92]:
```
<tf.Tensor: shape=(3, 2), dtype=int32, numpy=
array([[675,   8],
       [ 35, 728],
       [ 15,  63]], dtype=int32)>
```

### Reduction

Calculating the sum across all elements of a tensor is a common operation. For example:

* For vector ***x*** of length *n*, we calculate $\sum\_{i=1}^{n} x\_i$
* For matrix ***X*** with *m* by *n* dimensions, we calculate $\sum\_{i=1}^{m} \sum\_{j=1}^{n} X\_{i,j}$

In [93]:
```
X

```

Out[93]:
```
array([[25,  2],
       [ 5, 26],
       [ 3,  7]])
```

In [94]:
```
X.sum()

```

Out[94]:
```
68
```

In [95]:
```
torch.sum(X_pt)

```

Out[95]:
```
tensor(68)
```

In [96]:
```
tf.reduce_sum(X_tf)

```

Out[96]:
```
<tf.Tensor: shape=(), dtype=int32, numpy=68>
```

In [97]:
```
# Can also be done along one specific axis alone, e.g.:
X.sum(axis=0) # summing over all rows

```

Out[97]:
```
array([33, 35])
```

In [98]:
```
X.sum(axis=1) # summing over all columns

```

Out[98]:
```
array([27, 31, 10])
```

In [99]:
```
torch.sum(X_pt, 0)

```

Out[99]:
```
tensor([33, 35])
```

In [100]:
```
tf.reduce_sum(X_tf, 1)

```

Out[100]:
```
<tf.Tensor: shape=(3,), dtype=int32, numpy=array([27, 31, 10], dtype=int32)>
```

Many other operations can be applied with reduction along all or a selection of axes, e.g.:

* maximum
* minimum
* mean
* product

They're fairly straightforward and used less often than summation, so you're welcome to look them up in library docs if you ever need them.

### The Dot Product[¶](#The-Dot-Product)

If we have two vectors (say, ***x*** and ***y***) with the same length *n*, we can calculate the dot product between them. This is annotated several different ways, including the following:

* $x \cdot y$
* $x^Ty$
* $\langle x,y \rangle$

Regardless which notation you use (I prefer the first), the calculation is the same; we calculate products in an element-wise fashion and then sum reductively across the products to a scalar value. That is, $x \cdot y = \sum\_{i=1}^{n} x\_i y\_i$

The dot product is ubiquitous in deep learning: It is performed at every artificial neuron in a deep neural network, which may be made up of millions (or orders of magnitude more) of these neurons.

In [101]:
```
x

```

Out[101]:
```
array([25,  2,  5])
```

In [102]:
```
y = np.array([0, 1, 2])
y

```

Out[102]:
```
array([0, 1, 2])
```

In [103]:
```
25*0 + 2*1 + 5*2

```

Out[103]:
```
12
```

In [104]:
```
np.dot(x, y)

```

Out[104]:
```
12
```

In [105]:
```
x_pt

```

Out[105]:
```
tensor([25,  2,  5])
```

In [106]:
```
y_pt = torch.tensor([0, 1, 2])
y_pt

```

Out[106]:
```
tensor([0, 1, 2])
```

In [107]:
```
np.dot(x_pt, y_pt)

```

Out[107]:
```
12
```

In [108]:
```
torch.dot(torch.tensor([25, 2, 5.]), torch.tensor([0, 1, 2.]))

```

Out[108]:
```
tensor(12.)
```

In [109]:
```
x_tf

```

Out[109]:
```
<tf.Variable 'Variable:0' shape=(3,) dtype=int32, numpy=array([25,  2,  5], dtype=int32)>
```

In [110]:
```
y_tf = tf.Variable([0, 1, 2])
y_tf

```

Out[110]:
```
<tf.Variable 'Variable:0' shape=(3,) dtype=int32, numpy=array([0, 1, 2], dtype=int32)>
```

In [111]:
```
tf.reduce_sum(tf.multiply(x_tf, y_tf))

```

Out[111]:
```
<tf.Tensor: shape=(), dtype=int32, numpy=12>
```

**Return to slides here.**

### Solving Linear Systems[¶](#Solving-Linear-Systems)

In the **Substitution** example, the two equations in the system are:
$$ y = 3x $$
$$ -5x + 2y = 2 $$

The second equation can be rearranged to isolate $y$:
$$ 2y = 2 + 5x $$
$$ y = \frac{2 + 5x}{2} = 1 + \frac{5x}{2} $$

In [112]:
```
x = np.linspace(-10, 10, 1000) # start, finish, n points

```

In [113]:
```
y1 = 3 * x

```

In [114]:
```
y2 = 1 + (5*x)/2

```

In [115]:
```
fig, ax = plt.subplots()
plt.xlabel('x')
plt.ylabel('y')
ax.set_xlim([0, 3])
ax.set_ylim([0, 8])
ax.plot(x, y1, c='green')
ax.plot(x, y2, c='brown')
plt.axvline(x=2, color='purple', linestyle='--')
_ = plt.axhline(y=6, color='purple', linestyle='--')

```

![No description has been provided for this image](data:image/png;base64...)

In the **Elimination** example, the two equations in the system are:
$$ 2x - 3y = 15 $$
$$ 4x + 10y = 14 $$

Both equations can be rearranged to isolate $y$. Starting with the first equation:
$$ -3y = 15 - 2x $$
$$ y = \frac{15 - 2x}{-3} = -5 + \frac{2x}{3} $$

Then for the second equation:
$$ 4x + 10y = 14 $$
$$ 2x + 5y = 7 $$
$$ 5y = 7 - 2x $$
$$ y = \frac{7 - 2x}{5} $$

In [116]:
```
y1 = -5 + (2*x)/3

```

In [117]:
```
y2 = (7-2*x)/5

```

In [118]:
```
fig, ax = plt.subplots()
plt.xlabel('x')
plt.ylabel('y')

# Add x and y axes:
plt.axvline(x=0, color='lightgray')
plt.axhline(y=0, color='lightgray')

ax.set_xlim([-2, 10])
ax.set_ylim([-6, 4])
ax.plot(x, y1, c='green')
ax.plot(x, y2, c='brown')
plt.axvline(x=6, color='purple', linestyle='--')
_ = plt.axhline(y=-1, color='purple', linestyle='--')

```

![No description has been provided for this image](data:image/png;base64...)

## Segment 3: Matrix Properties[¶](#Segment-3:-Matrix-Properties)

### Frobenius Norm[¶](#Frobenius-Norm)

In [119]:
```
X = np.array([[1, 2], [3, 4]])
X

```

Out[119]:
```
array([[1, 2],
       [3, 4]])
```

In [120]:
```
(1**2 + 2**2 + 3**2 + 4**2)**(1/2)

```

Out[120]:
```
5.477225575051661
```

In [121]:
```
np.linalg.norm(X) # same function as for vector L2 norm

```

Out[121]:
```
5.477225575051661
```

In [122]:
```
X_pt = torch.tensor([[1, 2], [3, 4.]]) # torch.norm() supports floats only

```

In [123]:
```
torch.norm(X_pt)

```

Out[123]:
```
tensor(5.4772)
```

In [124]:
```
X_tf = tf.Variable([[1, 2], [3, 4.]]) # tf.norm() also supports floats only

```

In [125]:
```
tf.norm(X_tf)

```

Out[125]:
```
<tf.Tensor: shape=(), dtype=float32, numpy=5.477226>
```

**Return to slides here.**

### Matrix Multiplication (with a Vector)[¶](#Matrix-Multiplication-(with-a-Vector))

In [126]:
```
A = np.array([[3, 4], [5, 6], [7, 8]])
A

```

Out[126]:
```
array([[3, 4],
       [5, 6],
       [7, 8]])
```

In [127]:
```
b = np.array([1, 2])
b

```

Out[127]:
```
array([1, 2])
```

In [128]:
```
np.dot(A, b) # even though technically dot products are between vectors only

```

Out[128]:
```
array([11, 17, 23])
```

In [129]:
```
A_pt = torch.tensor([[3, 4], [5, 6], [7, 8]])
A_pt

```

Out[129]:
```
tensor([[3, 4],
        [5, 6],
        [7, 8]])
```

In [130]:
```
b_pt = torch.tensor([1, 2])
b_pt

```

Out[130]:
```
tensor([1, 2])
```

In [131]:
```
torch.matmul(A_pt, b_pt) # like np.dot(), automatically infers dims in order to perform dot product, matvec, or matrix multiplication

```

Out[131]:
```
tensor([11, 17, 23])
```

In [132]:
```
A_tf = tf.Variable([[3, 4], [5, 6], [7, 8]])
A_tf

```

Out[132]:
```
<tf.Variable 'Variable:0' shape=(3, 2) dtype=int32, numpy=
array([[3, 4],
       [5, 6],
       [7, 8]], dtype=int32)>
```

In [133]:
```
b_tf = tf.Variable([1, 2])
b_tf

```

Out[133]:
```
<tf.Variable 'Variable:0' shape=(2,) dtype=int32, numpy=array([1, 2], dtype=int32)>
```

In [134]:
```
tf.linalg.matvec(A_tf, b_tf)

```

Out[134]:
```
<tf.Tensor: shape=(3,), dtype=int32, numpy=array([11, 17, 23], dtype=int32)>
```

**Return to slides here.**

### Matrix Multiplication (with Two Matrices)[¶](#Matrix-Multiplication-(with-Two-Matrices))

In [135]:
```
A

```

Out[135]:
```
array([[3, 4],
       [5, 6],
       [7, 8]])
```

In [136]:
```
B = np.array([[1, 9], [2, 0]])
B

```

Out[136]:
```
array([[1, 9],
       [2, 0]])
```

In [137]:
```
np.dot(A, B)

```

Out[137]:
```
array([[11, 27],
       [17, 45],
       [23, 63]])
```

Note that matrix multiplication is not "commutative" (i.e., $AB \neq BA$) so uncommenting the following line will throw a size mismatch error:

In [138]:
```
# np.dot(B, A)

```

In [139]:
```
B_pt = torch.from_numpy(B) # much cleaner than TF conversion
B_pt

```

Out[139]:
```
tensor([[1, 9],
        [2, 0]])
```

In [140]:
```
# another neat way to create the same tensor with transposition:
B_pt = torch.tensor([[1, 2], [9, 0]]).T
B_pt

```

Out[140]:
```
tensor([[1, 9],
        [2, 0]])
```

In [141]:
```
torch.matmul(A_pt, B_pt) # no need to change functions, unlike in TF

```

Out[141]:
```
tensor([[11, 27],
        [17, 45],
        [23, 63]])
```

In [142]:
```
B_tf = tf.convert_to_tensor(B, dtype=tf.int32)
B_tf

```

Out[142]:
```
<tf.Tensor: shape=(2, 2), dtype=int32, numpy=
array([[1, 9],
       [2, 0]], dtype=int32)>
```

In [143]:
```
tf.matmul(A_tf, B_tf)

```

Out[143]:
```
<tf.Tensor: shape=(3, 2), dtype=int32, numpy=
array([[11, 27],
       [17, 45],
       [23, 63]], dtype=int32)>
```

**Return to slides here.**

### Symmetric Matrices[¶](#Symmetric-Matrices)

In [144]:
```
X_sym = np.array([[0, 1, 2], [1, 7, 8], [2, 8, 9]])
X_sym

```

Out[144]:
```
array([[0, 1, 2],
       [1, 7, 8],
       [2, 8, 9]])
```

In [145]:
```
X_sym.T

```

Out[145]:
```
array([[0, 1, 2],
       [1, 7, 8],
       [2, 8, 9]])
```

In [146]:
```
X_sym.T == X_sym

```

Out[146]:
```
array([[ True,  True,  True],
       [ True,  True,  True],
       [ True,  True,  True]])
```

**Return to slides here.**

### Identity Matrices[¶](#Identity-Matrices)

In [147]:
```
I = torch.tensor([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
I

```

Out[147]:
```
tensor([[1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]])
```

In [148]:
```
x_pt = torch.tensor([25, 2, 5])
x_pt

```

Out[148]:
```
tensor([25,  2,  5])
```

In [149]:
```
torch.matmul(I, x_pt)

```

Out[149]:
```
tensor([25,  2,  5])
```

**Return to slides here.**

### Answers to Matrix Multiplication Qs[¶](#Answers-to-Matrix-Multiplication-Qs)

In [150]:
```
M_q = torch.tensor([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
M_q

```

Out[150]:
```
tensor([[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]])
```

In [151]:
```
V_q = torch.tensor([[-1, 1, -2], [0, 1, 2]]).T
V_q

```

Out[151]:
```
tensor([[-1,  0],
        [ 1,  1],
        [-2,  2]])
```

In [152]:
```
torch.matmul(M_q, V_q)

```

Out[152]:
```
tensor([[ -3,   5],
        [ -9,  14],
        [-15,  23]])
```

### Matrix Inversion[¶](#Matrix-Inversion)

In [153]:
```
X = np.array([[4, 2], [-5, -3]])
X

```

Out[153]:
```
array([[ 4,  2],
       [-5, -3]])
```

In [154]:
```
Xinv = np.linalg.inv(X)
Xinv

```

Out[154]:
```
array([[ 1.5,  1. ],
       [-2.5, -2. ]])
```

As a quick aside, let's prove that $X^{-1}X = I\_n$ as per the slides:

In [155]:
```
np.dot(Xinv, X)

```

Out[155]:
```
array([[1.00000000e+00, 3.33066907e-16],
       [0.00000000e+00, 1.00000000e+00]])
```

...and now back to solving for the unknowns in $w$:

In [156]:
```
y = np.array([4, -7])
y

```

Out[156]:
```
array([ 4, -7])
```

In [157]:
```
w = np.dot(Xinv, y)
w

```

Out[157]:
```
array([-1.,  4.])
```

Show that $y = Xw$:

In [158]:
```
np.dot(X, w)

```

Out[158]:
```
array([ 4., -7.])
```

**Geometric Visualization**

Recalling from the slides that the two equations in the system are:
$$ 4b + 2c = 4 $$
$$ -5b - 3c = -7 $$

Both equations can be rearranged to isolate a variable, say $c$. Starting with the first equation:
$$ 4b + 2c = 4 $$
$$ 2b + c = 2 $$
$$ c = 2 - 2b $$

Then for the second equation:
$$ -5b - 3c = -7 $$
$$ -3c = -7 + 5b $$
$$ c = \frac{-7 + 5b}{-3} = \frac{7 - 5b}{3} $$

In [159]:
```
b = np.linspace(-10, 10, 1000) # start, finish, n points

```

In [160]:
```
c1 = 2 - 2*b

```

In [161]:
```
c2 = (7-5*b)/3

```

In [162]:
```
fig, ax = plt.subplots()
plt.xlabel('b', c='darkorange')
plt.ylabel('c', c='brown')

plt.axvline(x=0, color='lightgray')
plt.axhline(y=0, color='lightgray')

ax.set_xlim([-2, 3])
ax.set_ylim([-1, 5])
ax.plot(b, c1, c='purple')
ax.plot(b, c2, c='purple')
plt.axvline(x=-1, color='green', linestyle='--')
_ = plt.axhline(y=4, color='green', linestyle='--')

```

![No description has been provided for this image](data:image/png;base64...)

In PyTorch and TensorFlow:

In [163]:
```
torch.inverse(torch.tensor([[4, 2], [-5, -3.]])) # float type

```

Out[163]:
```
tensor([[ 1.5000,  1.0000],
        [-2.5000, -2.0000]])
```

In [164]:
```
tf.linalg.inv(tf.Variable([[4, 2], [-5, -3.]])) # also float

```

Out[164]:
```
<tf.Tensor: shape=(2, 2), dtype=float32, numpy=
array([[ 1.4999999 ,  0.99999994],
       [-2.4999998 , -1.9999999 ]], dtype=float32)>
```

**Exercises**:

1. As done with NumPy above, use PyTorch to calculate $w$ from $X$ and $y$. Subsequently, confirm that $y = Xw$.
2. Repeat again, now using TensorFlow.

**Return to slides here.**

### Matrix Inversion Where No Solution[¶](#Matrix-Inversion-Where-No-Solution)

In [165]:
```
X = np.array([[-4, 1], [-8, 2]])
X

```

Out[165]:
```
array([[-4,  1],
       [-8,  2]])
```

In [166]:
```
# Uncommenting the following line results in a "singular matrix" error
# Xinv = np.linalg.inv(X)

```

Feel free to try inverting a non-square matrix; this will throw an error too.

**Return to slides here.**

### Orthogonal Matrices[¶](#Orthogonal-Matrices)

These are the solutions to Exercises 3 and 4 on **orthogonal matrices** from the slides.

For Exercise 3, to demonstrate the matrix $I\_3$ has mutually orthogonal columns, we show that the dot product of any pair of columns is zero:

In [167]:
```
I = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
I

```

Out[167]:
```
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]])
```

In [168]:
```
column_1 = I[:,0]
column_1

```

Out[168]:
```
array([1, 0, 0])
```

In [169]:
```
column_2 = I[:,1]
column_2

```

Out[169]:
```
array([0, 1, 0])
```

In [170]:
```
column_3 = I[:,2]
column_3

```

Out[170]:
```
array([0, 0, 1])
```

In [171]:
```
np.dot(column_1, column_2)

```

Out[171]:
```
0
```

In [172]:
```
np.dot(column_1, column_3)

```

Out[172]:
```
0
```

In [173]:
```
np.dot(column_2, column_3)

```

Out[173]:
```
0
```

We can use the `np.linalg.norm()` method from earlier in the notebook to demonstrate that each column of $I\_3$ has unit norm:

In [174]:
```
np.linalg.norm(column_1)

```

Out[174]:
```
1.0
```

In [175]:
```
np.linalg.norm(column_2)

```

Out[175]:
```
1.0
```

In [176]:
```
np.linalg.norm(column_3)

```

Out[176]:
```
1.0
```

Since the matrix $I\_3$ has mutually orthogonal columns and each column has unit norm, the column vectors of $I\_3$ are *orthonormal*. Since $I\_3^T = I\_3$, this means that the *rows* of $I\_3$ must also be orthonormal.

Since the columns and rows of $I\_3$ are orthonormal, $I\_3$ is an *orthogonal matrix*.

For Exercise 4, let's repeat the steps of Exercise 3 with matrix *K* instead of $I\_3$. We could use NumPy again, but for fun I'll use PyTorch instead. (You're welcome to try it with TensorFlow if you feel so inclined.)

In [177]:
```
K = torch.tensor([[2/3, 1/3, 2/3], [-2/3, 2/3, 1/3], [1/3, 2/3, -2/3]])
K

```

Out[177]:
```
tensor([[ 0.6667,  0.3333,  0.6667],
        [-0.6667,  0.6667,  0.3333],
        [ 0.3333,  0.6667, -0.6667]])
```

In [178]:
```
Kcol_1 = K[:,0]
Kcol_1

```

Out[178]:
```
tensor([ 0.6667, -0.6667,  0.3333])
```

In [179]:
```
Kcol_2 = K[:,1]
Kcol_2

```

Out[179]:
```
tensor([0.3333, 0.6667, 0.6667])
```

In [180]:
```
Kcol_3 = K[:,2]
Kcol_3

```

Out[180]:
```
tensor([ 0.6667,  0.3333, -0.6667])
```

In [181]:
```
torch.dot(Kcol_1, Kcol_2)

```

Out[181]:
```
tensor(0.)
```

In [182]:
```
torch.dot(Kcol_1, Kcol_3)

```

Out[182]:
```
tensor(0.)
```

In [183]:
```
torch.dot(Kcol_2, Kcol_3)

```

Out[183]:
```
tensor(0.)
```

We've now determined that the columns of $K$ are orthogonal.

In [184]:
```
torch.norm(Kcol_1)

```

Out[184]:
```
tensor(1.)
```

In [185]:
```
torch.norm(Kcol_2)

```

Out[185]:
```
tensor(1.)
```

In [186]:
```
torch.norm(Kcol_3)

```

Out[186]:
```
tensor(1.)
```

We've now determined that, in addition to being orthogonal, the columns of $K$ have unit norm, therefore they are orthonormal.

To ensure that $K$ is an orthogonal matrix, we would need to show that not only does it have orthonormal columns but it has orthonormal rows are as well. Since $K^T \neq K$, we can't prove this quite as straightforwardly as we did with $I\_3$.

One approach would be to repeat the steps we used to determine that $K$ has orthogonal columns with all of the matrix's rows (please feel free to do so). Alternatively, we can use an orthogonal matrix-specific equation from the slides, $A^TA = I$, to demonstrate that $K$ is orthogonal in a single line of code:

In [187]:
```
torch.matmul(K.T, K)

```

Out[187]:
```
tensor([[ 1.0000e+00, -3.3114e-09,  3.3114e-09],
        [-3.3114e-09,  1.0000e+00,  6.6227e-09],
        [ 3.3114e-09,  6.6227e-09,  1.0000e+00]])
```

Notwithstanding rounding errors that we can safely ignore, this confirms that $K^TK = I$ and therefore $K$ is an orthogonal matrix.