import { type Department } from "@/interfaces";
import { ref } from 'vue'
export function useAboutPage() {
  const department = <Department>(
    {
      lavozim: "Bo'lim boshlig'i",
      email: 'example22@gmail.com',
      name: "Surname name father's name",
      url: '/rahbariyat/myself.jpg',
      phone:'+90 000 00 00',
      experience: 'Toshkent Davlat Transport Universiteti 4-kurs talabasi. Hozirda Ozbekiston Temir yol texnikumida Frontend sohasida ish yuritadi',
      mandate: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore tenetur voluptate expedita consequatur unde autem vitae! Nobis, omnis repellendus?'
    }
  )
  return{
    department
  }
}