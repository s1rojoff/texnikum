import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => {
    return { 
      ipadNavs: false
    }
  },
  actions:{
    toggleNavbar(){
      this.$state.ipadNavs = !this.$state.ipadNavs
    }
  }
})
