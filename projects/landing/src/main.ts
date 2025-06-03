import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      darkModeSelector: 'system',
    },
  },
})
app.mount('#app')
