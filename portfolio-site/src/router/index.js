import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMeView.vue'
import Coding from '../views/CodingProjectsView.vue'
import Marketing from '../views/MarketingSectionView.vue'
import FallFest from '../views/FallFestView.vue'
import BuySell from '../views/BuySellView.vue'
import RealEstate from '../views/RealEstateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about-me',
    component: AboutMe
  },
  {
    path: '/coding',
    name: 'coding-projects',
    component: Coding
  },
  {
    path: '/marketing',
    name: 'marketing-section',
    component: Marketing
  },
  {
    path: '/fall-fest',
    name: 'fall-fest',
    component: FallFest
  },
  {
    path: '/buy-and-sell',
    name: 'buy-and-sell',
    component: BuySell
  },
  {
    path: '/real-estate',
    name: 'real-estate',
    component: RealEstate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
