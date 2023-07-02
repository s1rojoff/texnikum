export const routers = [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/home/index.vue')
    },
    {
      path: '/about',
      name: 'Biz haqimizda',
      component: ()=>import('@/views/about/index.vue')
    }
  ]