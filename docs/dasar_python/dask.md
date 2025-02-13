# **Dask Library**  

Dask adalah pustaka open-source di Python yang dirancang untuk menangani komputasi paralel dan pengolahan data skala besar. Dask memiliki API yang mirip dengan Pandas, NumPy, dan Scikit-Learn, sehingga mudah digunakan oleh pengguna yang sudah terbiasa dengan pustaka tersebut.  

Dask memungkinkan pengguna untuk bekerja dengan dataset yang lebih besar dari kapasitas RAM dengan cara membagi data menjadi partisi kecil dan mengeksekusinya secara paralel di CPU atau dalam cluster komputasi.  



## **Perbedaan Dask vs Pandas**  

| **Fitur**           | **Dask**                                      | **Pandas**                                 |
|---------------------|----------------------------------------------|-------------------------------------------|
| **Ukuran Data**     | Bisa menangani dataset lebih besar dari RAM | Hanya bisa menangani data dalam RAM |
| **Eksekusi**        | Lazy Evaluation (tidak langsung dieksekusi) | Eager Execution (langsung dijalankan) |
| **Paralelisasi**    | Mendukung multi-core processing & cluster | Hanya berjalan di single-core |
| **Kompatibilitas**  | Bisa digunakan dengan Pandas, NumPy, Scikit-Learn | Hanya mendukung Pandas |
| **Kecepatan**       | Lebih cepat untuk big data | Lebih cepat untuk small data |
| **Skalabilitas**    | Bisa dijalankan di laptop hingga cluster besar | Terbatas pada satu mesin |


>- Gunakan Pandas jika dataset cukup kecil untuk muat di memori.  
>- Gunakan Dask jika dataset terlalu besar untuk RAM atau membutuhkan pemrosesan paralel.  


## **Kelebihan dan Kekurangan Dask**  

### **Kelebihan Dask**  
- Bisa menangani dataset besar yang tidak bisa ditampung di RAM.  
- Paralelisasi otomatis, memanfaatkan banyak core CPU.  
- API mirip Pandas, sehingga mudah dipelajari dan digunakan.  
- Mendukung lazy evaluation, sehingga lebih efisien dalam penggunaan memori.  
- Dapat berjalan di cluster, seperti di Kubernetes, AWS, atau Google Cloud.  

### **Kekurangan Dask**  
- Lebih kompleks dibanding Pandas karena perlu memahami partisi data dan scheduler.  
- Lebih lambat untuk dataset kecil, karena overhead dari paralelisasi.  
- Tidak semua fitur Pandas didukung, meskipun sebagian besar telah diimplementasikan.  
- Lazy execution bisa membingungkan bagi pengguna baru, karena operasi tidak langsung dieksekusi.  



## **Kasus Penggunaan Dask**  

Dask sangat berguna dalam berbagai skenario, terutama untuk data dalam jumlah besar atau yang membutuhkan pemrosesan intensif.  

### **1. Analisis Dataset Besar**  
- Mengolah data jutaan atau miliaran baris tanpa memenuhi RAM.  
- Contoh: Analisis log server atau data sensor IoT yang sangat besar.  

### **2. Machine Learning dengan Big Data**  
- Melatih model machine learning dengan dataset besar yang tidak bisa ditangani Pandas.  
- Integrasi dengan `dask-ml` untuk training paralel.  

### **3. Data Engineering & ETL (Extract, Transform, Load)**  
- Membersihkan dan mengubah data sebelum dimasukkan ke database.  
- Contoh: Proses data keuangan atau data transaksi dalam skala besar.  

### **4. Cloud Computing & Distributed Computing**  
- Memanfaatkan cluster untuk menjalankan analisis data di AWS, Google Cloud, atau Kubernetes.  
- Contoh: Pemrosesan data real-time dari berbagai sumber (misalnya data streaming).  

---

 
>Dask adalah solusi yang tepat untuk menangani dataset besar yang tidak dapat dimuat sepenuhnya di RAM. Dengan dukungan terhadap komputasi paralel dan integrasi dengan berbagai pustaka Python, Dask menjadi pilihan yang baik untuk analisis data skala besar, pemrosesan ETL, serta machine learning berbasis big data. Namun, pengguna perlu memahami konsep partisi data dan eksekusi paralel agar dapat memanfaatkan Dask secara optimal.

