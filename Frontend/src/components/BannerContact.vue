<template>
    <v-container class="fill-height d-flex">
      <!-- Imagen grande -->
      <v-img 
        src="https://via.placeholder.com/900x500" 
        cover 
        class="w-60 rounded-lg"
      />
  
      <!-- Tarjeta de información -->
      <v-card class="pa-6 ml-auto w-30" elevation="3">
        <h2 class="text-h5 font-weight-bold mb-2">Cómo Involucrarse</h2>
        <p class="text-body-2">
          ¡Haz la diferencia! Ayuda a reunir a más mascotas con sus dueños participando en nuestra comunidad.
        </p>
  
        <!-- Botones de redes sociales -->
        <div class="d-flex justify-space-between my-4">
          <v-btn color="blue" variant="outlined">
            <v-icon left>mdi-facebook</v-icon> Facebook
          </v-btn>
          <v-btn color="pink" variant="outlined">
            <v-icon left>mdi-instagram</v-icon> Instagram
          </v-btn>
          <v-btn color="blue-lighten-3" variant="outlined">
            <v-icon left>mdi-twitter</v-icon> Twitter
          </v-btn>
        </div>
  
        <!-- Información de contacto -->
        <h3 class="text-subtitle-1 font-weight-bold">Contáctanos Directamente</h3>
        <div class="d-flex align-center mt-2">
          <v-icon class="mr-2">mdi-phone</v-icon>
          <span>(123) 4567-8910</span>
        </div>
        <div class="d-flex align-center mt-2">
          <v-icon class="mr-2">mdi-email</v-icon>
          <span>help@petmap.com</span>
        </div>
      </v-card>
    </v-container>
  </template>
  
  <style scoped>
  .w-60 {
    width: 60%;
  }
  .w-30 {
    width: 30%;
  }
  .rounded-lg {
    border-radius: 12px;
  }
  </style>
  