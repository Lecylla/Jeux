import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/styles'
import router from './router';

createApp(App).use(router).use(vuetify).mount('#app')