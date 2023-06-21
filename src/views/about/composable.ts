import { type Rahbariyat } from "@/interfaces"
import {ref} from 'vue'
export function useAboutPage(){
    const managements = ref<Rahbariyat[]>([
        {   
            name: 'Mavlanov Axmadjаn Xakimjanovichvich',
            url: '/rahbariyat/direktor.png',
            lavozim: "Toshkent temir yo'l texnikumi direktori",
            phone: '(71) 299-05-59',
            qabul: 'Dushanba (10:00-12:00)',
            email: ' maxmadjan1970@umail.uz'
        },
        {   
            name: "To'ychiyev Jamshid Xajiakbarovich",
            url: '/rahbariyat/oquv_ishlari_boyicha.png',
            lavozim: "Direktorning o'quv ishlari bo‘yicha o‘rinbosari",
            phone: '(71) 299-05-44',
            qabul: 'Seshanba (10:00-12:00)',
            email: 'info@tpkjt.uz'
        },
        {   
            name: "Annaqulov Asatillo Ergashevich",
            url: '/rahbariyat/ishlab_chiqarish_boyicha.jpg',
            lavozim: "Direktorning ishlab chiqarish ta'limi bo'yicha o‘rinbosari",
            phone: '(71) 299-05-76',
            qabul: 'Juma (10:00-12:00)',
            email: 'info@tpkjt.uz'
        },
        {   
            name: "Nabiev Sardor Abdumalikovich",
            url: '/rahbariyat/yoshlar_ishlari_boyicha.jpg',
            lavozim: "Direktorning ishlab chiqarish ta'limi bo'yicha o‘rinbosari",
            phone: '(71) 299-05-76',
            qabul: 'Juma (10:00-12:00)',
            email: 'info@tpkjt.uz'
        }
    ])
    return{
        managements
    }
}