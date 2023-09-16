<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
const modules = [Autoplay, FreeMode, Pagination]
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
    class="bg-[url('/youthpolicy/galery.jpg')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
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
  <div class="mt-14 mx-auto container lg:px-24 px-5 2xl:px-5">
    <swiper 
    :slidesPerView="3"
    :spaceBetween="30"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide 
      class="mb-10"
      v-for="(item, index) in slides" 
      :key="index"
    >

      <img :src="item" alt="" class="select-none">
    </swiper-slide>
  </swiper>
  </div>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide{
  width: -400px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>