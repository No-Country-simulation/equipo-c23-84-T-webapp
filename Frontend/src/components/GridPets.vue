<template>
    <v-row class="mt-6">
        <v-col v-for="pet in filteredPets" :key="pet.id" cols="12" sm="6" md="4">
            <PetCard :pet="pet" />
        </v-col>
    </v-row>
</template>

<script setup>
import PetCard from './PetCard.vue';

defineProps({
    filteredPets: {
        type: Array,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>