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
        component: () => import('@/views/about/departments/main.vue'),
        children: [
          {
            path: '',
            name: 'Kafedra main page',
            component: () => import('@/views/about/departments/index.vue')
          },
          {
            path: 'general-education',
            name: 'Umumtalim',
            component: () => import('@/views/about/departments/general-education.vue')
          },
          {
            path: 'bugaltery',
            name: 'Bugalteriya hisobi',
            component: () => import('@/views/about/departments/bugaltery.vue')
          },
          {
            path: 'logistic',
            name: 'Harakatni tashkil etish',
            component: () => import('@/views/about/departments/movement.vue')
          },
          {
            path: 'automation',
            name: 'Automatik aloqa',
            component: () => import('@/views/about/departments/automatic.vue')
          },
          {
            path: 'infrastructure',
            name: 'Harakat tarkibi',
            component: () => import('@/views/about/departments/infratuzilma.vue')
          }
        ]
      },
      {
        path: 'dep-employee',
        name: "Bo'limlar",
        component: () => import('@/views/about/dep_employe/main.vue'),
        children: [
          {
            path: '',
            name: 'main page of dep-employe',
            component: () => import('@/views/about/dep_employe/index.vue')
          },
          {
            path: 'education-method',
            name: 'O‘quv-uslubiy bo‘lim',
            component: () => import('@/views/about/dep_employe/educationMethod.vue')
          },
          {
            path: 'distance-edu',
            name: "Masofaviy ta'limni joriy etish",
            component: () => import('@/views/about/dep_employe/distanceEdu.vue')
          },
          {
            path: 'international',
            name: 'Xalqaro Aloqalar',
            component: () => import('@/views/about/dep_employe/international.vue')
          },
          {
            path: 'it-technology',
            name: 'Axborot texnologiyalarini joriy etish',
            component: () => import('@/views/about/dep_employe/itTechnology.vue')
          },
          {
            path: 'arm',
            name: 'Axborot-resurs markazi',
            component: () => import('@/views/about/dep_employe/arm.vue')
          },
          {
            path: 'cooperation-employer',
            name: 'Amaliyot va ish beruvchilar bilan hamkorlik',
            component: () => import('@/views/about/dep_employe/cooperationEmployer.vue')
          },
          {
            path: 'internal-control',
            name: 'Ichki nazorat',
            component: () => import('@/views/about/dep_employe/internalControl.vue')
          },
          {
            path: 'work-youth',
            name: 'Yoshlar bilan ishlash',
            component: () => import('@/views/about/dep_employe/workYouth.vue')
          },
          {
            path: 'employes',
            name: 'Xodimlar bo‘limi',
            component: () => import('@/views/about/dep_employe/employes.vue')
          },
          {
            path: 'bugaltery',
            name: 'Buxgalteriya',
            component: () => import('@/views/about/dep_employe/bugaltery.vue')
          },
          {
            path: 'registry',
            name: 'Devonxona bo‘limi',
            component: () => import('@/views/about/dep_employe/registry.vue')
          },
          {
            path: 'residence-students',
            name: 'O‘quvchilar turar joyi',
            component: () => import('@/views/about/dep_employe/residenceStudents.vue')
          },
          {
            path: 'technical-economy',
            name: 'Texnik foydalanish va xo‘jalik',
            component: () => import('@/views/about/dep_employe/technicalEconomy.vue')
          }
        ]
      },
      {
        path: 'tradeunion',
        name: 'Kasaba uyushmasi',
        component: () => import('@/views/about/tradeunion.vue')
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
        name: 'Bolim haqida',
        component: () => import('@/views/international/interdepart.vue')
      },
      {
        path: 'currentpro',
        name: 'Amaldagi loyihalar',
        component: () => import('@/views/international/currentpro.vue')
      },
      {
        path: 'students',
        name: 'Xorijdagi talabalarga',
        component: () => import('@/views/international/students.vue')
      },
      {
        path: 'investment',
        name: 'Jalb etilgan sarmoyalar va grantlar',
        component: () => import('@/views/international/investment.vue')
      },
      {
        path: 'foreignPractice',
        name: "Xorijda malaka oshirish va ta'lim",
        component: () => import('@/views/international/foreignpractice.vue')
      }
    ]
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('@/views/student/index.vue'),
    children: [
      {
        path: 'schedule',
        name: 'Dars jadvali',
        component: () => import('@/views/student/schedule/index.vue')
      }
    ]
  },
  {
    path: '/youthpolicy',
    name: 'Yoshlar siyosati',
    component: () => import('@/views/youthPolicy/index.vue'),
    children: [
      {
        path: 'activities',
        name: "Ma'daniy va ma'rifiy tadbirlar",
        component: () => import('@/views/youthPolicy/activities.vue')
      },
      {
        path: 'youthwork',
        name: "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
        component: () => import('@/views/youthPolicy/youthWork.vue')
      },
      {
        path: 'training',
        name: "To'garak va klublar",
        component: () => import('@/views/youthPolicy/training.vue')
      },
      {
        path: 'scholarship',
        name: 'Tanlovlar, musobaqa va stipendiyalar',
        component: () => import('@/views/youthPolicy/scholarship.vue')
      },
      {
        path: 'studentcampus',
        name: 'Talabalar shaharchasi',
        component: () => import('@/views/youthPolicy/studentCampus.vue')
      },
      {
        path: 'galery',
        name: 'Talabalar hayotidan fotogalereya',
        component: () => import('@/views/youthPolicy/galery.vue')
      }
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
  },
  {
    path: '/announcement',
    name: "E'lonlar",
    component: () => import('@/views/announcement/main.vue'),
    children: [
      {
        path: 'news',
        name: 'main page of announcement page',
        component: () => import('@/views/announcement/index.vue')
      },
      {
        path: 'upcoming-event',
        name: 'Upcoming events',
        component: () => import('@/views/announcement/upcomingEvent.vue')
      }
    ]
  },
  {
    path: '/connection',
    name: 'Connection with texnikum',
    component: () => import('@/views/connect/connect-texnikum.vue')
  }
]
