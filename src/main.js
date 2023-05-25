import { createApp } from 'vue'
//does need to be between the two imports
import {createPinia} from 'pinia'
import App from './App.vue'

// const app = createApp(App)
// const pinia = createPinia()
// app.use(pinia)
// app.mount('#app')

// the above is one way to do it, but the below is better

createApp(App).use(createPinia()).mount('#app')
//this is the one line of the above three lines

//createApp(App).mount('#app')

