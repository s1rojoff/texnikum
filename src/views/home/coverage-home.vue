<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
</script>

<template>
    <div class="relative">
    <div class="w-full -z-10 -top-96 overflow-x-hidden absolute">
      <BaseIcon class="left-3/4 w-1/2" name="lightway" />
      <BaseIcon class="w-1/2 -top-32" name="lightway" />
    </div>
  </div>
  <div class="mx-auto container lg:px-24 lg:mt-32">
    <div class="flex justify-center lg:pb-14">
      <span
        class="lg:text-3xl text-second lg:font-extrabold border-main text-center border-b-8 pb-1"
      >
        Texnikum qamrovi
      </span>
    </div>
    <div class="grid grid-cols-2 lg:gap-16">
      <div class="">
        <BaseIcon class="text-white" name="uzbekistan" />
        <div class="lg:w-56 h-auto lg:py-2 lg:px-4 border-main border rounded-lg">
        <p class="text-center lg:font-medium lg:text-lg">Qoraqalpog'iston</p>
        <p class="">O'g'il bolalar: 2387</p>
        <p class="">Qiz bolalar: 1892</p>
        </div>
      </div>
      <div class="">
        <span class="lg:font-extrabold lg:text-2xl text-center border-b-2 border-main lg:pb-6">
          Qabul komissiyasi haqida ma'lumot
        </span>
        <p class="lg:font-medium lg:text-xl lg:pt-10">
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
