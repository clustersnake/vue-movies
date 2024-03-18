import { createRouter, createWebHistory } from 'vue-router'
import {useSessionStore} from '@/stores';
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/movies/:id',
      name: 'movieDetails',
      component: () => import('../views/MovieView.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
      meta: {
        requiresAuth: false
      },
    }
  ]
})

router.beforeEach((to) => {
  console.log(to);
  const sessionStore = useSessionStore();

  if(to.meta.requiresAuth && !sessionStore.userData.authenticated){
    console.log('not authenticated');
 return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }

  }
})

export default router
