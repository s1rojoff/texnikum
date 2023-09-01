import { ref } from "vue"

export function useBaseHeader() {
  const topIconName = ['instagram', 'facebook', 'lightbulb', 'telegram']
  const locales = ref(['en', 'uz', 'ru'])
  return {
    topIconName,
    locales
  }
}
