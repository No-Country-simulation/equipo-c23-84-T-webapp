<template>
    <v-container class="text-center my-10">
      <h2 class="text-h4 font-weight-bold">Mapa Interactivo</h2>
      <p class="text-body-1 mt-2">
        El mapa interactivo está diseñado para mostrar la ubicación de las mascotas perdidas y encontradas en tiempo real.
        Con solo un vistazo al mapa, los usuarios pueden ver todas las mascotas reportadas en su área.  
        No hay pérdida de tiempo, ¡toda la información está ahí, clara y organizada!
      </p>
  
      <v-card class="mx-auto my-6" elevation="3">
        <v-img 
          src="https://via.placeholder.com/700x300" 
          height="250px"
          class="rounded"
          cover
        />
      </v-card>
  
      <v-btn color="success" size="large">Ir al mapa interactivo</v-btn>
    </v-container>
  </template>
  
  <style scoped>
  .v-card {
    max-width: 700px;
  }
  .rounded {
    border-radius: 12px;
  }
  </style>
  