import { type Rahbariyat } from '@/interfaces'
import { ref } from 'vue'
export function useAboutPage() {
  const managements = ref<Rahbariyat[]>([
    {
      id: 1,
      name: 'Mavlanov Axmadjаn Xakimjanovichvich',
      url: '/rahbariyat/direktor.png',
      lavozim: "Toshkent temir yo'l texnikumi direktori",
      phone: '(71) 299-05-59',
      qabul: 'Dushanba (10:00-12:00)',
      email: ' maxmadjan1970@umail.uz',
      experience:
        '2023-yil 07-yanvar kuni texnikum faollar zalida Oliy ta’lim, Fan va innovatsiyalar vazirligining Pedagogik innovatsiyalar instituti, Professional ta’limni innovatsion rivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi. Seminar-treningda Innorivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi.',
      mandate:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit blanditiis dolore sint provident nulla rem amet similique, architecto maxime.'
    },
    {
      id: 2,
      name: "To'ychiyev Jamshid Xajiakbarovich",
      url: '/rahbariyat/oquv_ishlari_boyicha.png',
      lavozim: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
      phone: '(71) 299-05-44',
      qabul: 'Seshanba (10:00-12:00)',
      email: 'info@tpkjt.uz',
      experience:
        '2023-yil 07-yanvar kuni texnikum faollar zalida Oliy ta’lim, Fan va innovatsiyalar vazirligining Pedagogik innovatsiyalar instituti, Professional ta’limni innovatsion rivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi. Seminar-treningda Innorivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi.',
      mandate:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit blanditiis dolore sint provident nulla rem amet similique, architecto maxime.'
    },
    {
      id: 3,
      name: 'Annaqulov Asatillo Ergashevich',
      url: '/rahbariyat/ishlab_chiqarish_boyicha.jpg',
      lavozim: "Direktorning ishlab chiqarish ta'limi bo'yicha o‘rinbosari",
      phone: '(71) 299-05-76',
      qabul: 'Juma (10:00-12:00)',
      email: 'info@tpkjt.uz',
      experience:
        '2023-yil 07-yanvar kuni texnikum faollar zalida Oliy ta’lim, Fan va innovatsiyalar vazirligining Pedagogik innovatsiyalar instituti, Professional ta’limni innovatsion rivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi. Seminar-treningda Innorivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi.',
      mandate:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit blanditiis dolore sint provident nulla rem amet similique, architecto maxime.'
    },
    {
      id: 4,
      name: 'Nabiev Sardor Abdumalikovich',
      url: '/rahbariyat/yoshlar_ishlari_boyicha.jpg',
      lavozim: "Direktorning ishlab chiqarish ta'limi bo'yicha o‘rinbosari",
      phone: '(71) 299-05-76',
      qabul: 'Juma (10:00-12:00)',
      email: 'info@tpkjt.uz',
      experience:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam.',
      mandate:
        '2023-yil 07-yanvar kuni texnikum faollar zalida Oliy ta’lim, Fan va innovatsiyalar vazirligining Pedagogik innovatsiyalar instituti, Professional ta’limni innovatsion rivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi. Seminar-treningda Innorivojlantirish boshqarmasi bosh mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi.'
    },
    {
      id: 5,
      name: 'Test  Testov Testovich',
      url: '/rahbariyat/myself.jpg',
      lavozim: "Direktorning moliya-iqtisod va ma'muriy xo'jalik ishlari bo‘yicha o‘rinbosari",
      phone: '(71) 299-05-76',
      qabul: 'Juma (10:00-12:00)',
      email: 'info@tpkjt.uz',
      experience:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea molestiae debitis maiores quod cupiditate, id repellat doloremque, omnis voluptatum vel architecto harum amet sunt voluptates magnam culpa ex voluptatem doloribus provident veniam dolor. Soluta, possimus est? Voluptas reprehenderit doloribus ipsam.',
      mandate:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit blanditiis dolore sint provident nulla rem amet similique, architecto maxime.'
    }
  ])
  return {
    managements
  }
}
