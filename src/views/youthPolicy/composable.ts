import { type Activities } from "@/interfaces";
import { type Trainings } from "@/interfaces";
import { ref } from "vue";
export function useNewsPage() {
  const activities = ref<Activities[]>([
    {
      id: 1,
      url: '/youthpolicy/new-1.jpg',
      title: "Yoshlar oyligi doirasida",
      subtitle: "#yoshlar_oyligi 📌 «Vatanparvar» tashkiloti bilan hamkorlikda turli sport musobaqalari tashkil etildi. ⚡️ Mamlakatimizda demokratik islohotlarni yanada chuqurlashtirish jarayonlarida yoshlarning faol ishtirokini ta’minlash, yuksak ma’naviyatli, mustaqil",
      date: "10.02.2023"
    },
    {
      id: 2,
      url: '/youthpolicy/new-2.jpg',
      title: "Yoshlar oyligi doirasida",
      subtitle: "#yoshlar_oyligi 📌 «Vatanparvar» tashkiloti bilan hamkorlikda turli sport musobaqalari tashkil etildi. ⚡️ Mamlakatimizda demokratik islohotlarni yanada chuqurlashtirish jarayonlarida yoshlarning faol ishtirokini ta’minlash, yuksak ma’naviyatli, mustaqil",
      date: "10.02.2023"
    },
    {
      id: 3,
      url: '/youthpolicy/new-3.jpg',
      title: "Yoshlar oyligi doirasida",
      subtitle: "#yoshlar_oyligi 📌 «Vatanparvar» tashkiloti bilan hamkorlikda turli sport musobaqalari tashkil etildi. ⚡️ Mamlakatimizda demokratik islohotlarni yanada chuqurlashtirish jarayonlarida yoshlarning faol ishtirokini ta’minlash, yuksak ma’naviyatli, mustaqil",
      date: "10.02.2023"
    }
  ])
// function addBgUrl(url: string) {
//   let text: string = `bg-[url(${url})]`;
//   let arr: string[] = text.split("");
//   arr.splice(arr.indexOf("(") + 1, 0, "'");
//   arr.splice(arr.indexOf(")"), 0, "'");
//   return arr.join("")
// }
  return {
    activities,
    // addBgUrl
  }
}
export function useTrainingPage() {
  const trainings = ref<Trainings[]>([
    {
      id: 1,
      title: "Shaxmat bo'yicha to'garak",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium itaque, doloribus fugit obcaecati expedita!",
      url: '/youthpolicy/chess.jpg',
      date: '10/10/2023',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, quidem accusamus doloremque nulla consequatur similique aspernatur veniam sit velit ab distinctio cumque laboriosam porro cum illo error repellat neque ex dicta, quod suscipit quisquam! Nam vitae pariatur nemo quibusdam."
    },
    {
      id: 1,
      title: "Kompyuter bo'yicha to'garak",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium itaque, doloribus fugit obcaecati expedita!",
      url: '/youthpolicy/computer.jpg',
      date: '10/10/2023',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, quidem accusamus doloremque nulla consequatur similique aspernatur veniam sit velit ab distinctio cumque laboriosam porro cum illo error repellat neque ex dicta, quod suscipit quisquam! Nam vitae pariatur nemo quibusdam."
    },
    {
      id: 1,
      title: "Boks bo'yicha to'garak",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium itaque, doloribus fugit obcaecati expedita!",
      url: '/youthpolicy/boks.webp',
      date: '10/10/2023',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, quidem accusamus doloremque nulla consequatur similique aspernatur veniam sit velit ab distinctio cumque laboriosam porro cum illo error repellat neque ex dicta, quod suscipit quisquam! Nam vitae pariatur nemo quibusdam."
    },
  ])
  return{
    trainings
  } 
}
