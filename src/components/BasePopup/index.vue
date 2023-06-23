<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
const emits= defineEmits(['closePopup'])
const props = defineProps({
  modal: {
    type: Boolean,
    required: true,
    default: true,
  },
});
</script>
<template>
  <div v-if="props.modal">
    <div @click="$emit('closePopup')" class="fixed z-30 top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
    <div class="fixed z-40 top-0 w-full">
      <div class="w-1/2 h-[80vh] left-1/4 py-4 px-6 top-[10vh] rounded-lg bg-white">
        <div class="flex justify-between">
          <p class="text-xl text-main font-semibold text-center">
            Mavlanov Axmadjаn Xakimjanovichvich
          </p>
          <BaseIcon class="w-3.5 h-3.5 cursor-pointer text-main" name="close" @click="$emit('closePopup')" />
        </div>
        <div class="mt-5 h-[65vh] overflow-y-scroll">
          <img
            src="/rahbariyat/direktor.png"
            class="w-[170px] h-40 float-left pr-3"
            alt=""
            style=""
          />
          <div class="mt-5">
            <p class="text-center text-xl text-main font-semibold">Ish tajribasi</p>
            <p class="mt-1">
              2023-yil 07-yanvar kuni texnikum faollar zalida Oliy ta’lim, Fan va
              innovatsiyalar vazirligining Pedagogik innovatsiyalar instituti,
              Professional ta’limni innovatsion rivojlantirish boshqarmasi bosh
              mutaxassisi Raimjanov Xosiljon, Pedagogik innovatsiyalar instituti
              “WorldSkills”, dual ta’lim va o‘quv amaliyotlarini metodik ta’minlash bo‘lim
              boshlig‘i Madjitov Abdumalik Abdug‘anievich, Pedagogik innovatsiyalar
              instituti, Persanalni boshqarish kafedrasi katta o‘qituvchisi Roziqova
              Nazokat Alisher qizi, Sergeli tuman kasb-hunar maktabi ishlab chiqarish
              bo‘yicha direktor o‘rinbosari Xudoynazarov Ilyos Qayumovich, Sergeli tuman
              kasb-hunar maktabi o‘quv ishlari bo‘yicha direktor o‘rinbosari Bozorov
              Muhiddin O‘razboyevichlar ishtirokida seminar-trening tashkil etildi.
              Seminar-treningda Innorivojlantirish boshqarmasi bosh mutaxassisi Raimjanov
              Xosiljon, Pedagogik innovatsiyalar instituti “WorldSkills”, dual ta’lim va
              o‘quv amaliyotlarini metodik ta’minlash bo‘lim boshlig‘i Madjitov Abdumalik
              Abdug‘anievich, Pedagogik innovatsiyalar instituti, Persanalni boshqarish
              kafedrasi katta o‘qituvchisi Roziqova Nazokat Alisher qizi, Sergeli tuman
              kasb-hunar maktabi ishlab chiqarish bo‘yicha direktor o‘rinbosari
              Xudoynazarov Ilyos Qayumovich, Sergeli tuman kasb-hunar maktabi o‘quv
              ishlari bo‘yicha direktor o‘rinbosari Bozorov Muhiddin O‘razboyevichlar
              ishtirokida seminar-trening tashkil etildi. Seminar-treningda Innovatsion
              pedagogik texnоlogiyalardan foydalanish, Dual ta’lim tizimini o‘quv
              jarayonigavatsion pedagogik texnоlogiyalardan foydalanish, Dual ta’lim
              tizimini o‘quv jarayoniga joriy qilish bosqichlari, O‘quv jarayonini
              zamonaviy tashkil etish shakl va usullari, “Professional ta’lim muassasalari
              uchun o‘qitish materiallari to‘plamlarini yaratishni tashkil etish”
              to‘risidagi 465-son buyruq ijrosini ta’minlash
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
