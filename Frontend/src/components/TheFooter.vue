<script setup>

</script>
<template>
  <v-footer color="" class="py-10  bg-red" name="footer">
    <v-container>
      <!-- <v-img src="https://via.placeholder.com/100x50" width="100" height="50" class="mb-6 bg-amber" alt="Logo" /> -->
      <!-- Información de contacto y enlaces -->
      <v-row>
        <v-col cols="12" lg="3">
          <h3 class="font-weight-bold mb-6">Información de contacto</h3>
          <div class="mb-3 d-flex">
            <v-icon size="40" class="me-3">mdi-headset</v-icon>
            <div>
              <p>Contactanos 24/7:</p>
              <p class="font-weight-bold phone-number">+01 0123 456 789</p>

            </div>
          </div>
          <p class="mb-3">
            <span class="font-weight-bold">Direcci&oacute;n:</span>
          </p>
          <p class="mb-3">
            <span class="font-weight-bold">Correo:</span>
            admin@gmail.com
          </p>
        </v-col>

        <v-col cols="12" lg="9" class="">
          <v-row class="justify-space-between">
            <v-col cols="12" md="4" lg="auto">
              <h3 class="font-weight-bold mb-6">My Account</h3>
              <ul>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Nosotros</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Contact us</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">FAQ</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Privacy policy</RouterLink>
                </li>
                <li class="">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Return and exchange</RouterLink>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" lg="auto">
              <h3 class="font-weight-bold mb-6">Customer Service</h3>
              <ul>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Home</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Product</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Collections</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Blog</RouterLink>
                </li>
                <li class="">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Pages</RouterLink>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" lg="auto">
              <h3 class="font-weight-bold mb-6">Customer Service</h3>
              <ul>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Home</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Product</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Collections</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Blog</RouterLink>
                </li>
                <li class="">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Pages</RouterLink>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="4" lg="auto">
              <h3 class="font-weight-bold mb-6">Quick Links</h3>
              <ul>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">About us</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Contact us</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">FAQ</RouterLink>
                </li>
                <li class="mb-3">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Privacy policy</RouterLink>
                </li>
                <li class="">
                  <RouterLink :to="{ name: 'home' }" class="text-decoration-none">Return and exchange</RouterLink>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="my-8"></v-divider>

      <!-- Pie de página -->
      <v-row class="align-center justify-space-between">
        <v-col cols="12" md="6">
          <p class=" text-center text-md-start">
            Hecho con ❤️ por <a class="font-weight-bold" href="https://github.com/magnoliaeb"
              target="_blank">equipo-c23-84-webapp</a>
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-end">
          <v-img src="https://via.placeholder.com/150x30" alt="Payment Methods" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<style lang="scss" scoped>
.v-footer {
  // background-color: $secondary;
}

a {
  color: white;

  &:hover {
    text-decoration: underline !important;
  }
}

* {
  color: white;
}

h3 {
  font-size: $fs-md;
}

p {
  font-size: $fs-base;
}

.phone-number {
  font-size: $fs-lg;
}
</style>
