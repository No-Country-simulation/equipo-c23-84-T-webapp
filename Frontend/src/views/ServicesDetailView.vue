<template>
    <v-container class="py-10">
        <v-row>
            <!-- Imágenes de la mascota -->
            <v-col cols="12" md="6">
                <v-img :src="pet.mainImage" class="rounded-lg bg-green-accent-1" height="350px" cover></v-img>
                <v-row class="mt-4">
                    <v-col v-for="(image, index) in pet.otherImages" :key="index" cols="4">
                        <v-img :src="image" class="rounded-lg bg-green-accent-3" height="100px" cover></v-img>
                    </v-col>
                </v-row>
            </v-col>

            <!-- Información de la mascota -->
            <v-col cols="12" md="6">
                <PetInfo :pet="pet" />

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import PetInfo from "@/components/PetInfo.vue";
import { ref } from "vue";

const pet = ref({
    name: "Hachiko",
    date: "29/11/2024",
    gender: "Masculino",
    age: 1,
    breed: "Desconocida",
    description: "Un Shiba Inu de pelaje rojizo, hocico negro y orejas puntiagudas.",
    mainImage: "https://via.placeholder.com/600",
    otherImages: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
    ],
    mapImage: "https://via.placeholder.com/600x300"
});
</script>

<style scoped>
ul {
    padding-left: 20px;
}
</style>