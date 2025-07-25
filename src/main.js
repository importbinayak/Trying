import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'


axios.defaults.baseURL='http://127.0.0.1:8000'

const app = createApp(App)
const pinia= createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
