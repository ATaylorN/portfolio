import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMeView.vue'
import Coding from '../views/CodingProjectsView.vue'
import FallFest from '../views/FallFestView.vue'
import BuySell from '../views/BuySellView.vue'
import RealEstate from '../views/RealEstateView.vue'
import PortraitArt from '../views/PortraitsView.vue'

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
  },
  {
    path: '/portraits',
    name: 'portrait-art',
    component: PortraitArt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
