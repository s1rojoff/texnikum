import { ref } from 'vue'

export function useDevision() {
  const devisions = ref<any>([
    {
      name: "Infrastruktura bo'limi",
      url: '/bolinmalar/infrastruktura.avif'
    },
    {
      name: "Elektr energetika bo'limi",
      url: '/bolinmalar/elektr_energiya.jpg'
    },
    {
      name: "Tashish jarayonlarini avtomatlashtirish va axborotlashtirish bo'limi",
      url: '/bolinmalar/tashish_avtomat.jpg'
    },
    {
      name: "Harakat tarkibi bo'limi",
      url: '/bolinmalar/harakat_tarkibi.jpeg'
    },
    {
      name: "Tashishni tashkil etish bo'limi",
      url: '/bolinmalar/tashishni_tashkil.jpg'
    }
  ])
  return {devisions}
}
