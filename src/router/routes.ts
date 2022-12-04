import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: "Home "
    }
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../views/QuotesView.vue'),
    meta: {
      title: "Quotes"
    }
  },
  {
    path: '/work/resourcesr',
    name: 'ResourcesR',
    component: () => import('../views/work/ResourcesRView.vue'),
    meta: {
      title: "ResourcesR"
    }
  },
  {
    path: '/work/alphasofthub',
    name: 'AlphaSoftHub',
    component: () => import('../views/work/AlphasofthubView.vue'),
    meta: {
      title: "AlphaSoftHub"
    }
  },
  {
    path: '/work/zest',
    name: 'Zest',
    component: () => import('../views/work/ZestView.vue'),
    meta: {
      title: "Zest Framework"
    }
  },
  {
    path: '/work/projects',
    name: 'Projects',
    component: () => import('../views/work/ProjectsView.vue'),
    meta: {
      title: "More Projects"
    }
  },
  {
    path: '/work/riphah',
    name: 'Riphah',
    component: () => import('../views/work/RiphahView.vue'),
    meta: {
      title: "Riphah"
    }
  },
  {
    path: '/cache',
    name: "Cache",
    component: () => import('../views/site/cacheView.vue'),
    meta: {
      title: "Clear Cache"
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: "404",
    component: () => import('../views/site/404View.vue'),
    meta: {
      title: "404 Not Found"
    }
  },
];

export default routes;
