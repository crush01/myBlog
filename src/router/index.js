import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from '@/view/HomeRouter.vue'
import Home from '@/view/Home.vue'
import Mood from '@/view/Mood.vue'
import Memory from '@/view/Memory.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeRouter,
    name: 'HomeRouter',
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/mood',
        component: Mood
      },
      {
        path: '/memory',
        component: Memory
      }
    ]
  }
]
const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router