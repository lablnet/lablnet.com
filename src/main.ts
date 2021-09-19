import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {themeSetup} from './utils/index';
import './assets/tailwind.css'
import './assets/style.css'

createApp(App).use(store).use(router).mount('#app')
themeSetup(); // setup theme.
