import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// scss
import './style/base/globalStyle.scss'

// router
import router from './router/index.js'
app.use(router)

app.mount('#app')
