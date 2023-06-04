<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
</script>
<template>
  <div class="w-full">
    <div class="absolute w-full z-10 top-0 left-0">
      <BaseHeader />
    </div>
    <div class="bg-[url('/images/header1.png')] relative bg-cover bg-center lg:w-full lg:h-screen">
      <div class="absolute bottom-10">
        <div class="relative py-7">
          <BaseIcon name="afrosiyob" class="absolute top-0 left-0" />
          <p class="text-white containe text-center text-xl lg:pl-32">
            Toshkent Temir Yo'l Texnikumi
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="relative">
    <div class="w-full -z-10 -top-96 overflow-x-hidden absolute">
      <BaseIcon class="left-[60%]" name="lightway" />
      <BaseIcon class="right-[15%]" name="lightway" />
    </div>
  </div>
  <div class="container mx-auto lg:px-24 lg:pt-28">
    <div class="flex items-center gap-24 justify-between">
      <img src="/images/saida.png" alt="" />
      <div>
        <p class="lg:text-2xl text-center font-extrabold text-main border-b-8 pb-4 border-main">
          Toshkent Temir Yo'l Texnikumi
        </p>
        <p class="lg:pt-12 lg:text-[23px]">
          2023-yil 18-yanvardan ta’limning kunduzgi shaklida tahsil oluvchi 1-, 2-, 3-kurs
          o‘quvchilari uchun nazariy va amaliy mashg‘ulotlar 1-semestr dars jadvali asosida
          boshlanadi. Sirtqi ta’lim shaklida tahsil oluvchi 1-, 2-kurs va dual ta’lim shaklida
          tahsil oluvchi 1-kurs o‘quvchilari uchun o‘qishning boshlanish vaqti to‘g‘risida alohida
          habar beriladi.
        </p>
      </div>
    </div>
  </div>
</template>
<style></style>