## **Struktur Dasar Dask**  

Dask menyediakan beberapa struktur data utama yang dirancang untuk menangani berbagai jenis data dan operasi secara paralel. Struktur ini mencerminkan pustaka yang sudah dikenal dalam ekosistem Python, seperti Pandas dan NumPy, tetapi dengan kemampuan menangani data besar dan pemrosesan terdistribusi.  



### **1. Dask DataFrame vs Pandas DataFrame**  

Dask DataFrame adalah versi terdistribusi dari Pandas DataFrame yang dirancang untuk menangani dataset lebih besar dari kapasitas RAM dengan cara membagi data menjadi beberapa partisi yang diproses secara paralel.  

#### **Perbedaan Utama**  

| **Fitur**            | **Dask DataFrame**                           | **Pandas DataFrame**                      |
|----------------------|--------------------------------------------|-------------------------------------------|
| **Ukuran Data**      | Bisa lebih besar dari RAM                  | Harus muat dalam RAM                     |
| **Eksekusi**        | Lazy evaluation (ditunda hingga diperlukan) | Eager evaluation (langsung dieksekusi)   |
| **Paralelisasi**    | Mendukung multi-core & cluster              | Hanya berjalan pada satu core            |
| **Fitur yang Didukung** | Sebagian besar API Pandas didukung         | Semua fitur Pandas tersedia              |
| **Kecepatan**       | Lebih cepat untuk dataset besar             | Lebih cepat untuk dataset kecil          |

#### **Kapan Menggunakan Dask DataFrame?**  
- Ketika dataset terlalu besar untuk dimuat dalam RAM.  
- Saat membutuhkan pemrosesan paralel untuk meningkatkan performa.  
- Untuk pipeline data yang berjalan di cluster atau dalam cloud computing.  

#### **Contoh Penggunaan**  

Menggunakan Dask DataFrame untuk membaca file CSV besar:  

```python
import dask.dataframe as dd

df = dd.read_csv("data_besar.csv")
print(df.head())  # Data diambil hanya dari sebagian partisi
```


### **2. Dask Array vs NumPy**  

Dask Array adalah versi terdistribusi dari NumPy yang memungkinkan manipulasi array besar yang tidak bisa dimuat dalam RAM.  

#### **Perbedaan Utama**  

| **Fitur**            | **Dask Array**                              | **NumPy**                                  |
|----------------------|--------------------------------------------|-------------------------------------------|
| **Ukuran Data**      | Bisa lebih besar dari RAM                  | Harus muat dalam RAM                     |
| **Eksekusi**        | Lazy evaluation                             | Eager evaluation                         |
| **Paralelisasi**    | Mendukung multi-core & cluster              | Hanya berjalan di satu core              |
| **Kompatibilitas**  | API mirip dengan NumPy                      | API NumPy penuh                          |
| **Kecepatan**       | Lebih cepat untuk dataset besar             | Lebih cepat untuk dataset kecil          |

#### **Kapan Menggunakan Dask Array?**  
- Saat bekerja dengan array besar yang tidak bisa ditampung dalam RAM.  
- Ketika membutuhkan operasi paralel pada array besar.  
- Untuk analisis numerik atau machine learning skala besar.  

#### **Contoh Penggunaan**  

Menggunakan Dask Array untuk membuat array besar:  

```python
import dask.array as da

x = da.random.random((10000, 10000), chunks=(1000, 1000))  # Array besar dengan partisi
print(x.mean().compute())  # Harus menggunakan .compute() untuk eksekusi
```



### **3. Dask Bag untuk Data Semi-Terstruktur**  

Dask Bag dirancang untuk menangani data semi-terstruktur seperti JSON, log, atau data teks yang tidak memiliki format tabel atau array tetap.  

### **Kapan Menggunakan Dask Bag?**  
- Saat bekerja dengan data yang tidak berbentuk tabel seperti JSON, XML, atau log server.  
- Untuk analisis data berbasis teks dalam jumlah besar.  
- Ketika membutuhkan pemrosesan batch untuk file teks besar.  

#### **Contoh Penggunaan**  

Misalnya, membaca file JSON besar dengan Dask Bag:  

