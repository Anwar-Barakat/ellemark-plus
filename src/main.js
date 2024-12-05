import { createApp } from "vue";
import "./style.css";
import './style.css'
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';


// Vuetify
import vuetify from '@/plugins/vuetify'

import mitt from "mitt";
const Emitter = mitt();

createApp(App)
.use(router)
.provide("emitter", Emitter)
.use(createPinia())
.use(vuetify).mount("#app")
