<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
const modules = [Autoplay, FreeMode, Pagination]
const stundets = ref<string[]> ([
  '/students/1.jpg',
  '/students/2.jpg',
  '/students/3.jpg',
  '/students/4.jpg',
  '/students/5.jpg',
  '/students/6.jpg',
  '/students/7.jpg'
])
</script>
  
<template>
  <div
    class="bg-[url('/youthpolicy/campus.avif')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Talabalar shaharchasi
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div>
    <div class="mt-6 mx-auto px-5 2xl:px-5 lg:px-24 container">
    <p class="text-center sm:text-4xl font-light text-2xl 2xl:text-5xl text-black">Talabalar shaharchasi haqida ma'lumot</p>
    <p class="mt-6 font-light 2xl:text-2xl text-black text-xl ">
      “O‘zbekiston temir yo‘llari” aksiyadorlik jamiyati tizimidagi korxona va ta’lim muassasalarini bozor iqtisodiyoti talablari va temir yo‘l tarmog‘ini ijtimoiy-iqtisodiy rivojlantirish istiqbollariga javob beradigan mutaxassislar va ilmiy-pedagogik kadrlar bilan ta’minlash maqsadida nomzodlar Maqsadli kadrlar tayyorlash uchun tanlangan kadrlar Rossiya Federatsiyasi va Belarus Respublikasining ta'lim muassasalariga iqtisodiyot, fan, texnika va ilg'or texnologiyalarning zamonaviy yutuqlari asoslarini o'rgatishga yuboriladi.
    </p>
  </div>
  </div>
  <div class="mt-11 mx-auto px-5 lg:px-24 2xl:px-5 container">
    <div>
      <p class="text-center sm:text-4xl font-light text-2xl text-black mb-11">Foto Galereya</p>
    </div>
    <div>
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
      v-for="(item, index) in stundets" 
      :key="index"
    >

      <img :src="item" alt="" class="select-none">
    </swiper-slide>
  </swiper>
    </div>
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