```python
import dask.bag as db

bag = db.read_text("data_log.json").map(lambda x: x.upper())  # Mengubah teks menjadi huruf besar
print(bag.take(5))  # Mengambil 5 baris pertama
```

---
 
>- **Gunakan Dask DataFrame** jika bekerja dengan data terstruktur seperti tabel dalam CSV atau database.  
>- **Gunakan Dask Array** jika menangani data numerik besar yang biasanya dikerjakan dengan NumPy.  
>- **Gunakan Dask Bag** jika memproses data semi-terstruktur seperti JSON atau log.  

Dask memungkinkan skalabilitas tinggi untuk berbagai jenis data dengan API yang familiar, membuatnya cocok untuk analisis data skala besar tanpa membebani memori komputer.


## **Membaca dan Menyimpan Data dengan Dask**  

Dask menyediakan berbagai metode untuk membaca dan menyimpan data dalam berbagai format. Struktur ini mirip dengan Pandas, tetapi mendukung pemrosesan paralel dan dataset besar yang tidak muat dalam RAM.  

---

### **1. Membaca Data**  

Dask mendukung beberapa format umum untuk membaca data.  

#### **Membaca CSV**  

```python
import dask.dataframe as dd

df = dd.read_csv("data.csv")
print(df.head())  # Hanya menampilkan sebagian data
```

**Kelebihan:**  
- Bisa membaca file besar secara bertahap dengan `blocksize` atau `chunksize`.  
- Bisa membaca banyak file sekaligus dengan wildcard (`*.csv`).  

```python
df = dd.read_csv("data_folder/*.csv")
```

---

#### **Membaca Parquet**  

Parquet adalah format biner yang lebih efisien dibandingkan CSV karena mendukung kompresi dan penyimpanan kolom.  

```python
df = dd.read_parquet("data.parquet")
```

**Keuntungan menggunakan Parquet:**  
- Lebih cepat dibandingkan CSV.  
- Lebih hemat ruang penyimpanan.  
- Bisa membaca hanya kolom yang diperlukan untuk efisiensi.  

```python
df = dd.read_parquet("data.parquet", columns=["nama", "umur"])
```

---

#### **Membaca JSON**  

```python
df = dd.read_json("data.json", lines=True)
```

JSON sering digunakan untuk data semi-terstruktur. Parameter `lines=True` digunakan untuk membaca JSON dengan format satu objek per baris.  

---

### **2. Menyimpan Data**  

Dask mendukung penyimpanan ke berbagai format file.  

#### **Menyimpan ke CSV**  

```python
df.to_csv("output_folder", index=False)
```

Dask akan membagi file menjadi beberapa bagian (`output_folder/part-*.csv`). Jika ingin menyimpan dalam satu file, perlu menggunakan `compute()`:  

```python
df.compute().to_csv("output.csv", index=False)
```

---

#### **Menyimpan ke Parquet**  

```python
df.to_parquet("output_folder")
```

Parquet lebih disarankan untuk data besar karena lebih cepat dibaca dan lebih hemat ruang.  


## **Operasi Dasar pada Dask DataFrame**  

Dask DataFrame mendukung operasi yang mirip dengan Pandas, tetapi dengan eksekusi paralel dan pemrosesan berbasis partisi.  

---

### **1. Filtering Data**  

```python
df_filtered = df[df["nilai"] > 10]
print(df_filtered.head())
```

Filtering dilakukan secara paralel pada setiap partisi, meningkatkan efisiensi dibandingkan Pandas.  

---

### **2. Grouping Data**  

```python
df_grouped = df.groupby("kategori").mean()
print(df_grouped.compute())  # Perlu compute() untuk melihat hasilnya
```

Dask mengelompokkan data dalam partisi masing-masing sebelum menggabungkan hasilnya.  

---

### **3. Joins dan Merges**  

Menggabungkan dua DataFrame berdasarkan kolom yang sama:  

```python
df1 = dd.read_csv("data1.csv")
df2 = dd.read_csv("data2.csv")

df_merged = dd.merge(df1, df2, on="id")
print(df_merged.head())
```

Dask melakukan join dengan cara membagi data dalam beberapa partisi, sehingga lebih efisien untuk dataset besar.  



