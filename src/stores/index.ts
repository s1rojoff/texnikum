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
              route: '/about'
            },
            {
              name: 'Rahbariyat',
              route: 'about/management'
            },
            {
              name: "Bo'linmalar",
              route: '/about'
            },
            {
              name: 'Kafedralar',
              route: '/about'
            },
            {
              name: "Bo'limlar",
              route: '/about'
            },
            {
              name: 'Kasaba uyushmasi',
              route: '/about'
            }
          ]
        },
        {
          name: 'Xalqaro aloqalar',
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
        },
        {
          name: 'Yoshlar siyosati',
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
        },
        {
          name: "E'lonlar",
          route: '/',
          visible: false,
          subMenu: [
            {
              name: 'Texnikum haqida',
              route: '/about'
            },
            {
              name: 'Tashkiliy tuzilma',
              route: '/about'
            },
            {
              name: 'Rahbariyat',
              route: '/about'
            },
            {
              name: "Bo'linmalar",
              route: '/about'
            },
            {
              name: 'Kafedralar',
              route: '/about'
            },
            {
              name: "Bo'limlar",
              route: '/about'
            },
            {
              name: 'Kasaba uyushmasi',
              route: '/about'
            }
          ]
        },
        {
          name: 'Qabul komissiyasi',
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
