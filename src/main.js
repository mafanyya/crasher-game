import { createApp } from 'vue'
import router from "../router";
import { VueFire, VueFireAuth } from "vuefire";
import App from './App.vue'
import { firebaseApp } from './firebase'
import VueSocialSharing from 'vue-social-sharing'



import './assets/main.css'

const app = createApp(App)
app.use(VueFire,{
    firebaseApp,
    modules:[
        VueFireAuth
    ],
}).use(router).use(VueSocialSharing).mount('#app')


