// Import Vue
import { createApp } from 'vue'

// Import root component
import App from './App.vue'

// Import Vuetify and styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
})

// Mount the app
createApp(App).use(vuetify).mount('#app')
