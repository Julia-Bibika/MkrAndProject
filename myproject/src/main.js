import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import vuex from "vuex"

createApp(App).use(store).use(vuex).use(router).mount('#app')
