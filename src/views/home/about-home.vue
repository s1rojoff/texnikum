<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '@/assets/main.css'
import { EffectCards } from 'swiper'
const modules = [EffectCards]
const slides = ref(['/images/saida.png', '/images/header1.png', '/images/header.jpg'])
</script>
<template>
  <div class="container overflow-hidden mx-auto lg:px-24 px-5 md:px-7 lg:pt-28 pt-10">
    <div class="grid md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-16 ">
      <div class="">
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="slide in slides" :key="slide">
            <img :src="slide" class="w-full min-h-full bg-contain" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="mt-7 md:mt-0">
        <div class="text-center">
          <span
            class="lg:text-2xl md:text-[17px] text-center font-extrabold text-second border-b-2 lg:pb-4 md:pb-2 pb-1 border-main"
          >
            Toshkent Temir Yo'l Texnikumi
          </span>
        </div>
        <p class="lg:pt-12 md:pt-7 pt-3 text-center md:text-start lg:text-xl md:text-[13px] lg:font-medium">
          O’rta maxsus, kasb-hunar ta’limi Davlat ta’lim standartlari asosida o’quv, o’quv-uslubiy
          va o’quv-amaliy ishlarni tashkil etish, yosh pedagog kadrlarga o’quv-metodik yordam
          ko’rsatish, katta tajribaga ega bo’lgan pedagoglarning ish tajribalarini umumlashtirish va
          ommalashtirish, fan yo’nalishi bo’yicha mos bo’lgan oliy ta’lim muassasalari kafedralari
          va ishlab chikarish korxonalari bilan sifatli kadrlarni tayyorlash sohasida hamkorlik
          o’rnatish maqsadida kolejj direktori va o’quv ishlari buyicha direktor o’rinbosariga
        </p>
      </div>
    </div>
  </div>
</template>
