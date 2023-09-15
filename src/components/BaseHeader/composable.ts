import { ref } from "vue"

export function useBaseHeader() {
  const topIconName = [
    {
      name: 'instagram',
      url: 'https://instagram.com/ttytrailway?igshid=MzRlODBiNWFlZA=='
    },
    {
      name: 'facebook',
      url: ''
    },
    {
      name: 'lightbulb',
      url: ''
    },
    {
      name: 'telegram',
      url: ''
    }]
  const locales = ref(['uz', 'ru'])
  return {
    topIconName,
    locales
  }
}
