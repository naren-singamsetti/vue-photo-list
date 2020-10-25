import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Posts from '../views/Posts.vue'
import Photos from '../views/Photos.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem('token')
    if (loggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
