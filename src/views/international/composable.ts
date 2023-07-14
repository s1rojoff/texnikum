import { type Department } from "@/interfaces";
import { type CurrentPro } from "@/interfaces";
import { ref } from 'vue'
export function useAboutPage() {
  const department = <Department>(
    {
      lavozim: "Bo'lim boshlig'i",
      email: 'example22@gmail.com',
      name: "Surname name father's name",
      url: '/rahbariyat/myself.jpg',
      phone: '+90 000 00 00',
      experience: 'Toshkent Davlat Transport Universiteti 4-kurs talabasi. Hozirda Ozbekiston Temir yol texnikumida Frontend sohasida ish yuritadi',
      mandate: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, labore tenetur voluptate expedita consequatur unde autem vitae! Nobis, omnis repellendus?'
    }
  )
  return {
    department
  }
}
export function useprojectsPage() {
  const currentPros = ref<CurrentPro[]>([
    {
      id: 1,
      title: "Shimoliy Kavkaz kon-metallurgiya instituti (Davlat texnologiya universiteti) (SKGMI)",
      subtitle:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis',
      url: '/international/univer-1.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis sapiente soluta veniam alias ipsum cumque quibusdam praesentium harum delectus. Expedita, optio recusandae. Laudantium quam sunt in itaque? Maxime optio mollitia dolorum hic provident eius aspernatur. Similique animi facere maiores corrupti. Nulla itaque totam molestiae similique dicta dolores vel nostrum, tenetur illum illo incidunt magni cumque odio iusto nemo suscipit necessitatibus corporis, autem laborum nobis. Perferendis, quia at! Quia ratione consequuntur saepe repellat vel blanditiis explicabo rerum unde et commodi quae atque, totam consequatur doloremque eligendi, eaque exercitationem. Quae corporis temporibus doloremque veniam nisi!"
    },
    {
      id: 2,
      title: "Rossiya transport universiteti (RUT MIIT)",
      subtitle:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis',
      url: '/international/univer-2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis sapiente soluta veniam alias ipsum cumque quibusdam praesentium harum delectus. Expedita, optio recusandae. Laudantium quam sunt in itaque? Maxime optio mollitia dolorum hic provident eius aspernatur. Similique animi facere maiores corrupti. Nulla itaque totam molestiae similique dicta dolores vel nostrum, tenetur illum illo incidunt magni cumque odio iusto nemo suscipit necessitatibus corporis, autem laborum nobis. Perferendis, quia at! Quia ratione consequuntur saepe repellat vel blanditiis explicabo rerum unde et commodi quae atque, totam consequatur doloremque eligendi, eaque exercitationem. Quae corporis temporibus doloremque veniam nisi!"
    },
    {
      id: 3,
      title: "Moskva arxitektura instituti (Davlat akademiyasi) (MARCHI)",
      subtitle:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis',
      url: '/international/univer-3.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis sapiente soluta veniam alias ipsum cumque quibusdam praesentium harum delectus. Expedita, optio recusandae. Laudantium quam sunt in itaque? Maxime optio mollitia dolorum hic provident eius aspernatur. Similique animi facere maiores corrupti. Nulla itaque totam molestiae similique dicta dolores vel nostrum, tenetur illum illo incidunt magni cumque odio iusto nemo suscipit necessitatibus corporis, autem laborum nobis. Perferendis, quia at! Quia ratione consequuntur saepe repellat vel blanditiis explicabo rerum unde et commodi quae atque, totam consequatur doloremque eligendi, eaque exercitationem. Quae corporis temporibus doloremque veniam nisi!"
    },
    {
      id: 4,
      title: "Belarus davlat transport universiteti (BelSUT)",
      subtitle:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis',
      url: '/international/univer-4.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam, voluptatem iure animi impedit, pariatur facilis sapiente soluta veniam alias ipsum cumque quibusdam praesentium harum delectus. Expedita, optio recusandae. Laudantium quam sunt in itaque? Maxime optio mollitia dolorum hic provident eius aspernatur. Similique animi facere maiores corrupti. Nulla itaque totam molestiae similique dicta dolores vel nostrum, tenetur illum illo incidunt magni cumque odio iusto nemo suscipit necessitatibus corporis, autem laborum nobis. Perferendis, quia at! Quia ratione consequuntur saepe repellat vel blanditiis explicabo rerum unde et commodi quae atque, totam consequatur doloremque eligendi, eaque exercitationem. Quae corporis temporibus doloremque veniam nisi!"
    }
  ])
  return{
    currentPros
  }

}