## **Perbedaan `.compute()` vs Lazy Evaluation**  

Dask menggunakan **lazy evaluation**, yaitu menunda eksekusi operasi sampai benar-benar diperlukan.  

---

### **1. Mengapa Dask Tidak Langsung Mengeksekusi Perintah?**  

Saat menggunakan Pandas, setiap operasi langsung dieksekusi di memori. Namun, dalam Dask, operasi hanya membangun **graf tugas** tanpa langsung menjalankan perhitungan.  

Contoh:  

```python
df_filtered = df[df["nilai"] > 10]  # Tidak langsung dieksekusi
```

Dask hanya membuat rencana eksekusi, tetapi tidak menjalankannya hingga dipanggil `.compute()`.  

Keuntungannya:  
- Lebih hemat memori karena tidak menyimpan hasil antara.  
- Bisa mengoptimalkan beberapa operasi sebelum dieksekusi.  
- Mendukung eksekusi paralel pada beberapa partisi atau cluster.  

---

### **2. Kapan Harus Menggunakan `.compute()`?**  

Gunakan `.compute()` hanya ketika perlu mendapatkan hasil akhir dalam bentuk Pandas DataFrame atau nilai numerik.  

Contoh:  

```python
df_result = df.groupby("kategori").mean()
print(df_result.compute())  # Menjalankan perhitungan dan menampilkan hasil
```

Jika tidak menggunakan `.compute()`, objek yang dihasilkan hanya berupa grafik tugas dan tidak akan menampilkan hasil.  

```python
print(df_result)  # Hanya menunjukkan informasi graf tugas, bukan hasilnya
```

---

**Kesimpulan:**  
- **Gunakan lazy evaluation** untuk efisiensi memori dan optimasi otomatis.  
- **Gunakan `.compute()`** hanya jika hasilnya benar-benar dibutuhkan untuk analisis lebih lanjut.  
- Jika ingin mengonversi Dask DataFrame ke Pandas DataFrame untuk operasi lebih lanjut, gunakan `.compute()`.  

```python
df_pandas = df.compute()  # Mengubah Dask DataFrame menjadi Pandas DataFrame
```  

## Dask untuk Machine Learning & Big Data

Dask tidak hanya digunakan untuk pemrosesan data skala besar tetapi juga dapat diterapkan dalam analisis data dan machine learning. Dask memungkinkan pelatihan model pada dataset yang lebih besar daripada yang bisa ditangani dalam memori menggunakan pendekatan paralel dan terdistribusi.  

---

### **1. Dask dengan Scikit-Learn**  

Dask dapat digunakan bersama Scikit-Learn untuk meningkatkan performa pelatihan model, terutama pada dataset besar.  

#### **Menggunakan `dask-ml` untuk Model Machine Learning**  

`dask-ml` adalah pustaka yang dirancang untuk mengintegrasikan Dask dengan Scikit-Learn.  

```python
from dask_ml.model_selection import train_test_split
from dask_ml.linear_model import LogisticRegression
import dask.array as da

# Membuat dataset besar
X = da.random.random(size=(100000, 50), chunks=(1000, 50))
y = da.random.randint(0, 2, size=(100000,), chunks=(1000,))

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Melatih model dengan Dask-ML
model = LogisticRegression()
model.fit(X_train, y_train)

# Memprediksi
y_pred = model.predict(X_test)
```

Keuntungan menggunakan `dask-ml`:  
- **Memanfaatkan komputasi paralel** untuk mempercepat pelatihan.  
- **Mendukung dataset yang lebih besar dari memori** dengan pendekatan chunking.  
- **Integrasi dengan Scikit-Learn API** sehingga mudah diadopsi.  

---

#### **Incremental Learning dengan Dataset Besar**  

`Incremental()` learning memungkinkan model machine learning untuk belajar dari data secara bertahap, tanpa perlu memuat seluruh dataset ke dalam memori.  

```python
from sklearn.linear_model import SGDClassifier
from dask_ml.wrappers import Incremental

model = SGDClassifier()
inc_model = Incremental(model, scoring="accuracy")

inc_model.fit(X_train, y_train, classes=[0, 1])
```

