import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import customCss from "./assets/main.css";

createApp(App).use(router).mount('#app')