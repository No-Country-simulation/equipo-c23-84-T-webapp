<script setup>
defineProps({
  showNav: {
    type: Boolean,
    default: true
  }
});

</script>
<template>
  <VAppBar flat class="header-bar" app height="98">
    <VContainer class="d-flex flex-column">
      <VRow justify="space-between" align="center" class="w-100">
        <!-- Logo -->
        <VCol cols="auto">
          <RouterLink :to="{ name: 'home' }" class="d-flex align-center">
            <img src="../assets/iconos/petmap-logo-black.webp" alt="Logo" class="logo" />
          </RouterLink>
        </VCol>

        <!-- Navigation -->
        <VCol cols="auto" v-if="showNav">
          <VBtn color="" class="mr-2" text :to="{ name: 'home' }">Inicio</VBtn>
          <VBtn color="" class="mr-2" text :to="{ name: 'about' }">Sobre nosotros</VBtn>
          <VMenu>
            <template #activator="{ props }">
              <VBtn color="" class="mr-3" v-bind="props" text>Funciones</VBtn>
            </template>
            <v-list>
              <v-list-item>Collection 1</v-list-item>
              <v-list-item>Collection 2</v-list-item>
            </v-list>
          </VMenu>
          <VBtn color="" class="mr-3" text :to="{ name: 'home' }">Servicios</VBtn>
          <VBtn color="" class="mr-3" text :to="{ name: 'contact' }">Contacto</VBtn>
        </VCol>

        <!-- Login -->
        <VCol cols="auto" class="d-flex align-center justify-end">
          <VBtn class="btn-login" variant="flat" :to="{ name: 'login' }">
            <span class="d-inline-block">Iniciar sesión</span>
          </VBtn>

        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>


<style lang="scss" scoped>
* {
  color: white;
}
.header-bar {
  background-color: #66CDAA;
}
.logo {
  width: 166px;
  height: 50px;
  object-fit: cover;

}

a, button {
font-size: $fs-base;
color: $gray;
  &:hover {
    color: white !important;
  }
}

a.v-btn--active {
  color: white !important;
}

.btn-login {
  width: 144px;
  height: 40px;
  background-color: $accent;
  font-size: $fs-sm;
  font-weight: 600;
  border-radius: 6px;
}
</style>