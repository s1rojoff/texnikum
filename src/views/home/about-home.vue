<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '@/assets/main.css'
import { EffectCards } from 'swiper';
const modules = [EffectCards]
const slides = ref(['/images/saida.png', '/images/header1.png', '/images/header.jpg'])
</script>
<template>
  <div class="container mx-auto lg:pr-24 lg:pl-20 lg:pt-28">
    <div class="flex w-full items-center gap-24 justify-between">
      <div class="w-1/2">
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="slide in slides" :key="slide">
            <img :src="slide" class="lg:w-[440px] lg:min-h-[440px]" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="w-1/2">
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
