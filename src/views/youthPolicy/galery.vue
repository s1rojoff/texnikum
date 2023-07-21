<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper'
const modules = [EffectCoverflow, Pagination]
const slides = ref([
  '/youthpolicy/boks.webp',
  '/youthpolicy/chess.jpg',
  '/youthpolicy/computer.jpg',
  '/youthpolicy/new-1.jpg',
  '/youthpolicy/new-2.jpg',
  '/youthpolicy/new-3.jpg'
])
</script>
<template>
  <div
    class="bg-[url('/youthpolicy/galery.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Talabalar hayotidan fotogalereya
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="mt-11">
    <p class="text-center sm:text-4xl font-light text-2xl text-black">Foto Galereya</p>
  </div>
  <div>
    
  </div>
  <div class="mt-14 mx-auto container lg:px-24 px-4">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="slide in slides" :key="slide">
        <img class="object-cover w-[300px] h-[300px] select-none" :src="slide" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>