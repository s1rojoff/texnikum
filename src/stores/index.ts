import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      ipadNavs: false
    }
  },
  actions: {
    toggleNavbar() {
      this.$state.ipadNavs = !this.$state.ipadNavs
    }
  }
})

export const useAboutStore = defineStore('about', {
  state: () => {
    return {
      openModal: false,
      cardId: 0
    }
  },
  actions: {
    togglePopup(id:number) {
      if(this.$state.openModal == false){
        this.$state.cardId = (id-1)
      }
      this.$state.openModal = !this.$state.openModal
    }
  }
})
