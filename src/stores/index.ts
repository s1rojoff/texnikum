import { defineStore } from 'pinia'
import { type NavLink } from '@/interfaces'
interface StateHeader {
  navLinks: NavLink[]
  ipadNavs: boolean
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    return {
      ipadNavs: false,
      navLinks: [
        {
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
              route: '/about'
            },
            {
              name: "To'garak va klublar",
              route: '/about'
            },
            {
              name: "Tanlovlar, musobaqa va stipendiyalar",
              route: '/about'
            },
            {
              name: "Talabalar shaharchasi",
              route: '/about'
            },
            {
              name: "Talabalar hayotidan fotogalereya",
              route: '/about'
            }
          ]
        },
        {
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
              route: '/about'
            },
            {
              name: 'Videoroliklar',
              route: '/about'
            },
            {
              name: "Fotolavhalar",
              route: '/about'
            },
            {
              name: 'Direktorga murojaat qilish ',
              route: '/about'
            },
            {
              name: "Aloqa",
              route: '/about'
            },
          ]
        },
        {
          name: 'Qabul komissiyasi',
          route: '/',
          visible: false,
          subMenu: [
            {
              name: "Qabul komissiyasi haqida ma'lumot",
              route: '/acceptance'
            },
          ]
        },
        {
          name: "Bog'lanish",
          route: '/',
          visible: false,
          subMenu: [
            {
              name: 'Texnikum haqida',
              route: '/about'
            },
            {
              name: 'Rahbariyat',
              route: '/about'
            },
            {
              name: 'Tashkiliy tuzilma',
              route: '/about'
            },
            {
              name: 'Kasaba uyushmasi',
              route: '/about'
            }
          ]
        }
      ]
    }
  },
  actions: {
    toggleNavbar() {
      this.$state.ipadNavs = !this.$state.ipadNavs
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
      visibleInfo : false,
    }
  },
  actions: {
    togglePopup(id: number) {
      if (this.$state.openModal == false) {
        this.$state.cardId = id - 1
      }
      this.$state.openModal = !this.$state.openModal
    },
    toggleInfo(){
      this.$state.visibleInfo = !this.$state.visibleInfo
    },
  }
})
