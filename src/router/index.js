import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: () => import('../views/HobbiesView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
    },
    {
      path: '/Blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/others',
      name: 'others',
      component: () => import('../views/OthersView.vue'),
    },
  ],
})

export default router
