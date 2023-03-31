import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/login.vue'
import Books from '../views/Books.vue'
import Authors from '../views/Authors.vue'
import Members from '../views/Members.vue'
import Staff from '../views/Staff.vue'
import Issues from '../views/Issues.vue'
import BookEdit from '../views/BookEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/authors',
    name: 'authors',
    component: Authors
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/staff',
    name: 'staff',
    component: Staff
  },
  {
    path: '/issues',
    name: 'issues',
    component: Issues
  },
  {
    path: '/books/:id',
    name: 'bookEdit',
    component: BookEdit
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
