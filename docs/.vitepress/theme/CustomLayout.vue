<template>
    <div>
      <!-- Layout Kustom dengan Hero -->
      <header>
        <slot name="hero"></slot>  <!-- Slot untuk Hero.vue -->
      </header>
  
      <main>
        <slot />  <!-- Konten utama halaman -->
      </main>
    </div>
  </template>
  
  <script setup>
  // Mengimpor Hero.vue untuk dimasukkan dalam slot
  import Hero from '../../../src/components/Hero.vue'
  </script>
  
  <style scoped>
  /* Gaya tambahan untuk layout kustom */
  header {
    background-color: #f0f4f8;
    padding: 2rem;
  }
  
  main {
    padding: 2rem;
  }
  </style>
  