
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
        component: () => import('@/views/about/division/main.vue'),
        children: [
          {
            path: '',
            name: 'InfraStruktura index',
            component: () => import('@/views/about/division/index.vue')
          },
          {
            path: 'infrastructure',
            name: 'InfraStructure',
            component: () => import('@/views/about/division/infrastruktura.vue')
          },
          {
            path: 'energy',
            name: 'Elektr energiyasi',
            component: () => import('@/views/about/division/energy.vue')
          },
          {
            path: 'auto-info',
            name: 'Automation information',
            component: () => import('@/views/about/division/auto-info.vue')
          },
          {
            path: 'movement',
            name: 'Movement',
            component: () => import('@/views/about/division/movement.vue')
          },
          {
            path: 'organization',
            name: 'Organization',
            component: () => import('@/views/about/division/organization.vue')
          }
        ]
      },
      {
        path: 'department',
        name: 'Kafedralar',
        component:()=> import ('@/views/about/departments/main.vue'),
        children:[
          {
            path: '',
            name: 'Kafedra main page',
            component: ()=> import('@/views/about/departments/index.vue')
          },
          {
            path: 'general-education',
            name: 'Umumtalim',
            component: ()=> import('@/views/about/departments/general-education.vue')
          },
          {
            path: 'bugaltery',
            name: 'Bugalteriya hisobi',
            component: ()=> import('@/views/about/departments/bugaltery.vue')
          },
          {
            path: 'logistic',
            name: 'Harakatni tashkil etish',
            component: ()=> import('@/views/about/departments/movement.vue')
          },
          {
            path: 'automation',
            name: 'Automatik aloqa',
            component: ()=> import('@/views/about/departments/automatic.vue')
          },
          {
            path: 'infrastructure',
            name: 'Harakat tarkibi',
            component: ()=> import('@/views/about/departments/infratuzilma.vue')
          },
          
        ]
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
    ]
  },
  {
    path: '/acceptance',
    name: 'Qabul komissiyasi',
    component: () => import('@/views/acceptance/index.vue'),
    children: [
      {
        path: '',
        name: "Qabul komissiyasi haqida ma'lumot",
        component: () => import('@/views/acceptance/index.vue')
      }

    ]
  }

]
