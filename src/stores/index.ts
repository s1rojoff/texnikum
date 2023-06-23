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
      openModal: false
    }
  },
  actions: {
    togglePopup() {
      this.$state.openModal = !this.$state.openModal
    }
  }
})
