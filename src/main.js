import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/style.less'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')