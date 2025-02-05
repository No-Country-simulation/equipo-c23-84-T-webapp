<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <section class="py-16">
    <VContainer>
      <VRow justify="center">
        <VCol cols="12" md="8" lg="6">
          <VCard
            elevation="0"
            color="transparent"
            class="rounded-lg text-center py-5"
          >
            <!-- Imagen de error personalizada -->
            <VImg
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              alt="Not Found"
              height="200"
              class="mx-auto mb-5"
            />

            <!-- Título de error -->
            <VCardTitle class="text-h3 font-weight-bold text-error">
              Oops! Página no encontrada
            </VCardTitle>

            <!-- Descripción del error -->
            <VCardText class="text-body-1 mb-4">
              Lo sentimos, no podemos encontrar la página que estás buscando.
            </VCardText>

            <!-- Botones de acción -->
            <VCardActions class="justify-center">
              <VBtn
                color="primary"
                size="large"
                variant="flat"
                @click="goHome"
                class="px-6 rounded-lg"
                elevation="0"
              >
                Regresar al inicio
              </VBtn>
            </VCardActions>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </section>
</template>

<style scoped>
.text-error {
  color: #f44336; /* Rojo para indicar error */
}
</style>
