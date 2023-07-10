interface SubMenu{
  name: string,
  route: string
}
export interface NavLink {
  name: string
  route: string,
  visible: boolean,
  subMenu: SubMenu[]
}
export interface Rahbariyat {
  id:number
  name: string
  url: string
  lavozim: string
  phone: string
  qabul: string
  email: string,
  experience: string,
  mandate: string
}
