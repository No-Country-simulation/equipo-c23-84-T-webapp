<template>
    <v-card class="pa-6 dark-card" elevation="4">
        <h2 class="text-h5 font-weight-bold mb-4">Enviar Un Mensaje</h2>
        <v-form @submit.prevent="submitForm">
            <v-text-field label="Nombre" v-model="form.name" required></v-text-field>
            <v-text-field label="Correo electrónico" v-model="form.email" type="email" required></v-text-field>
            <v-textarea label="Mensaje" v-model="form.message" required></v-textarea>
            <v-btn color="red" class="text-white" block type="submit">Enviar mensaje</v-btn>
        </v-form>
    </v-card>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    message: ''
})
function submitForm() {

}

</script>

<style lang="scss" scoped></style>