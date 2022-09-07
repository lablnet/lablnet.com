import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createPinia } from 'pinia'
import {themeSetup} from './utils/index';

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/css/tailwind.css'

createApp(App).use(createPinia()).use(router).mount('#app')
themeSetup(); // setup theme.
