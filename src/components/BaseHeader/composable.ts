import { type NavLink } from '@/interfaces'
export function useBaseHeader() {
  const topIconName = ['instagram', 'facebook', 'lightbulb', 'telegram', 'uzlang']
  const navLinks: NavLink[] = [
    {
      name: 'Biz haqimizda',
      route: '/about'
    },
    {
      name: 'Xalqaro aloqalar',
      route: '/'
    },
    {
      name: 'Yoshlar siyosati',
      route: '/'
    },
    {
      name: "E'lonlar",
      route: '/'
    },
    {
      name: 'Qabul komissiyasi',
      route: '/'
    },
    {
        name:"Bog'lanish",
        route: '/'
    },
  ]
  return {
    topIconName,
    navLinks
  }
}
