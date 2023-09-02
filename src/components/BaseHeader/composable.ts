import { ref } from "vue"

export function useBaseHeader() {
  const topIconName = ['instagram', 'facebook', 'lightbulb', 'telegram']
  const locales = ref(['uz', 'ru'])
  return {
    topIconName,
    locales
  }
}
