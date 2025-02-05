// import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import './assets/scss/main.scss'
import 'v-slick-carousel/style.css'

// import "sweetalert2/dist/sweetalert2.min.css"; // Estilos base
// import "sweetalert2-theme-dark/dark.css"; // Tema que deseas usar

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'

import pinia from './stores/pinia'

import VueSocialSharing from 'vue-social-sharing'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
  display: {
    mobileBreakpoint: 'md'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#FF8C42',
          secondary: '#66CDAA',
          accent: '#FA4C4C',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  }
})

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(VueSocialSharing)

app.mount('#app')
