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
  <div class="container mx-auto lg:px-24 lg:pt-28">
    <div class="flex w-full items-center gap-24 justify-between">
      <div class="w-1/2">
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="slide in slides" :key="slide">
            <img :src="slide" class="lg:w-[440px] lg:min-h-[440px]" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="w-1/2">
        <div class="text-center">
          <span
            class="lg:text-2xl text-center font-extrabold text-main border-b-8 pb-4 border-main"
          >
            Toshkent Temir Yo'l Texnikumi
          </span>
        </div>
        <p class="lg:pt-12 lg:text-[20px] lg:font-medium">
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
