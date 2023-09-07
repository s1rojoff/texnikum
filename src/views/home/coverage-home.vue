<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
import uzbekistan from '@/views/home/uzbekistan.vue'
import { ref } from 'vue'
const regionInfo = ref<{ region: string; name: string; boy: number; girl: number }>({
  region: '',
  name: "O'zbekiston",
  boy: 0,
  girl: 0
})
const isVisible = ref<boolean>(false)
function getRegionInfoFn(region: any) {
  isVisible.value = true
  regionInfo.value = region
}
const tooltip = ref<any>()
function getPosition(valX:any, valY:any){
  tooltip.value.style.top = `${valY- 100}px`
  tooltip.value.style.left = `${valX}px`
}
function hideNotice(){
  isVisible.value = false
}
</script>

<template>
  <div class="relative">
    <div class="w-full -z-10 -top-96 hidden lg:block overflow-x-hidden absolute">
      <BaseIcon class="left-3/4 w-1/2" name="lightway" />
      <BaseIcon class="w-1/2 lg:-top-32 2xl:-top-28" name="lightway" />
    </div>
  </div>
  <div class="mx-auto 2xl:px-0 container lg:px-24 md:px-7 px-5 lg:mt-3 md:mt-20">
    <div class="flex justify-center lg:pb-10 pt-10">
      <span
        class="lg:text-3xl text-second text-2xl 2xl:text-4xl lg:font-extrabold border-main text-center md:border-b-8 border-b-4"
      >
        Texnikum qamrovi
      </span>
    </div>
    <div class="grid lg:grid-cols-2 md:px-7 grid-cols-1 lg:gap-16">
      <div class="">
        <uzbekistan class="text-white w-full" @getRegion="getRegionInfoFn" @leavePath="hideNotice" @getElementPosition="getPosition"/>
        <div ref="tooltip" v-if="isVisible" class="w-56 absolute z-10 bg-white h-auto py-2 px-4 border-main border rounded-lg">
          <p class="text-start font-extrabold lg:text-base">{{ regionInfo.name }}</p>
          <p class="text-sm md:text-base">O'g'il bolalar: {{ regionInfo.boy }}</p>
          <p class="text-sm md:text-base">Qiz bolalar: {{ regionInfo.girl }}</p>
        </div>
      </div>
      <div>
        <div class="flex justify-center md:mt-12 lg:mt-0">
          <span
            class="md:text-2xl  md:font-extrabold text-lg font-semibold text-center border-b-2 pt-5 border-main lg:pb-6"
          >
            Qabul komissiyasi haqida ma'lumot
          </span>
        </div>
        <p
          class="lg:font-medium 2xl:text-2xl lg:text-xl text-sm md:text-base text-center md:text-start md:pt-5 pt-3"
        >
          Agar siz o'zingizni veb-sahifalarni yaratishga bag'ishlasangiz yoki uni shablonlar orqali
          yaratgan bo'lsangiz, uni oldindan ko'rishda deyarli barcha hollarda bir xil bo'lgan asosiy
          matndan foydalanilganligini sezgan bo'lasiz. Lorem Ipsum. Lorem Ipsum generatori yordamida
          yaratilgan ushbu narsa, aslida siz o'ylagandan ham muhimroq. Yo'q, bu mantiqiy bo'lmagan
          so'zlar qatori
        </p>
      </div>
    </div>
  </div>
</template>
