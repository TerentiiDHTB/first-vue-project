import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/shared/ui/ErrorPageView.vue")
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/login/')
    },
    {
      path: '/personaloffice',
      name: 'personalOffice',
      component: () => import('@/pages/personalOffice/')
    },
    {
      path: '/createproject',
      name: 'createProject',
      component: () => import("@/pages/createProject/")
    }
  ]
})

export default router
