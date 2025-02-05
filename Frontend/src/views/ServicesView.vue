<template>
    <v-container class="py-16">
        <!-- Título y descripción -->
        <v-row>
            <v-col cols="12" class="text-center">
                <h1 class="text-h4 font-weight-bold">
                    Base De Datos De Búsqueda De Mascotas Perdidas
                </h1>
                <p class="text-body-1 mt-2">
                    Consulta nuestra base de datos de mascotas perdidas para encontrar a tu compañero peludo.
                    Con información actualizada y fotos de mascotas extraviadas, estamos aquí para ayudarte a reunir a
                    las familias.
                </p>
            </v-col>
        </v-row>

        <!-- Filtros -->
        <Filter />

        <!-- Tarjetas de mascotas -->
        <GridPets :filteredPets="filteredPets" />

        <!-- Paginación -->
        <v-row class="justify-center mt-4">
            <v-pagination v-model="page" :length="5"></v-pagination>
        </v-row>
    </v-container>
</template>

<script setup>
import Filter from "@/components/Filter.vue";
import GridPets from "@/components/GridPets.vue";
import { ref, computed } from "vue";

const pets = ref([
    { id: 1, name: "Pongo", date: "14/1/2025", gender: "Masculino", age: 5, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
    { id: 2, name: "Perdita", date: "8/1/2025", gender: "Femenino", age: 3, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
    { id: 3, name: "Niebla", date: "4/1/2025", gender: "Masculino", age: 5, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
    { id: 4, name: "Rex", date: "2/1/2025", gender: "Femenino", age: 2, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
    { id: 5, name: "Beethoven", date: "28/12/2024", gender: "Masculino", age: 8, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
    { id: 6, name: "Hachiko", date: "29/11/2024", gender: "Masculino", age: 1, breed: "Desconocida", image: "https://via.placeholder.com/300", type: "dog" },
]);

const page = ref(1);

const filteredPets = computed(() => {
    return pets.value;
    // if (filter.value === "all") return pets.value;
    // return pets.value.filter((pet) => pet.type === filter.value);
});
</script>

<style scoped>
.v-btn-toggle .v-btn {
    text-transform: none;
}
</style>