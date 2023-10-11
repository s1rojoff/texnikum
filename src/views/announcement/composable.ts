import { ref } from 'vue'
import type { News } from '@/interfaces/announcement'
export function useAnnouncementFn() {
  const newsData = ref<News[]>([
    {
      id:1,
      newsDate: '25.05.2023',
      imgUrl: '/announcement/news/news10-min.jpg',
      title: "Toshkent temir yo'l texnikumi bitiruvchilari ish o'rinlari bilan ta'minlandi.",
      postLink: 'https://t.me/eduttyt/5259',
      created: '25.05.2023'
    },
    {
      id:2,
      newsDate: '30.05.2023',
      imgUrl: '/announcement/news/news9-min.jpg',
      title: `Toshkent temir yo'l texnikumi o‘quvchilar o'rtasida yoshlar ma'naviyatini yuksaltirish va ularni bo'sh vaqtini mazmunli tashkil etish hamda Texnikumda 2023-yil "Yoshlarga oid davlat siyosati"ni  amalga oshirish yuzasidan chora - tadbirlari dasturi ijrosini ta'minlash maqsadida "QUVNOQLAR VA ZUKKOLAR-2023" tanlovi bo'lib o‘tdi.`,
      postLink: 'https://t.me/Texnikum_yoshlar_ittifoqi/3527',
      created: '30.05.2023'
    },
    {
      id:3,
      newsDate: '12.06.2023',
      imgUrl: '/announcement/news/new8-min.jpg',
      title: `Toshkent temir yo‘l texnikumida 2023-yil Yoshlarga oid davlat siyosatini amalga oshirish yuzasidan chora-tadbirlari dasturida belgilab berilgan vazifalar ijrosini ta’minlash maqsadida texnikum o‘quvchi qizlari o‘rtasida "TEMIR YO‘L MALIKASI-2023" ko‘rik-tanlovining saralash bosqichi bo‘lib o‘tdi.`,
      postLink: 'https://t.me/eduttyt/5345',
      created: '12.06.2023'
    },
    {
      id:4,
      newsDate: '14.06.2023',
      imgUrl: '/announcement/news/news7-min.jpg',
      title: `O'zbekiston Respublikasi Prezidenti tomonidan ilgari surilgan 5 ta muhim tashabbusuning yoshlar ma'naviyatini yuksaltirish, ular o'rtasida kitobxonlikni keng targ'ib qilish bo'yicha tizimli ishlarni tashkil etishga yo'naltirilgan to'rtinchi tashabbusi doirasida Toshkеnt tеmir yo'l tеxnikumi o'quvchilari o'rtasida kitobxonlik madaniyatini oshirish, ularni intеlеktual salohiyatini yuksaltirish maqsadida “ZUKKO KITOBXON-2023” ko'rik-tanlovi o‘tkazildi.`,
      postLink: 'https://t.me/Texnikum_yoshlar_ittifoqi/3571',
      created: '14.06.2023'
    },
    {
      id:5,
      newsDate: '24.06.2023',
      imgUrl: '/announcement/news/news6-min.jpg',
      title: `Toshkent temir yo‘l texnikumida
        “O‘zbekiston temir yo‘llari”AJ boshqaruv raisi v.b. X.N.Xasilovning 34-H sonili buyrug‘i ijrosini ta’minlash maqsadida o‘quvchi-yoshlar bilan “Temir yo‘lda xavfsizlikni ta’minlash va yoshlar o‘rtasida xuquqbuzarliklarni  oldini olish”, “Ommaviy madaniyat global xavf va xatarlar” mavzularida tadbir o‘tkazildi. `,
      postLink: 'https://t.me/Texnikum_yoshlar_ittifoqi/3584?single',
      created: '24.06.2023'
    },
    {
      id:6,
      newsDate: '13.07.2023',
      imgUrl: '/announcement/news/news4-min.jpg',
      title: `Texnikum bitiruvchilarini OTMlarga suhbat asosida qabul qilish tartibiga o‘zgartirish kiritish bo‘yicha taklif ishlab chiqilgan`,
      postLink: 'https://t.me/eduttyt/5436',
      created: '13.07.2023'
    },
    {
      id:7,
        newsDate: '01.08.2023',
        imgUrl: '/announcement/news/news5-min.jpg',
        title: `1 август 2023 йил Тошкент темир йўл техникумида Халқаро таснифлагичнинг 5-даражасида таҳсил олиб техникумни муваффақиятли тамомлаган битирувчиларга “ЎРТА МАХСУС ПРОФЕССИОНАЛ ТАЪЛИМ ДИПЛОМИ”ни топшириш тадбири бўлиб ўтди.`,
        postLink: 'https://t.me/eduttyt/5479?single',
        created: '01.08.2023'
      },
      {
        id:8,
        newsDate: '14.08.2023',
        imgUrl: '/announcement/news/news3-min.jpg',
        title: `Toshkent temir yo’l texnikumida  quyidagi  ta'lim yo'nalishlari bo'yicha qabul belgilangan:`,
        postLink: 'https://t.me/OTFIV_Tashkent/916',
        created: '14.08.2023'
      },
      {
        id:9,
        newsDate: '16.08.2023',
        imgUrl: '/announcement/news/news4-min.jpg',
        title: `Toshkent temir yo'l texnikumida dual ta'lim shaklida 1-kursda va sirtqi ta'lim shaklida 1-kursda tahsil oluvchi o'quvchilarga 2-semestr darslari 2023-yil 04-sentabrdan boshlanishini ma'lum qilamiz.`,
        postLink: 'https://t.me/eduttyt/5550',
        created: '16.08.2023'
      },
      {
        id:10,
        newsDate: '28.08.2023',
        imgUrl: '/announcement/news/news6-min.jpg',
        title: `Бу йилги анъанавий август кенгашлари Тошкент темир йўл техникумида “Сифатли таълим ва малакали мутахассис –барқарор иқтисодиётнинг асоси!” шиори остида ва Республикамиз мустақиллигининг 32 йиллигини муносиб нишонлаш арафасига тўғри келди.`,
        postLink: 'https://t.me/eduttyt/5607',
        created: '28.08.2023'
      }
  ])
  return {
    newsData
  }
}
