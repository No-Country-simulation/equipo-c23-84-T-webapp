<script setup lang="ts">

</script>

<template>
  <section>
    <img src="../assets/images/grupo-animales-domesticos-posando-fondo-colorido-compress.webp" height="100%" cover
      class="" />
    <v-container class="text-center bg-orange fill-height d-flex justify-center align-end pb-16">
      <v-card class="">
        <VCardText>
          <h2 class="text-h4 font-weight-bold">Reporte De Mascotas Perdidas/Encontradas</h2>
          <p class="text-body-1 mt-4">
            Los usuarios pueden reportar fácilmente una mascota perdida o encontrada mediante un formulario sencillo de
            utilizar.
          </p>
          <v-row justify="center" class="mt-6">
            <v-btn variant="flat" to="/" color="secondary" class="mr-4"> Reportar Mascota Encontrada </v-btn>
            <v-btn variant="flat" to="/" color="accent" class=""> Reportar Mascota Perdida </v-btn>
          </v-row>

        </VCardText>
      </v-card>
      </img>
    </v-container>

  </section>
</template>

<style lang="scss" scoped>
section {
  height: 934px;
  background-color: red;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.v-card {
  background: rgba(0, 0, 0, 0.6);
  max-width: 741px;
  padding: 40px 0px 0px 0px;
  height: 339px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;

}

h2 {
  font-size: $fs-xl;
  font-weight: 600;
  text-align: center;
  color: #FF8C42;

}
p {
  color : #F5F5F5;
}

a {
height: 50px !important;
padding: 8px 12px 8px 12px !important;
border-radius: 8px !important;
font-size: 16px !important;
font-weight: 400 !important;
color: #4A4A4A !important;
}
a.bg-accent {
  color: #F5F5F5 !important;
}
</style>