import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "Muhammad Umer Farooq"
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      title: "Projects"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: "Contact"
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
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "About"
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
