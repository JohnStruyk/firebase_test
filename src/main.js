import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'
import { fire_app } from './firebase_conf.js'

const app = createApp(App)

app.use(router)
app.use(VueFire, {
  firebaseApp: fire_app,
  modules: [
    VueFireAuth()
  ]
})

app.use(router)
app.mount('#app')
