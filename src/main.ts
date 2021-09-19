import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/style.css'

createApp(App).use(store).use(router).mount('#app')

const appTheme = localStorage.getItem('theme');

if (
	appTheme === 'dark' &&
  // @ts-ignore: Object is possibly 'null'.
  document.querySelector('body').classList.contains('app-theme')
) {
  // @ts-ignore: Object is possibly 'null'.
  document.querySelector('body').classList.add('bg-primary-dark');
} else {
  // @ts-ignore: Object is possibly 'null'.
  document.querySelector('body').classList.add('bg-secondary-light');
}
