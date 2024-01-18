import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/taco-shop/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/taco-shop/hours',
    component: () => import('@/views/Hours.vue'),
  },
  {
    path: '/taco-shop/contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/taco-shop/about',
    component: () => import('@/views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    // Check if the target route has a hash (e.g., "#menu")
    if (to.hash) {
      // Return a promise to scroll to the target element with smooth behavior
      return new Promise((resolve) => {
        setTimeout(() => {
          const targetElement = document.querySelector(to.hash)
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
          resolve()
        }, 100)
      })
    }

    // For non-hash routes, scroll to the top
    return { top: 0 }
  },
})

export default router
