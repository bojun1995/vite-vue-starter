import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// vant
import vantInstaller from '@/install/vant.js'
app.use(vantInstaller)

// scss
import '@/style/base/globalStyle.scss'

// router
import router from '@/router/index.js'
app.use(router)

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
