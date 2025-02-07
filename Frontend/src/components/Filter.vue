<template>
    <v-row class="justify-center mt-4">
        <v-btn-toggle v-model="filter" color="primary" group>
            <v-btn value="all">
                <v-icon class="mr-2">mdi-paw</v-icon> Mascotas
            </v-btn>
            <v-btn value="dogs">
                <v-icon class="mr-2">mdi-dog</v-icon> Perros
            </v-btn>
            <v-btn value="cats">
                <v-icon class="mr-2">mdi-cat</v-icon> Gatos
            </v-btn>
        </v-btn-toggle>
        <v-btn variant="outlined" class="ml-4">
            <v-icon class="mr-2">mdi-eye</v-icon> Ver más mascotas
        </v-btn>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';

const filter = ref("all");

</script>

<style lang="scss" scoped></style>