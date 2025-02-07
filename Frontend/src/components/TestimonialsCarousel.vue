<script setup>
import { ref } from 'vue';
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'

const testimonials = ref([
{
    name: "Mariana López",
    title: "Dueña de Max",
    text: "Gracias a este servicio, encontré a mi perro en menos de 24 horas. ¡Increíble!",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Luis Fernández",
    title: "Rescatista",
    text: "Me ha facilitado mucho la búsqueda y rescate de mascotas perdidas. Muy útil.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Sofía Martínez",
    title: "Propietaria de Luna",
    text: "Mi gata se escapó y gracias al rastreo en tiempo real, la encontramos rápido.",
    image: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Pedro Ramírez",
    title: "Cuidador de mascotas",
    text: "Una herramienta indispensable para quienes trabajamos con animales. Excelente servicio.",
    image: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Gabriela Torres",
    title: "Dueña de Toby",
    text: "Me encanta lo fácil que es reportar una mascota perdida y ver las alertas en mi zona.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Fernando Gutiérrez",
    title: "Veterinario",
    text: "Recomiendo este servicio a todos mis clientes. La geolocalización funciona muy bien.",
    image: "https://i.pravatar.cc/100?img=9",
  },
  {
    name: "Andrea Castro",
    title: "Dueña de Coco",
    text: "Mi perro es muy inquieto y se ha escapado varias veces. Esta app me ha salvado en más de una ocasión.",
    image: "https://i.pravatar.cc/100?img=10",
  },
  {
    name: "Ricardo Morales",
    title: "Amante de los gatos",
    text: "Siempre temía que mi gato se perdiera, pero ahora con el rastreo me siento mucho más seguro.",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Natalia Ruiz",
    title: "Dueña de Kira",
    text: "El sistema de alertas me permitió ayudar a otra persona a encontrar a su perro. Gran iniciativa.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Daniel Ortega",
    title: "Protector de animales",
    text: "Cada mascota merece estar en casa. Esta herramienta hace que eso sea posible.",
    image: "https://i.pravatar.cc/100?img=13",
  }
]);

// Configuración del carrusel
const settings = {
  "dots": false,
  "infinite": false,
  "groupsToScroll": 1,
  "groupsToShow": 1,
  "slidesPerGroup": 1,
  "swipe": true,
  "ignorePrefersReducedMotion": true,
  "responsive": [
    {
      "breakpoint": 600,
      "settings": {
        "groupsToShow": 2
      }
    },
    {
      "breakpoint": 960,
      "settings": {
        "groupsToShow": 6
      }
    },


  ]
};
</script>

<template>
  <section class="py-16">
    <VContainer class="">
      <VRow class="justify-space-between align-center">

        <VCol cols="12" md="auto">
          <div class="content">
            <h2>Testimonios de Usuarios</h2>
            <p class="mt-4">Una sección donde pueden leer historias de éxito y comentarios de personas que han utilizado
              nuestro sitio para encontrar a sus mascotas.</p>
          </div>
        </VCol>
        <VCol cols="12" md="auto">
          <VBtn variant="flat" class="mr-3 pa-0">
            <VIcon>
              mdi-arrow-left
            </VIcon>
          </VBtn>
          <VBtn variant="flat" class=" pa-0">
            <VIcon>
              mdi-arrow-right
            </VIcon>
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
    <div class="carousel mt-10 pb-10">
      <VSlickCarousel v-bind="settings">
        <div class="me-5" v-for="(item, index) in testimonials" :key="index">
          <VCard class="" max-width="309" flat>
              <img class="bg-grey-lighten-4 d-block" src="https://via.placeholder.com/40" :alt="'avatar de ' + item.name" />

            <v-card-text class="py-6">
              <blockquote class="">
                <p>"{{ item.text }}"</p>
              </blockquote>
              <div class="mt-3">
                <span class="author-name">{{ item.name }}</span>
                <span class="author-title d-block">{{ item.title }}</span>
              </div>
            </v-card-text>
          </VCard>

        </div>

      </VSlickCarousel>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  background: linear-gradient(180deg, #FF8C42 0%, #F5F5F5 23.88%);

}
* {
  color: $gray;
}

.content {
  max-width: 470px;
}

h2 {
  font-size: $fs-xl;
  font-weight: 600;
}

button {
  min-width: 40px !important;
  min-height: 40px !important;
  border-radius: 8px !important;
  border: 1px solid #E1E4ED !important;

  &:hover {
    border-color: $primary !important;
    background: $primary !important;

    i {
      color: white !important;
    }
  }
}

i {
  height: 18px;
  width: 18px;
  color: #6D758F;
}
span {
font-size: $fs-base;
color: $primary;
}
.author-title {
  font-size: $fs-sm;
  color: $gray;
  text-transform: uppercase;
}

.v-card {
  border: 1px solid #E1E4ED !important;
  border-radius: 8px !important;
  box-shadow: 1px 0px 4px 0px #4A4A4A;
  border: 1px solid #4A4A4A;
}
img {
  width: 309px;
height: 184px;


}

.carousel :deep(.v-slick-dots li button) {}

.carousel :deep(.v-slick-dots li button:before) {
  color: $primary;
}

.carousel :deep(.v-slick-dots) {
  margin: 50px 0 !important;
}

.carousel :deep(.v-slick-dots li.active button:before) {
  color: $secondary;
}
</style>
