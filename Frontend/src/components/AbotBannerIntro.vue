<template>
    <v-container fluid class="pa-0">
        <v-card flat class="position-relative">
            <!-- Imagen de fondo -->
            <v-img src="/image.png" height="300px" cover>
                <!-- Capa de opacidad -->
                <div class="overlay"></div>

                <!-- Contenido -->
                <v-container class="h-100 d-flex align-center px-6">
                    <v-row>
                        <v-col cols="12" md="6">
                            <h2 class="text-white font-weight-bold">Quiénes Somos</h2>
                            <p class="text-white">
                                Nuestra historia comenzó en 2021, cuando encontramos a una mascota perdida en las
                                calles. Con
                                esfuerzo y cariño, logramos reunirla con su familia. Desde entonces, nos dedicamos a
                                ayudar
                                a más animales, rescatándolos y dándoles un hogar.
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-card>
    </v-container>
</template>

<style scoped>
/* Capa oscura sobre la imagen para mejorar legibilidad */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
</style>