import{_ as n,c as s,ag as e,o as p}from"./chunks/framework.DNBSSkcL.js";const g=JSON.parse('{"title":"Vue3","description":"","frontmatter":{},"headers":[],"relativePath":"vue/index.md","filePath":"vue/index.md"}'),i={name:"vue/index.md"};function t(l,a,o,d,c,u){return p(),s("div",null,a[0]||(a[0]=[e(`<h1 id="vue3" class="page-title" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3 {#vue3 .page-title}&quot;">​</a></h1><div class="page-body"><h2 id="95096177-acd7-44b2-90fd-baec9c1b1945" tabindex="-1">API Styles pada Vue mengacu pada dua gaya pengembangan komponen Vue, yaitu Options API dan Composition API. <a class="header-anchor" href="#95096177-acd7-44b2-90fd-baec9c1b1945" aria-label="Permalink to &quot;API Styles pada Vue mengacu pada dua gaya pengembangan komponen Vue, yaitu Options API dan Composition API. {#95096177-acd7-44b2-90fd-baec9c1b1945}&quot;">​</a></h2><h3 id="d661926e-54aa-4d64-9419-fd6c2242b489" tabindex="-1">Options API <a class="header-anchor" href="#d661926e-54aa-4d64-9419-fd6c2242b489" aria-label="Permalink to &quot;Options API {#d661926e-54aa-4d64-9419-fd6c2242b489}&quot;">​</a></h3><p>Dengan Options API, kita mendefinisikan logika komponen menggunakan objek opsi seperti data, methods, dan mounted. Properti yang didefinisikan oleh opsi akan diekspos di dalam fungsi-fungsi komponen, yang menunjuk pada instance komponen:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // Properti yang dikembalikan dari data() menjadi state yang reaktif</span></span>
<span class="line"><span>  // dan akan diekspos pada \`this\`.</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Methods adalah fungsi-fungsi yang mengubah state dan memicu pembaruan.</span></span>
<span class="line"><span>  // Mereka dapat diikat sebagai event handler dalam template.</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count++</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Lifecycle hooks dipanggil pada berbagai tahap</span></span>
<span class="line"><span>  // dari siklus hidup komponen.</span></span>
<span class="line"><span>  // Fungsi ini akan dipanggil saat komponen dimount.</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    console.log(\`Jumlah awal adalah \${this.count}.\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;increment&quot;&gt;Jumlah: {{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h3 id="a2e5186c-ceec-4d7b-93f7-50dfa9bd7ca3" tabindex="-1">Composition API <a class="header-anchor" href="#a2e5186c-ceec-4d7b-93f7-50dfa9bd7ca3" aria-label="Permalink to &quot;Composition API {#a2e5186c-ceec-4d7b-93f7-50dfa9bd7ca3}&quot;">​</a></h3><p>Dengan Composition API, kita mendefinisikan logika komponen menggunakan fungsi-fungsi API yang diimpor. Pada komponen berkas tunggal (Single File Components - SFCs), Composition API biasanya digunakan dengan menggunakan <code>&lt;script setup&gt;</code>. Atribut setup adalah petunjuk yang membuat Vue melakukan transformasi pada saat kompilasi yang memungkinkan kita untuk menggunakan Composition API dengan lebih sedikit boilerplate. Misalnya, impor dan variabel/fungsi tingkat atas yang dideklarasikan dalam <code>&lt;script setup&gt;</code> dapat langsung digunakan dalam template.</p><p>Berikut adalah contoh komponen yang sama, dengan template yang sama, tetapi menggunakan Composition API dan <code>&lt;script setup&gt;</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// state yang reaktif</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fungsi-fungsi yang mengubah state dan memicu pembaruan</span></span>
<span class="line"><span>function increment() {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// lifecycle hooks</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  console.log(\`Jumlah awal adalah \${count.value}.\`)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;increment&quot;&gt;Jumlah: {{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p>Pemilihan Gaya Pengembangan:<br> Kedua gaya API ini sepenuhnya mampu mengatasi kasus penggunaan umum. Mereka adalah antarmuka yang berbeda yang didukung oleh sistem dasar yang sama. Bahkan, Options API diimplementasikan di atas Composition API. Konsep dasar dan pengetahuan tentang Vue bersifat universal di kedua gaya ini.\\</p><p>Options API berfokus pada konsep &quot;instance komponen&quot; (this seperti yang terlihat dalam contoh), yang biasanya lebih sesuai dengan model berbasis kelas untuk pengguna yang datang dari latar belakang bahasa berorientasi objek (OOP). Ini juga lebih cocok untuk pemula karena mengabstraksi detail reaktivitas dan menerapkan organisasi kode melalui kelompok opsi.</p><p>Composition API berfokus pada deklarasi variabel state reaktif secara langsung dalam cakupan fungsi dan menggabungkan state dari beberapa fungsi bersama-sama untuk menangani kompleksitas. Ini lebih bebas dalam penggunaannya dan memerlukan pemahaman tentang cara reaktivitas berfungsi di Vue untuk digunakan dengan efektif. Sebagai imbalannya, fleksibilitasnya memungkinkan pola-pola yang lebih kuat untuk mengatur dan menggunakan logika.</p><p>Jika Anda baru mengenal Vue, berikut rekomendasi umum kami:</p><ul><li>Untuk tujuan pembelajaran, pilih gaya yang tampak lebih mudah dipahami oleh Anda. Lagi pula, sebagian besar konsep inti dibagikan antara kedua gaya ini. Anda selalu dapat memilih gaya lainnya nanti.</li></ul><ul><li><p>Untuk penggunaan produksi:</p><ul><li>Pilih Options API jika Anda tidak menggunakan alat pengembangan (build tools), atau berencana menggunakan Vue terutama dalam skenario yang kurang kompleks, misalnya, enhancement progresif.</li></ul><ul><li>Pilih Composition API + Single-File Components jika Anda berencana membangun aplikasi lengkap dengan Vue.</li></ul></li></ul><p>Anda tidak perlu mengikatkan diri pada satu gaya selama fase pembelajaran. Dokumentasi lainnya akan memberikan contoh kode dalam kedua gaya jika memungkinkan, dan Anda dapat beralih antara keduanya kapan saja menggunakan sakelar Preferensi API di bagian atas panel sisi kiri.</p><h2 id="a07ea2bd-0bd9-45ed-b8bd-a0bb5af9a6d5" tabindex="-1">Membuat Aplikasi Vue <a class="header-anchor" href="#a07ea2bd-0bd9-45ed-b8bd-a0bb5af9a6d5" aria-label="Permalink to &quot;Membuat Aplikasi Vue {#a07ea2bd-0bd9-45ed-b8bd-a0bb5af9a6d5}&quot;">​</a></h2><p>Setiap aplikasi Vue dimulai dengan membuat sebuah instance aplikasi baru menggunakan fungsi <code>createApp</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp({</span></span>
<span class="line"><span>  /* opsi komponen root */</span></span>
<span class="line"><span>})</span></span></code></pre></div><h3 id="d581bd5a-df9b-4e02-9312-69b8d8b49945" tabindex="-1">Komponen Root <a class="header-anchor" href="#d581bd5a-df9b-4e02-9312-69b8d8b49945" aria-label="Permalink to &quot;Komponen Root {#d581bd5a-df9b-4e02-9312-69b8d8b49945}&quot;">​</a></h3><p>Objek yang kita berikan ke dalam <code>createApp</code> sebenarnya adalah sebuah komponen. Setiap aplikasi memerlukan &quot;komponen root&quot; yang dapat berisi komponen-komponen lain sebagai anak-anaknya.</p><p>Jika Anda menggunakan Single-File Components, biasanya kita mengimpor komponen root dari file terpisah:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>// mengimpor komponen root App dari sebuah Single-File Component.</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span></code></pre></div><p>Sementara banyak contoh dalam panduan ini hanya memerlukan satu komponen, sebagian besar aplikasi nyata terorganisir dalam sebuah pohon komponen yang bersarang dan dapat digunakan kembali. Sebagai contoh, pohon komponen aplikasi To-Do bisa terlihat seperti ini:</p><ul><li><p>App (komponen root)</p><ul><li>TodoList <ul><li><p>TodoItem</p><ul><li>TodoDeleteButton</li></ul><ul><li>TodoEditButton</li></ul></li></ul></li></ul><ul><li><p>TodoFooter</p><ul><li>TodoClearButton</li></ul><ul><li>TodoStatistics</li></ul></li></ul></li></ul><p>Pada bagian-bagian berikut dalam panduan ini, kita akan membahas cara mendefinisikan dan menggabungkan beberapa komponen bersama-sama. Sebelum itu, kita akan fokus pada apa yang terjadi di dalam satu komponen.</p><h3 id="8efd819c-5ce9-480f-957f-7855f457aca4" tabindex="-1">Mounting Aplikasi <a class="header-anchor" href="#8efd819c-5ce9-480f-957f-7855f457aca4" aria-label="Permalink to &quot;Mounting Aplikasi {#8efd819c-5ce9-480f-957f-7855f457aca4}&quot;">​</a></h3><p>Sebuah instance aplikasi tidak akan merender apa pun hingga metode <code>.mount()</code>-nya dipanggil. Metode ini membutuhkan argumen &quot;container,&quot; yang bisa berupa elemen DOM sebenarnya atau string selektor:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsCopy code</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><p>Konten dari komponen root aplikasi akan dirender di dalam elemen kontainer. Elemen kontainer itu sendiri tidak dianggap sebagai bagian dari aplikasi.</p><p>Metode <code>.mount()</code> harus selalu dipanggil setelah semua konfigurasi aplikasi dan pendaftaran aset telah selesai dilakukan. Juga perlu diingat bahwa nilai kembalinya, berbeda dengan metode pendaftaran aset, adalah instance komponen root bukan instance aplikasi.</p><h3 id="9f35e81f-d1b2-472f-b060-6a879f1b2c75" tabindex="-1">Template Komponen Root di DOM <a class="header-anchor" href="#9f35e81f-d1b2-472f-b060-6a879f1b2c75" aria-label="Permalink to &quot;Template Komponen Root di DOM {#9f35e81f-d1b2-472f-b060-6a879f1b2c75}&quot;">​</a></h3><p>Biasanya, template untuk komponen root ada di dalam komponen itu sendiri, tetapi juga memungkinkan untuk menyediakan template secara terpisah dengan menulisnya langsung di dalam elemen kontainer yang akan digunakan:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp({</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><p>Vue secara otomatis akan menggunakan innerHTML dari elemen kontainer sebagai template jika komponen root tidak memiliki opsi template.</p><p>Template di dalam DOM sering digunakan dalam aplikasi yang menggunakan Vue tanpa tahapan kompilasi (build step). Mereka juga dapat digunakan bersama dengan kerangka kerja sisi server (server-side frameworks), di mana template root mungkin dibuat secara dinamis oleh server.</p><h3 id="f180488c-0c22-4476-8996-43805a234892" tabindex="-1">Konfigurasi Aplikasi <a class="header-anchor" href="#f180488c-0c22-4476-8996-43805a234892" aria-label="Permalink to &quot;Konfigurasi Aplikasi {#f180488c-0c22-4476-8996-43805a234892}&quot;">​</a></h3><p>Instance aplikasi mengekspos objek <code>.config</code> yang memungkinkan kita untuk mengonfigurasi beberapa opsi tingkat aplikasi, misalnya, mendefinisikan penangan kesalahan tingkat aplikasi yang menangkap kesalahan dari semua komponen turunan:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsCopy code</span></span>
<span class="line"><span>app.config.errorHandler = (err) =&gt; {</span></span>
<span class="line"><span>  /* tangani kesalahan */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Instance aplikasi juga menyediakan beberapa metode untuk mendaftarkan aset yang berlaku untuk aplikasi. Misalnya, mendaftarkan sebuah komponen:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsCopy code</span></span>
<span class="line"><span>app.component(&#39;TodoDeleteButton&#39;, TodoDeleteButton)</span></span></code></pre></div><p>Ini membuat TodoDeleteButton tersedia untuk digunakan di mana saja dalam aplikasi kita. Kami akan membahas pendaftaran komponen dan jenis aset lainnya dalam bagian-bagian berikut dari panduan ini. Anda juga dapat menjelajahi daftar lengkap API instance aplikasi dalam referensi API-nya.</p><p>Pastikan untuk menerapkan semua konfigurasi aplikasi sebelum melakukan mounting aplikasi!</p><h3 id="c7d7b460-c69e-46f7-b847-2343f7c0290f" tabindex="-1">Beberapa Instance Aplikasi <a class="header-anchor" href="#c7d7b460-c69e-46f7-b847-2343f7c0290f" aria-label="Permalink to &quot;Beberapa Instance Aplikasi {#c7d7b460-c69e-46f7-b847-2343f7c0290f}&quot;">​</a></h3><p>Anda tidak terbatas pada satu instance aplikasi di halaman yang sama. Fungsi <code>createApp</code> memungkinkan beberapa aplikasi Vue untuk berdampingan di halaman yang sama, masing-masing dengan ruang lingkup konfigurasi dan aset globalnya sendiri:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsCopy code</span></span>
<span class="line"><span>const app1 = createApp({</span></span>
<span class="line"><span>  /* ... */</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>app1.mount(&#39;#container-1&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app2 = createApp({</span></span>
<span class="line"><span>  /* ... */</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>app2.mount(&#39;#container-2&#39;)</span></span></code></pre></div><p>Jika Anda menggunakan Vue untuk meningkatkan HTML yang dirrender oleh server dan hanya membutuhkan Vue untuk mengendalikan bagian-bagian tertentu dari halaman yang besar, hindari mounting satu instance aplikasi Vue pada seluruh halaman. Sebaliknya, buat beberapa instance aplikasi kecil dan pasang mereka pada elemen-elemen yang mereka tangani.</p><h3 id="c6418db9-853a-43ed-b3bb-b4a07e5450d4" tabindex="-1">Pemisahan Dalam Project <a class="header-anchor" href="#c6418db9-853a-43ed-b3bb-b4a07e5450d4" aria-label="Permalink to &quot;Pemisahan Dalam Project {#c6418db9-853a-43ed-b3bb-b4a07e5450d4}&quot;">​</a></h3><p>Berikut adalah contoh bagaimana Anda dapat memisahkan kode tersebut ke dalam berkas-berkas Vue 3 dengan Composition API:</p><ol><li>Buat berkas <code>main.js</code>:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import App2 from &#39;./App2.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>const app2 = createApp(App2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.config.errorHandler = (err) =&gt; {</span></span>
<span class="line"><span>  console.error(&#39;Error:&#39;, err)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span>app2.mount(&#39;#app2&#39;)</span></span></code></pre></div><ol start="2"><li>Buat berkas <code>App.vue</code>:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Aplikasi Vue&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;increment&quot;&gt;Klik untuk menambah&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Jumlah: {{ count }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const increment = () =&gt; {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  console.log(\`Jumlah awal adalah \${count.value}.\`)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><ol start="3"><li>Selanjutnya, dalam berkas <code>App2.vue</code>, Anda dapat mengorganisir kode aplikasi kedua dengan Composition API:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;Aplikasi Kedua&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ message }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const message = ref(&#39;Halo dari Aplikasi Kedua!&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>Dengan menggunakan Composition API, Anda dapat memisahkan logika komponen ke dalam berkas <code>setup</code> yang bersih dan mudah dibaca. Kemudian, Anda mengimpor komponen-komponen ini ke dalam <code>main.js</code> dan melakukan mounting aplikasi seperti yang ditunjukkan pada tahap pertama.</p><p>Dengan cara ini, Anda menggunakan sintaks Composition API yang lebih baru dan efisien dalam proyek Vue 3 Anda.</p><h2 id="88404eea-7d87-424c-8c66-80582bae45ec" tabindex="-1">API Pada Vue <a class="header-anchor" href="#88404eea-7d87-424c-8c66-80582bae45ec" aria-label="Permalink to &quot;API Pada Vue {#88404eea-7d87-424c-8c66-80582bae45ec}&quot;">​</a></h2><p>Vue 3 Composition API menyediakan berbagai API tambahan yang dapat Anda gunakan untuk mengatur logika komponen Anda. Di samping <code>ref</code> dan <code>onMounted</code>, berikut beberapa API yang umum digunakan dalam Composition API:</p><ol><li><p><strong>reactive</strong>: Fungsi ini digunakan untuk membuat objek reaktif yang akan mengawasi perubahan properti-properti di dalamnya.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: 0,</span></span>
<span class="line"><span>  message: &#39;Hello&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><p><code>{ref}</code> dan <code>{reactive}</code> dalam API Vue 3 adalah dua konsep yang berbeda, meskipun keduanya digunakan untuk mengatur reaktivitas data dalam komponen Vue.</p><ul><li><p><code>{ref}</code> digunakan untuk membuat variabel reaktif yang mengemas nilai atau objek non-reaktif menjadi objek reaktif. Ini sering digunakan untuk menyimpan nilai tunggal atau variabel sederhana.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span></code></pre></div><p>Dalam contoh di atas, <code>count</code> adalah variabel reaktif yang dapat digunakan dalam komponen Vue, dan Anda mengakses nilainya dengan <code>count.value</code>.</p></li></ul><ul><li><p><code>{reactive}</code> digunakan untuk membuat objek reaktif yang mengemas berbagai properti menjadi objek reaktif. Ini sering digunakan untuk menyimpan objek yang memiliki beberapa properti.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: 0,</span></span>
<span class="line"><span>  message: &#39;Hello&#39;</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>Dalam contoh ini, <code>state</code> adalah objek reaktif yang memiliki dua properti, <code>count</code> dan <code>message</code>. Anda mengakses properti-properti ini seperti <code>state.count</code> dan <code>state.message</code>.</p></li></ul><p>Jadi, penggunaan <code>{ref}</code> dan <code>{reactive}</code> tergantung pada jenis data yang ingin Anda reaktifkan. Jika Anda hanya perlu reaktifkan nilai tunggal atau variabel sederhana, Anda dapat menggunakan <code>{ref}</code>. Jika Anda memiliki objek dengan beberapa properti yang perlu diubah dengan reaktivitas, Anda dapat menggunakan <code>{reactive}</code>.</p><ol start="2"><li><p><strong>computed</strong>: Fungsi ini memungkinkan Anda untuk membuat properti terhitung (computed properties) berdasarkan properti-properti reaktif lainnya. Properti terhitung akan dihitung ulang hanya jika properti reaktif yang digunakan di dalamnya berubah.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const doubledCount = computed(() =&gt; count.value * 2)</span></span></code></pre></div></li></ol><ol start="3"><li><p><strong>watch</strong>: Fungsi ini memungkinkan Anda untuk mengamati perubahan pada properti reaktif atau properti terhitung tertentu dan menjalankan kode ketika perubahan terjadi.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(count, (newValue, oldValue) =&gt; {</span></span>
<span class="line"><span>  console.log(\`Nilai baru: \${newValue}, Nilai lama: \${oldValue}\`)</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><ol start="4"><li><p><strong>watchEffect</strong>: Fungsi ini mirip dengan <code>watch</code>, tetapi tidak memerlukan properti yang spesifik untuk dipantau. Sebaliknya, ia akan secara otomatis melacak semua properti yang digunakan dalam fungsinya dan menjalankan kode ketika salah satu dari properti tersebut berubah.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref, watchEffect } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(\`Nilai count: \${count.value}\`)</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><ol start="5"><li><p><strong>toRefs</strong>: Fungsi ini digunakan untuk mengonversi objek reaktif ke dalam properti reaktif yang dapat diakses secara individual. Ini berguna ketika Anda ingin menyebarkan properti reaktif ke dalam komponen lain.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: 0,</span></span>
<span class="line"><span>  message: &#39;Hello&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { count, message } = toRefs(state)</span></span></code></pre></div></li></ol><ol start="6"><li><p><strong>onUnmounted</strong>: Ini adalah hook yang dipanggil ketika komponen di-unmount. Ini digunakan untuk membersihkan sumber daya atau melakukan tugas penutupan lainnya.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { onUnmounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onUnmounted(() =&gt; {</span></span>
<span class="line"><span>  // Lakukan tugas penutupan, seperti menghentikan timers atau unsubscribe dari event listeners</span></span>
<span class="line"><span>})</span></span></code></pre></div></li></ol><ol start="7"><li><p><strong>provide dan inject</strong>: API ini digunakan untuk membagikan dan mengambil data antar komponen di dalam hirarki komponen Vue.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>// Di komponen &quot;parent&quot;</span></span>
<span class="line"><span>import { provide } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const dataToProvide = ref(&#39;Data yang akan dibagikan&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>provide(&#39;sharedData&#39;, dataToProvide)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Di komponen &quot;child&quot;</span></span>
<span class="line"><span>import { inject } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sharedData = inject(&#39;sharedData&#39;)</span></span></code></pre></div></li></ol><ol start="8"><li><p><strong>ref untuk props</strong>: Anda juga dapat menggunakan <code>ref</code> untuk mendeklarasikan props dalam komponen agar bisa diubah di dalam komponen tersebut.</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    initialValue: Number</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props) {</span></span>
<span class="line"><span>    const value = ref(props.initialValue)</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><p>Itu adalah beberapa API umum dalam Composition API Vue 3. Namun, terdapat lebih banyak API yang tersedia sesuai dengan kebutuhan pengembangan Anda, dan Anda dapat merujuk pada dokumentasi resmi Vue 3 untuk informasi lebih lanjut: <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noreferrer"><strong>Vue 3 Composition API</strong></a>.</p><h2 id="ea80ea78-9331-4287-8552-a2c4edef2006" tabindex="-1">Mengambil Data dengan Vue 3 <a class="header-anchor" href="#ea80ea78-9331-4287-8552-a2c4edef2006" aria-label="Permalink to &quot;Mengambil Data  dengan Vue 3 {#ea80ea78-9331-4287-8552-a2c4edef2006}&quot;">​</a></h2><p>Anda dapat menggunakan API-API Vue 3 Composition untuk mengambil data dari backend melalui HTTP. Biasanya, Anda akan menggunakan JavaScript&#39;s <code>fetch</code> atau paket lain seperti Axios untuk melakukan permintaan HTTP. Berikut adalah contoh sederhana bagaimana Anda dapat mengambil data dari backend dan menampilkannya menggunakan Vue 3 Composition API:</p><p>a. Install Axios (jika Anda belum melakukannya):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bashCopy code</span></span>
<span class="line"><span>npm install axios</span></span></code></pre></div><p>b. Buat komponen Vue yang akan mengambil data dari backend:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Data dari backend&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;item in data&quot; :key=&quot;item.id&quot;&gt;{{ item.name }}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>import axios from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Membuat ref untuk menyimpan data dari backend</span></span>
<span class="line"><span>const data = ref([])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(async () =&gt; {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    // Melakukan permintaan HTTP GET ke endpoint backend</span></span>
<span class="line"><span>    const response = await axios.get(&#39;URL_ENDPOINT_backend&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Mengisi data dengan hasil respons dari backend</span></span>
<span class="line"><span>    data.value = response.data</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    console.error(&#39;Terjadi kesalahan:&#39;, error)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>Fungsi <code>onMounted</code> digunakan untuk menentukan tindakan yang akan diambil saat suatu komponen Vue di-mount pada DOM. Jika Anda ingin melakukan permintaan HTTP (seperti permintaan GET ke server backend) dalam <code>onMounted</code>, Anda perlu membuat fungsi tersebut <code>async</code> karena operasi jaringan (seperti permintaan HTTP) biasanya bersifat asinkronus.</p><p>Penjelasan langkah demi langkah dari potongan kode tersebut adalah sebagai berikut:</p><ol><li><code>onMounted</code>: Ini adalah hook yang akan dijalankan ketika komponen Vue di-mount pada DOM. Ini adalah tempat yang baik untuk menarik data awal atau melakukan inisialisasi komponen setelah dia di-mount.</li></ol><ol start="2"><li><code>async () =&gt; { ... }</code>: Ini adalah fungsi asinkron yang digunakan untuk menjalankan operasi-operasi asinkronus, seperti permintaan HTTP. Penggunaan <code>async</code> mengindikasikan bahwa ada operasi asinkron yang akan dilakukan di dalamnya.</li></ol><ol start="3"><li><code>try { ... } catch (error) { ... }</code>: Ini adalah blok try-catch yang digunakan untuk menangani kesalahan yang mungkin terjadi selama permintaan HTTP. Jika permintaan berhasil, kode dalam blok <code>try</code> akan dijalankan. Jika terjadi kesalahan, kode dalam blok <code>catch</code> akan menangkap dan menangani kesalahan tersebut.</li></ol><ol start="4"><li><code>const response = await axios.get(&#39;URL_ENDPOINT_backend&#39;)</code>: Di dalam blok <code>try</code>, kita menggunakan <code>await</code> untuk menunggu hasil dari permintaan HTTP. Karena <code>await</code> hanya dapat digunakan dalam fungsi yang diberi tanda <code>async</code>, maka fungsi di atas juga diberi tanda <code>async</code>. <ul><li><code>axios.get(&#39;URL_ENDPOINT_backend&#39;)</code>: Ini adalah permintaan HTTP GET menggunakan Axios ke URL yang disediakan sebagai &#39;URL_ENDPOINT_backend&#39;. Fungsi <code>await</code> menghentikan eksekusi hingga respons dari permintaan HTTP tersedia.</li></ul></li></ol><ol start="5"><li><code>data.value = response.data</code>: Setelah respons dari permintaan HTTP diterima, kita mengisi data komponen (dalam hal ini, variabel <code>data</code>) dengan hasil respons dari server backend. <code>data.value</code> digunakan untuk mengakses data di dalam ref karena ref adalah reaktif.</li></ol><p>Jadi, penggunaan <code>async</code> dalam kombinasi dengan <code>await</code> memungkinkan Anda untuk menjalankan operasi asinkron seperti permintaan HTTP secara bersih dan menangani respons serta kesalahan dengan benar dalam komponen Vue Anda.</p><p>Pastikan untuk mengganti <code>&#39;URL_ENDPOINT_backend&#39;</code> dengan URL sebenarnya dari endpoint backend yang Anda ingin ambil data dari sana.</p><p>c. Mount komponen di aplikasi Anda:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre></div><p>Dengan cara ini, ketika komponen di-mount, permintaan HTTP akan dilakukan ke backend saat komponen <code>App.vue</code> dimount. Hasil respons akan disimpan dalam <code>data</code>, dan data tersebut akan ditampilkan dalam komponen dengan menggunakan loop <code>v-for</code>.</p><p>Pastikan juga untuk menangani penanganan kesalahan dan kondisi lain yang sesuai dengan kebutuhan proyek Anda.</p><h2 id="ec64355c-6f5c-4898-a3a7-fdd1c8c66027" tabindex="-1">Sintak Dasar <a class="header-anchor" href="#ec64355c-6f5c-4898-a3a7-fdd1c8c66027" aria-label="Permalink to &quot;Sintak Dasar {#ec64355c-6f5c-4898-a3a7-fdd1c8c66027}&quot;">​</a></h2><p>Vue menggunakan sintaksis template berbasis HTML yang memungkinkan Anda untuk secara deklaratif mengikat DOM yang dirender ke data instance komponen yang mendasarinya. Semua template Vue adalah HTML yang valid secara sintaksis dan dapat diparsing oleh browser yang sesuai dengan spesifikasi dan parser HTML.</p><p>Di bawah permukaan, Vue mengkompilasi template menjadi kode JavaScript yang sangat dioptimalkan. Dengan sistem reaktivitas, Vue dapat dengan cerdas menentukan jumlah komponen minimal yang perlu dirender ulang dan menerapkan jumlah manipulasi DOM yang minimal ketika status aplikasi berubah.</p><p>Jika Anda sudah familiar dengan konsep Virtual DOM dan lebih suka kekuatan langsung JavaScript, Anda juga dapat langsung menulis fungsi render daripada template, dengan dukungan JSX yang opsional. Namun, perlu dicatat bahwa mereka tidak menikmati tingkat optimasi waktu kompilasi yang sama seperti template.</p><p>Interpolasi Teks<br> Forma paling dasar dari binding data adalah interpolasi teks menggunakan sintaksis &quot;Mustache&quot; (kurung kurawal ganda):\\</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;span&gt;Pesan: {{ msg }}&lt;/span&gt;</span></span></code></pre></div><p>Tag mustache akan digantikan dengan nilai dari properti msg dari instance komponen yang sesuai. Ini juga akan diperbarui setiap kali properti msg berubah.</p><p>HTML Mentah<br> Tag mustache ganda menginterpretasikan data sebagai teks biasa, bukan HTML. Untuk menampilkan HTML sejati, Anda perlu menggunakan direktif v-html:\\</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;p&gt;Menggunakan interpolasi teks: {{ rawHtml }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;p&gt;Menggunakan direktif v-html: &lt;span v-html=&quot;rawHtml&quot;&gt;&lt;/span&gt;&lt;/p&gt;</span></span></code></pre></div><p>Di sini kita akan mengenal sesuatu yang baru. Atribut v-html yang Anda lihat disebut sebagai direktif. Direktif ini memiliki awalan v- untuk menunjukkan bahwa mereka adalah atribut khusus yang disediakan oleh Vue, dan seperti yang mungkin Anda duga, mereka menerapkan perilaku reaktif khusus pada DOM yang dirender. Di sini, kita sebenarnya mengatakan &quot;jaga HTML inner elemen ini tetap terbaru dengan properti rawHtml pada instance aktif saat ini.&quot;</p><p>Isi dari span akan digantikan dengan nilai properti rawHtml, yang diinterpretasikan sebagai HTML biasa - binding data diabaikan. Perlu diingat bahwa Anda tidak dapat menggunakan v-html untuk menggabungkan template parsial, karena Vue bukan mesin templating berbasis string. Sebaliknya, komponen lebih disukai sebagai unit dasar untuk penggunaan dan komposisi UI.</p><div style="font-size:1.5em;"><p class="icon">[💡]</p></div><div style="width:100%;"><p>Peringatan Keamanan<br> Merender HTML sembarang secara dinamis pada situs web Anda bisa sangat berbahaya karena bisa dengan mudah menyebabkan kerentanan XSS. Hanya gunakan v-html pada konten yang dipercayai dan jangan pernah pada konten yang diberikan oleh pengguna.\\</p></div><h3 id="15c143a0-4930-440c-9965-0e580895b736" tabindex="-1">Binding Atribut <a class="header-anchor" href="#15c143a0-4930-440c-9965-0e580895b736" aria-label="Permalink to &quot;Binding Atribut {#15c143a0-4930-440c-9965-0e580895b736}&quot;">​</a></h3><p>Mustache tidak dapat digunakan di dalam atribut HTML. Sebaliknya, gunakan direktif v-bind:</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;div v-bind:id=&quot;dynamicId&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>Direktif v-bind memberi tahu Vue untuk menjaga agar atribut id elemen tetap selaras dengan properti dynamicId komponen. Jika nilai yang diikat adalah null atau tidak didefinisikan, maka atribut akan dihapus dari elemen yang dirender.</p><p><strong>Pendekatan Singkat</strong><br> Karena v-bind sangat umum digunakan, ada sintaksis singkat yang khusus:\\</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;div :id=&quot;dynamicId&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>Atribut yang dimulai dengan : mungkin terlihat sedikit berbeda dari HTML biasa, tetapi sebenarnya karakter yang valid untuk nama atribut dan semua browser yang didukung Vue dapat memparsenya dengan benar. Selain itu, mereka tidak muncul dalam markup yang dirender akhir. Sintaksis pendek ini bersifat opsional, tetapi Anda mungkin akan mengapresiasinya saat Anda memahami lebih banyak tentang penggunaannya nanti.</p><h3 id="7312aba8-d679-4a4c-820a-8a32e9af89fd" tabindex="-1">Atribut Boolean <a class="header-anchor" href="#7312aba8-d679-4a4c-820a-8a32e9af89fd" aria-label="Permalink to &quot;Atribut Boolean {#7312aba8-d679-4a4c-820a-8a32e9af89fd}&quot;">​</a></h3><p>Atribut boolean adalah atribut yang dapat menunjukkan nilai true / false dengan kehadirannya pada elemen. Misalnya, disabled adalah salah satu atribut boolean yang paling umum digunakan.</p><p>v-bind bekerja sedikit berbeda dalam kasus ini:</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;button :disabled=&quot;isButtonDisabled&quot;&gt;Tombol&lt;/button&gt;</span></span></code></pre></div><p>Atribut disabled akan disertakan jika isButtonDisabled memiliki nilai yang benar. Itu juga akan disertakan jika nilai tersebut adalah string kosong, menjaga konsistensi dengan &lt;button disabled=&quot;&quot;&gt;. Untuk nilai yang salah, atribut akan diabaikan.</p><h3 id="70bf2fdf-3ced-4288-9ba4-9eed4a4f5711" tabindex="-1">Binding Atribut Ganda <a class="header-anchor" href="#70bf2fdf-3ced-4288-9ba4-9eed4a4f5711" aria-label="Permalink to &quot;Binding Atribut Ganda {#70bf2fdf-3ced-4288-9ba4-9eed4a4f5711}&quot;">​</a></h3><p>Jika Anda memiliki objek JavaScript yang mewakili beberapa atribut seperti ini:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>jsCopy code</span></span>
<span class="line"><span>const objectOfAttrs = {</span></span>
<span class="line"><span>  id: &#39;container&#39;,</span></span>
<span class="line"><span>  class: &#39;wrapper&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Anda dapat mengikatnya ke satu elemen menggunakan v-bind tanpa argumen:</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;div v-bind=&quot;objectOfAttrs&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><h3 id="8a25b443-5887-4696-b0ef-39e88abac4b1" tabindex="-1">Menggunakan Ekspresi JavaScript <a class="header-anchor" href="#8a25b443-5887-4696-b0ef-39e88abac4b1" aria-label="Permalink to &quot;Menggunakan Ekspresi JavaScript {#8a25b443-5887-4696-b0ef-39e88abac4b1}&quot;">​</a></h3><p>Sejauh ini, kita hanya mengikat ke kunci properti sederhana dalam template kita. Namun, Vue sebenarnya mendukung kekuatan penuh ekspresi JavaScript dalam semua binding data:</p><p>Contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>{{ number + 1 }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{ ok ? &#39;YA&#39; : &#39;TIDAK&#39; }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{{ message.split(&#39;&#39;).reverse().join(&#39;&#39;) }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div :id=&quot;\`list-\${id}\`&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>Ekspresi ini akan dievaluasi sebagai JavaScript dalam cakupan data dari instance komponen saat ini.</p><p>Di template Vue, ekspresi JavaScript dapat digunakan dalam posisi berikut:</p><ul><li>Dalam interpolasi teks (mustache)</li></ul><ul><li>Dalam nilai atribut dari semua direktif Vue (atribut khusus yang dimulai dengan v-)<br> Hanya Ekspresi<br> Setiap binding hanya dapat mengandung satu ekspresi tunggal. Sebuah ekspresi adalah potongan kode yang dapat dievaluasi menjadi nilai. Periksa apakah itu bisa digunakan setelah kata kunci return.\\</li></ul><p>Oleh karena itu, yang berikut INI TIDAK akan berfungsi:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;!-- ini adalah pernyataan, bukan ekspresi: --&gt;</span></span>
<span class="line"><span>{{ var a = 1 }}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- kontrol aliran juga tidak akan berfungsi, gunakan ekspresi ternary --&gt;</span></span>
<span class="line"><span>{{ if (ok) { return message } }}</span></span></code></pre></div><h3 id="f3bab98d-55b0-4f42-b899-09733a843957" tabindex="-1">Memanggil Fungsi <a class="header-anchor" href="#f3bab98d-55b0-4f42-b899-09733a843957" aria-label="Permalink to &quot;Memanggil Fungsi {#f3bab98d-55b0-4f42-b899-09733a843957}&quot;">​</a></h3><p>Mungkin untuk memanggil metode yang terpapar oleh komponen dalam ekspresi binding:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;time :title=&quot;toTitleDate(date)&quot; :datetime=&quot;date&quot;&gt;</span></span>
<span class="line"><span>  {{ formatDate(date) }}</span></span>
<span class="line"><span>&lt;/time&gt;</span></span></code></pre></div><p>FUNGSI yang dipanggil dalam ekspresi binding akan dipanggil setiap kali komponen diperbarui, sehingga mereka tidak boleh memiliki efek samping, seperti mengubah data atau memicu operasi asinkron.</p><h3 id="44ac0a63-131b-4ea0-94e5-f47fc22d7683" tabindex="-1">Akses Global yang Terbatas <a class="header-anchor" href="#44ac0a63-131b-4ea0-94e5-f47fc22d7683" aria-label="Permalink to &quot;Akses Global yang Terbatas {#44ac0a63-131b-4ea0-94e5-f47fc22d7683}&quot;">​</a></h3><p>Ekspresi template di sandbox dan hanya memiliki akses ke daftar terbatas global. Daftar ini mengekspos global bawaan yang umum digunakan seperti Math dan Date.</p><p>Global yang tidak secara eksplisit dimasukkan dalam daftar, misalnya properti yang terpasang pengguna di jendela, tidak akan dapat diakses dalam ekspresi template. Namun, Anda dapat secara eksplisit menentukan global tambahan untuk semua ekspresi Vue dengan menambahkannya ke app.config.globalProperties.</p><h3 id="5232d31e-62cc-4886-b387-cb9cf984d491" tabindex="-1">Direktif <a class="header-anchor" href="#5232d31e-62cc-4886-b387-cb9cf984d491" aria-label="Permalink to &quot;Direktif {#5232d31e-62cc-4886-b387-cb9cf984d491}&quot;">​</a></h3><p>Direktif adalah atribut khusus dengan awalan v-. Vue menyediakan sejumlah direktif bawaan, termasuk v-html dan v-bind yang telah kami perkenalkan di atas.</p><p>Nilai atribut direktif diharapkan menjadi ekspresi JavaScript tunggal (kecuali v-for, v-on, dan v-slot, yang akan dibahas di bagian mereka masing-masing nanti). Tugas direktif adalah secara reaktif menerapkan pembaruan ke DOM ketika nilai ekspresinya berubah. Ambil v-if sebagai contoh:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;p v-if=&quot;seen&quot;&gt;Sekarang Anda melihat saya&lt;/p&gt;</span></span></code></pre></div><p>Di sini, direktif v-if akan menghapus / menyisipkan elemen &lt;p&gt; berdasarkan kebenaran dari nilai ekspresi seen.</p><h3 id="1a9c3940-ba20-4fcb-87c8-5b28859a5ee8" tabindex="-1">Argumen <a class="header-anchor" href="#1a9c3940-ba20-4fcb-87c8-5b28859a5ee8" aria-label="Permalink to &quot;Argumen {#1a9c3940-ba20-4fcb-87c8-5b28859a5ee8}&quot;">​</a></h3><p>Beberapa direktif dapat mengambil &quot;argumen&quot;, yang ditandai dengan titik setelah nama direktif. Misalnya, direktif v-bind digunakan untuk secara reaktif memperbarui atribut HTML:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;a v-bind:href=&quot;url&quot;&gt; ... &lt;/a&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- singkatan --&gt;</span></span>
<span class="line"><span>&lt;a :href=&quot;url&quot;&gt; ... &lt;/a&gt;</span></span></code></pre></div><p>Di sini, href adalah argumen, yang memberi tahu direktif v-bind untuk mengikat atribut href elemen ke nilai ekspresi url. Dalam singkatan, semua yang ada sebelum argumen (yaitu, v-bind:) dikompres menjadi satu karakter, :.</p><p>Contoh lain adalah direktif v-on, yang mendengarkan acara DOM:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;a v-on:click=&quot;doSomething&quot;&gt; ... &lt;/a&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- singkatan --&gt;</span></span>
<span class="line"><span>&lt;a @click=&quot;doSomething&quot;&gt; ... &lt;/a&gt;</span></span></code></pre></div><p>Di sini, argumen adalah nama acara yang akan didengarkan: klik. v-on memiliki singkatan yang sesuai, yaitu karakter @. Kami akan membahas penanganan acara lebih detail juga.</p><h3 id="f83d3096-e44f-43a7-8a46-c61aae5d51f6" tabindex="-1">Argumen Dinamis <a class="header-anchor" href="#f83d3096-e44f-43a7-8a46-c61aae5d51f6" aria-label="Permalink to &quot;Argumen Dinamis {#f83d3096-e44f-43a7-8a46-c61aae5d51f6}&quot;">​</a></h3><p>Juga mungkin menggunakan ekspresi JavaScript dalam argumen direktif dengan mengapitnya dengan tanda kurung siku:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;!--</span></span>
<span class="line"><span>Perhatikan bahwa ada beberapa batasan pada ekspresi argumen,</span></span>
<span class="line"><span>seperti yang dijelaskan dalam bagian &quot;Dynamic Argument Value Constraints&quot; dan &quot;Dynamic Argument Syntax Constraints&quot; di bawah.</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;a v-bind:[attributeName]=&quot;url&quot;&gt; ... &lt;/a&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- singkatan --&gt;</span></span>
<span class="line"><span>&lt;a :[attributeName]=&quot;url&quot;&gt; ... &lt;/a&gt;</span></span></code></pre></div><p>Di sini, attributeName akan dievaluasi secara dinamis sebagai ekspresi JavaScript, dan nilai yang dievaluasi akan digunakan sebagai nilai akhir untuk argumen. Misalnya, jika instance komponen Anda memiliki properti data, attributeName, yang nilainya adalah &quot;href&quot;, maka ikatan ini akan setara dengan v-bind:href.</p><p>Demikian pula, Anda dapat menggunakan argumen dinamis untuk mengikat penangan ke nama acara dinamis:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;a v-on:[eventName]=&quot;doSomething&quot;&gt; ... &lt;/a&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- singkatan --&gt;</span></span>
<span class="line"><span>&lt;a @[eventName]=&quot;doSomething&quot;&gt;</span></span></code></pre></div><p>Dalam contoh ini, jika nilai eventName adalah &quot;focus&quot;, v-on:[eventName] akan setara dengan v-on:focus.</p><h3 id="3584d867-66be-4e8b-8dbb-28074506d794" tabindex="-1">Kendala Nilai Argumen Dinamis <a class="header-anchor" href="#3584d867-66be-4e8b-8dbb-28074506d794" aria-label="Permalink to &quot;Kendala Nilai Argumen Dinamis {#3584d867-66be-4e8b-8dbb-28074506d794}&quot;">​</a></h3><p>Argumen dinamis diharapkan menghasilkan string, dengan pengecualian null. Nilai khusus null dapat digunakan untuk menghapus ikatan secara eksplisit. Nilai lain yang bukan string akan memicu peringatan.</p><p>Kendala Sintaksis Argumen Dinamis<br> Ekspresi argumen dinamis memiliki beberapa kendala sintaksis karena beberapa karakter, seperti spasi dan tanda kutip, tidak valid dalam nama atribut HTML. Misalnya, ini adalah contoh yang tidak valid:\\</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;!-- Ini akan memicu peringatan kompiler. --&gt;</span></span>
<span class="line"><span>&lt;a :[&#39;foo&#39; + bar]=&quot;value&quot;&gt; ... &lt;/a&gt;</span></span></code></pre></div><p>Jika Anda perlu melewati argumen dinamis yang kompleks, lebih baik menggunakan properti terhitung, yang akan kami bahas segera.</p><p>Ketika menggunakan template in-DOM (template yang ditulis langsung dalam file HTML), Anda juga harus menghindari memberi nama kunci dengan huruf kapital, karena browser akan memaksa nama atribut menjadi huruf kecil:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;a :[someAttr]=&quot;value&quot;&gt; ... &lt;/a&gt;</span></span></code></pre></div><p>Di atas akan dikonversi menjadi :[someattr] dalam template in-DOM. Jika komponen Anda memiliki properti someAttr daripada someattr, kode Anda tidak akan berfungsi. Template dalam Komponen File Tunggal tidak tunduk pada kendala ini.</p><p>Modifier<br> Modifier adalah akhiran khusus yang ditandai dengan titik, yang menunjukkan bahwa sebuah direktif harus diikat dengan cara khusus. Misalnya, modifier .prevent memberi tahu direktif v-on untuk memanggil event.preventDefault() pada acara yang dipicu:\\</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>htmlCopy code</span></span>
<span class="line"><span>&lt;form @submit.prevent=&quot;onSubmit&quot;&gt;...&lt;/form&gt;</span></span></code></pre></div><p>Anda akan melihat contoh-modifier lainnya nanti, untuk v-on dan v-model, ketika kami menjelajahi fitur-fitur tersebut.</p><h2 id="6f8e5eea-c68e-48d8-b4b0-4ac9587688f1" tabindex="-1"><strong>Mendefinisikan Komponen</strong> <a class="header-anchor" href="#6f8e5eea-c68e-48d8-b4b0-4ac9587688f1" aria-label="Permalink to &quot;**Mendefinisikan Komponen** {#6f8e5eea-c68e-48d8-b4b0-4ac9587688f1}&quot;">​</a></h2><p>Anda dapat mendefinisikan komponen Vue dalam dua cara:</p><ol><li><p><strong>Dengan Menggunakan Alur Build (Single-File Component - SFC):</strong><br> Biasanya, Anda mendefinisikan setiap komponen Vue dalam file terpisah dengan ekstensi .vue. Berikut adalah contoh komponen sederhana:\\</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Selamat datang di komponen saya!&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// Di sini Anda bisa mengimpor berbagai hal yang Anda butuhkan</span></span>
<span class="line"><span>// dan mendefinisikan logika komponen Anda.</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div></li></ol><ol start="2"><li><p><strong>Tanpa Alur Build (Objek JavaScript):</strong><br> Anda juga dapat mendefinisikan komponen sebagai objek JavaScript biasa. Berikut contohnya:\\</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>javascriptCopy code</span></span>
<span class="line"><span>Vue.component(&#39;my-component&#39;, {</span></span>
<span class="line"><span>  template: \`</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Selamat datang di komponen saya!&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  \`</span></span>
<span class="line"><span>});</span></span></code></pre></div></li></ol><p><strong>Menggunakan Komponen:</strong></p><p>Anda dapat menggunakan komponen dengan cara mengimpornya ke komponen lain atau secara global. Misalnya, jika Anda memiliki komponen bernama <code>ButtonCounter</code>, Anda bisa menggunakannya seperti ini:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import ButtonCounter from &#39;./ButtonCounter.vue&#39; // Mengimpor komponen</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h1&gt;Ini adalah komponen anak!&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;ButtonCounter /&gt; &lt;!-- Menggunakan komponen --&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><p><strong>Props (Mengirim Data ke Komponen):</strong></p><p>Props adalah cara untuk mengirim data ke komponen lain. Misalnya, jika Anda ingin mengirimkan judul ke komponen <code>BlogPost</code>, Anda bisa melakukannya seperti ini:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;!-- BlogPost.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h4&gt;{{ title }}&lt;/h4&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { defineProps } from &#39;vue&#39;</span></span>
<span class="line"><span>const props = defineProps([&#39;title&#39;]) // Mendefinisikan prop &#39;title&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>Kemudian, Anda bisa mengirimkan data ke komponen tersebut:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;BlogPost title=&quot;Perjalanan Saya dengan Vue&quot; /&gt;</span></span></code></pre></div><p><strong>Mendengarkan Event (Komunikasi Antar Komponen):</strong></p><p>Anda dapat menggunakan event untuk berkomunikasi antara komponen anak dan komponen induk. Misalkan, Anda ingin memungkinkan komponen anak untuk mengirim event ke komponen induk. Berikut contohnya:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;!-- ChildComponent.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;kirimEvent&quot;&gt;Kirim Event&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { defineEmits } from &#39;vue&#39;</span></span>
<span class="line"><span>const emit = defineEmits([&#39;event-anak&#39;]) // Mendefinisikan event yang bisa dikirim</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function kirimEvent() {</span></span>
<span class="line"><span>  emit(&#39;event-anak&#39;, &#39;Data dari anak ke induk&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>Kemudian, dalam komponen induk, Anda mendengarkan event tersebut:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vueCopy code</span></span>
<span class="line"><span>&lt;!-- ParentComponent.vue --&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ pesan }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;ChildComponent @event-anak=&quot;terimaEvent&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import ChildComponent from &#39;./ChildComponent.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>function terimaEvent(data) {</span></span>
<span class="line"><span>  pesan = data;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div></div>`,2)]))}const k=n(i,[["render",t]]);export{g as __pageData,k as default};
