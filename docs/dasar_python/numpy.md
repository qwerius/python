

# Intro to NumPy for Data Computations


This is lab is performing data computations with NumPy. NumPy is a
scientific tool used to make mathematical computations easily.

In this lab, you will learn to:

-   [1. Create a NumPy array](#1)
-   [2. Select data: indexing and slicing of array](#2)
-   [3. Perform mathematical and other basic operations](#3)
-   [4. Perform basic statistics](#4)
-   [5. Manipulate data](#5)

</div>

<div id="2MG9Fii1d8Wy" class="cell markdown">

If you are using Google Colab, we do not need to install NumPy. We will
only have to import it just like this:

`import numpy as np`

If you are using local Jupyter notebooks, make sure you have it
installed already.

</div>

<div id="XzRyETjqGuLE" class="cell markdown">

[]{#1}

1. Creating an Array in NumPy {#1-creating-an-array-in-numpy}
-----------------------------

Array can either be vector or matrice. A vector is one dimensional
array, and a matrix is a two or more dimensional array.

</div>

<div id="rFx8BN4bfTWL" class="cell code" data-execution_count="1">

<div id="cb1" class="sourceCode">

``` {.sourceCode .python}
## Importing numpy

import numpy as np
```

</div>

</div>

<div id="tO9qq2UEGx6M" class="cell code" data-execution_count="2"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="490647a5-f8fb-4459-eeba-d3657d998afa">

<div id="cb2" class="sourceCode">

``` {.sourceCode .python}
## Creating a simple 1 dimensional array: vector
np.array([1,2,3,4,5])
```

</div>

<div class="output execute_result" data-execution_count="2">

    array([1, 2, 3, 4, 5])

</div>

</div>

<div id="o27WSEaWetl6" class="cell code" data-execution_count="3"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="3b3406cf-31f1-483f-c0f8-0715dabf5e01">

<div id="cb4" class="sourceCode">

``` {.sourceCode .python}
## Creating 2 dimensional array: matrix

np.array([(1,2,3,4,5), (6,7,8,9,10)])
```

</div>

<div class="output execute_result" data-execution_count="3">

    array([[ 1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10]])

</div>

</div>

<div id="m9sI1bT0fjMK" class="cell code" data-execution_count="4"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="c521c0c5-aba9-40da-aa51-ccd51e11a967">

<div id="cb6" class="sourceCode">

``` {.sourceCode .python}
## Creating an array from a list

num_list = [1,2,3,4,5]

np.array(num_list)
```

</div>

<div class="output execute_result" data-execution_count="4">

    array([1, 2, 3, 4, 5])

</div>

</div>

<div id="Jo2YqycbgiHV" class="cell code" data-execution_count="5"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="fb8b61f7-5a05-46d3-e688-ea82991deb2d">

<div id="cb8" class="sourceCode">

``` {.sourceCode .python}
print(np.array(num_list))
```

</div>

<div class="output stream stdout">

    [1 2 3 4 5]

</div>

</div>

<div id="11-generating-array" class="section cell markdown">

### 1.1 Generating Array

NumPy offers various options to generate an array depending on
particular need, such as:

-   Generating identity array
-   Generating zero array of a given size
-   Generating ones array with a given size
-   Generating an array in a given range
-   Generating an array with random values

</div>

<div id="OTjgeBrzaDQl" class="cell code" data-execution_count="6"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="2a2fd24e-5faf-4d51-c450-0249377a9842">

<div id="cb10" class="sourceCode">

``` {.sourceCode .python}
## Generating an identity array 

identity_array = np.identity(4)
print(identity_array)
```

</div>

<div class="output stream stdout">

    [[1. 0. 0. 0.]
     [0. 1. 0. 0.]
     [0. 0. 1. 0.]
     [0. 0. 0. 1.]]

</div>

</div>

<div id="yIt4o9lBgZqo" class="cell code" data-execution_count="7"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="6632591d-0203-433c-ba07-2376d8b25790">

<div id="cb12" class="sourceCode">

``` {.sourceCode .python}
## Generating an identity matrix of 1s

np.eye(4)
```

</div>

<div class="output execute_result" data-execution_count="7">

    array([[1., 0., 0., 0.],
           [0., 1., 0., 0.],
           [0., 0., 1., 0.],
           [0., 0., 0., 1.]])

</div>

</div>

<div id="Bo3PEZahhnGl" class="cell code" data-execution_count="8"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="903bfb68-772e-473f-9c7b-9c8461a1a7bf">

<div id="cb14" class="sourceCode">

``` {.sourceCode .python}
# You can multiply with any constant

np.eye(4) * 7
```

</div>

<div class="output execute_result" data-execution_count="8">

    array([[7., 0., 0., 0.],
           [0., 7., 0., 0.],
           [0., 0., 7., 0.],
           [0., 0., 0., 7.]])

</div>

</div>

<div id="4yZIO0FWhzv7" class="cell code" data-execution_count="9"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="15ad3530-0084-4c15-a356-42addb755332">

<div id="cb16" class="sourceCode">

``` {.sourceCode .python}
# Generating zero array of a given size
# 1 dimensional zero array
np.zeros(5)
```

</div>

<div class="output execute_result" data-execution_count="9">

    array([0., 0., 0., 0., 0.])

</div>

</div>

<div id="Ys3edWPOigeX" class="cell code" data-execution_count="10"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4017496b-ffd9-443a-fa1c-ae167ff817ac">

<div id="cb18" class="sourceCode">

``` {.sourceCode .python}
# Creating two dimensional array: pass the tuple of rows and columns' number
#np.zeros((rows, columns))

np.zeros((5,6))
```

</div>

<div class="output execute_result" data-execution_count="10">

    array([[0., 0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0., 0.],
           [0., 0., 0., 0., 0., 0.]])

</div>

</div>

<div id="l5hEgxuYiphg" class="cell code" data-execution_count="11"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f35fae1f-9cf3-44ee-bff2-9444e4aa28ae">

<div id="cb20" class="sourceCode">

``` {.sourceCode .python}
# Generating ones array of a given size
# 1 dimensional one array

np.ones(5)
```

</div>

<div class="output execute_result" data-execution_count="11">

    array([1., 1., 1., 1., 1.])

</div>

</div>

<div id="S9Tb6tjgjNIW" class="cell code" data-execution_count="12"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="8216c53d-f9e6-48f7-b106-2f7a71851ac0">

<div id="cb22" class="sourceCode">

``` {.sourceCode .python}
# Creating two dimensional ones array: pass the tuple of rows and columns' number
# np.ones((rows, columns))

np.ones((5,6))
```

</div>

<div class="output execute_result" data-execution_count="12">

    array([[1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1.],
           [1., 1., 1., 1., 1., 1.]])

</div>

</div>

<div id="iB2v6pfLjWIG" class="cell code" data-execution_count="13"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="dfe3950c-8b34-48c1-8af9-27dbc48a3af3">

<div id="cb24" class="sourceCode">

``` {.sourceCode .python}
## Generating an array in a given range or interval

np.arange(0,5)
```

</div>

<div class="output execute_result" data-execution_count="13">

    array([0, 1, 2, 3, 4])

</div>

</div>

<div id="IldBA00wjrMc" class="cell code" data-execution_count="14"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="68416c4e-5f56-4a48-df21-b62a767088b9">

<div id="cb26" class="sourceCode">

``` {.sourceCode .python}
## If you want to control the step size

np.arange(0,20,2)
```

</div>

<div class="output execute_result" data-execution_count="14">

    array([ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18])

</div>

</div>

<div id="kXJAdbO3j1Fv" class="cell code" data-execution_count="15"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f278ab62-d48e-4fda-b834-ca7570047ab5">

<div id="cb28" class="sourceCode">

``` {.sourceCode .python}
## You can also use linspace to generate an evenly spaced numbers in a given interval

np.linspace(0,20,5)
```

</div>

<div class="output execute_result" data-execution_count="15">

    array([ 0.,  5., 10., 15., 20.])

</div>

</div>

<div id="m7wEgM3LkMD7" class="cell code" data-execution_count="16"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="1b3fb3cd-c3d6-4596-e4c6-c91f21de6f73">

<div id="cb30" class="sourceCode">

``` {.sourceCode .python}
np.linspace(0,100,5)
```

</div>

<div class="output execute_result" data-execution_count="16">

    array([  0.,  25.,  50.,  75., 100.])

</div>

</div>

<div id="Gk1TCkP_kRKM" class="cell code" data-execution_count="17"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="1e1075c2-47dc-4abd-a784-5d9fb88f7802">

<div id="cb32" class="sourceCode">

``` {.sourceCode .python}
np.linspace(0,10,10)
```

</div>

<div class="output execute_result" data-execution_count="17">

    array([ 0.        ,  1.11111111,  2.22222222,  3.33333333,  4.44444444,
            5.55555556,  6.66666667,  7.77777778,  8.88888889, 10.        ])

</div>

</div>

<div id="422VmvKLkUIm" class="cell code" data-execution_count="18"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="3805deac-07ae-4d18-b478-e44ba12305d8">

<div id="cb34" class="sourceCode">

``` {.sourceCode .python}
## Generating an array with random values
# Create a 1D array with 4 random numbers

np.random.rand(4)
```

</div>

<div class="output execute_result" data-execution_count="18">

    array([0.68944519, 0.25872307, 0.7565542 , 0.68606423])

</div>

</div>

<div id="_In_Ydv-kt_j" class="cell code" data-execution_count="19"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="735b1c2e-da13-414e-d773-a56d20745ef7">

<div id="cb36" class="sourceCode">

``` {.sourceCode .python}
np.random.rand(4)

#We will not get teh same values
```

</div>

<div class="output execute_result" data-execution_count="19">

    array([0.41979127, 0.83292096, 0.50330078, 0.17331376])

</div>

</div>

<div id="EYopwsICk9ZI" class="cell code" data-execution_count="20"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="1c07d1f3-41bd-47cf-dac7-47f36a158666">

<div id="cb38" class="sourceCode">

``` {.sourceCode .python}
np.random.rand(4,5)
```

</div>

<div class="output execute_result" data-execution_count="20">

    array([[0.88627071, 0.55624758, 0.97198928, 0.74128787, 0.02940347],
           [0.05604389, 0.22823893, 0.52886436, 0.91998249, 0.01327729],
           [0.74984196, 0.00163448, 0.08632411, 0.08515202, 0.70213274],
           [0.67293052, 0.18162822, 0.38745748, 0.42938446, 0.56581595]])

</div>

</div>

<div id="6achS2SnlLg6" class="cell code" data-execution_count="21"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="974f6af6-0fa5-4e1d-f0ab-3c8b85514c78">

<div id="cb40" class="sourceCode">

``` {.sourceCode .python}
### Generate one random integer in a given range

np.random.randint(5,50)
```

</div>

<div class="output execute_result" data-execution_count="21">

    27

</div>

</div>

<div id="a9WGTceNlmxi" class="cell code" data-execution_count="22"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="ccd0a4ca-94e2-4249-81d7-c40d4eb1e992">

<div id="cb42" class="sourceCode">

``` {.sourceCode .python}
### Generate 10 random integers in a given range

np.random.randint(5,50,10)
```

</div>

<div class="output execute_result" data-execution_count="22">

    array([ 6, 44, 15,  7, 34, 32, 38, 20, 16, 27])

</div>

</div>

<div id="Nkz5qtZ2oUFt" class="cell code" data-execution_count="23"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f57e0bae-268a-4a8c-8dba-6d6e89ecb971">

<div id="cb44" class="sourceCode">

``` {.sourceCode .python}
## Random see to output the same random vaues at all run time 
import random

random.seed(10)

random.randint(5,50)
```

</div>

<div class="output execute_result" data-execution_count="23">

    41

</div>

</div>

<div id="k67GJ1K0NDU4" class="cell markdown">

[]{#2}

2. Data Selection: Indexing and slicing an Array {#2-data-selection-indexing-and-slicing-an-array}
------------------------------------------------

Indexing: Selecting individual elements from the array

Slicing: Selecting group of element from the array.

</div>

<div id="21-1d-array-indexing-and-selection"
class="section cell markdown">

### 2.1 1D Array Indexing and Selection

</div>

<div id="HEi3p6K5NWqn" class="cell code" data-execution_count="24">

<div id="cb46" class="sourceCode">

``` {.sourceCode .python}
# Creating a 1 dimensional vector

array_1d = np.array([1,2,3,4,5])
```

</div>

</div>

<div id="osAwL_bjNqUa" class="cell code" data-execution_count="25"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="00bd8764-37cd-43cd-b713-4ad2fd7d4947">

<div id="cb47" class="sourceCode">

``` {.sourceCode .python}
## Indexing: selcting an element from an array

array_1d[1]
```

</div>

<div class="output execute_result" data-execution_count="25">

    2

</div>

</div>

<div id="g0CV4DR4Pxrr" class="cell code" data-execution_count="26"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="03054ff3-f802-41d6-ed9a-948f00d67fd5">

<div id="cb49" class="sourceCode">

``` {.sourceCode .python}
array_1d [-1]
```

</div>

<div class="output execute_result" data-execution_count="26">

    5

</div>

</div>

<div id="JROW8R8dNxPb" class="cell code" data-execution_count="27"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="ad5890d9-a8a6-445b-b5bd-c4a468ddde62">

<div id="cb51" class="sourceCode">

``` {.sourceCode .python}
# Slicing: Returning the grou of element from an array

array_1d [2:4]
```

</div>

<div class="output execute_result" data-execution_count="27">

    array([3, 4])

</div>

</div>

<div id="22-2d-array-indexing-and-selection"
class="section cell markdown">

### 2.2 2D Array Indexing and Selection

</div>

<div id="0q6e67_2O60m" class="cell code" data-execution_count="28">

<div id="cb53" class="sourceCode">

``` {.sourceCode .python}
## Indexing 2D array

array_2d = np.array([[1,2,3],[4,5,6],[7,8,9]])
```

</div>

</div>

<div id="5v3HKOHoQP2t" class="cell code" data-execution_count="29"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="628fe748-a55c-400c-bf31-5a62848574d5">

<div id="cb54" class="sourceCode">

``` {.sourceCode .python}
## Selecting individual element
## array_2d[row][column]
## let's select 5..that is row 1, column 1 (we start from 0!!)

array_2d[1][1]
```

</div>

<div class="output execute_result" data-execution_count="29">

    5

</div>

</div>

<div id="cZhbAnqNR6jQ" class="cell code" data-execution_count="30"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="78b52c43-6dd0-4254-9e20-51bec4bf5c3c">

<div id="cb56" class="sourceCode">

``` {.sourceCode .python}
# let's select 9..that is row 2, column 2

array_2d[2][2]
```

</div>

<div class="output execute_result" data-execution_count="30">

    9

</div>

</div>

<div id="B0GnGJCOSDka" class="cell code" data-execution_count="31"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="31e447b6-3a57-453b-bfc2-bd6050f07632">

<div id="cb58" class="sourceCode">

``` {.sourceCode .python}
## Selecting whole row
#array_2d[row]

array_2d[1]
```

</div>

<div class="output execute_result" data-execution_count="31">

    array([4, 5, 6])

</div>

</div>

<div id="8OHO4oTHSROF" class="cell code" data-execution_count="32"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="ee50a860-3233-4fb3-bfa1-a71f2f70ea2e">

<div id="cb60" class="sourceCode">

``` {.sourceCode .python}
## Selecting group of elements in 2D array
## array_2d[rows, columns]..You select rows and columns

## Let's select the first two rows
## Rows :2 denotes that we are selecting all rows up to the second. 
## Columns : denotes that all columns are selected.


array_2d[:2,:]
```

</div>

<div class="output execute_result" data-execution_count="32">

    array([[1, 2, 3],
           [4, 5, 6]])

</div>

</div>

<div id="NIkqcMKr0xoJ" class="cell code" data-execution_count="33"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f7895d25-a1ed-4eae-d2d1-624e03541d2b">

<div id="cb62" class="sourceCode">

``` {.sourceCode .python}
## Selecting all first two rows and first two columns

array_2d[:2,0:2]
```

</div>

<div class="output execute_result" data-execution_count="33">

    array([[1, 2],
           [4, 5]])

</div>

</div>

<div id="HPwIW3HSTPPu" class="cell code" data-execution_count="34"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a3cfa1ba-237b-4201-e6f6-7616b8b4b8da">

<div id="cb64" class="sourceCode">

``` {.sourceCode .python}
## Above is same as

array_2d[0:2,:]
```

</div>

<div class="output execute_result" data-execution_count="34">

    array([[1, 2, 3],
           [4, 5, 6]])

</div>

</div>

<div id="hLC6LNsLTdNL" class="cell code" data-execution_count="35"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="61247100-b491-4a59-95a3-d2d344d83ea7">

<div id="cb66" class="sourceCode">

``` {.sourceCode .python}
## This will return all rows, and so all columns and so same as orginal array
array_2d[0:3,:]
```

</div>

<div class="output execute_result" data-execution_count="35">

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])

</div>

</div>

<div id="FNV1X16NUbpJ" class="cell code" data-execution_count="36"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="7f42ed6b-2ed0-406d-dd47-1907202f0b01">

<div id="cb68" class="sourceCode">

``` {.sourceCode .python}
## return the second row

array_2d[2,:]
```

</div>

<div class="output execute_result" data-execution_count="36">

    array([7, 8, 9])

</div>

</div>

<div id="XndtDh1NUmpp" class="cell code" data-execution_count="37"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="42db9c63-a4c5-47d0-8d9d-b6d7d87b61c3">

<div id="cb70" class="sourceCode">

``` {.sourceCode .python}
## return the second column

array_2d[:,2]
```

</div>

<div class="output execute_result" data-execution_count="37">

    array([3, 6, 9])

</div>

</div>

<div id="N9YTUJNjUxdd" class="cell code" data-execution_count="38"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="08078a90-9fe5-45f6-d618-5ba3a2ea7271">

<div id="cb72" class="sourceCode">

``` {.sourceCode .python}
## return the last two columns

array_2d[:,1:3]
```

</div>

<div class="output execute_result" data-execution_count="38">

    array([[2, 3],
           [5, 6],
           [8, 9]])

</div>

</div>

<div id="eOcqJEbxU6iR" class="cell code" data-execution_count="39"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a0fd909a-5704-42f7-b841-663a943d3f89">

<div id="cb74" class="sourceCode">

``` {.sourceCode .python}
## return the first column

array_2d[:,0]
```

</div>

<div class="output execute_result" data-execution_count="39">

    array([1, 4, 7])

</div>

</div>

<div id="OeKEcYRCVKdJ" class="cell code" data-execution_count="40"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="5b10b5a5-fdf5-47c0-bd2b-d577c51ed1ad">

<div id="cb76" class="sourceCode">

``` {.sourceCode .python}
## return the first row

array_2d[0,:]
```

</div>

<div class="output execute_result" data-execution_count="40">

    array([1, 2, 3])

</div>

</div>

<div id="mgnarYNHVXUT" class="cell markdown">

Indexing or selecting 2D array may seems confusing but when you try it
multiple times, you get the idea. If you are selecting an entire row,
that means the all the columns are selected (but not their all values).
And vice versa.

As shown below, we are selecting the first row, but as you can see all
columns are selected (:).

    array_2d[0,:]

</div>

<div id="23-conditional-selection" class="section cell markdown">

### 2.3 Conditional selection

You can use a condition to select values in an array. Let's use
comparison operators to select the values.

</div>

<div id="ANqjpFENWKCM" class="cell code" data-execution_count="41">

<div id="cb79" class="sourceCode">

``` {.sourceCode .python}
## Let's create an array

arr= np.array(([1,2,3],[4,5,6],[7,8,9]))
```

</div>

</div>

<div id="Y9qhO4QaZksn" class="cell code" data-execution_count="42"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="d31bfcf8-06b8-4b8d-d4da-c6478cd1d58a">

<div id="cb80" class="sourceCode">

``` {.sourceCode .python}
## Select all elements in an array which are less than 6

arr[arr <6 ]
```

</div>

<div class="output execute_result" data-execution_count="42">

    array([1, 2, 3, 4, 5])

</div>

</div>

<div id="GNY9S75DZusJ" class="cell code" data-execution_count="43"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="0642da71-f959-4063-8984-83b55e2bd909">

<div id="cb82" class="sourceCode">

``` {.sourceCode .python}
## Select all elements in an array which are greater than 6

arr[arr > 6]
```

</div>

<div class="output execute_result" data-execution_count="43">

    array([7, 8, 9])

</div>

</div>

<div id="REbbdFOBaBc6" class="cell code" data-execution_count="44"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="141149de-62ab-4427-ae0a-198117ebda1a">

<div id="cb84" class="sourceCode">

``` {.sourceCode .python}
## Select all even numbers in an array

arr[arr % 2 ==0 ]
```

</div>

<div class="output execute_result" data-execution_count="44">

    array([2, 4, 6, 8])

</div>

</div>

<div id="ZXeWnQ6maY8A" class="cell code" data-execution_count="45"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="e8e92e29-2fe7-4c48-9bc5-0bab5cab8a57">

<div id="cb86" class="sourceCode">

``` {.sourceCode .python}
## Select all odd numbers in an array

arr[arr % 2 !=0 ]
```

</div>

<div class="output execute_result" data-execution_count="45">

    array([1, 3, 5, 7, 9])

</div>

</div>

<div id="TQKfIyGzaeAD" class="cell code" data-execution_count="46"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="72fa895b-2367-4c56-b3fc-76d07a834d17">

<div id="cb88" class="sourceCode">

``` {.sourceCode .python}
## You can also have multiple conditions

## In all odd numbers, return values which are greater or equal to 5


arr[(arr % 2 !=0 ) & (arr >=5) ]
```

</div>

<div class="output execute_result" data-execution_count="46">

    array([5, 7, 9])

</div>

</div>

<div id="LvQZsD8UbL2I" class="cell code" data-execution_count="47"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="dbe32118-6aa3-4b43-ee37-16eff39839e1">

<div id="cb90" class="sourceCode">

``` {.sourceCode .python}
## Using logical selection, you can also return True for values in which a given condition is met in an array

arr > 5
```

</div>

<div class="output execute_result" data-execution_count="47">

    array([[False, False, False],
           [False, False,  True],
           [ True,  True,  True]])

</div>

</div>

<div id="HGCXwMc-byoh" class="cell code" data-execution_count="48"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a8003057-2167-4c15-c240-4c56dcbe3e74">

<div id="cb92" class="sourceCode">

``` {.sourceCode .python}
## We do not have 0 in our array

arr == 0
```

</div>

<div class="output execute_result" data-execution_count="48">

    array([[False, False, False],
           [False, False, False],
           [False, False, False]])

</div>

</div>

<div id="kKTlmkV1cM1F" class="cell markdown">

[]{#3}

3. Basic Array Operations {#3-basic-array-operations}
-------------------------

### 3.1 Quick Arithmetic operation: Addition, Subtraction, Multiplication, Division, Squaring {#31-quick-arithmetic-operation-addition-subtraction-multiplication-division-squaring}

</div>

<div id="kVyV9yZEcphH" class="cell code" data-execution_count="49">

<div id="cb94" class="sourceCode">

``` {.sourceCode .python}
# Let's create two arrays

arr1 = np.arange(0,5)
arr2 = np.arange(6,11)
```

</div>

</div>

<div id="k-XbCI7DdGSC" class="cell code" data-execution_count="50"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="b0e463c1-3906-41c7-f98d-ec53596eadc1">

<div id="cb95" class="sourceCode">

``` {.sourceCode .python}
## Addition

arr1 + arr2
```

</div>

<div class="output execute_result" data-execution_count="50">

    array([ 6,  8, 10, 12, 14])

</div>

</div>

<div id="HRO_en3BeOEr" class="cell code" data-execution_count="51"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="afba0120-901e-4c4e-8add-87aa4c326f34">

<div id="cb97" class="sourceCode">

``` {.sourceCode .python}
## Subtraction

arr2 - arr1
```

</div>

<div class="output execute_result" data-execution_count="51">

    array([6, 6, 6, 6, 6])

</div>

</div>

<div id="nQB3wfgneak3" class="cell code" data-execution_count="52"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="b1e9b19f-44f5-4298-e478-ff4f07c2a231">

<div id="cb99" class="sourceCode">

``` {.sourceCode .python}
## Multiplication

arr1 * arr2
```

</div>

<div class="output execute_result" data-execution_count="52">

    array([ 0,  7, 16, 27, 40])

</div>

</div>

<div id="-N1pyoXjej_Y" class="cell code" data-execution_count="53"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4ca31127-9cf6-4147-d165-8f51647a3fa0">

<div id="cb101" class="sourceCode">

``` {.sourceCode .python}
## Division

arr1 / arr2
```

</div>

<div class="output execute_result" data-execution_count="53">

    array([0.        , 0.14285714, 0.25      , 0.33333333, 0.4       ])

</div>

</div>

<div id="De6gp_lvetPf" class="cell code" data-execution_count="54"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="aa0b12f5-ad61-4e88-e2ac-50d79ade09e1">

<div id="cb103" class="sourceCode">

``` {.sourceCode .python}
## Squaring

arr1 ** 2
```

</div>

<div class="output execute_result" data-execution_count="54">

    array([ 0,  1,  4,  9, 16])

</div>

</div>

<div id="32-universal-functions" class="section cell markdown">

### 3.2 Universal functions

NumPy universal functions (`ufunc`) allows to compute math,
trigonometric, logical and comparison operations such as sin, cos, tan,
exponent(exp), log, square, greater, less, etc...

</div>

<div id="aJfRCWLcfwTr" class="cell code" data-execution_count="55">

<div id="cb105" class="sourceCode">

``` {.sourceCode .python}
## creating two arrays 

arr1 = np.arange(0,5)
arr2 = np.arange(6,11)
```

</div>

</div>

<div id="a3QsqIJ4NNxf" class="cell code" data-execution_count="56"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="094569fa-3458-4022-f4e2-a31aaca28f8e">

<div id="cb106" class="sourceCode">

``` {.sourceCode .python}
## Calculating the sum of two arrays

np.add(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="56">

    array([ 6,  8, 10, 12, 14])

</div>

</div>

<div id="43f5eAagNb3J" class="cell code" data-execution_count="57"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="e9c826cb-26ff-437d-cfe3-191c43fb49f9">

<div id="cb108" class="sourceCode">

``` {.sourceCode .python}
## Calculating the product of two arrays

np.multiply(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="57">

    array([ 0,  7, 16, 27, 40])

</div>

</div>

<div id="NBG0EPBuNiDZ" class="cell code" data-execution_count="58"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="3063e564-8824-41cb-f07d-af0b83c1fe0f">

<div id="cb110" class="sourceCode">

``` {.sourceCode .python}
## Calculating the difference between two arrays

np.subtract(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="58">

    array([-6, -6, -6, -6, -6])

</div>

</div>

<div id="XpgZ6O50NwYa" class="cell code" data-execution_count="59"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="5578dc8b-be68-4172-ca25-b34fd96afbb1">

<div id="cb112" class="sourceCode">

``` {.sourceCode .python}
## Calculating the division of two arrays

np.divide(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="59">

    array([0.        , 0.14285714, 0.25      , 0.33333333, 0.4       ])

</div>

</div>

<div id="K3Bc6goeHIch" class="cell code" data-execution_count="60"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="63ea938d-3a71-4066-fc7a-26f8a60ed205">

<div id="cb114" class="sourceCode">

``` {.sourceCode .python}
## Calculating the sin of arr1

np.sin(arr1)
```

</div>

<div class="output execute_result" data-execution_count="60">

    array([ 0.        ,  0.84147098,  0.90929743,  0.14112001, -0.7568025 ])

</div>

</div>

<div id="Zj05py4IIugZ" class="cell code" data-execution_count="61"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="6b4eb73e-7d44-4650-81a7-80b5c856d4b1">

<div id="cb116" class="sourceCode">

``` {.sourceCode .python}
np.sin([0,45,90,180])
```

</div>

<div class="output execute_result" data-execution_count="61">

    array([ 0.        ,  0.85090352,  0.89399666, -0.80115264])

</div>

</div>

<div id="fDo3b-qRIYHR" class="cell code" data-execution_count="62"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="52ad4b89-32ad-4b80-e430-fc5b337fb25e">

<div id="cb118" class="sourceCode">

``` {.sourceCode .python}
## Calculating the cosine of arr 1

np.cos(arr1)
```

</div>

<div class="output execute_result" data-execution_count="62">

    array([ 1.        ,  0.54030231, -0.41614684, -0.9899925 , -0.65364362])

</div>

</div>

<div id="FsirUyFCIit9" class="cell code" data-execution_count="63"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="402832da-0a17-4a08-d79d-007ab61a8014">

<div id="cb120" class="sourceCode">

``` {.sourceCode .python}
np.cos([0,45,90,180])
```

</div>

<div class="output execute_result" data-execution_count="63">

    array([ 1.        ,  0.52532199, -0.44807362, -0.59846007])

</div>

</div>

<div id="XQR8m4HxI1E8" class="cell code" data-execution_count="64"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="d6434e9b-5527-4466-ac58-6455b3aa15ed">

<div id="cb122" class="sourceCode">

``` {.sourceCode .python}
## Calculating the tangent(tan) of the array

np.tan(arr2)
```

</div>

<div class="output execute_result" data-execution_count="64">

    array([-0.29100619,  0.87144798, -6.79971146, -0.45231566,  0.64836083])

</div>

</div>

<div id="PIOUpa_gJFuv" class="cell code" data-execution_count="65"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="081b23b0-c74d-4862-b27b-d91cbbffb002">

<div id="cb124" class="sourceCode">

``` {.sourceCode .python}
## Calculating the logarithmic(log) of the array

np.log(arr2)
```

</div>

<div class="output execute_result" data-execution_count="65">

    array([1.79175947, 1.94591015, 2.07944154, 2.19722458, 2.30258509])

</div>

</div>

<div id="b_QsfHLDJVyq" class="cell code" data-execution_count="66"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="5c73fd2b-3c9a-4921-ab7c-e40b8d20b8c6">

<div id="cb126" class="sourceCode">

``` {.sourceCode .python}
## Calculating the exponent(exp or e^) of the array

np.exp(arr2)
```

</div>

<div class="output execute_result" data-execution_count="66">

    array([  403.42879349,  1096.63315843,  2980.95798704,  8103.08392758,
           22026.46579481])

</div>

</div>

<div id="s2wDCGMfJfE-" class="cell code" data-execution_count="67"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4ed21980-3170-4c47-e1b8-4d268af93560">

<div id="cb128" class="sourceCode">

``` {.sourceCode .python}
## Calculating the power  of the array
## Array 1 is powered array 2...0^6=0, 1^7=1, 2^8=256, etc..

np.power(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="67">

    array([      0,       1,     256,   19683, 1048576])

</div>

</div>

<div id="bYGyzm0lKh0b" class="cell code" data-execution_count="68"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="240eb78c-74db-45e8-f2e2-a314d1e54e2d">

<div id="cb130" class="sourceCode">

``` {.sourceCode .python}
## Comparison operations return true or false
## Arr 1 is less than arr 2...so that's false

np.greater(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="68">

    array([False, False, False, False, False])

</div>

</div>

<div id="rXJJKyJhLfy4" class="cell code" data-execution_count="69"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="cb9c2426-1068-464c-bae3-f57bf2f5614d">

<div id="cb132" class="sourceCode">

``` {.sourceCode .python}
## Comparison operations return true or false
## Arr 1 is less than arr 2...so that's true

np.less(arr1, arr2)
```

</div>

<div class="output execute_result" data-execution_count="69">

    array([ True,  True,  True,  True,  True])

</div>

</div>

<div id="6a6Agz1yOAvn" class="cell markdown">

[]{#4}

4. Basic Statistics {#4-basic-statistics}
-------------------

With NumPy, we can compute the basic statistics such as the standard
deviation (std), variance (var),mean, median, minimum value, maximum
value of an array.

More about NumPy statistics:
<https://numpy.org/doc/stable/reference/routines.statistics.html#order-statistics>

</div>

<div id="7ZQedUDGHW60" class="cell code" data-execution_count="70"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="9828d039-3399-4ac4-ff6a-00b5a9b461d4">

<div id="cb134" class="sourceCode">

``` {.sourceCode .python}
## Creating an array 

arr = np.arange(0,5)
arr
```

</div>

<div class="output execute_result" data-execution_count="70">

    array([0, 1, 2, 3, 4])

</div>

</div>

<div id="41-standard-deviation" class="section cell markdown">

### 4.1 Standard Deviation

</div>

<div id="t-s8L0VJQtpA" class="cell code" data-execution_count="71"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="716cfeeb-d69b-47e4-cf28-f58fadf1c97b">

<div id="cb136" class="sourceCode">

``` {.sourceCode .python}
## calculating the standard deviation of the array
## Std is how much an element of the array deviates from the mean of the array

np.std(arr)
```

</div>

<div class="output execute_result" data-execution_count="71">

    1.4142135623730951

</div>

</div>

<div id="PhWndlxuHnrK" class="cell code" data-execution_count="72"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="608573b6-e1a4-49f6-864b-bfdbc123e578">

<div id="cb138" class="sourceCode">

``` {.sourceCode .python}
arr2 = np.array([[3,4], [5,6]])

np.std(arr2)
```

</div>

<div class="output execute_result" data-execution_count="72">

    1.118033988749895

</div>

</div>

<div id="IH2BFcuZH_jc" class="cell code" data-execution_count="73"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="530fd53e-1acd-4a70-f401-6f9455641b32">

<div id="cb140" class="sourceCode">

``` {.sourceCode .python}
## Specifying the axis
## By default, the std is computed on the flattened values (or converted into a single column vector)

np.std(arr2, axis=0)
```

</div>

<div class="output execute_result" data-execution_count="73">

    array([1., 1.])

</div>

</div>

<div id="fSCEMvzNIdpZ" class="cell code" data-execution_count="74"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="691b6163-8eed-4dfc-ae99-72fe0541fea6">

<div id="cb142" class="sourceCode">

``` {.sourceCode .python}
np.std(arr2, axis=1)
```

</div>

<div class="output execute_result" data-execution_count="74">

    array([0.5, 0.5])

</div>

</div>

<div id="42-variance" class="section cell markdown">

### 4.2 Variance

</div>

<div id="3DavtYCiIjDY" class="cell code" data-execution_count="75"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="9735e45c-c03b-40c6-888b-e9da82cd2b55">

<div id="cb144" class="sourceCode">

``` {.sourceCode .python}
## Calculating the Variance (var)

arr = np.arange(0,5)

np.var(arr)
```

</div>

<div class="output execute_result" data-execution_count="75">

    2.0

</div>

</div>

<div id="Av4TeSiBI0c9" class="cell code" data-execution_count="76"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="985ebbf3-f3bc-4604-fae6-e5fee28ec26c">

<div id="cb146" class="sourceCode">

``` {.sourceCode .python}
np.var(arr2)
```

</div>

<div class="output execute_result" data-execution_count="76">

    1.25

</div>

</div>

<div id="43-mean" class="section cell markdown">

### 4.3 Mean

</div>

<div id="O1rlEIMiI5aO" class="cell code" data-execution_count="77"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a20c288f-9003-43b3-e240-ad33cda96223">

<div id="cb148" class="sourceCode">

``` {.sourceCode .python}
## Calculating the mean of the array

np.mean(arr)
```

</div>

<div class="output execute_result" data-execution_count="77">

    2.0

</div>

</div>

<div id="evY84_vLJqe_" class="cell code" data-execution_count="78"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="1d3571d4-3f8f-477e-bb12-61e2282995d3">

<div id="cb150" class="sourceCode">

``` {.sourceCode .python}
## mean gives the same results as the average
np.average(arr)
```

</div>

<div class="output execute_result" data-execution_count="78">

    2.0

</div>

</div>

<div id="44-median" class="section cell markdown">

### 4.4 Median

</div>

<div id="O3ZIMTETJIyk" class="cell code" data-execution_count="79"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="96fd4a52-04c4-495d-ecf7-f173bc160e1a">

<div id="cb152" class="sourceCode">

``` {.sourceCode .python}
## Calculating the median of the array

np.median(arr)
```

</div>

<div class="output execute_result" data-execution_count="79">

    2.0

</div>

</div>

<div id="43-minimum-and-maximum" class="section cell markdown">

### 4.3 Minimum and Maximum

</div>

<div id="XIoaY7s_JoQB" class="cell code" data-execution_count="80"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="acc350e5-7876-40b2-b5f9-24da2add27ac">

<div id="cb154" class="sourceCode">

``` {.sourceCode .python}
## Calculating the minimum value

np.min(arr)
```

</div>

<div class="output execute_result" data-execution_count="80">

    0

</div>

</div>

<div id="mgjxq1w1KAiH" class="cell code" data-execution_count="81"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="ed372591-6272-43f6-a03b-543785ce58ca">

<div id="cb156" class="sourceCode">

``` {.sourceCode .python}
## Calculating the maximum value

np.max(arr)
```

</div>

<div class="output execute_result" data-execution_count="81">

    4

</div>

</div>

<div id="pZ3JuNw7MwaS" class="cell markdown">

[]{#5}

5. Data Manipulation {#5-data-manipulation}
--------------------

Data Manipulation is important step in Machine Learning project. Let's
some of NumPy methods and functions which are useful in data
manipulation.

</div>

<div id="51-shape-of-the-array" class="section cell markdown">

### 5.1 Shape of the array

</div>

<div id="YG_YOgh5kwdL" class="cell code" data-execution_count="82">

<div id="cb158" class="sourceCode">

``` {.sourceCode .python}
## Creating an array 

arr1 = np.arange(0,10)
arr2 = np.array(([1,2,3],[4,5,6],[7,8,9]))
```

</div>

</div>

<div id="cubkv1UCnEbW" class="cell code" data-execution_count="83"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f8733420-89e4-4147-f7f9-6525290d9851">

<div id="cb159" class="sourceCode">

``` {.sourceCode .python}
arr1
```

</div>

<div class="output execute_result" data-execution_count="83">

    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

</div>

</div>

<div id="7Q3PRJN3nIZ3" class="cell code" data-execution_count="84"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f292d52b-2e0e-4205-d27f-d95570a5e852">

<div id="cb161" class="sourceCode">

``` {.sourceCode .python}
arr2
```

</div>

<div class="output execute_result" data-execution_count="84">

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])

</div>

</div>

<div id="YBLLedf7kzJI" class="cell code" data-execution_count="85"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="3a10664b-70ac-423c-f005-8929979ae309">

<div id="cb163" class="sourceCode">

``` {.sourceCode .python}
np.shape(arr1)
```

</div>

<div class="output execute_result" data-execution_count="85">

    (10,)

</div>

</div>

<div id="0LoJBrQSk9vk" class="cell code" data-execution_count="86"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="b15f5438-702b-4cc7-bd9a-0b4665516e31">

<div id="cb165" class="sourceCode">

``` {.sourceCode .python}
np.shape(arr2)
```

</div>

<div class="output execute_result" data-execution_count="86">

    (3, 3)

</div>

</div>

<div id="C5vsZtE1lSM2" class="cell code" data-execution_count="87"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4cebb28f-dbfa-43c1-83ec-ef07a2580a5e">

<div id="cb167" class="sourceCode">

``` {.sourceCode .python}
arr2.shape
```

</div>

<div class="output execute_result" data-execution_count="87">

    (3, 3)

</div>

</div>

<div id="52-shaping-the-array" class="section cell markdown">

### 5.2 Shaping the Array

`np.reshape(array_name, newshape=(rows, columns)` or
`array_name.reshape(rows, columns)` change the shape of the array. The
rows and columns of the new shape has to comform with the existing data
of the array. Otherwise, it won't work. Take an example, you can convert
(3,3) array into (1,9) but you can't convert it into (5,5).

</div>

<div id="GkU2npH-le_9" class="cell code" data-execution_count="88"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a4ac26c0-db89-4b11-e1c9-46dc5a71785f">

<div id="cb169" class="sourceCode">

``` {.sourceCode .python}
### arr1 is (10,)....10 rows, 1 column. Let's reshape it into (5,2)
np.reshape(arr1, newshape=(5,2))
```

</div>

<div class="output execute_result" data-execution_count="88">

    array([[0, 1],
           [2, 3],
           [4, 5],
           [6, 7],
           [8, 9]])

</div>

</div>

<div id="52ls1fjDl9m3" class="cell code" data-execution_count="89"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4bdca11e-b2af-4924-de31-24f29863f375">

<div id="cb171" class="sourceCode">

``` {.sourceCode .python}
## This would also work
arr1.reshape(5,2)
```

</div>

<div class="output execute_result" data-execution_count="89">

    array([[0, 1],
           [2, 3],
           [4, 5],
           [6, 7],
           [8, 9]])

</div>

</div>

<div id="Mh8_zejvmnRs" class="cell code" data-execution_count="90"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="f720d0f5-1a55-41ed-c9ca-8d094f8405a2">

<div id="cb173" class="sourceCode">

``` {.sourceCode .python}
arr2_reshaped = arr2.reshape(9,1)
arr2_reshaped.T
```

</div>

<div class="output execute_result" data-execution_count="90">

    array([[1, 2, 3, 4, 5, 6, 7, 8, 9]])

</div>

</div>

<div id="gD1_rWyumsxX" class="cell code" data-execution_count="91"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="97d95a9f-c806-46e5-86c2-dd660d7465f3">

<div id="cb175" class="sourceCode">

``` {.sourceCode .python}
arr2_reshaped.reshape(3,3)
```

</div>

<div class="output execute_result" data-execution_count="91">

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])

</div>

</div>

<div id="Iyfh1tWr2VTe" class="cell code" data-execution_count="92"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="fcbac3c5-86b0-41fd-c37a-eb350e22ce6b">

<div id="cb177" class="sourceCode">

``` {.sourceCode .python}
## np.resize can also be used to change the shape of the array into a specific size

np.resize(arr2, (1,9))
```

</div>

<div class="output execute_result" data-execution_count="92">

    array([[1, 2, 3, 4, 5, 6, 7, 8, 9]])

</div>

</div>

<div id="53-copying-array" class="section cell markdown">

### 5.3 Copying array

</div>

<div id="MGacJLaVoZq7" class="cell code" data-execution_count="93"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="298de278-da88-4f7c-f891-64e37e3b81ea">

<div id="cb179" class="sourceCode">

``` {.sourceCode .python}
arr1 = np.arange(0,10)
arr1
```

</div>

<div class="output execute_result" data-execution_count="93">

    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

</div>

</div>

<div id="ahDMt-anohhh" class="cell code" data-execution_count="94"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="c65d2739-0914-41b9-9b0c-15e3ae86f2d3">

<div id="cb181" class="sourceCode">

``` {.sourceCode .python}
arr1_copy = arr1.copy()
arr1_copy
```

</div>

<div class="output execute_result" data-execution_count="94">

    array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

</div>

</div>

<div id="WQy97R5Wo375" class="cell code" data-execution_count="95">

<div id="cb183" class="sourceCode">

``` {.sourceCode .python}
## Copying the values of one array into the other 

## Let's copy array 2 into 1 --they have the same shape

arr1 = np.arange(0,6)
arr2 = np.arange(6,12)
```

</div>

</div>

<div id="DdE9pVVdppQ8" class="cell code" data-execution_count="96">

<div id="cb184" class="sourceCode">

``` {.sourceCode .python}
## arr1 is destination, arr2 is source
np.copyto(arr1, arr2)
```

</div>

</div>

<div id="GhzDAFp2qFgu" class="cell code" data-execution_count="97"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="801466ef-27ec-4e4d-9678-7b5793356227">

<div id="cb185" class="sourceCode">

``` {.sourceCode .python}
arr1
```

</div>

<div class="output execute_result" data-execution_count="97">

    array([ 6,  7,  8,  9, 10, 11])

</div>

</div>

<div id="54-joining-arrays" class="section cell markdown">

### 5.4 Joining arrays

</div>

<div id="yVm7cXphrLQD" class="cell code" data-execution_count="98">

<div id="cb187" class="sourceCode">

``` {.sourceCode .python}
### Creating two arrays

arr1 = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2 = np.array([[10,11,12]])
```

</div>

</div>

<div id="h5TXwNZErU6g" class="cell code" data-execution_count="99"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="49113d3c-87dc-4643-8f43-d0be74c5460d">

<div id="cb188" class="sourceCode">

``` {.sourceCode .python}
## Joining them

np.concatenate((arr1, arr2))
```

</div>

<div class="output execute_result" data-execution_count="99">

    array([[ 1,  2,  3],
           [ 4,  5,  6],
           [ 7,  8,  9],
           [10, 11, 12]])

</div>

</div>

<div id="f36TbVcsrVRg" class="cell code" data-execution_count="100"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="4e785c77-4203-4bee-fe05-cddd8654147c">

<div id="cb190" class="sourceCode">

``` {.sourceCode .python}
## Transposing arr2
## arr2.T is transpose operation

np.concatenate((arr1, arr2.T), axis=1)
```

</div>

<div class="output execute_result" data-execution_count="100">

    array([[ 1,  2,  3, 10],
           [ 4,  5,  6, 11],
           [ 7,  8,  9, 12]])

</div>

</div>

<div id="4XrLudetsvl0" class="cell code" data-execution_count="101"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="93f316b1-0fa9-4696-9455-395ddc16662b">

<div id="cb192" class="sourceCode">

``` {.sourceCode .python}
### Setting axis to none flatten the array

np.concatenate((arr1, arr2), axis=None)
```

</div>

<div class="output execute_result" data-execution_count="101">

    array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12])

</div>

</div>

<div id="bVQMnJais7_6" class="cell code" data-execution_count="102"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="ab2f34c0-6e2a-49b9-b6fe-1ff22d264289">

<div id="cb194" class="sourceCode">

``` {.sourceCode .python}
### Joining two 1Ds array into 2D array: Stacking

# Column stacking

arr1 = np.arange(0,6)
arr2 = np.arange(6,12)

np.column_stack((arr1, arr2))
```

</div>

<div class="output execute_result" data-execution_count="102">

    array([[ 0,  6],
           [ 1,  7],
           [ 2,  8],
           [ 3,  9],
           [ 4, 10],
           [ 5, 11]])

</div>

</div>

<div id="utJCDp08toet" class="cell code" data-execution_count="103"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="aad307f9-3caf-448d-cd28-4cc062ef8cc5">

<div id="cb196" class="sourceCode">

``` {.sourceCode .python}
## Row stacking 

np.row_stack((arr1, arr2))
```

</div>

<div class="output execute_result" data-execution_count="103">

    array([[ 0,  1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10, 11]])

</div>

</div>

<div id="55-splitting-arrays" class="section cell markdown">

### 5.5 Splitting arrays

</div>

<div id="uPQ3pHuyuJrb" class="cell code" data-execution_count="104"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="1056b6ad-49ee-4234-cc10-0a7cc2a640b2">

<div id="cb198" class="sourceCode">

``` {.sourceCode .python}
arr1 = np.arange(0,6)
arr1
```

</div>

<div class="output execute_result" data-execution_count="104">

    array([0, 1, 2, 3, 4, 5])

</div>

</div>

<div id="axVESXYzufxz" class="cell code" data-execution_count="105"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a3ae64d1-2374-44e2-d99e-ba6113a36b5e">

<div id="cb200" class="sourceCode">

``` {.sourceCode .python}
### Splitting the array into two arrays

np.split(arr1, 2)
```

</div>

<div class="output execute_result" data-execution_count="105">

    [array([0, 1, 2]), array([3, 4, 5])]

</div>

</div>

<div id="NYw7-G0Ovs9u" class="cell code" data-execution_count="106"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="a15d5f79-a209-401b-9a7d-74e6216acbde">

<div id="cb202" class="sourceCode">

``` {.sourceCode .python}
### Splitting the array into three arrays

np.split(arr1, 3)
```

</div>

<div class="output execute_result" data-execution_count="106">

    [array([0, 1]), array([2, 3]), array([4, 5])]

</div>

</div>

<div id="56-adding-and-repeating-elements-in-an-array"
class="section cell markdown">

### 5.6 Adding and repeating elements in an array

</div>

<div id="tnDE_kxxxPZI" class="cell code" data-execution_count="107"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="71daa4f8-fef7-46ba-ea2c-3d6c0d32af58">

<div id="cb204" class="sourceCode">

``` {.sourceCode .python}
arr1 = np.arange(0,6)
arr1
```

</div>

<div class="output execute_result" data-execution_count="107">

    array([0, 1, 2, 3, 4, 5])

</div>

</div>

<div id="qiWApvvXxSyq" class="cell code" data-execution_count="108"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="e2f29e19-340a-4d2c-b165-1d30d4c5831b">

<div id="cb206" class="sourceCode">

``` {.sourceCode .python}
## Adding the values at the end of the array
np.append(arr1,7)
```

</div>

<div class="output execute_result" data-execution_count="108">

    array([0, 1, 2, 3, 4, 5, 7])

</div>

</div>

<div id="mzA7NlQKzPN4" class="cell code" data-execution_count="109"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="e9216924-9372-4b9e-c0e0-3fd174673214">

<div id="cb208" class="sourceCode">

``` {.sourceCode .python}
### Given an array, can you add itself multiple times? or repeat it?

arr = np.array([[1,2,3]])
np.tile(arr, 3)
```

</div>

<div class="output execute_result" data-execution_count="109">

    array([[1, 2, 3, 1, 2, 3, 1, 2, 3]])

</div>

</div>

<div id="XCkeeaBl0lT4" class="cell code" data-execution_count="110"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="202b85dd-3f21-408b-ce03-8c9767f116e3">

<div id="cb210" class="sourceCode">

``` {.sourceCode .python}
np.repeat(arr,3)
```

</div>

<div class="output execute_result" data-execution_count="110">

    array([1, 1, 1, 2, 2, 2, 3, 3, 3])

</div>

</div>

<div id="57-sorting-elements-in-an-array" class="section cell markdown">

### 5.7 Sorting elements in an array

</div>

<div id="02qT1kUs4L01" class="cell code" data-execution_count="111"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="5929d293-4a14-4ff8-f543-27ef512c2da7">

<div id="cb212" class="sourceCode">

``` {.sourceCode .python}
arr = np.array([[1,2,3,4,5,3,2,1,3,5,6,7,7,5,9,5]])

np.sort(arr)
```

</div>

<div class="output execute_result" data-execution_count="111">

    array([[1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 7, 9]])

</div>

</div>

<div id="z_b7H94nx61s" class="cell code" data-execution_count="112"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="dcadd4d3-695c-4a71-c305-f93dda910bb3">

<div id="cb214" class="sourceCode">

``` {.sourceCode .python}
## Finding the unique elements in an array

arr = np.array([[1,2,3,4,5,3,2,1,3,5,6,7,7,5,9,5]])

np.unique(arr)
```

</div>

<div class="output execute_result" data-execution_count="112">

    array([1, 2, 3, 4, 5, 6, 7, 9])

</div>

</div>

<div id="58-reversing-an-array" class="section cell markdown">

### 5.8 Reversing an array

</div>

<div id="E1aycT_l1Acu" class="cell code" data-execution_count="113"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="e9145b3f-7f68-4d95-8d81-34f959c17fbb">

<div id="cb216" class="sourceCode">

``` {.sourceCode .python}
## You can also flip the array

arr = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr
```

</div>

<div class="output execute_result" data-execution_count="113">

    array([[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]])

</div>

</div>

<div id="5DwhyTxY17Wx" class="cell code" data-execution_count="114"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="d255183a-eb16-4117-ea35-31439a19840b">

<div id="cb218" class="sourceCode">

``` {.sourceCode .python}
## Up/down flipping

np.flipud(arr)
```

</div>

<div class="output execute_result" data-execution_count="114">

    array([[7, 8, 9],
           [4, 5, 6],
           [1, 2, 3]])

</div>

</div>

<div id="XQTBiI5m19gh" class="cell code" data-execution_count="115"
data-colab="{&quot;base_uri&quot;:&quot;https://localhost:8080/&quot;}"
data-outputid="215de3e1-9884-44be-c7b2-93e09803ee15">

<div id="cb220" class="sourceCode">

``` {.sourceCode .python}
## left/right flipping

np.fliplr(arr)
```

</div>

<div class="output execute_result" data-execution_count="115">

    array([[3, 2, 1],
           [6, 5, 4],
           [9, 8, 7]])

</div>

</div>

<div id="mBh5uGjL4ZBq" class="cell markdown">

------------------------------------------------------------------------

------------------------------------------------------------------------

</div>

<div id="dIRTQbdH2wzC" class="cell markdown">

That's it for NumPy. In this lab, you learned how to create an array,
perform basic operations, and also how to manipulate an array.

In the next lab, we will learn about the Pandas, another important tool
used for real world data manipulation.

</div>

<div id="back-to-top" class="section cell markdown">

### [BACK TO TOP](#0)

</div>

<div class="cell code">

<div id="cb222" class="sourceCode">

``` {.sourceCode .python}
```

</div>


