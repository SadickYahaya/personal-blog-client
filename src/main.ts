import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'highlight.js/styles/github.css';

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).use(Toast)

app.mount('#app')
