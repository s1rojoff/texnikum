interface SubMenu{
  name: string,
  route: string
}
export interface NavLink {
  id: number,
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

// international/department

export interface  Department {
  lavozim: string,
  email: string,
  name:string,
  url: string,
  phone: string,
  experience: string,
  mandate: string
}

// international/currentpro

export interface CurrentPro {
  id: number,
  title: string,
  subtitle: string,
  url: string,
  description:string,
}
// international/investment
export interface Investment {
  id: number,
  grantName: string,
  direction: string,
  period: string,
  leader: string
}

export interface Activities {
  id: number, 
  url: string,
  title: string,
  subtitle: string,
  date: string
}
export interface Trainings {
  id: number,
  url: string,
  title: string,
  subtitle: string,
  date: string,
  description: string
}