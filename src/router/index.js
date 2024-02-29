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
      path: '/aries',
      name: 'Aries',
      meta: { layout: 'Default' },
      component: () => import('../pages/Aries.vue')
    },
    {
      path: '/taurus',
      name: 'Taurus',
      meta: { layout: 'Default' },
      component: () => import('../pages/Taurus.vue')
    },
    {
      path: '/gemini',
      name: 'Gemini',
      meta: { layout: 'Default' },
      component: () => import('../pages/Gemini.vue')
    },
    {
      path: '/cancer',
      name: 'Cancer',
      meta: { layout: 'Default' },
      component: () => import('../pages/Cancer.vue')
    },
    {
      path: '/leo',
      name: 'Leo',
      meta: { layout: 'Default' },
      component: () => import('../pages/Leo.vue')
    },
    {
      path: '/virgo',
      name: 'Virgo',
      meta: { layout: 'Default' },
      component: () => import('../pages/Virgo.vue')
    },
    {
      path: '/libra',
      name: 'Libra',
      meta: { layout: 'Default' },
      component: () => import('../pages/Libra.vue')
    },
    {
      path: '/scorpio',
      name: 'Scorpio',
      meta: { layout: 'Default' },
      component: () => import('../pages/Scorpio.vue')
    },
    {
      path: '/sagittarius',
      name: 'Sagittarius',
      meta: { layout: 'Default' },
      component: () => import('../pages/Sagittarius.vue')
    },
    {
      path: '/capricorn',
      name: 'Capricorn',
      meta: { layout: 'Default' },
      component: () => import('../pages/Capricorn.vue')
    },
    {
      path: '/aquarius',
      name: 'Aquarius',
      meta: { layout: 'Default' },
      component: () => import('../pages/Aquarius.vue')
    },
    {
      path: '/pisces',
      name: 'Pisces',
      meta: { layout: 'Default' },
      component: () => import('../pages/Pisces.vue')
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
      component: () => import('../pages/Shop.vue'),
    },
    {
      path: '/orange-calcite', 
      name: 'OrangeCalcite',
      meta: { layout: 'Default' },
      component: () => import('../pages/OrangeCalcite.vue')
    },
    {
      path: '/orange-calcite', 
      name: 'OrangeCalcite',
      meta: { layout: 'Default' },
      component: () => import('../pages/OrangeCalcite.vue')
    },
    {
      path: '/green-sardonyx', 
      name: 'GreenSardonyx',
      meta: { layout: 'Default' },
      component: () => import('../pages/GreenSardonyx.vue')
    },
    {
      path: '/red-jasper', 
      name: 'RedJasper',
      meta: { layout: 'Default' },
      component: () => import('../pages/RedJasper.vue')
    },
    {
      path: '/palmistry-book', 
      name: 'PalmistryBook',
      meta: { layout: 'Default' },
      component: () => import('../pages/PalmistryBook.vue')
    },
    {
      path: '/astrology-book', 
      name: 'AstrologyBook',
      meta: { layout: 'Default' },
      component: () => import('../pages/AstrologyBook.vue')
    },
    {
      path: '/tarot-book', 
      name: 'TarotBook',
      meta: { layout: 'Default' },
      component: () => import('../pages/TarotBook.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      meta: { layout: 'Default' },
      component: () => import('../pages/Blog.vue')
    },
    {
      path: '/blog-detail',
      name: 'DetailBlog',
      meta: { layout: 'Default' },
      component: () => import('../pages/BlogDetailFirstCard.vue')
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
    {
      path: '/terms',
      name: 'Terms',
      meta: { layout: 'Default' },
      component: () => import('../pages/Terms.vue')
    },
    {
      path: '/privacy',
      name: 'Privacy',
      meta: { layout: 'Default' },
      component: () => import('../pages/Privacy.vue')
    },
   
  ]
})

export default router
