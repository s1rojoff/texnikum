import { defineStore } from 'pinia'
export const useHeaderStore = defineStore('header', {
  state: () => {
    return {
      phoneView: 1,
      ipadNavs: false,
      allMenus: false,
      navLinks: [
        {
          id: 1,
          name: 'Biz haqimizda',
          route: '/about',
          visible: false,
          subMenu: {
            structure: {
              name: 'Tuzilma',
              childrens: [
                {
                  name: 'Texnikum haqida',
                  route: '/about'
                },
                {
                  name: 'Tashkiliy tuzilma',
                  route: '/about/structure'
                },
                {
                  name: 'Rahbariyat',
                  route: '/about/management'
                },
                {
                  name: "Bo'linmalar",
                  route: '/about/division'
                },
                {
                  name: 'Kafedralar',
                  route: '/about/department'
                },
                {
                  name: "Bo'limlar",
                  route: '/about/dep-employee'
                },
                {
                  name: 'Kasaba uyushmasi',
                  route: '/about/tradeunion'
                }
              ]
            }
          }
        },
        {
          id: 2,
          name: 'Faoliyat',
          route: '/',
          visible: false,
          subMenu: {
            international: {
              name: "Xalqaro bo'lim",
              childrens: [
                {
                  name: "Bo'lim haqida",
                  route: '/international'
                },
                {
                  name: 'Amaldagi loyihalar',
                  route: '/international/currentpro'
                },
                {
                  name: 'Xorijiy talabalarga',
                  route: '/international/students'
                },
                {
                  name: 'Jalb etilgan sarmoyalar va grantlar',
                  route: '/international/investment'
                },
                {
                  name: 'Xorijda malaka oshirish va ta’lim',
                  route: '/international/foreignpractice'
                },
              ]
            },
            youngs: {
              name: 'Yoshlar siyosati',
              childrens: [
                {
                  name: "Ma'naviy va Ma'rifiy tadbirlar",
                  route: '/youthpolicy/activities'
                },
                {
                  name: "Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
                  route: '/youthpolicy/youthwork'
                },
                {
                  name: "To'garak va klublar",
                  route: '/youthpolicy/training'
                },
                {
                  name: 'Tanlovlar, musobaqa va stipendiyalar',
                  route: '/youthpolicy/scholarship'
                },
                {
                  name: 'Talabalar shaharchasi',
                  route: '/youthpolicy/studentcampus'
                },
                {
                  name: 'Talabalar hayotidan fotogalereya',
                  route: '/youthpolicy/galery'
                }
              ]
            }
          }
        },
        {
          id: 5,
          name: "E'lonlar",
          route: '/',
          visible: false,
          subMenu: {
            news: {
              name: "E'lonlar",
              childrens: [
                {
                  name: 'Yangiliklar',
                  route: '/announcement/news'
                },
                {
                  name: 'Kutilyotgan tadbirlar',
                  route: '/announcement/upcoming-event'
                },
                {
                  name: 'Videoroliklar',
                  route: 'https://www.youtube.com/@ttytrailway'
                },
              ]
            }
          }
        },
        {
          id: 6,
          name: "O'quvchilarga",
          route: '/',
          visible: false,
          subMenu: {
            students: {
              name: "O'quvchilar uchun",
              childrens: [
                {
                  name: 'Dars jadvali',
                  route: '/student/schedule'
                },
                {
                  name: 'Stipendiya qiymati',
                  route: '/student/award'
                },
                {
                  name: "O'quv dasturi",
                  route: '/student/curriculum'
                },
                {
                  name: "Fan dasturi",
                  route: '/student/science-program'
                },
                {
                  name: "Bitiruv malakaviy ish himoyasi",
                  route: '/student/graduate-work'
                },
                {
                  name: "Iqtidorli talabalar",
                  route: '/student/talanted-student'
                },
                {
                  name: "Talabalar turar joyi",
                  route: '/student/ttj'
                },
                {
                  name: "Asosiy ish beruvchi tashkilotlar",
                  route: '/student/major-employer'
                },
                {
                  name: "Bitirgan talabalarning ish faoliyatidan",
                  route: '/student/graduated-students'
                },
                {
                  name: "Bitirgan talabalarning ishga joylashtirish",
                  route: '/student/employment-graduates'
                },
                {
                  name: "Ishchi o'quv rejalar",
                  route: '/student/working-curricula'
                },
                {
                  name: "Malaka talablari",
                  route: '/student/qual-requirement'
                },
              ]
            }
          }
        },
        {
          id: 7,
          name: "Abituriyentlarga",
          route: '/',
          visible: false,
          subMenu: {
            abituriyent: {
              name: 'Abituriyent',
              childrens: [
                {
                  name: "Qabul komissiyasi haqida ma'lumot",
                  route: '/abiturian/acceptance'
                },
                {
                  name: "Ta'lim yo'nalishlari",
                  route: '/abiturian/approaches'
                },
                {
                  name: "Qabul kvotalari",
                  route: '/abiturian/quotas'
                },
                {
                  name: "Imtihon fanlari ro'yxati",
                  route: '/abiturian/examlist'
                },
                {
                  name: "Ijodiy imtihon tizimi",
                  route: '/abiturian/creativeexam'
                },
                {
                  name: "Qabul natijalari",
                  route: '/abiturian/examresults'
                },
                {
                  name: "O'qishni ko'chirish va tiklash",
                  route: '/abiturian/transfer'
                },
                {
                  name: "Qo'shma ta'lim dasturlari",
                  route: '/abiturian/jointeducation'
                },
                {
                  name: "Kechki ta'lim",
                  route: '/abiturian/eveningeducation'
                }
              ]
            }
          }
        },
        {
          id: 8,
          name: "Bog'lanish",
          route: '/',
          visible: false,
          subMenu: {
            connect: {
              name: "Bog'lanish",
              childrens: [
                {
                  name: "Biz bilan bog'lanish",
                  route: '/connection'
                },
                {
                  name: 'Direktorga murojaat qilish',
                  route: 'https://t.me/ttytdirektor_bot'
                }
              ]
            }
          }
        }
      ]
    }
  },
  actions: {
    toggleNavbar() {
      this.$state.ipadNavs = !this.$state.ipadNavs
      this.$state.allMenus = !this.$state.allMenus
    },
    toggleSubNav(index: number) {
      this.$state.navLinks[index].visible = !this.$state.navLinks[index].visible
    }
  }
})

export const useAboutStore = defineStore('about', {
  state: () => {
    return {
      openModal: false,
      cardId: 0,
      visibleInfo: false
    }
  },
  actions: {
    togglePopup(id: number) {
      if (this.$state.openModal == false) {
        this.$state.cardId = id - 1
      }
      this.$state.openModal = !this.$state.openModal
    },
    toggleInfo() {
      this.$state.visibleInfo = !this.$state.visibleInfo
    }
  }
})
