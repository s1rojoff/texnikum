import { defineStore } from 'pinia'
import { type NavLink } from '@/interfaces'
interface StateHeader{
  navLinks:NavLink[],
  ipadNavs: boolean
}
export const useHeaderStore = defineStore('header', {
  state: (): StateHeader => {
    return {
      ipadNavs: false,
      navLinks:[
        {
          name: 'Biz haqimizda',
          route: '/about',
          visible: false,
        },
        {
          name: 'Xalqaro aloqalar',
          route: '/',
          visible: false,
        },
        {
          name: 'Yoshlar siyosati',
          route: '/',
          visible: false,
        },
        {
          name: "E'lonlar",
          route: '/',
          visible: false,
        },
        {
          name: 'Qabul komissiyasi',
          route: '/',
          visible: false,
        },
        {
            name:"Bog'lanish",
            route: '/',
            visible: false,
        },
      ]
    }
  },
  actions: {
    toggleNavbar() {
      this.$state.ipadNavs = !this.$state.ipadNavs
    },
    toggleSubNav(index:number){
      this.$state.navLinks[index].visible = !this.$state.navLinks[index].visible
    }
  }
})

export const useAboutStore = defineStore('about', {
  state: () => {
    return {
      openModal: false,
      cardId: 0,
    }
  },
  actions: {
    togglePopup(id:number) {
      if(this.$state.openModal == false){
        this.$state.cardId = (id-1)
      }
      this.$state.openModal = !this.$state.openModal
    },
  }
})