Keuntungan dari incremental learning:  
- Bisa menangani dataset yang terlalu besar untuk dimuat sekaligus.  
- Cocok untuk skenario streaming data atau model yang terus diperbarui.  

---

### **2. Integrasi Dask dengan Big Data Ecosystem**  

Dask dapat diintegrasikan dengan berbagai teknologi big data seperti Hadoop, Spark, dan database besar.  

#### **Dask + Hadoop / Spark**  

Dask dapat membaca dan menulis data langsung ke Hadoop Distributed File System (HDFS).  

```python
df = dd.read_parquet("hdfs:///path/to/data.parquet")
df.to_parquet("hdfs:///path/to/output.parquet")
```

Jika sudah menggunakan Spark, Dask bisa digunakan sebagai alternatif untuk pemrosesan data yang lebih fleksibel dan sederhana.  

---

#### **Dask dengan Database Besar (PostgreSQL, MySQL, dll.)**  

Dask bisa membaca data langsung dari database besar seperti PostgreSQL.  

```python
import dask.dataframe as dd
import sqlalchemy

engine = sqlalchemy.create_engine("postgresql://user:password@host/dbname")

query = "SELECT * FROM table_name"
df = dd.read_sql_table(query, uri=engine, index_col="id")

df.compute()
```

Keuntungan menggunakan Dask dengan database:  
- **Eksekusi kueri paralel** untuk mempercepat pemrosesan.  
- **Dapat menangani tabel besar** yang tidak muat di memori.  

---

### **3. Dask di Cluster Komputasi**  

Ketika dataset dan komputasi menjadi terlalu besar untuk ditangani pada satu mesin, Dask dapat dijalankan dalam cluster untuk meningkatkan skalabilitas.  

#### **Menjalankan Dask di Cluster (`dask.distributed`)**  

Dask menyediakan `dask.distributed`, yaitu scheduler yang memungkinkan eksekusi terdistribusi di beberapa node dalam cluster.  

```python
from dask.distributed import Client

client = Client(n_workers=4, threads_per_worker=2, memory_limit='2GB')

print(client)
```

Keuntungan menggunakan Dask Cluster:  
- **Distribusi beban kerja** ke beberapa node atau CPU.  
- **Optimasi otomatis** berdasarkan ketersediaan sumber daya.  

---

#### **Scaling Up dengan Dask Kubernetes**  

Dask dapat berjalan di Kubernetes untuk menyesuaikan kapasitas komputasi berdasarkan beban kerja.  

```python
from dask_kubernetes import KubeCluster

cluster = KubeCluster()
cluster.scale(10)  # Menambah jumlah worker menjadi 10
client = Client(cluster)
```

Dengan pendekatan ini, Dask bisa secara otomatis menyesuaikan jumlah worker berdasarkan beban kerja, sehingga lebih efisien dalam penggunaan sumber daya.  

---


- **Dask-ML** memungkinkan pelatihan model machine learning dengan dataset besar menggunakan Scikit-Learn API.  
- **Dask dapat diintegrasikan dengan Hadoop, Spark, dan database besar** untuk pemrosesan data skala besar.  
- **Dask.distributed memungkinkan eksekusi di cluster**, sedangkan **Dask Kubernetes** bisa digunakan untuk auto-scaling pada cloud computing.  

## **Studi Kasus Penggunaan Dask**  

Dask memungkinkan pemrosesan data skala besar dan paralel yang dapat diterapkan dalam berbagai skenario dunia nyata. Pada tahap ini, fokusnya adalah bagaimana Dask digunakan dalam analisis dataset besar, pemrosesan data real-time, dan membangun pipeline data untuk dashboard analitik.  

---

### **Studi Kasus**  

#### **1. Analisis Dataset Jutaan Baris**  

Salah satu keunggulan Dask adalah kemampuannya menangani dataset yang sangat besar yang tidak dapat dimuat sekaligus ke dalam memori.  

##### **Contoh: Menganalisis Dataset Besar dengan Dask**  

Misalkan ada dataset transaksi e-commerce berukuran besar dalam format CSV:  

```python
import dask.dataframe as dd

# Membaca dataset besar dengan Dask
df = dd.read_csv("transaksi_ecommerce.csv")

# Melihat struktur data
print(df.dtypes)

# Hitung total penjualan per kategori
sales_per_category = df.groupby("kategori")["total_harga"].sum()

# Eksekusi perhitungan dengan compute()
print(sales_per_category.compute())
```

