import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index.ts'
import '@/style/common.css'
import '@/style/tailwind.css'

createApp(App).use(router).mount('#app')
