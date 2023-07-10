export const routers = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'Biz haqimizda',
    component: () => import('@/views/about/index.vue'),
    children: [
      {
        path: '',
        name: 'About us',
        meta: { parentName: 'Biz haqimizda' },
        component: () => import('@/views/about/story.vue')
      },
      {
        path: 'management',
        name: 'Rahbariyat',
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/about/management.vue')
      },
      {
        path: 'structure',
        name: 'Tarkibiy tuzilma',
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/about/sturucture.vue')
      }
    ]
  }
]
