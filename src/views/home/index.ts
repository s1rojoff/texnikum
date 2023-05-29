import { type NavLink } from '@/interfaces/index'
import { ref } from 'vue'
export function useHomeFunctional() {
  const navlinks = ref<NavLink[]>([
    {
      name: 'бош саҳифа',
      route: '/'
    },
    {
      name: 'биз ҳақимизда',
      route: '/'
    },
    {
      name: 'халқаро алоқалар',
      route: '/'
    },
    {
      name: 'ёшлар сиёсати',
      route: '/'
    },
    {
      name: 'эълонлар',
      route: '/'
    },
    {
      name: 'қабул комиссияси',
      route: '/'
    },
    {
      name: 'боғланиш',
      route: '/'
    }
  ])
  return {
    navlinks
  }
}
