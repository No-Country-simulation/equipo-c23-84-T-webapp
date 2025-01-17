<script setup>

</script>
<template>
  <VAppBar flat class="header-bar bg-amber" app height="98">
    <VContainer class="d-flex flex-column">
      <VRow justify="space-between" align="center" class="w-100">
        <!-- Logo -->
        <VCol cols="auto" >
          <RouterLink :to="{ name: 'home' }" class="d-flex align-center">
            <v-img src="https://via.placeholder.com/50" alt="Logo" class="bg-green" width="50" height="50"></v-img>
            <div class="logo-text">
              <span class="text-caption">petmap</span>
            </div>

          </RouterLink>
        </VCol>

        <!-- Navigation -->
        <VCol cols="auto">
          <v-btn color="" class="mr-2" text :to="{ name: 'about' }">Sobre nosotros</v-btn>
          <v-menu>
            <template #activator="{ props }">
              <v-btn color="" class="mr-2" v-bind="props" text>Funciones</v-btn>
            </template>
            <v-list>
              <v-list-item>Collection 1</v-list-item>
              <v-list-item>Collection 2</v-list-item>
            </v-list>
          </v-menu>
          <v-btn color="" class="mr-2" text :to="{ name: 'home' }">Servicios</v-btn>
          <v-btn color="" class="mr-2" text :to="{ name: 'contact' }">Contacto</v-btn>
        </VCol>

        <!-- Login -->
        <VCol cols="auto" class="d-flex align-center justify-end">
          <VBtn class="mr-2" variant="text" height="50" color="#8d8d8d" :to="{ name: 'login' }">
            <div class="d-flex flex-column text-left">
              <span class="d-inline-block">Iniciar sesión</span>

            </div>
          </VBtn>

        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>


<style lang="scss" scoped>
// .header-bar {
//   color: #333;
// }
</style>