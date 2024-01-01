import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/hours',
    component: () => import('@/views/Hours.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
