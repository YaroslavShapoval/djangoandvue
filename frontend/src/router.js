import Vue from 'vue'
import VueRouter from 'vue-router'

import MainComponent from '@/components/MainComponent.vue'
import ReviewsComponent from '@/components/ReviewsComponent.vue'

const routes = [
  { path: '*', component: MainComponent },
  { path: '/reviews', component: ReviewsComponent }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router
