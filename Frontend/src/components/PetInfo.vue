<template>
    <div>
        <p class="text-caption text-grey-darken-1">Mascota • Perro • Perdido</p>
        <h1 class="text-h4 font-weight-bold">{{ pet.name }}</h1>
        <p class="text-body-1 mt-2">
            <strong>{{ pet.date }}</strong>
        </p>
        <ul class="text-body-1">
            <li>Sexo: {{ pet.gender }}</li>
            <li>Años: {{ pet.age }}</li>
            <li>Raza: {{ pet.breed }}</li>
        </ul>
        <p class="mt-2">{{ pet.description }}</p>

        <!-- Botón de reporte -->
        <v-btn color="green-darken-2" class="mt-4" block>
            <v-icon class="mr-2">mdi-alert</v-icon> Reportar Como Mascota Encontrada
        </v-btn>

        <!-- Compartir en redes -->
        <p class="mt-6 font-weight-bold">Ayuda a compartir en tus redes</p>
        <v-btn icon="mdi-facebook"></v-btn>
        <v-btn icon="mdi-twitter"></v-btn>
        <v-btn icon="mdi-email"></v-btn>

        <!-- Mapa de ubicación -->
        <p class="mt-6 font-weight-bold">Última localización</p>
        <v-img :src="pet.mapImage" class="rounded-lg" height="200px" cover></v-img>
    </div>
</template>

<script setup>
defineProps({
    pet: {
        type: Object,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>