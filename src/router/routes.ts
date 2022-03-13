import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "Home "
    }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../views/Quotes.vue'),
    meta: {
      title: "Quotes"
    }
  },
  {
    path: '/work/resourcesr',
    name: 'ResourcesR',
    component: () => import('../views/work/ResourcesR.vue'),
    meta: {
      title: "ResourcesR"
    }
  },
  {
    path: '/work/alphasofthub',
    name: 'AlphaSoftHub',
    component: () => import('../views/work/Alphasofthub.vue'),
    meta: {
      title: "AlphaSoftHub"
    }
  },
  {
    path: '/work/zest',
    name: 'Zest',
    component: () => import('../views/work/Zest.vue'),
    meta: {
      title: "Zest Framework"
    }
  },
  {
    path: '/work/projects',
    name: 'Projects',
    component: () => import('../views/work/Projects.vue'),
    meta: {
      title: "More Projects"
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: "404",
    component: () => import('../views/site/404.vue'),
    meta: {
      title: "404 Not Found"
    }
  },
];

export default routes;