Keuntungan menggunakan Dask dalam analisis dataset besar:  
- **Dapat memproses data lebih cepat** karena menggunakan pemrosesan paralel.  
- **Tidak memerlukan RAM besar**, karena hanya membaca sebagian data dalam satu waktu.  
- **Mendukung format data populer** seperti CSV, Parquet, JSON, dan database SQL.  

---

#### **2. Pemrosesan Data Real-Time dengan Dask**  

Dask juga dapat digunakan untuk memproses data secara real-time, misalnya untuk memantau transaksi perbankan atau sensor IoT.  

##### **Contoh: Pemantauan Sensor IoT Secara Real-Time**  

Misalkan ada data dari sensor IoT yang dikirim dalam format JSON:  

```python
import dask.bag as db

# Membaca data streaming dari JSON
data = db.read_text("data_sensor_*.json").map(json.loads)

# Menyaring data dengan suhu di atas 50 derajat
filtered_data = data.filter(lambda x: x["temperature"] > 50)

# Menampilkan hasil
print(filtered_data.compute())
```

Dask Bag digunakan untuk menangani data semi-terstruktur seperti JSON dan log yang sering dijumpai dalam analisis real-time.  

Keuntungan pemrosesan real-time dengan Dask:  
- **Bisa menangani data dalam jumlah besar secara efisien.**  
- **Mendukung pemrosesan terdistribusi di cluster.**  
- **Cocok untuk streaming data yang terus diperbarui.**  

---

### **Proyek Akhir**  

#### **1. Membangun Pipeline Data dengan Dask**  

Dalam dunia nyata, banyak proyek data science memerlukan pipeline data yang efisien untuk membersihkan, mengubah, dan menganalisis data.  

##### **Contoh: Pipeline Data untuk Analisis Penjualan**  

```python
import dask.dataframe as dd

# Membaca data transaksi dari berbagai file CSV
df = dd.read_csv("data_penjualan_*.csv")

# Data Cleaning: Menghapus nilai kosong
df_clean = df.dropna()

# Transformasi: Menambahkan kolom keuntungan
df_clean["profit"] = df_clean["pendapatan"] - df_clean["biaya"]

# Menyimpan hasil ke dalam format Parquet
df_clean.to_parquet("output_penjualan.parquet", engine="pyarrow")
```

Keuntungan membangun pipeline data dengan Dask:  
- **Proses ETL lebih cepat dan efisien** karena berjalan secara paralel.  
- **Dapat menangani banyak file sekaligus**.  
- **Integrasi mudah dengan big data tools seperti Hadoop dan Spark**.  

---

#### **2. Menggunakan Dask untuk Dashboard Analitik**  

Dask dapat digunakan untuk mengoptimalkan dashboard analitik yang membutuhkan pemrosesan data dalam jumlah besar.  

##### **Contoh: Membuat Dashboard Sederhana dengan Dask dan Bokeh**  

```python
import dask.dataframe as dd
from bokeh.plotting import figure, show
from bokeh.io import output_file

# Membaca dataset besar
df = dd.read_csv("sales_data.csv")

# Menghitung total penjualan per bulan
monthly_sales = df.groupby("bulan")["penjualan"].sum().compute()

# Membuat visualisasi dengan Bokeh
output_file("dashboard.html")
p = figure(title="Total Penjualan per Bulan", x_axis_label="Bulan", y_axis_label="Penjualan")
p.line(monthly_sales.index, monthly_sales.values, line_width=2)

show(p)
```

Keuntungan menggunakan Dask untuk dashboard analitik:  
- **Dapat menangani data dalam skala besar tanpa membebani memori.**  
- **Mempercepat waktu query pada data yang terus diperbarui.**  
- **Integrasi mudah dengan tools visualisasi seperti Bokeh dan Plotly.**  
- **Dask dapat diterapkan dalam analisis dataset besar dan pemrosesan data real-time.**  
- **Pipeline data dengan Dask mempercepat proses ETL dan analisis data skala besar.**  
- **Dask dapat digunakan untuk membangun dashboard analitik yang lebih efisien.**  

