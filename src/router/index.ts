import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// Nprogress
const Nprogress = require('nprogress')
// Nprogress CSS
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to: any, from: any, savedPosition: any) {
    if (to.hash) {
      let elem = document.getElementById(to.hash.replace("#", ""))
      if (elem)
        window.scrollTo(0, elem.offsetTop);
    } else {
      // @ts-ignore
      document.getElementById('app').scrollIntoView();
    }
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
