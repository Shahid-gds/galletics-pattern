import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'Default'},
      component: Home
    },
    {
      path: '/horoscopes',
      name: 'Horoscopes',
      meta: { layout: 'Default' },
      component: () => import('../pages/Horoscopes.vue')
    },
    {
      path: '/predictions',
      name: 'Predictions',
      meta: { layout: 'Default' },
      component: () => import('../pages/Predictions.vue')
    },
    {
      path: '/love-and-compatibility',
      name: 'Love and Compatibility',
      meta: { layout: 'Default' },
      component: () => import('../pages/Love&Compatibility.vue')
    },
    {
      path: '/astrology-tools',
      name: 'Astrology Tool',
      meta: { layout: 'Default' },
      component: () => import('../pages/AstrologyTools.vue')
    },
    {
      path: '/astrological-events-canlendar',
      name: 'Astrology Events',
      meta: { layout: 'Default' },
      component: () => import('../pages/AstrologicalEventsCalendar.vue')
    },
    {
      path: '/learning-hub-resources',
      name: 'Learning Resources',
      meta: { layout: 'Default' },
      component: () => import('../pages/LearningHub&Resources.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      meta: { layout: 'Default' },
      component: () => import('../pages/Shop.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      meta: { layout: 'Default' },
      component: () => import('../pages/Blog.vue')
    },
    {
      path: '/about-us',
      name: 'About Us',
      meta: { layout: 'Default' },
      component: () => import('../pages/AboutUs.vue')
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      meta: { layout: 'Default' },
      component: () => import('../pages/ContactUs.vue')
    },
   
  ]
})

export default router
