<script setup>
import { ref } from 'vue'

const stats = ref([
  { title: 'Usuarios', value: 1500, icon: 'mdi-account-group' },
  { title: 'Ventas', value: 320, icon: 'mdi-cart' },
  { title: 'Visitas', value: 8540, icon: 'mdi-eye' },
  { title: 'Ingresos', value: '$12,500', icon: 'mdi-currency-usd' }
]);
</script>

<template>
  <section class="py-8 bg-red">
    <h1>Estatísticas</h1>
    <div v-for="(item, index) in stats" :key="index">
        <pre>{{ item }}</pre>
    </div>
  </section>
</template>
