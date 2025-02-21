# Dasar-Dasar Pembelajaran Mesin

Kita hidup di era mesin cerdas. Dalam dekade terakhir, sistem berbasis pembelajaran mesin telah berkembang pesat, mulai dari mengalahkan pemain catur kelas dunia hingga memengaruhi sebagian besar keputusan harian kita, seperti rekomendasi tontonan di layanan streaming seperti Netflix dan YouTube. Apa itu pembelajaran mesin? Mengapa kita harus mempelajarinya sekarang?

Pembelajaran mesin sering dikatakan mengubah berbagai industri, tetapi apa sebenarnya yang bisa kita lakukan dengan teknologi ini? Dan masalah apa saja yang cocok atau tidak untuk diselesaikan dengan teknologi ini?

Pengenalan ini akan memberikan dasar-dasar pembelajaran mesin yang harus selalu Anda ketahui. Secara lebih rinci, materi ini akan mencakup pengetahuan dasar tingkat tinggi, seperti:

- Apa itu pembelajaran mesin?
- Perbedaan antara kecerdasan buatan, ilmu data, pembelajaran mesin, dan pembelajaran mendalam
- Perbedaan antara pembelajaran mesin dan pemrograman biasa
- Aplikasi pembelajaran mesin
- Kapan menggunakan dan kapan tidak menggunakan pembelajaran mesin
- Jenis-jenis pembelajaran mesin
- Alur kerja proyek pembelajaran mesin
- Metode evaluasi
- Tantangan dalam melatih sistem pembelajaran mesin

## Apa Itu Pembelajaran Mesin?

Pembelajaran mesin adalah paradigma pemrograman baru di mana, daripada memprogram komputer secara eksplisit untuk melakukan tugas tertentu, kita membiarkan komputer belajar dari data untuk menemukan pola yang mendasarinya. Secara sederhana, pembelajaran mesin adalah ilmu memberi kemampuan pada mesin untuk "berpikir" tentang data.

Istilah **pembelajaran mesin** pertama kali diciptakan oleh Arthur Samuel pada tahun 1959. Saat itu, Arthur mendefinisikan pembelajaran mesin sebagai:

> *Bidang studi yang memberi kemampuan kepada komputer untuk belajar tanpa diprogram secara eksplisit.*

Definisi teknis tentang pembelajaran mesin diberikan oleh Tom M. Mitchell pada tahun 1997. Begini cara Tom mendefinisikan pembelajaran mesin:

> *Sebuah program komputer dikatakan belajar dari pengalaman E terkait dengan suatu tugas T dan ukuran kinerja P, jika kinerjanya pada T, yang diukur dengan P, meningkat seiring dengan pengalaman E.*

