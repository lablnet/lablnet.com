import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// Nprogress
const Nprogress = require('nprogress')
// Nprogress CSS
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // @ts-ignore
    document.getElementById('app').scrollIntoView();
  }
})

// @ts-ignore
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

// @ts-ignore
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  Nprogress.done()
})

export default router
