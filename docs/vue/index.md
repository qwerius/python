Vue3 {#vue3 .page-title}
====

<div class="page-body">

API Styles pada Vue mengacu pada dua gaya pengembangan komponen Vue, yaitu Options API dan Composition API. {#95096177-acd7-44b2-90fd-baec9c1b1945}
-----------------------------------------------------------------------------------------------------------

### Options API {#d661926e-54aa-4d64-9419-fd6c2242b489}

Dengan Options API, kita mendefinisikan logika komponen menggunakan
objek opsi seperti data, methods, dan mounted. Properti yang
didefinisikan oleh opsi akan diekspos di dalam fungsi-fungsi komponen,
yang menunjuk pada instance komponen:

``` {#817bd268-b78e-4c1f-87ec-71ef0cf03da9 .code}
<script>
export default {
  // Properti yang dikembalikan dari data() menjadi state yang reaktif
  // dan akan diekspos pada `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods adalah fungsi-fungsi yang mengubah state dan memicu pembaruan.
  // Mereka dapat diikat sebagai event handler dalam template.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks dipanggil pada berbagai tahap
  // dari siklus hidup komponen.
  // Fungsi ini akan dipanggil saat komponen dimount.
  mounted() {
    console.log(`Jumlah awal adalah ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Jumlah: {{ count }}</button>
</template>
```

### Composition API {#a2e5186c-ceec-4d7b-93f7-50dfa9bd7ca3}

Dengan Composition API, kita mendefinisikan logika komponen menggunakan
fungsi-fungsi API yang diimpor. Pada komponen berkas tunggal (Single
File Components - SFCs), Composition API biasanya digunakan dengan
menggunakan `<script setup>`. Atribut setup adalah petunjuk yang membuat
Vue melakukan transformasi pada saat kompilasi yang memungkinkan kita
untuk menggunakan Composition API dengan lebih sedikit boilerplate.
Misalnya, impor dan variabel/fungsi tingkat atas yang dideklarasikan
dalam `<script setup>` dapat langsung digunakan dalam template.

Berikut adalah contoh komponen yang sama, dengan template yang sama,
tetapi menggunakan Composition API dan `<script setup>`:

``` {#be515bee-4253-4883-b37f-b6d218e7d528 .code}
<script setup>
import { ref, onMounted } from 'vue'

// state yang reaktif
const count = ref(0)

// fungsi-fungsi yang mengubah state dan memicu pembaruan
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`Jumlah awal adalah ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Jumlah: {{ count }}</button>
</template>
```

Pemilihan Gaya Pengembangan:\
Kedua gaya API ini sepenuhnya mampu mengatasi kasus penggunaan umum.
Mereka adalah antarmuka yang berbeda yang didukung oleh sistem dasar
yang sama. Bahkan, Options API diimplementasikan di atas Composition
API. Konsep dasar dan pengetahuan tentang Vue bersifat universal di
kedua gaya ini.\

Options API berfokus pada konsep "instance komponen" (this seperti yang
terlihat dalam contoh), yang biasanya lebih sesuai dengan model berbasis
kelas untuk pengguna yang datang dari latar belakang bahasa berorientasi
objek (OOP). Ini juga lebih cocok untuk pemula karena mengabstraksi
detail reaktivitas dan menerapkan organisasi kode melalui kelompok opsi.

Composition API berfokus pada deklarasi variabel state reaktif secara
langsung dalam cakupan fungsi dan menggabungkan state dari beberapa
fungsi bersama-sama untuk menangani kompleksitas. Ini lebih bebas dalam
penggunaannya dan memerlukan pemahaman tentang cara reaktivitas
berfungsi di Vue untuk digunakan dengan efektif. Sebagai imbalannya,
fleksibilitasnya memungkinkan pola-pola yang lebih kuat untuk mengatur
dan menggunakan logika.

Jika Anda baru mengenal Vue, berikut rekomendasi umum kami:

-   Untuk tujuan pembelajaran, pilih gaya yang tampak lebih mudah
    dipahami oleh Anda. Lagi pula, sebagian besar konsep inti dibagikan
    antara kedua gaya ini. Anda selalu dapat memilih gaya lainnya nanti.

<!-- -->

-   Untuk penggunaan produksi:
    -   Pilih Options API jika Anda tidak menggunakan alat pengembangan
        (build tools), atau berencana menggunakan Vue terutama dalam
        skenario yang kurang kompleks, misalnya, enhancement progresif.

    <!-- -->

    -   Pilih Composition API + Single-File Components jika Anda
        berencana membangun aplikasi lengkap dengan Vue.

Anda tidak perlu mengikatkan diri pada satu gaya selama fase
pembelajaran. Dokumentasi lainnya akan memberikan contoh kode dalam
kedua gaya jika memungkinkan, dan Anda dapat beralih antara keduanya
kapan saja menggunakan sakelar Preferensi API di bagian atas panel sisi
kiri.

Membuat Aplikasi Vue {#a07ea2bd-0bd9-45ed-b8bd-a0bb5af9a6d5}
--------------------

Setiap aplikasi Vue dimulai dengan membuat sebuah instance aplikasi baru
menggunakan fungsi `createApp`:

``` {#6a9b1b13-2074-462a-9aaf-6e9f6b26b4c8 .code}
import { createApp } from 'vue'

const app = createApp({
  /* opsi komponen root */
})
```

### Komponen Root {#d581bd5a-df9b-4e02-9312-69b8d8b49945}

Objek yang kita berikan ke dalam `createApp` sebenarnya adalah sebuah
komponen. Setiap aplikasi memerlukan "komponen root" yang dapat berisi
komponen-komponen lain sebagai anak-anaknya.

Jika Anda menggunakan Single-File Components, biasanya kita mengimpor
komponen root dari file terpisah:

``` {#775e15cb-7387-4897-9b31-11fb48d41107 .code}
import { createApp } from 'vue'
// mengimpor komponen root App dari sebuah Single-File Component.
import App from './App.vue'

const app = createApp(App)
```

Sementara banyak contoh dalam panduan ini hanya memerlukan satu
komponen, sebagian besar aplikasi nyata terorganisir dalam sebuah pohon
komponen yang bersarang dan dapat digunakan kembali. Sebagai contoh,
pohon komponen aplikasi To-Do bisa terlihat seperti ini:

-   App (komponen root)
    -   TodoList
        -   TodoItem
            -   TodoDeleteButton

            <!-- -->

            -   TodoEditButton

    <!-- -->

    -   TodoFooter
        -   TodoClearButton

        <!-- -->

        -   TodoStatistics

Pada bagian-bagian berikut dalam panduan ini, kita akan membahas cara
mendefinisikan dan menggabungkan beberapa komponen bersama-sama. Sebelum
itu, kita akan fokus pada apa yang terjadi di dalam satu komponen.

### Mounting Aplikasi {#8efd819c-5ce9-480f-957f-7855f457aca4}

Sebuah instance aplikasi tidak akan merender apa pun hingga metode
`.mount()`-nya dipanggil. Metode ini membutuhkan argumen "container,"
yang bisa berupa elemen DOM sebenarnya atau string selektor:

``` {#fb5f4315-68a0-4942-8b9b-aa2022be9b58 .code}
htmlCopy code
<div id="app"></div>
```

``` {#885379e5-e90f-4c10-882d-779a379ba058 .code}
jsCopy code
app.mount('#app')
```

Konten dari komponen root aplikasi akan dirender di dalam elemen
kontainer. Elemen kontainer itu sendiri tidak dianggap sebagai bagian
dari aplikasi.

Metode `.mount()` harus selalu dipanggil setelah semua konfigurasi
aplikasi dan pendaftaran aset telah selesai dilakukan. Juga perlu
diingat bahwa nilai kembalinya, berbeda dengan metode pendaftaran aset,
adalah instance komponen root bukan instance aplikasi.

### Template Komponen Root di DOM {#9f35e81f-d1b2-472f-b060-6a879f1b2c75}

Biasanya, template untuk komponen root ada di dalam komponen itu
sendiri, tetapi juga memungkinkan untuk menyediakan template secara
terpisah dengan menulisnya langsung di dalam elemen kontainer yang akan
digunakan:

``` {#ca356bc6-2717-4eaa-8d44-960f0d5a131b .code}
htmlCopy code
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

``` {#3a30532e-b53f-473c-ba05-658d7c3da24b .code}
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

Vue secara otomatis akan menggunakan innerHTML dari elemen kontainer
sebagai template jika komponen root tidak memiliki opsi template.

Template di dalam DOM sering digunakan dalam aplikasi yang menggunakan
Vue tanpa tahapan kompilasi (build step). Mereka juga dapat digunakan
bersama dengan kerangka kerja sisi server (server-side frameworks), di
mana template root mungkin dibuat secara dinamis oleh server.

### Konfigurasi Aplikasi {#f180488c-0c22-4476-8996-43805a234892}

Instance aplikasi mengekspos objek `.config` yang memungkinkan kita
untuk mengonfigurasi beberapa opsi tingkat aplikasi, misalnya,
mendefinisikan penangan kesalahan tingkat aplikasi yang menangkap
kesalahan dari semua komponen turunan:

``` {#fd6eebe8-4d56-4bb2-a2fb-498f27175dbd .code}
jsCopy code
app.config.errorHandler = (err) => {
  /* tangani kesalahan */
}
```

Instance aplikasi juga menyediakan beberapa metode untuk mendaftarkan
aset yang berlaku untuk aplikasi. Misalnya, mendaftarkan sebuah
komponen:

``` {#1986bcb4-3e1a-4d62-a02a-7cbf49c685aa .code}
jsCopy code
app.component('TodoDeleteButton', TodoDeleteButton)
```

Ini membuat TodoDeleteButton tersedia untuk digunakan di mana saja dalam
aplikasi kita. Kami akan membahas pendaftaran komponen dan jenis aset
lainnya dalam bagian-bagian berikut dari panduan ini. Anda juga dapat
menjelajahi daftar lengkap API instance aplikasi dalam referensi
API-nya.

Pastikan untuk menerapkan semua konfigurasi aplikasi sebelum melakukan
mounting aplikasi!

### Beberapa Instance Aplikasi {#c7d7b460-c69e-46f7-b847-2343f7c0290f}

Anda tidak terbatas pada satu instance aplikasi di halaman yang sama.
Fungsi `createApp` memungkinkan beberapa aplikasi Vue untuk berdampingan
di halaman yang sama, masing-masing dengan ruang lingkup konfigurasi dan
aset globalnya sendiri:

``` {#be80b017-dd74-4b8e-9c01-85ef7976fc7b .code}
jsCopy code
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

Jika Anda menggunakan Vue untuk meningkatkan HTML yang dirrender oleh
server dan hanya membutuhkan Vue untuk mengendalikan bagian-bagian
tertentu dari halaman yang besar, hindari mounting satu instance
aplikasi Vue pada seluruh halaman. Sebaliknya, buat beberapa instance
aplikasi kecil dan pasang mereka pada elemen-elemen yang mereka tangani.

### Pemisahan Dalam Project {#c6418db9-853a-43ed-b3bb-b4a07e5450d4}

Berikut adalah contoh bagaimana Anda dapat memisahkan kode tersebut ke
dalam berkas-berkas Vue 3 dengan Composition API:

1.  Buat berkas `main.js`:

``` {#8ded2806-9f8f-4e6f-a088-24b42c6f7090 .code}
import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'

const app = createApp(App)
const app2 = createApp(App2)

app.config.errorHandler = (err) => {
  console.error('Error:', err)
}

app.mount('#app')
app2.mount('#app2')
```

2.  Buat berkas `App.vue`:

``` {#d877c084-abb3-4d1b-95f5-87acdca99de8 .code}
<template>
  <div>
    <h1>Aplikasi Vue</h1>
    <button @click="increment">Klik untuk menambah</button>
    <p>Jumlah: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

onMounted(() => {
  console.log(`Jumlah awal adalah ${count.value}.`)
})
</script>
```

3.  Selanjutnya, dalam berkas `App2.vue`, Anda dapat mengorganisir kode
    aplikasi kedua dengan Composition API:

``` {#3f4cc367-6834-4fff-a21f-4e4d503e8040 .code}
<template>
  <div>
    <h2>Aplikasi Kedua</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Halo dari Aplikasi Kedua!')
</script>
```

Dengan menggunakan Composition API, Anda dapat memisahkan logika
komponen ke dalam berkas `setup` yang bersih dan mudah dibaca. Kemudian,
Anda mengimpor komponen-komponen ini ke dalam `main.js` dan melakukan
mounting aplikasi seperti yang ditunjukkan pada tahap pertama.

Dengan cara ini, Anda menggunakan sintaks Composition API yang lebih
baru dan efisien dalam proyek Vue 3 Anda.

API Pada Vue {#88404eea-7d87-424c-8c66-80582bae45ec}
------------

Vue 3 Composition API menyediakan berbagai API tambahan yang dapat Anda
gunakan untuk mengatur logika komponen Anda. Di samping `ref` dan
`onMounted`, berikut beberapa API yang umum digunakan dalam Composition
API:

1.  **reactive**: Fungsi ini digunakan untuk membuat objek reaktif yang
    akan mengawasi perubahan properti-properti di dalamnya.

    Contoh:

    ``` {#b82eae9e-5f76-428b-8201-2363d9f27ef0 .code}
    javascriptCopy code
    import { reactive } from 'vue'

    const state = reactive({
      count: 0,
      message: 'Hello'
    })
    ```

`{ref}` dan `{reactive}` dalam API Vue 3 adalah dua konsep yang berbeda,
meskipun keduanya digunakan untuk mengatur reaktivitas data dalam
komponen Vue.

-   `{ref}` digunakan untuk membuat variabel reaktif yang mengemas nilai
    atau objek non-reaktif menjadi objek reaktif. Ini sering digunakan
    untuk menyimpan nilai tunggal atau variabel sederhana.

    Contoh:

    ``` {#9817829a-e49a-43a4-b516-954622a93fc4 .code}
    javascriptCopy code
    import { ref } from 'vue'

    const count = ref(0)
    ```

    Dalam contoh di atas, `count` adalah variabel reaktif yang dapat
    digunakan dalam komponen Vue, dan Anda mengakses nilainya dengan
    `count.value`.

<!-- -->

-   `{reactive}` digunakan untuk membuat objek reaktif yang mengemas
    berbagai properti menjadi objek reaktif. Ini sering digunakan untuk
    menyimpan objek yang memiliki beberapa properti.

    Contoh:

    ``` {#7bd6b02f-a91f-4df6-9b67-4cb86b4f3dd8 .code}
    javascriptCopy code
    import { reactive } from 'vue'

    const state = reactive({
      count: 0,
      message: 'Hello'
    })
    ```

    Dalam contoh ini, `state` adalah objek reaktif yang memiliki dua
    properti, `count` dan `message`. Anda mengakses properti-properti
    ini seperti `state.count` dan `state.message`.

Jadi, penggunaan `{ref}` dan `{reactive}` tergantung pada jenis data
yang ingin Anda reaktifkan. Jika Anda hanya perlu reaktifkan nilai
tunggal atau variabel sederhana, Anda dapat menggunakan `{ref}`. Jika
Anda memiliki objek dengan beberapa properti yang perlu diubah dengan
reaktivitas, Anda dapat menggunakan `{reactive}`.

2.  **computed**: Fungsi ini memungkinkan Anda untuk membuat properti
    terhitung (computed properties) berdasarkan properti-properti
    reaktif lainnya. Properti terhitung akan dihitung ulang hanya jika
    properti reaktif yang digunakan di dalamnya berubah.

    Contoh:

    ``` {#942ecf0b-ebed-4306-8243-36eb73cfefb6 .code}
    javascriptCopy code
    import { ref, computed } from 'vue'

    const count = ref(0)

    const doubledCount = computed(() => count.value * 2)
    ```

<!-- -->

3.  **watch**: Fungsi ini memungkinkan Anda untuk mengamati perubahan
    pada properti reaktif atau properti terhitung tertentu dan
    menjalankan kode ketika perubahan terjadi.

    Contoh:

    ``` {#dbb9308b-02b9-4695-a55e-09a88a9d3275 .code}
    javascriptCopy code
    import { ref, watch } from 'vue'

    const count = ref(0)

    watch(count, (newValue, oldValue) => {
      console.log(`Nilai baru: ${newValue}, Nilai lama: ${oldValue}`)
    })
    ```

<!-- -->

4.  **watchEffect**: Fungsi ini mirip dengan `watch`, tetapi tidak
    memerlukan properti yang spesifik untuk dipantau. Sebaliknya, ia
    akan secara otomatis melacak semua properti yang digunakan dalam
    fungsinya dan menjalankan kode ketika salah satu dari properti
    tersebut berubah.

    Contoh:

    ``` {#a2869312-f3a6-4150-820c-29db56708b9e .code}
    javascriptCopy code
    import { ref, watchEffect } from 'vue'

    const count = ref(0)

    watchEffect(() => {
      console.log(`Nilai count: ${count.value}`)
    })
    ```

<!-- -->

5.  **toRefs**: Fungsi ini digunakan untuk mengonversi objek reaktif ke
    dalam properti reaktif yang dapat diakses secara individual. Ini
    berguna ketika Anda ingin menyebarkan properti reaktif ke dalam
    komponen lain.

    Contoh:

    ``` {#b2d74371-c2c6-4b6d-b984-d8d585dba245 .code}
    javascriptCopy code
    import { ref, toRefs } from 'vue'

    const state = reactive({
      count: 0,
      message: 'Hello'
    })

    const { count, message } = toRefs(state)
    ```

<!-- -->

6.  **onUnmounted**: Ini adalah hook yang dipanggil ketika komponen
    di-unmount. Ini digunakan untuk membersihkan sumber daya atau
    melakukan tugas penutupan lainnya.

    Contoh:

    ``` {#2d8d324b-001b-46ad-9ec6-a4653a19ff5b .code}
    javascriptCopy code
    import { onUnmounted } from 'vue'

    onUnmounted(() => {
      // Lakukan tugas penutupan, seperti menghentikan timers atau unsubscribe dari event listeners
    })
    ```

<!-- -->

7.  **provide dan inject**: API ini digunakan untuk membagikan dan
    mengambil data antar komponen di dalam hirarki komponen Vue.

    Contoh:

    ``` {#2c2a856a-6f22-4d35-8257-46b482bd7908 .code}
    javascriptCopy code
    // Di komponen "parent"
    import { provide } from 'vue'

    const dataToProvide = ref('Data yang akan dibagikan')

    provide('sharedData', dataToProvide)

    // Di komponen "child"
    import { inject } from 'vue'

    const sharedData = inject('sharedData')
    ```

<!-- -->

8.  **ref untuk props**: Anda juga dapat menggunakan `ref` untuk
    mendeklarasikan props dalam komponen agar bisa diubah di dalam
    komponen tersebut.

    Contoh:

    ``` {#e15574af-f644-4328-ad5c-4c545f27d1d6 .code}
    javascriptCopy code
    import { ref } from 'vue'

    export default {
      props: {
        initialValue: Number
      },
      setup(props) {
        const value = ref(props.initialValue)
        return {
          value
        }
      }
    }
    ```

Itu adalah beberapa API umum dalam Composition API Vue 3. Namun,
terdapat lebih banyak API yang tersedia sesuai dengan kebutuhan
pengembangan Anda, dan Anda dapat merujuk pada dokumentasi resmi Vue 3
untuk informasi lebih lanjut: [**Vue 3 Composition
API**](https://v3.vuejs.org/guide/composition-api-introduction.html).

Mengambil Data  dengan Vue 3 {#ea80ea78-9331-4287-8552-a2c4edef2006}
----------------------------------

Anda dapat menggunakan API-API Vue 3 Composition untuk mengambil data
dari backend melalui HTTP. Biasanya, Anda akan menggunakan JavaScript's
`fetch` atau paket lain seperti Axios untuk melakukan permintaan HTTP.
Berikut adalah contoh sederhana bagaimana Anda dapat mengambil data dari
backend dan menampilkannya menggunakan Vue 3 Composition API:

a\. Install Axios (jika Anda belum melakukannya):

``` {#044a8427-fc22-46e4-a1b2-138a7e9d4225 .code}
bashCopy code
npm install axios
```

b\. Buat komponen Vue yang akan mengambil data dari backend:

``` {#8942d464-c7fd-450b-894b-52c42329edf6 .code}
vueCopy code
<template>
  <div>
    <h1>Data dari backend</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Membuat ref untuk menyimpan data dari backend
const data = ref([])

onMounted(async () => {
  try {
    // Melakukan permintaan HTTP GET ke endpoint backend
    const response = await axios.get('URL_ENDPOINT_backend')

    // Mengisi data dengan hasil respons dari backend
    data.value = response.data
  } catch (error) {
    console.error('Terjadi kesalahan:', error)
  }
})
</script>
```

Fungsi `onMounted` digunakan untuk menentukan tindakan yang akan diambil
saat suatu komponen Vue di-mount pada DOM. Jika Anda ingin melakukan
permintaan HTTP (seperti permintaan GET ke server backend) dalam
`onMounted`, Anda perlu membuat fungsi tersebut `async` karena operasi
jaringan (seperti permintaan HTTP) biasanya bersifat asinkronus.

Penjelasan langkah demi langkah dari potongan kode tersebut adalah
sebagai berikut:

1.  `onMounted`: Ini adalah hook yang akan dijalankan ketika komponen
    Vue di-mount pada DOM. Ini adalah tempat yang baik untuk menarik
    data awal atau melakukan inisialisasi komponen setelah dia di-mount.

<!-- -->

2.  `async () => { ... }`: Ini adalah fungsi asinkron yang digunakan
    untuk menjalankan operasi-operasi asinkronus, seperti permintaan
    HTTP. Penggunaan `async` mengindikasikan bahwa ada operasi asinkron
    yang akan dilakukan di dalamnya.

<!-- -->

3.  `try { ... } catch (error) { ... }`: Ini adalah blok try-catch yang
    digunakan untuk menangani kesalahan yang mungkin terjadi selama
    permintaan HTTP. Jika permintaan berhasil, kode dalam blok `try`
    akan dijalankan. Jika terjadi kesalahan, kode dalam blok `catch`
    akan menangkap dan menangani kesalahan tersebut.

<!-- -->

4.  `const response = await axios.get('URL_ENDPOINT_backend')`: Di dalam
    blok `try`, kita menggunakan `await` untuk menunggu hasil dari
    permintaan HTTP. Karena `await` hanya dapat digunakan dalam fungsi
    yang diberi tanda `async`, maka fungsi di atas juga diberi tanda
    `async`.
    -   `axios.get('URL_ENDPOINT_backend')`: Ini adalah permintaan HTTP
        GET menggunakan Axios ke URL yang disediakan sebagai
        'URL\_ENDPOINT\_backend'. Fungsi `await` menghentikan eksekusi
        hingga respons dari permintaan HTTP tersedia.

<!-- -->

5.  `data.value = response.data`: Setelah respons dari permintaan HTTP
    diterima, kita mengisi data komponen (dalam hal ini, variabel
    `data`) dengan hasil respons dari server backend. `data.value`
    digunakan untuk mengakses data di dalam ref karena ref adalah
    reaktif.

Jadi, penggunaan `async` dalam kombinasi dengan `await` memungkinkan
Anda untuk menjalankan operasi asinkron seperti permintaan HTTP secara
bersih dan menangani respons serta kesalahan dengan benar dalam komponen
Vue Anda.

Pastikan untuk mengganti `'URL_ENDPOINT_backend'` dengan URL sebenarnya
dari endpoint backend yang Anda ingin ambil data dari sana.

c\. Mount komponen di aplikasi Anda:

``` {#364739a0-a6be-493c-bc74-84d37b8457e2 .code}
javascriptCopy code
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

Dengan cara ini, ketika komponen di-mount, permintaan HTTP akan
dilakukan ke backend saat komponen `App.vue` dimount. Hasil respons akan
disimpan dalam `data`, dan data tersebut akan ditampilkan dalam komponen
dengan menggunakan loop `v-for`.

Pastikan juga untuk menangani penanganan kesalahan dan kondisi lain yang
sesuai dengan kebutuhan proyek Anda.

Sintak Dasar {#ec64355c-6f5c-4898-a3a7-fdd1c8c66027}
------------

Vue menggunakan sintaksis template berbasis HTML yang memungkinkan Anda
untuk secara deklaratif mengikat DOM yang dirender ke data instance
komponen yang mendasarinya. Semua template Vue adalah HTML yang valid
secara sintaksis dan dapat diparsing oleh browser yang sesuai dengan
spesifikasi dan parser HTML.

Di bawah permukaan, Vue mengkompilasi template menjadi kode JavaScript
yang sangat dioptimalkan. Dengan sistem reaktivitas, Vue dapat dengan
cerdas menentukan jumlah komponen minimal yang perlu dirender ulang dan
menerapkan jumlah manipulasi DOM yang minimal ketika status aplikasi
berubah.

Jika Anda sudah familiar dengan konsep Virtual DOM dan lebih suka
kekuatan langsung JavaScript, Anda juga dapat langsung menulis fungsi
render daripada template, dengan dukungan JSX yang opsional. Namun,
perlu dicatat bahwa mereka tidak menikmati tingkat optimasi waktu
kompilasi yang sama seperti template.

Interpolasi Teks\
Forma paling dasar dari binding data adalah interpolasi teks menggunakan
sintaksis "Mustache" (kurung kurawal ganda):\

Contoh:

``` {#1f96b710-f142-4d37-859f-c283e7b5dc6c .code}
htmlCopy code
<span>Pesan: {{ msg }}</span>
```

Tag mustache akan digantikan dengan nilai dari properti msg dari
instance komponen yang sesuai. Ini juga akan diperbarui setiap kali
properti msg berubah.

HTML Mentah\
Tag mustache ganda menginterpretasikan data sebagai teks biasa, bukan
HTML. Untuk menampilkan HTML sejati, Anda perlu menggunakan direktif
v-html:\

Contoh:

``` {#3abf6def-7e75-4742-98c8-1f3d78379855 .code}
htmlCopy code
<p>Menggunakan interpolasi teks: {{ rawHtml }}</p>
<p>Menggunakan direktif v-html: <span v-html="rawHtml"></span></p>
```

Di sini kita akan mengenal sesuatu yang baru. Atribut v-html yang Anda
lihat disebut sebagai direktif. Direktif ini memiliki awalan v- untuk
menunjukkan bahwa mereka adalah atribut khusus yang disediakan oleh Vue,
dan seperti yang mungkin Anda duga, mereka menerapkan perilaku reaktif
khusus pada DOM yang dirender. Di sini, kita sebenarnya mengatakan "jaga
HTML inner elemen ini tetap terbaru dengan properti rawHtml pada
instance aktif saat ini."

Isi dari span akan digantikan dengan nilai properti rawHtml, yang
diinterpretasikan sebagai HTML biasa - binding data diabaikan. Perlu
diingat bahwa Anda tidak dapat menggunakan v-html untuk menggabungkan
template parsial, karena Vue bukan mesin templating berbasis string.
Sebaliknya, komponen lebih disukai sebagai unit dasar untuk penggunaan
dan komposisi UI.

<div style="font-size:1.5em">

[💡]{.icon}

</div>

<div style="width:100%">

Peringatan Keamanan\
Merender HTML sembarang secara dinamis pada situs web Anda bisa sangat
berbahaya karena bisa dengan mudah menyebabkan kerentanan XSS. Hanya
gunakan v-html pada konten yang dipercayai dan jangan pernah pada konten
yang diberikan oleh pengguna.\

</div>

### Binding Atribut {#15c143a0-4930-440c-9965-0e580895b736}

Mustache tidak dapat digunakan di dalam atribut HTML. Sebaliknya,
gunakan direktif v-bind:

Contoh:

``` {#23af7621-8e66-4094-a46c-cbfac5f19350 .code}
htmlCopy code
<div v-bind:id="dynamicId"></div>
```

Direktif v-bind memberi tahu Vue untuk menjaga agar atribut id elemen
tetap selaras dengan properti dynamicId komponen. Jika nilai yang diikat
adalah null atau tidak didefinisikan, maka atribut akan dihapus dari
elemen yang dirender.

**Pendekatan Singkat**\
Karena v-bind sangat umum digunakan, ada sintaksis singkat yang khusus:\

Contoh:

``` {#db9b99b6-6f5b-48c2-b2d5-7aeed305925d .code}
htmlCopy code
<div :id="dynamicId"></div>
```

Atribut yang dimulai dengan : mungkin terlihat sedikit berbeda dari HTML
biasa, tetapi sebenarnya karakter yang valid untuk nama atribut dan
semua browser yang didukung Vue dapat memparsenya dengan benar. Selain
itu, mereka tidak muncul dalam markup yang dirender akhir. Sintaksis
pendek ini bersifat opsional, tetapi Anda mungkin akan mengapresiasinya
saat Anda memahami lebih banyak tentang penggunaannya nanti.

### Atribut Boolean {#7312aba8-d679-4a4c-820a-8a32e9af89fd}

Atribut boolean adalah atribut yang dapat menunjukkan nilai true / false
dengan kehadirannya pada elemen. Misalnya, disabled adalah salah satu
atribut boolean yang paling umum digunakan.

v-bind bekerja sedikit berbeda dalam kasus ini:

Contoh:

``` {#60af541a-9ada-49de-9b8d-85142c0d9bd3 .code}
htmlCopy code
<button :disabled="isButtonDisabled">Tombol</button>
```

Atribut disabled akan disertakan jika isButtonDisabled memiliki nilai
yang benar. Itu juga akan disertakan jika nilai tersebut adalah string
kosong, menjaga konsistensi dengan &lt;button disabled=""&gt;. Untuk
nilai yang salah, atribut akan diabaikan.

### Binding Atribut Ganda {#70bf2fdf-3ced-4288-9ba4-9eed4a4f5711}

Jika Anda memiliki objek JavaScript yang mewakili beberapa atribut
seperti ini:

``` {#ccfedfd7-8a9e-4f6c-99b9-3aebe36a2f99 .code}
jsCopy code
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
```

Anda dapat mengikatnya ke satu elemen menggunakan v-bind tanpa argumen:

Contoh:

``` {#2dc78172-8b98-42ad-8dda-8fd0600876e6 .code}
htmlCopy code
<div v-bind="objectOfAttrs"></div>
```

### Menggunakan Ekspresi JavaScript {#8a25b443-5887-4696-b0ef-39e88abac4b1}

Sejauh ini, kita hanya mengikat ke kunci properti sederhana dalam
template kita. Namun, Vue sebenarnya mendukung kekuatan penuh ekspresi
JavaScript dalam semua binding data:

Contoh:

``` {#315338e1-f243-4d12-b2cf-080ed39a2186 .code}
htmlCopy code
{{ number + 1 }}

{{ ok ? 'YA' : 'TIDAK' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

Ekspresi ini akan dievaluasi sebagai JavaScript dalam cakupan data dari
instance komponen saat ini.

Di template Vue, ekspresi JavaScript dapat digunakan dalam posisi
berikut:

-   Dalam interpolasi teks (mustache)

<!-- -->

-   Dalam nilai atribut dari semua direktif Vue (atribut khusus yang
    dimulai dengan v-)\
    Hanya Ekspresi\
    Setiap binding hanya dapat mengandung satu ekspresi tunggal. Sebuah
    ekspresi adalah potongan kode yang dapat dievaluasi menjadi nilai.
    Periksa apakah itu bisa digunakan setelah kata kunci return.\

Oleh karena itu, yang berikut INI TIDAK akan berfungsi:

``` {#15a11d72-64c9-44af-aa0a-42b33c450653 .code}
htmlCopy code
<!-- ini adalah pernyataan, bukan ekspresi: -->
{{ var a = 1 }}

<!-- kontrol aliran juga tidak akan berfungsi, gunakan ekspresi ternary -->
{{ if (ok) { return message } }}
```

### Memanggil Fungsi {#f3bab98d-55b0-4f42-b899-09733a843957}

Mungkin untuk memanggil metode yang terpapar oleh komponen dalam
ekspresi binding:

``` {#677dc727-2061-4426-a28c-d02e3733ae9a .code}
htmlCopy code
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

FUNGSI yang dipanggil dalam ekspresi binding akan dipanggil setiap kali
komponen diperbarui, sehingga mereka tidak boleh memiliki efek samping,
seperti mengubah data atau memicu operasi asinkron.

### Akses Global yang Terbatas {#44ac0a63-131b-4ea0-94e5-f47fc22d7683}

Ekspresi template di sandbox dan hanya memiliki akses ke daftar terbatas
global. Daftar ini mengekspos global bawaan yang umum digunakan seperti
Math dan Date.

Global yang tidak secara eksplisit dimasukkan dalam daftar, misalnya
properti yang terpasang pengguna di jendela, tidak akan dapat diakses
dalam ekspresi template. Namun, Anda dapat secara eksplisit menentukan
global tambahan untuk semua ekspresi Vue dengan menambahkannya ke
app.config.globalProperties.

### Direktif {#5232d31e-62cc-4886-b387-cb9cf984d491}

Direktif adalah atribut khusus dengan awalan v-. Vue menyediakan
sejumlah direktif bawaan, termasuk v-html dan v-bind yang telah kami
perkenalkan di atas.

Nilai atribut direktif diharapkan menjadi ekspresi JavaScript tunggal
(kecuali v-for, v-on, dan v-slot, yang akan dibahas di bagian mereka
masing-masing nanti). Tugas direktif adalah secara reaktif menerapkan
pembaruan ke DOM ketika nilai ekspresinya berubah. Ambil v-if sebagai
contoh:

``` {#41c41a1f-21cb-436d-bbe2-c655c329ae70 .code}
htmlCopy code
<p v-if="seen">Sekarang Anda melihat saya</p>
```

Di sini, direktif v-if akan menghapus / menyisipkan elemen &lt;p&gt;
berdasarkan kebenaran dari nilai ekspresi seen.

### Argumen {#1a9c3940-ba20-4fcb-87c8-5b28859a5ee8}

Beberapa direktif dapat mengambil "argumen", yang ditandai dengan titik
setelah nama direktif. Misalnya, direktif v-bind digunakan untuk secara
reaktif memperbarui atribut HTML:

``` {#e69280dc-d2aa-4f85-ab01-bd20243a759b .code}
htmlCopy code
<a v-bind:href="url"> ... </a>

<!-- singkatan -->
<a :href="url"> ... </a>
```

Di sini, href adalah argumen, yang memberi tahu direktif v-bind untuk
mengikat atribut href elemen ke nilai ekspresi url. Dalam singkatan,
semua yang ada sebelum argumen (yaitu, v-bind:) dikompres menjadi satu
karakter, :.

Contoh lain adalah direktif v-on, yang mendengarkan acara DOM:

``` {#13fe6cb9-fb5e-47a7-b37b-61512f85b1e2 .code}
htmlCopy code
<a v-on:click="doSomething"> ... </a>

<!-- singkatan -->
<a @click="doSomething"> ... </a>
```

Di sini, argumen adalah nama acara yang akan didengarkan: klik. v-on
memiliki singkatan yang sesuai, yaitu karakter @. Kami akan membahas
penanganan acara lebih detail juga.

### Argumen Dinamis {#f83d3096-e44f-43a7-8a46-c61aae5d51f6}

Juga mungkin menggunakan ekspresi JavaScript dalam argumen direktif
dengan mengapitnya dengan tanda kurung siku:

``` {#13fb48bc-0ce3-4ac2-9a1c-4398de629e9f .code}
htmlCopy code
<!--
Perhatikan bahwa ada beberapa batasan pada ekspresi argumen,
seperti yang dijelaskan dalam bagian "Dynamic Argument Value Constraints" dan "Dynamic Argument Syntax Constraints" di bawah.
-->
<a v-bind:[attributeName]="url"> ... </a>

<!-- singkatan -->
<a :[attributeName]="url"> ... </a>
```

Di sini, attributeName akan dievaluasi secara dinamis sebagai ekspresi
JavaScript, dan nilai yang dievaluasi akan digunakan sebagai nilai akhir
untuk argumen. Misalnya, jika instance komponen Anda memiliki properti
data, attributeName, yang nilainya adalah "href", maka ikatan ini akan
setara dengan v-bind:href.

Demikian pula, Anda dapat menggunakan argumen dinamis untuk mengikat
penangan ke nama acara dinamis:

``` {#a9d6764c-d240-41a9-bcd1-04e6dd635610 .code}
htmlCopy code
<a v-on:[eventName]="doSomething"> ... </a>

<!-- singkatan -->
<a @[eventName]="doSomething">
```

Dalam contoh ini, jika nilai eventName adalah "focus",
v-on:\[eventName\] akan setara dengan v-on:focus.

### Kendala Nilai Argumen Dinamis {#3584d867-66be-4e8b-8dbb-28074506d794}

Argumen dinamis diharapkan menghasilkan string, dengan pengecualian
null. Nilai khusus null dapat digunakan untuk menghapus ikatan secara
eksplisit. Nilai lain yang bukan string akan memicu peringatan.

Kendala Sintaksis Argumen Dinamis\
Ekspresi argumen dinamis memiliki beberapa kendala sintaksis karena
beberapa karakter, seperti spasi dan tanda kutip, tidak valid dalam nama
atribut HTML. Misalnya, ini adalah contoh yang tidak valid:\

``` {#13006686-da05-40f3-835d-83f4dd5e875f .code}
htmlCopy code
<!-- Ini akan memicu peringatan kompiler. -->
<a :['foo' + bar]="value"> ... </a>
```

Jika Anda perlu melewati argumen dinamis yang kompleks, lebih baik
menggunakan properti terhitung, yang akan kami bahas segera.

Ketika menggunakan template in-DOM (template yang ditulis langsung dalam
file HTML), Anda juga harus menghindari memberi nama kunci dengan huruf
kapital, karena browser akan memaksa nama atribut menjadi huruf kecil:

``` {#fa80146d-9106-4fff-8dd7-c8482c217762 .code}
htmlCopy code
<a :[someAttr]="value"> ... </a>
```

Di atas akan dikonversi menjadi :\[someattr\] dalam template in-DOM.
Jika komponen Anda memiliki properti someAttr daripada someattr, kode
Anda tidak akan berfungsi. Template dalam Komponen File Tunggal tidak
tunduk pada kendala ini.

Modifier\
Modifier adalah akhiran khusus yang ditandai dengan titik, yang
menunjukkan bahwa sebuah direktif harus diikat dengan cara khusus.
Misalnya, modifier .prevent memberi tahu direktif v-on untuk memanggil
event.preventDefault() pada acara yang dipicu:\

``` {#8f161b43-a745-48c3-ad23-58be5b486727 .code}
htmlCopy code
<form @submit.prevent="onSubmit">...</form>
```

Anda akan melihat contoh-modifier lainnya nanti, untuk v-on dan v-model,
ketika kami menjelajahi fitur-fitur tersebut.

**Mendefinisikan Komponen** {#6f8e5eea-c68e-48d8-b4b0-4ac9587688f1}
---------------------------

Anda dapat mendefinisikan komponen Vue dalam dua cara:

1.  **Dengan Menggunakan Alur Build (Single-File Component - SFC):**\
    Biasanya, Anda mendefinisikan setiap komponen Vue dalam file
    terpisah dengan ekstensi .vue. Berikut adalah contoh komponen
    sederhana:\

    ``` {#4cd5061a-d547-4784-8487-bedb90582776 .code}
    vueCopy code
    <template>
      <div>
        <h1>Selamat datang di komponen saya!</h1>
      </div>
    </template>

    <script setup>
    // Di sini Anda bisa mengimpor berbagai hal yang Anda butuhkan
    // dan mendefinisikan logika komponen Anda.
    </script>
    ```

<!-- -->

2.  **Tanpa Alur Build (Objek JavaScript):**\
    Anda juga dapat mendefinisikan komponen sebagai objek JavaScript
    biasa. Berikut contohnya:\

    ``` {#7705f549-356a-4eb9-a524-d418db99bcf1 .code}
    javascriptCopy code
    Vue.component('my-component', {
      template: `
        <div>
          <h1>Selamat datang di komponen saya!</h1>
        </div>
      `
    });
    ```

**Menggunakan Komponen:**

Anda dapat menggunakan komponen dengan cara mengimpornya ke komponen
lain atau secara global. Misalnya, jika Anda memiliki komponen bernama
`ButtonCounter`, Anda bisa menggunakannya seperti ini:

``` {#0051a199-7ce3-4e1c-bc5c-63323e0204b0 .code}
vueCopy code
<script setup>
import ButtonCounter from './ButtonCounter.vue' // Mengimpor komponen
</script>

<template>
  <h1>Ini adalah komponen anak!</h1>
  <ButtonCounter /> <!-- Menggunakan komponen -->
</template>
```

**Props (Mengirim Data ke Komponen):**

Props adalah cara untuk mengirim data ke komponen lain. Misalnya, jika
Anda ingin mengirimkan judul ke komponen `BlogPost`, Anda bisa
melakukannya seperti ini:

``` {#8daa0b42-3e32-4ebe-9290-a43204f7c49f .code}
vueCopy code
<!-- BlogPost.vue -->
<template>
  <h4>{{ title }}</h4>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title']) // Mendefinisikan prop 'title'
</script>
```

Kemudian, Anda bisa mengirimkan data ke komponen tersebut:

``` {#dc10a0b6-58ec-4365-8a55-3bb8579cf11a .code}
vueCopy code
<BlogPost title="Perjalanan Saya dengan Vue" />
```

**Mendengarkan Event (Komunikasi Antar Komponen):**

Anda dapat menggunakan event untuk berkomunikasi antara komponen anak
dan komponen induk. Misalkan, Anda ingin memungkinkan komponen anak
untuk mengirim event ke komponen induk. Berikut contohnya:

``` {#3771ff2e-26d8-4f9c-b5ba-dcb12d0a719c .code}
vueCopy code
<!-- ChildComponent.vue -->
<template>
  <button @click="kirimEvent">Kirim Event</button>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['event-anak']) // Mendefinisikan event yang bisa dikirim
</script>

<script>
function kirimEvent() {
  emit('event-anak', 'Data dari anak ke induk');
}
</script>
```

Kemudian, dalam komponen induk, Anda mendengarkan event tersebut:

``` {#d6930fd3-1de7-492f-ada6-03a9bfeb8c4d .code}
vueCopy code
<!-- ParentComponent.vue -->
<template>
  <div>
    <p>{{ pesan }}</p>
    <ChildComponent @event-anak="terimaEvent" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'
</script>

<script>
function terimaEvent(data) {
  pesan = data;
}
</script>
```

</div>

