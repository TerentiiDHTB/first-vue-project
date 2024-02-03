import { createApp } from 'vue'
import {plugin, defaultConfig} from '@formkit/vue'
import PrimeVue from 'primevue/config'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)

app.use(plugin, defaultConfig)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
