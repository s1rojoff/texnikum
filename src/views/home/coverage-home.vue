<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
</script>

<template>
    <div class="relative">
    <div class="w-full -z-10 -top-96 md:hidden ld:block overflow-x-hidden absolute">
      <BaseIcon class="left-3/4 w-1/2" name="lightway" />
      <BaseIcon class="w-1/2 lg:-top-32 2xl:-top-28" name="lightway" />
    </div>
  </div>
  <div class="mx-auto container lg:px-24 md:px-7 lg:mt-3 md:mt-20">
    <div class="flex justify-center lg:pb-14">
      <span
        class="lg:text-3xl text-second lg:font-extrabold border-main text-center border-b-8 pb-1"
      >
        Texnikum qamrovi
      </span>
    </div>
    <div class="lg:grid lg:grid-cols-2 md:px-7 md:grid-cols-1 lg:gap-16">
      <div class="">
        <BaseIcon class="text-white" name="uzbekistan" />
        <div class="md:w-56 bg-white h-auto py-2 px-4 border-main border rounded-lg">
        <p class="text-center font-extrabold lg:text-lg">Qoraqalpog'iston</p>
        <p class="">O'g'il bolalar: 2387</p>
        <p class="">Qiz bolalar: 1892</p>
        </div>
      </div>
      <div>
        <div class="flex justify-center md:mt-12 lg:mt-0">
          <span class="lg:text-2xl md:text-3xl md:font-extrabold text-center border-b-2 border-main lg:pb-6">
          Qabul komissiyasi haqida ma'lumot
        </span>
        </div>
        <p class="lg:font-medium lg:text-xl md:pt-10">
          Agar siz o'zingizni veb-sahifalarni yaratishga bag'ishlasangiz yoki uni shablonlar orqali
          yaratgan bo'lsangiz, uni oldindan ko'rishda deyarli barcha hollarda bir xil bo'lgan asosiy
          matndan foydalanilganligini sezgan bo'lasiz. Lorem Ipsum. Lorem Ipsum generatori yordamida
          yaratilgan ushbu narsa, aslida siz o'ylagandan ham muhimroq. Yo'q, bu mantiqiy bo'lmagan
          so'zlar qatori emas. Batafsil
        </p>
      </div>
    </div>
  </div>
</template>
