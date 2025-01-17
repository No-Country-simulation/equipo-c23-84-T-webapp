<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    name: "Juan Pérez",
    title: 'Veterinario',
    text: "¡Este servicio cambió mi vida!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Ana Rodríguez",
    title: 'Adoptante',
    text: "Muy satisfecho con la atención.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Carlos Gómez",
    title: 'Dueño',
    text: "Lo recomendaría sin duda alguna.",
    image: "https://i.pravatar.cc/100?img=3",
  },
]);
</script>

<template>
  <section class="py-8 bg-amber">
    <h1>Testimonios</h1>
    <div v-for="(item, index) in testimonials" :key="index">
        <pre>{{ item }}</pre>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>
