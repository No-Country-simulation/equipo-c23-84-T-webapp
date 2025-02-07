<template>
    <v-card class="pa-3">
        <v-img :src="pet.image" height="200px" cover></v-img>
        <v-card-title>{{ pet.name }}</v-card-title>
        <v-card-subtitle>{{ pet.date }}</v-card-subtitle>
        <v-card-text>
            <p>Sexo: {{ pet.gender }}</p>
            <p>Años: {{ pet.age }}</p>
            <p>Raza: {{ pet.breed }}</p>
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" append-icon="mdi-arrow-right">Contactar</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-share-variant"></v-btn>
        </v-card-actions>
    </v-card>
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