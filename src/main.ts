import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import uz from './locale/uz.json'
import ru from './locale/ru.json'
import en from './locale/en.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = createI18n({
  locale: 'en',
  legacy: false,
    messages: {
      uz: uz,
      en: en,
      ru: ru 
    }
//   messages: {
//     uz: () => import('@/locale/uz.json'),
//     en: () => import('@/locale/en.json'),
//     ru: () => import('@/locale/ru.json')
//   }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
