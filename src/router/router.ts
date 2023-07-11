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
      },
      {
        path: 'division',
        name: "Bo'linma",
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/about/division/index.vue')
      }
    ]
  },
  {
    path: '/international',
    name: 'Xalqaro aloqalar',
    component: () => import('@/views/international/index.vue'),
    children: [
      {
        path: '',
        name: "Bolim haqida",
        component: () => import('@/views/international/interdepart.vue')
      },
      {
        path: 'currentpro',
        name: "Amaldagi loyihalar",
        component: () => import('@/views/international/currentpro.vue')
      },
      // {
      //   path: '',
      //   name: "Bo'lim hqida",
      //   component: () => import('@/views/international/interdepart.vue')
      // },
      // {
      //   path: '',
      //   name: "Bo'lim hqida",
      //   component: () => import('@/views/international/interdepart.vue')
      // },
      // {
      //   path: '',
      //   name: "Bo'lim hqida",
      //   component: () => import('@/views/international/interdepart.vue')
      // },
    ]
  }

]
