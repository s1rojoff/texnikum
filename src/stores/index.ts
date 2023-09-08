import { defineStore } from 'pinia'
import { type NavLink } from '@/interfaces'
interface StateHeader {
  ipadNavs: boolean
  allMenus: boolean
  navLinks: NavLink[]
  phoneView: number
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    return {
      phoneView: 1,
      ipadNavs: false,
      allMenus: false,
      navLinks: [
        {
          id:1,
          name: 'Biz haqimizda',
          route: '/about',
          visible: false,
          subMenu: [
            {
              name: 'Texnikum haqida',
              route: '/about'
            },
            {
              name: 'Tashkiliy tuzilma',
              route: '/about/structure'
            },
            {
              name: 'Rahbariyat',
              route: '/about/management'
            },
            {
              name: "Bo'linmalar",
              route: '/about/division'
            },
            {
              name: 'Kafedralar',
              route: '/about/department'
            },
            {
              name: "Bo'limlar",
              route: '/about/dep-employee'
            },
            {
              name: 'Kasaba uyushmasi',
              route: '/about/tradeunion'
            }
          ]
        },
        {
          id:2,
          name: 'Xalqaro aloqalar',
          route: '/',
          visible: false,
          subMenu: [
            {
              name: "Bo'lim haqida",
              route: '/international'
            },
            {
              name: 'Amaldagi loyihalar',
              route: '/international/currentpro'
            },
            {
              name: 'Xorijiy talabalarga',
              route: '/international/students'
            },
            {
              name: 'Jalb etilgan sarmoyalar va grantlar',
              route: '/international/investment'
            },
            {
              name: 'Xorijda malaka oshirish va ta’lim',
              route: '/international/foreignpractice'
            }
          ]
        },
        {
          id:3,
          name: 'Yoshlar siyosati',
          route: '/',
          visible: false,
          subMenu: [
            {
              name: "Ma'naviy va Ma'rifiy tadbirlar",
              route: '/youthpolicy/activities'
            },
            {
              name: "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
              route: '/youthpolicy/youthwork'
            },
            {
              name: "To'garak va klublar",
              route: '/youthpolicy/training'
            },
            {
              name: 'Tanlovlar, musobaqa va stipendiyalar',
              route: '/youthpolicy/scholarship'
            },
            {
              name: 'Talabalar shaharchasi',
              route: '/youthpolicy/studentcampus'
            },
            {
              name: 'Talabalar hayotidan fotogalereya',
              route: '/youthpolicy/galery'
            }
          ]
        },
        {
          id:4,
          name: "E'lonlar",
          route: '/',
          visible: false,
          subMenu: [
            {
              name: 'Yangiliklar',
              route: '/announcement/news'
            },
            {
              name: 'Kutilyotgan tadbirlar',
              route: '/announcement/upcoming-event'
            },
            {
              name: 'Videoroliklar',
              route: '/about'
            },
          ]
        },
        {
          id:5,
          name: "O'quvchilarga",
          route:'/',
          visible: false,
          subMenu:[
            {
              name: 'Dars jadvali',
              route: '/student/schedule'
            }
          ]
        },
        {
          id:6,
          name: "Abituriyentlarga",
          route: '/',
          visible: false,
          subMenu: [
            {
              name: "Qabul komissiyasi haqida ma'lumot",
              route: '/acceptance'
            }
          ]
        },
        {
          id:7,
          name: "Bog'lanish",
          route: '/',
          visible: false,
          subMenu: [
            {
              name: "Biz bilan bog'lanish",
              route: '/connection'
            },
            {
              name: 'Direktorga murojaat qilish',
              route: 'https://t.me/ttytdirektor_bot'
            }
          ]
        }
      ]
    }
  },
  actions: {
    toggleNavbar() {
      this.$state.ipadNavs = !this.$state.ipadNavs
      this.$state.allMenus = !this.$state.allMenus
    },
    toggleSubNav(index: number) {
      this.$state.navLinks[index].visible = !this.$state.navLinks[index].visible
    }
  }
})

export const useAboutStore = defineStore('about', {
  state: () => {
    return {
      openModal: false,
      cardId: 0,
      visibleInfo: false
    }
  },
  actions: {
    togglePopup(id: number) {
      if (this.$state.openModal == false) {
        this.$state.cardId = id - 1
      }
      this.$state.openModal = !this.$state.openModal
    },
    toggleInfo() {
      this.$state.visibleInfo = !this.$state.visibleInfo
    }
  }
})