Definisi ini bisa lebih dipahami melalui [thread Twitter](https://twitter.com/Jeande_d/status/1455872282899877894?s=20) yang menjelaskan lebih rinci.

Wikipedia memberikan definisi yang lebih jelas tentang pembelajaran mesin:

> *Pembelajaran mesin (ML) adalah studi tentang algoritma komputer yang secara otomatis meningkat seiring pengalaman dan penggunaan data. Pembelajaran mesin dianggap sebagai bagian dari kecerdasan buatan. Algoritma pembelajaran mesin membangun model berdasarkan data sampel, yang dikenal sebagai "data pelatihan", untuk membuat prediksi atau keputusan tanpa diprogram untuk itu. - Wikipedia.*

Apa artinya itu?

Secara sederhana, algoritma pembelajaran mesin dilatih dengan data, bukan diprogram secara eksplisit.

## Kecerdasan Buatan, Ilmu Data, Pembelajaran Mesin, dan Pembelajaran Mendalam

Kecerdasan buatan (AI), ilmu data, pembelajaran mesin, dan pembelajaran mendalam sering digunakan secara bergantian, namun mereka sebenarnya cukup berbeda.

**AI (Kecerdasan Buatan)** adalah cabang ilmu komputer yang berkaitan dengan pembangunan mesin cerdas yang mampu melakukan tugas-tugas pada level manusia. AI bertujuan untuk meniru cara berpikir manusia. AI adalah bidang interdisipliner yang melibatkan pembelajaran mesin, pemrograman, robotika, ilmu data, dan lainnya.

**Pembelajaran mesin**, di sisi lain, adalah cabang dari AI yang berfokus pada pemberian kemampuan kepada mesin untuk belajar dari data. Algoritma pembelajaran mesin terdiri dari algoritma klasik yang lebih sederhana seperti pohon keputusan dan algoritma pembelajaran mendalam seperti jaringan saraf konvolusional. Kita akan mempelajari lebih lanjut tentang algoritma ini di bagian berikutnya.

**Pembelajaran mendalam** adalah cabang dari pembelajaran mesin yang berfokus pada studi jaringan saraf buatan dan terinspirasi oleh otak manusia. Algoritma pembelajaran klasik memerlukan banyak rekayasa fitur, sementara algoritma pembelajaran mendalam dapat mengekstraksi fitur dari data dalam jumlah besar seperti gambar itu sendiri.

**Ilmu data** adalah bidang interdisipliner yang berfokus pada penggunaan data untuk memecahkan masalah bisnis dengan berbagai teknik. Definisi singkat ilmu data diberikan oleh Cassie Kozyrkov: *"Ilmu Data adalah ilmu membuat data berguna."*

Ilustrasi di bawah ini menjelaskan dengan jelas apa itu ilmu data. Ini adalah modifikasi dari diagram Venn Conway yang terkenal.

![ilustrasi](https://github.com/Nyandwi/machine_learning_complete/raw/main/images/venn-diagram.png)  
*Gambar 1-2: Modifikasi diagram Venn Conway yang menggambarkan bidang ilmu data.*

## Pemrograman Biasa vs Pembelajaran Mesin

Dalam pemrograman biasa, tugas seorang pemrogram adalah menulis dengan jelas setiap aturan yang membentuk tugas yang ingin dicapai. Untuk mendapatkan hasil yang diinginkan, pemrogram harus menulis semua aturan yang bekerja pada data.

Pembelajaran mesin membalikkan pendekatan ini. Alih-alih menulis aturan-aturan untuk aplikasi tertentu, kita memberi data dan hasil (atau label) pada model pembelajaran mesin, dan tugas model adalah menentukan sekumpulan aturan yang menghubungkan data dan label tersebut.

Mari kita lihat contoh dunia nyata. Jika Anda ingin membuat aplikasi yang bisa menentukan apakah seseorang mengenakan masker wajah atau tidak hanya dengan melihat gambar mereka, Anda bisa memberi sejumlah gambar orang yang mengenakan masker dan yang tidak, dan model pembelajaran mesin akan belajar aturan atau pola yang menghubungkan gambar tersebut dengan status masker. Model ini bahkan bisa digunakan untuk mengenali masker pada gambar yang belum pernah dilihat sebelumnya.

Pendekatan berbasis aturan untuk masalah pengenalan masker wajah akan sangat sulit. Anda harus menulis banyak kode yang kemungkinan besar tidak akan berhasil karena program Anda akan diuji pada berbagai jenis masker dan orang di berbagai situasi, yang hampir tidak mungkin untuk diungkapkan dalam bentuk aturan. Sedangkan dengan pembelajaran mesin, yang Anda perlukan hanyalah kumpulan gambar orang dengan dan tanpa masker, dan Anda hanya beberapa langkah dari membangun pengenal masker yang efektif. Kita akan mempraktikkannya di bagian berikutnya, khususnya dalam bagian **Deep Computer Vision**.

![ilustrasi](https://github.com/Nyandwi/machine_learning_complete/raw/main/images/traditional-ml.png)  
*Gambar 1-3: Pemrograman Tradisional vs Pembelajaran Mendalam*

## Aplikasi Pembelajaran Mesin

Sebelum kita melangkah lebih jauh ke dalam dasar-dasar pembelajaran mesin, mari kita lihat beberapa aplikasi paling menarik dari teknologi ini.

Pembelajaran mesin telah mengubah banyak industri, mulai dari perbankan, manufaktur, streaming, kendaraan otonom, pertanian, dan lainnya. Bahkan, sebagian besar produk dan layanan teknologi yang kita gunakan sehari-hari menggunakan algoritma pembelajaran mesin di belakang layar.

Berikut adalah beberapa contoh aplikasi pembelajaran mesin yang umum:

- **Deteksi penipuan**: Bank dan lembaga keuangan lainnya dapat menggunakan pembelajaran mesin untuk mendeteksi penipuan secara real-time.
- **Prediksi pembayaran pinjaman**: Bank dapat menggunakan data historis klien untuk memprediksi apakah mereka akan mampu membayar kembali pinjaman sebelum menyetujuinya.
- **Mendiagnosis penyakit dan memprediksi tingkat kelangsungan hidup**: Pembelajaran mesin semakin banyak digunakan dalam dunia medis untuk membantu para profesional medis mendiagnosis penyakit dalam hitungan menit.
- **Mendeteksi cacat dalam industri**: Beberapa perusahaan manufaktur menggunakan visi mesin untuk memeriksa cacat pada produk, yang mempercepat proses produksi, mengotomatisasi tugas inspeksi, serta mengurangi biaya dan beban kerja manusia.
- **Prediksi churn**: Organisasi yang menyediakan layanan dapat menggunakan pembelajaran mesin untuk memprediksi apakah seorang pelanggan kemungkinan akan berhenti atau membatalkan langganan mereka.
- **Deteksi spam**: Hampir semua penyedia email seperti Gmail atau Outlook memiliki kemampuan untuk mendeteksi spam dalam email masuk untuk melindungi pengguna dari penipuan dan promosi palsu.
- **Kendaraan otonom**: Kendaraan otonom seperti mobil self-driving menggunakan sistem pembelajaran mesin dan pembelajaran mendalam untuk bernavigasi di jalan raya.

Masih banyak lagi aplikasi pembelajaran mesin yang dapat ditemukan di berbagai bidang. Misalnya, agensi iklan dapat menggunakan pembelajaran mesin untuk mempelajari minat pengunjung mereka dan menampilkan iklan yang relevan di situs web mereka, sama halnya dengan layanan streaming seperti YouTube dan Netflix yang menggunakan pembelajaran mesin untuk menyarankan media yang sesuai dengan minat pengguna.

## Kapan dan Kapan Tidak Menggunakan Pembelajaran Mesin

Meskipun pembelajaran mesin adalah teknologi yang luar biasa dengan banyak keberhasilan dalam menyelesaikan masalah dunia nyata, penting untuk tahu kapan sebaiknya menggunakan pembelajaran mesin dan kapan tidak.

Kapan menggunakan pembelajaran mesin?

- **Masalah yang terlalu kompleks untuk diselesaikan dengan pemrograman biasa**. Masalah seperti ini mungkin sangat cocok untuk pembelajaran mesin. Tidak mungkin seseorang menulis semua aturan untuk mengenali masker wajah atau mendeteksi email spam secara akurat.
- **Masalah yang melibatkan pemahaman visual dan bahasa**, seperti pengenalan gambar, pengenalan suara, atau terjemahan mesin.
- **Masalah yang berubah dengan cepat**: Di mana karakteristik masalah berubah seiring waktu dan perlu ada sistem yang dapat menyesuaikan diri dengan perubahan tersebut.
- **Masalah yang jelas dan memiliki tujuan sederhana**, seperti pertanyaan ya/tidak atau prediksi angka tunggal, misalnya memperkirakan jumlah produk yang kemungkinan akan dikonsumsi dalam waktu tertentu.

Namun, Anda **tidak boleh** menggunakan pembelajaran mesin jika:

- Anda ingin prediksi model Anda sepenuhnya dapat dijelaskan. Karena sebagian besar model pembelajaran mesin dianggap sebagai *black box*.
- Anda tidak memiliki data yang andal untuk masalah yang sedang diselesaikan.
- Masalah yang ingin Anda selesaikan dapat dipecahkan dengan pemrograman biasa atau metode heuristik sederhana.
- Anda ingin solusi yang tidak perlu diperbarui lagi.

Pembelajaran mesin terus mengubah berbagai hal yang sebelumnya dianggap mustahil, dan dengan adanya komunitas daring yang aktif, kita akan terus terkejut. Namun, jika Anda memutuskan untuk menggunakannya, pastikan masalah yang Anda hadapi sesuai dengan kekuatan dan keterbatasannya, karena sistem pembelajaran mesin sulit untuk dipelihara.

Selain itu, ada bidang-bidang kritis seperti kedokteran atau mobil otonom yang menggunakan pembelajaran mesin dengan hati-hati dan melibatkan manusia dalam prosesnya.

## Proses Pembelajaran Mesin

#### Mendefinisikan Masalah

Semua dimulai dari sini. Mendefinisikan masalah adalah langkah penting dan awal dalam setiap proyek pembelajaran mesin (machine learning). Di sini, Anda memastikan bahwa Anda benar-benar memahami masalah yang sedang dihadapi. Memahami masalah akan memberikan wawasan yang tepat untuk langkah-langkah selanjutnya, seperti pemilihan algoritma pembelajaran yang tepat, dan lainnya. Tapi, tunggu dulu, apa arti sebenarnya dari memahami masalah?

Memahami masalah adalah tentang menggali lebih dalam ke dalam detail masalah yang ada dan mengajukan pertanyaan yang tepat. Pertama, penting untuk mempersempit masalah hingga Anda dapat memiliki tujuan yang sederhana dan terdefinisi dengan baik. Berikut adalah beberapa contoh tujuan sederhana: Untuk *mengklasifikasikan* produk ke dalam kategori yang berbeda, untuk *memprediksi* harga mobil bekas berdasarkan fitur-fiturnya (seperti merek, usia, dll.), untuk *mengenali* apakah seseorang memakai masker wajah, untuk *membagi* pelanggan ke dalam kelompok yang memiliki perilaku serupa, dan sebagainya... Seperti yang bisa Anda lihat, tujuan tersebut dapat menentukan apakah masalah tersebut termasuk dalam kategori klasifikasi, regresi, atau klastering.

Pada tahap ini, hindari kata-kata yang samar. Semakin sederhana Anda merumuskan masalah, semakin baik hasilnya ke depannya. Penting juga untuk mempertanyakan apakah proyek ini memang perlu dilanjutkan. Sebagian besar masalah tidak memerlukan pembelajaran mesin.

Mendefinisikan masalah juga lebih dari sekadar menentukan tujuan dan sasaran proyek, tetapi juga memikirkan tentang data yang akan diperlukan. Model pembelajaran mesin bergantung pada data, dan model yang lebih baik berasal dari data yang lebih baik. Apakah Anda memiliki data yang memuat hal-hal yang ingin Anda prediksi? Model bukanlah hal magis, mereka adalah fungsi matematis yang mengambil data beserta label, dan menentukan pola-pola yang dapat digunakan untuk membuat prediksi terhadap data yang belum pernah dilihat sebelumnya. Jika data tidak mengandung informasi yang relevan dengan apa yang ingin Anda prediksi, prediksi Anda akan buruk.

Setelah Anda memahami masalah dan memiliki gambaran tentang data yang dibutuhkan, langkah berikutnya adalah mengumpulkannya.

#### Mengumpulkan Data

Ini biasanya adalah tahap berikutnya setelah merumuskan masalah. Sebelum kita membahas tentang pengumpulan data, mari kita pahami dulu apa arti data itu. Menurut [wikipedia](https://en.wikipedia.org/wiki/Data), "data adalah sekumpulan nilai variabel kualitatif atau kuantitatif tentang satu atau lebih orang atau objek."

Ada dua jenis data utama yang perlu diketahui:
* **Data terstruktur** yang terorganisir dalam format tabel atau spreadsheet. Contoh data terstruktur termasuk catatan pelanggan, penjualan mobil, dll.
  
* **Data tak terstruktur** seperti gambar, teks, suara, dan video. Data tak terstruktur tidak terorganisir seperti data terstruktur.

Saat ini, banyak tersedia dataset sumber terbuka di platform seperti Kaggle, Google Datasets, UCL, dan situs web pemerintah. Jadi, jika Anda sedang menyelesaikan masalah yang pernah diselesaikan orang lain sebelumnya, sangat mungkin Anda akan menemukannya di platform-platform tersebut atau sumber publik lainnya seperti [repositori ini](https://github.com/awesomedata/awesome-public-datasets). Tugas Anda sebagai insinyur pembelajaran mesin adalah menemukan data yang relevan untuk menyelesaikan masalah yang ada.

Namun, ada kalanya Anda harus mengumpulkan data Anda sendiri, terutama jika Anda sedang menyelesaikan masalah yang belum ada solusinya sebelumnya. Dalam hal ini, pertimbangkan waktu yang harus Anda habiskan untuk mengumpulkan data serta biayanya. Anda juga tidak perlu menunggu sampai Anda memiliki data yang diinginkan sebelum memulai. Mulailah pengembangan ML lebih awal agar Anda bisa mengetahui apakah Anda (benar-benar) memerlukan data lebih banyak. Ide ini terinspirasi dari Andrew Ng.

Selain itu, ketika mengumpulkan data, kualitas lebih penting daripada kuantitas. Ada kalanya data kecil namun berkualitas dapat mengalahkan data besar yang buruk. Jumlah data yang Anda butuhkan tergantung pada masalah yang Anda selesaikan dan ruang lingkupnya, tetapi apapun masalahnya, mengumpulkan data yang baik adalah langkah yang tepat. Jika Anda ingin belajar lebih lanjut tentang arti data yang baik, baca artikel dari [MIT Technology Review](https://www.technologyreview.com/2021/03/26/1021258/ai-pioneer-andrew-ng-machine-learning-business/) bersama Andrew Ng.

#### Menetapkan Tolok Ukur

Tanpa tolok ukur, Anda tidak akan tahu bagaimana mengevaluasi hasil dengan tepat. Tolok ukur adalah model paling sederhana yang dapat menyelesaikan masalah Anda dengan persyaratan minimal. Ini tidak harus selalu berupa model. Bisa juga berupa aplikasi sumber terbuka yang sudah ada, analisis statistik, atau intuisi yang Anda dapatkan dari data dengan cepat.

Tujuan utama dari tolok ukur adalah untuk menjadi titik referensi saat membandingkan model yang sebenarnya dengan tolok ukur tersebut. Tujuan akhir adalah untuk mengalahkan tolok ukur tersebut, dan kadang-kadang, jika Anda tidak dapat mengalahkannya, itu bisa berarti proyek tersebut tidak layak diteruskan, atau tolok ukur itu bisa menjadi satu-satunya yang Anda butuhkan.

#### Eksplorasi Data (EDA)

Sebelum memanipulasi data, sangat penting untuk memahami dataset yang ada. Ini bisa diabaikan, namun jika dilakukan dengan baik, ini akan membantu Anda mengetahui strategi yang efektif yang perlu diterapkan saat membersihkan data.

Periksa beberapa nilai, plot beberapa fitur, dan coba pahami korelasi antar fitur. Jika pekerjaan Anda berkaitan dengan pengolahan gambar, visualisasikan beberapa gambar, perhatikan apa yang hilang dalam gambar tersebut. Apakah gambar-gambar tersebut cukup beragam? Jenis situasi gambar apa yang bisa Anda tambahkan? Atau gambar apa yang dapat menyesatkan model?

Berikut adalah hal-hal lain yang ingin Anda periksa dalam data:

* Nilai dan sampel yang duplikat
* Data yang rusak atau dalam format yang tidak didukung (misalnya, memiliki gambar .txt yang berukuran 0 Kilobyte)
* Ketidakseimbangan kelas
* Bias dalam data
  
Sebelum melakukan EDA, bagi data menjadi set pelatihan, validasi, dan uji untuk menghindari kebocoran data. Set pelatihan digunakan untuk melatih model, set validasi digunakan untuk mengevaluasi kinerja model selama pelatihan untuk memberikan saran perbaikan, dan set uji digunakan untuk mengevaluasi kinerja model final. Set validasi dan uji harus memiliki distribusi statistik yang sama.

Selain itu, untuk menghindari kebocoran data, jangan sentuh set uji saat EDA atau di bagian mana pun sebelum pelatihan model.

#### Pemrosesan Data

Pemrosesan data adalah bagian terbesar dalam proyek pembelajaran mesin. Ada anggapan bahwa Data Scientist dan Insinyur Pembelajaran Mesin menghabiskan lebih dari 80% waktu mereka untuk mempersiapkan data, dan ini masuk akal karena data dunia nyata seringkali berantakan.

Pada langkah ini, Anda mengubah data mentah menjadi format yang dapat diterima oleh algoritma pembelajaran mesin.

Pemrosesan data sulit karena ada berbagai jenis data dan cara memprosesnya pun berbeda-beda. Misalnya, dalam data terstruktur, cara memproses fitur numerik berbeda dengan fitur kategorikal. Sementara itu, dalam data tak terstruktur, cara memanipulasi gambar berbeda dengan cara memanipulasi teks atau suara.

Berikut adalah beberapa hal yang kemungkinan akan Anda hadapi saat memanipulasi fitur:

* **Mengisi nilai yang hilang:** Nilai yang hilang bisa diisi, dihapus, atau dibiarkan begitu saja. Ada berbagai teknik imputasi seperti imputasi rata-rata, median, imputasi paling sering, pengisian mundur dan maju, serta imputasi iteratif. Teknik imputasi yang tepat tergantung pada masalah dan dataset. Kecuali untuk model berbasis pohon, sebagian besar model pembelajaran mesin tidak menerima nilai yang hilang.

* **Mengkodekan fitur kategorikal:** Fitur kategorikal adalah fitur yang memiliki nilai kategorikal. Misalnya, fitur jenis kelamin dengan nilai laki-laki dan perempuan adalah fitur kategorikal. Anda perlu mengkodekan fitur-fitur ini. Teknik pengkodean yang umum adalah pengkodean label (label encoding) yang memberi 0 untuk Laki-laki dan 1 untuk Perempuan, atau pengkodean one-hot yang menghasilkan representasi biner (0 dan 1) dalam matriks one-hot.

* **Menstandarkan fitur numerik:** Kebanyakan model pembelajaran mesin bekerja dengan baik ketika nilai input diubah ke nilai yang lebih kecil, karena ini memungkinkan model untuk berlatih dan mencapai konvergensi lebih cepat. Ada dua teknik utama yang digunakan yaitu normalisasi dan standarisasi. Normalisasi merubah fitur menjadi nilai antara 0 dan 1, sementara standarisasi mengubah fitur sehingga memiliki rata-rata 0 dan deviasi standar satu. Jika Anda mengetahui bahwa data Anda memiliki distribusi normal, normalisasi bisa menjadi pilihan yang baik. Sebaliknya, standarisasi akan bekerja dengan baik pada banyak kasus.

#### Memilih dan Melatih Model

Memilih, membuat, dan melatih model pembelajaran mesin adalah bagian terkecil dalam alur kerja pembelajaran mesin. Ada berbagai jenis model, namun secara umum, sebagian besar masuk dalam kategori berikut: model linier seperti regresi linier dan logistik, model berbasis pohon seperti pohon keputusan, model ansambel seperti random forest, dan jaringan saraf (neural networks).

Tergantung pada masalah yang Anda hadapi, Anda bisa memilih model yang relevan dari kategori-kategori ini atau mencoba beberapa model. Namun, penting untuk diingat bahwa mendapatkan model yang dapat menyelesaikan masalah tertentu bukanlah skenario "makanan gratis". Anda harus bereksperimen dengan berbagai model untuk menemukan yang paling cocok untuk masalah dan dataset Anda.

Untuk mempermudah proses pemilihan model, berikut beberapa hal yang perlu Anda pertimbangkan:

* **Lingkup masalah:** Jenis atau ruang lingkup masalah Anda bisa memberi petunjuk kuat mengenai algoritma yang harus digunakan. Misalnya, jika Anda akan membuat klasifikator gambar, jaringan saraf (terutama Convolutional Neural Networks) mungkin menjadi algoritma pilihan Anda.
* **Ukuran dataset:** Model linier cenderung bekerja baik pada masalah dengan data kecil, sementara model ansambel dan jaringan saraf dapat bekerja dengan baik saat data yang tersedia sangat besar.
* **Tingkat keterjelasan (interpretability):** Jika Anda ingin hasil prediksi model dapat dijelaskan, jaringan saraf mungkin tidak membantu. Model berbasis pohon seperti pohon keputusan lebih mudah dijelaskan.
* **Waktu pelatihan:** Model yang kompleks (seperti jaringan saraf dan model ansambel) akan memakan waktu lebih lama untuk dilatih dan menguras sumber daya komputasi. Sebaliknya, model linier bisa dilatih lebih cepat.

Seperti yang Anda lihat, ada trade-off dalam pemilihan model. Anda ingin keterjelasan? Pilih model yang dapat memberikan itu, karena sebagian besar model tidak bisa. Anda memiliki dataset kecil atau peduli dengan waktu pelatihan? Pilih model yang tepat untuk Anda.

## Melakukan Analisis Kesalahan

Melakukan analisis kesalahan sangat penting dalam proses meningkatkan hasil dari model. Perbaikan yang dilakukan bisa berasal dari data ataupun model itu sendiri.

Salah satu cara terbaik untuk melakukan analisis kesalahan adalah dengan memplot kurva pembelajaran dan mencoba mengidentifikasi di mana model gagal, apa penyebabnya, dan langkah-langkah yang dapat diambil untuk mengurangi kesalahan tersebut.

Untuk memperbaiki bagian model, Anda bisa mencoba berbagai konfigurasi model atau hiperparameter. Anda juga dapat mencoba model yang berbeda untuk melihat mana yang bekerja lebih baik. Namun, model yang baik juga berasal dari data yang baik, sehingga sangat penting untuk meluangkan waktu memeriksa hasil model terkait dengan data yang digunakan.

Berikut adalah beberapa pertanyaan yang bisa Anda ajukan selama proses analisis kesalahan:

* Apakah model performanya buruk pada semua kelas atau hanya pada satu kelas tertentu?
* Apakah hal ini disebabkan oleh kurangnya titik data untuk kelas tertentu dibandingkan dengan kelas lainnya?
* Adakah ruang untuk perbaikan? Terkadang ada batasan pada seberapa banyak yang bisa dilakukan untuk mengurangi kesalahan.

Sering kali, perbaikan tidak datang dari pengaturan ulang model, melainkan dari waktu yang dihabiskan untuk meningkatkan jumlah sampel pelatihan dan kualitas data.

Untuk meningkatkan data, Anda bisa membuat data buatan (data augmentation). Cara ini umumnya efektif. Proses analisis kesalahan adalah proses iteratif, terus lakukan dan fokuslah untuk meningkatkan data daripada model.

Jika Anda tertarik untuk mempelajari lebih lanjut tentang analisis kesalahan modern, saya sarankan Anda menonton acara dari DeepLearning.AI berjudul "[A Chat with Andrew on MLOps: From Model-centric to Data-centric AI](https://www.youtube.com/watch?v=06-AZXmwHjo&t=28s)."

## Mengevaluasi Model

Setelah Anda berhasil mendapatkan model yang berfungsi dengan baik, saatnya untuk mengevaluasi model pada data yang belum pernah dilihat sebelumnya (data uji), bukan pada data pelatihan.

Jika model berhasil dengan baik pada data uji, langkah selanjutnya adalah tahap akhir.

## Penyebaran Model

Penyebaran model adalah langkah terakhir dalam alur kerja ini. Ketika semua langkah sebelumnya sudah berjalan dengan baik dan Anda puas dengan hasil model pada data uji, langkah selanjutnya adalah mendistribusikan model agar pengguna dapat mulai melakukan permintaan dan mendapatkan prediksi atau layanan yang lebih baik. Saya menyebutnya sebagai *machine learning in action*, karena ini yang sesungguhnya memberikan nilai dari machine learning.

Penyebaran model tidak tercakup dalam ruang lingkup proyek ini. Jika Anda ingin mempelajarinya lebih lanjut, saya sarankan mengikuti kursus [Machine Learning Engineering for Production (MLOps) Specialization - Deeplearning.AI](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops).

## Metrik Evaluasi

Metrik evaluasi digunakan untuk mengukur kinerja model machine learning. Sebelumnya dalam pengenalan machine learning ini, kita telah melihat bahwa sebagian besar masalah dapat dibagi menjadi regresi dan klasifikasi, dan keduanya dievaluasi dengan cara yang berbeda. Mari kita mulai dengan metrik yang digunakan untuk mengevaluasi masalah regresi.

#### Metrik Regresi

Pada tugas regresi, tujuan utamanya adalah memprediksi nilai kontinu. Selisih antara nilai aktual dan nilai yang diprediksi disebut *kesalahan*.

*Kesalahan = Nilai aktual - Nilai yang diprediksi*

Kuadrat dari kesalahan pada semua sampel disebut *Mean Squared Error* (MSE).

*MSE = KUADRAT(Nilai aktual - Nilai yang diprediksi)/Jumlah sampel*

***Formula MSE Sesungguhnya***:

$$\frac 1n\sum_{i=1}^n(y_i-\hat{y}_i)^2$$

Mengambil akar kuadrat dari MSE akan memberikan *Root Mean Squared Error* (RMSE). RMSE adalah metrik regresi yang paling sering digunakan.

***Formula RMSE Sesungguhnya***:

$$\sqrt{\frac 1n\sum_{i=1}^n(y_i-\hat{y}_i)^2}$$

Ada kalanya Anda akan bekerja dengan dataset yang mengandung outlier. Metrik yang cocok untuk dataset seperti ini adalah *Mean Absolute Error* (MAE). Sama seperti MSE, MAE juga menghitung nilai absolut dari kesalahan.

*MAE = ABSOLUT (Nilai aktual - Nilai yang diprediksi)*

***Formula MAE Sesungguhnya***:

$$\frac 1n\sum_{i=1}^n|y_i-\hat{y}_i|$$

MAE sangat sensitif terhadap outlier dan cocok digunakan pada masalah yang berpotensi memiliki skenario abnormal, seperti data deret waktu.

#### Metrik Klasifikasi

Pada masalah klasifikasi, tujuan utama adalah memprediksi kategori/kelas.

*Akurasi* adalah metrik yang paling umum digunakan. Akurasi menunjukkan kemampuan model dalam membuat prediksi yang benar. Misalnya, dalam klasifikasi kuda dan manusia. Jika Anda memiliki 250 gambar pelatihan untuk kuda dan jumlah yang sama untuk manusia, dan model dapat memprediksi 400 gambar dengan percaya diri, maka akurasinya adalah 400/500 = 0.8, jadi model Anda akurat 80%.

Namun, akurasi hanya menjadi indikator yang berguna jika dataset seimbang (misalnya, 250 gambar untuk kuda dan 250 gambar untuk manusia).

Jika dataset tidak seimbang, kita perlu metrik yang berbeda untuk mengevaluasi model, seperti *precision*, *recall*, dan *F1 score*.

*Precision* menunjukkan persentase prediksi positif yang benar-benar positif. Precision menjawab pertanyaan: `Berapa proporsi identifikasi positif yang benar-benar benar?`

*Recall*, di sisi lain, menunjukkan persentase sampel positif yang sebenarnya yang diklasifikasikan dengan benar. Recall menjawab pertanyaan: `Berapa proporsi sampel positif yang sebenarnya yang berhasil teridentifikasi dengan benar?`

Terdapat trade-off antara precision dan recall. Meningkatkan precision sering kali akan mengurangi recall dan sebaliknya. Untuk menyederhanakan, kita menggabungkan kedua metrik ini menjadi satu metrik tunggal yang disebut *F1 score*.

F1 score adalah rata-rata harmonik dari precision dan recall, yang menunjukkan seberapa baik model dalam mengklasifikasikan semua kelas tanpa harus memilih antara precision dan recall. Jika salah satu dari precision atau recall sangat rendah, F1 score juga akan rendah.

Akurasi, precision, dan recall dapat dihitung dengan mudah menggunakan *confusion matrix*. Confusion matrix menunjukkan jumlah prediksi yang benar dan salah yang dibuat oleh classifier pada semua kelas yang tersedia.

Lebih intuitifnya, confusion matrix terdiri dari 4 elemen utama: True positives, false positives, true negatives, dan false negatives.

* **True Positives (TP)**: Sampel yang diklasifikasikan dengan benar sebagai positif, dan label aslinya adalah positif.
* **False Positives (FP)**: Sampel yang diklasifikasikan dengan salah sebagai positif, padahal label aslinya negatif.
* **True Negatives (TN)**: Sampel yang diklasifikasikan dengan benar sebagai negatif, dan label aslinya adalah negatif.
* **False Negatives (FN)**: Sampel yang diklasifikasikan dengan salah sebagai negatif, padahal label aslinya positif.

Akurasi dapat dihitung dengan rumus:

$$Accuracy = (TP + TN) / (TP + TN + FP + FN)$$

Precision menunjukkan akurasi model dalam memprediksi contoh positif.

$$Precision = TP / (TP + FP)$$

Sementara itu, recall menunjukkan kemampuan model untuk memprediksi contoh positif dengan benar.

$$Recall = TP / (TP+FN)$$

Semakin tinggi precision dan recall, semakin baik model dalam membuat prediksi yang akurat, namun ada trade-off antara keduanya.

F1 score dapat dihitung dengan rumus:

$$F1_{Score} = 2 \times (precision \times recall) / (precision + recall)$$

Confusion matrix, akurasi, precision, recall, dan F1 score semua dapat dihitung dengan mudah menggunakan Scikit-Learn, sebuah framework machine learning untuk algoritma ML klasik. Kita akan mempelajari lebih lanjut tentang Scikit-Learn di bagian selanjutnya.

## Tantangan Sistem Machine Learning

Seperti teknologi lainnya, machine learning memiliki tantangan tersendiri. Perbedaannya dengan pengembangan perangkat lunak biasa adalah karena machine learning melibatkan data dan kode (model). Kedua hal ini masing-masing membawa tantangannya sendiri, dan sering kali tidak ada cara yang jelas untuk menanganinya.

Data adalah bahan utama machine learning, dan model yang lebih baik berasal dari data yang lebih baik. Namun, dalam kenyataannya, data yang lebih baik jarang ditemukan. Banyak dataset yang berantakan dan memerlukan waktu yang cukup banyak untuk disiapkan, bahkan kadang-kadang tidak memberikan hasil yang bermanfaat. Anda juga pasti sudah mendengar tentang pelabelan data yang merupakan tugas yang memakan waktu, mahal, dan sering kali ada ketidaksesuaian label.

Meskipun Anda mungkin memiliki data yang baik, Anda tetap bisa mendapatkan model yang buruk karena sangat mudah melakukan kesalahan saat proses pembersihan data. 

Selain itu, model juga tidak selalu sempurna. Beberapa model membutuhkan banyak komputasi dan cenderung *underfit* atau *overfit* data pelatihan. Baik underfitting maupun overfitting perlu dibahas lebih lanjut karena keduanya sering dihadapi.

#### Underfitting dan Overfitting

Membangun model machine learning yang dapat menyerap data pelatihan dengan baik bukanlah tugas yang mudah. Pada awal pelatihan, model sering kali mengalami underfitting atau overfitting. Beberapa model machine learning cenderung melakukan overfitting pada data pelatihan, misalnya pada decision tree.

Terdapat trade-off antara underfitting dan overfitting, dan penting untuk memahami perbedaan antara keduanya serta cara menanganinya.

##### Underfitting (Bias Rendah)

Underfitting terjadi ketika model tidak perform dengan baik pada data pelatihan. Ini bisa disebabkan oleh model yang terlalu sederhana untuk data pelatihan atau data yang tidak mengandung informasi yang relevan dengan apa yang ingin diprediksi. Data yang baik memiliki *daya prediktif tinggi*, sementara data yang buruk memiliki *daya prediktif rendah*.

Beberapa teknik yang dapat digunakan untuk mengatasi underfitting:

* Gunakan model yang lebih kompleks. Jika Anda menggunakan model linier, coba model lain yang lebih kompleks seperti Random Forest atau Support Vector Machines. Tidak ketinggalan, neural networks jika Anda berurusan dengan data tidak terstruktur (gambar, teks, suara).
* Tambahkan lebih banyak data pelatihan dan gunakan fitur yang baik.
* Kurangi regularisasi.
* Jika Anda menggunakan neural networks, tingkatkan jumlah epoch/iterasi pelatihan. Jika epoch terlalu sedikit, model mungkin tidak bisa mempelajari aturan yang mendalam dalam data.

##### Overfitting (Varians Tinggi)

Overfitting adalah kebalikan dari underfitting. Model yang overfit akan tampil baik pada data pelatihan, tetapi buruk ketika diberikan data baru (data yang belum pernah dilihat sebelumnya).

Overfitting biasanya disebabkan oleh model yang terlalu kompleks untuk dataset dengan sedikit contoh pelatihan.

Beberapa teknik untuk mengatasi overfitting:

* Coba model yang lebih sederhana atau sederhanakan model yang ada.
* Temukan lebih banyak data pelatihan.
* Hentikan pelatihan lebih awal (early stopping).
* Gunakan teknik regularisasi seperti dropout (pada neural networks).

Singkatnya, sangat penting untuk dapat memahami mengapa model tidak bekerja dengan baik. Jika model buruk pada data pelatihan, Anda tahu itu underfitting dan tahu apa yang harus dilakukan.

Selain memperbaiki dan memperluas data pelatihan, Anda juga sering harus melakukan tuning hiperparameter untuk mendapatkan model yang dapat menggeneralisasi dengan baik.

Kami telah sampai di akhir pengenalan machine learning ini. Jika Anda merasa ada beberapa istilah atau konsep yang masih asing, tidak masalah. Seiring berjalannya waktu, semuanya akan menjadi lebih jelas.

Jika Anda ingin membaca beberapa istilah penting dalam machine learning, periksa [Google Machine Learning Glossary](https://developers.google.com/machine-learning/glossary).

<div class="bg-black text-white p-4 rounded-lg ">
Catatan 

Ini adalah pengenalan dasar tentang machine learning. Machine learning adalah bidang ilmu komputer dan subbidang AI yang berfokus pada kemampuan komputer untuk melakukan tugas tertentu tanpa diprogram secara eksplisit, melainkan belajar dari data. Machine learning telah mengubah berbagai industri dan digunakan dalam bidang seperti kedokteran, keuangan, elektronik konsumen, kendaraan otonom, pertanian, dan lainnya.

Kami juga telah mempelajari berbagai jenis machine learning, seperti supervised learning, unsupervised learning, semi-supervised learning, self-supervised learning, dan reinforcement learning. Selain itu, kita melihat alur kerja umum dalam proyek machine learning, tantangannya, dan bagaimana menghadapinya.
</div>