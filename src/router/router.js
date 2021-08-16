import { createRouter, createWebHistory } from 'vue-router';
import RedLightPage from '../pages/RedLightPage.vue';
import YellowLightPage from '../pages/YellowLightPage.vue';
import GreenLightPage from '../pages/GreenLightPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    component: RedLightPage,
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: YellowLightPage,
  },
  {
    path: '/green',
    component: GreenLightPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/red'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
