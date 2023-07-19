import { type Activities } from "@/interfaces";
import { ref } from "vue";
export function useNewsPage() {
  const activities = ref<Activities[]>([
    {
      id: 1,
      url: '/youthpolicy/girls.jpg',
      title: "Yoshlar oyligi doirasida",
      subtitle: "#yoshlar_oyligi 📌 «Vatanparvar» tashkiloti bilan hamkorlikda turli sport musobaqalari tashkil etildi. ⚡️ Mamlakatimizda demokratik islohotlarni yanada chuqurlashtirish jarayonlarida yoshlarning faol ishtirokini ta’minlash, yuksak ma’naviyatli, mustaqil",
      date: "10.02.2023"
    },
    {
      id: 2,
      url: '/youthpolicy/girls.jpg',
      title: "Yoshlar oyligi doirasida",
      subtitle: "#yoshlar_oyligi 📌 «Vatanparvar» tashkiloti bilan hamkorlikda turli sport musobaqalari tashkil etildi. ⚡️ Mamlakatimizda demokratik islohotlarni yanada chuqurlashtirish jarayonlarida yoshlarning faol ishtirokini ta’minlash, yuksak ma’naviyatli, mustaqil",
      date: "10.02.2023"
    },
    {
      id: 3,
      url: '/youthpolicy/ff.png',
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