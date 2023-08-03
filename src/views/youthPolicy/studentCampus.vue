<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
const modules = [EffectCoverflow, Pagination]
</script>
  
<template>
  <div
    class="bg-[url('/youthpolicy/campus.avif')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Talabalar shaharchasi
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div>
    <div class="mt-6 mx-auto px-4 lg:px-24 container">
    <p class="text-center sm:text-4xl font-light text-2xl text-black">Talabalar shaharchasi haqida ma'lumot</p>
    <p class="mt-6 font-light text-black text-xl ">
      “O‘zbekiston temir yo‘llari” aksiyadorlik jamiyati tizimidagi korxona va ta’lim muassasalarini bozor iqtisodiyoti talablari va temir yo‘l tarmog‘ini ijtimoiy-iqtisodiy rivojlantirish istiqbollariga javob beradigan mutaxassislar va ilmiy-pedagogik kadrlar bilan ta’minlash maqsadida nomzodlar Maqsadli kadrlar tayyorlash uchun tanlangan kadrlar Rossiya Federatsiyasi va Belarus Respublikasining ta'lim muassasalariga iqtisodiyot, fan, texnika va ilg'or texnologiyalarning zamonaviy yutuqlari asoslarini o'rgatishga yuboriladi.
    </p>
  </div>
  </div>
  <div class="mt-11 mx-auto px-4 lg:px-24 container">
    <div>
      <p class="text-center sm:text-4xl font-light text-2xl text-black mb-11">Foto Galereya</p>
    </div>
    <div>
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
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]"
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img class="w-[300px] h-[300px]" src="https://swiperjs.com/demos/images/nature-9.jpg"
    /></swiper-slide>
  </swiper>
    </div>
  </div>
</template>
<style scoped>
  #app { height: 100% }
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