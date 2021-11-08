import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { store, key } from './store'

import './main.css'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
