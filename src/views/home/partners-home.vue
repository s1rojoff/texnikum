<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper';
const modules = [Autoplay, FreeMode, Pagination]

const partners = ref<string[]>([
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png',
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png'
])
</script>

<template>
  <div class="container 2xl:px-5 mx-auto lg:px-24 md:px-7 px-5 md:mt-36">
    <div class="flex justify-center lg:pb-10 pt-10">
      <span class="lg:text-3xl text-second text-2xl mb-4 lg:font-extrabold border-main text-center md:border-b-4 border-b-4">
        Hamkor Tashkilotlar
      </span>
    </div>

    <!-- <div class="overflow-scroll scrollbar-hide mt-10 ">
      <div class="flex items-center justify-between md:gap-4 gap-2 partners">
        <div v-for="(item, index) in partners" :key="index">
          <img class="md:w-32 md:h-32 h-20 w-20" :src="item" alt="" />
        </div>
      </div>
    </div> -->
    <swiper
      :slidesPerView="6"
      :spaceBetween="10"
      :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
      :freeMode="true"
      :pagination="{
      clickable: true,
      }" 
      :modules="modules"
      class="mySwiper ">
      <swiper-slide
        v-for="(partner, index) in partners"
        :key="index"
        class="pb-10 "
      >  
        <img
          :src="partner"
          class="select-none xl:w-[150px]">
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.partners {
  width: 2000px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .partners {
    width: 1500px;
  }
}

@media (max-width: 767px) {
  .partners {
    width: 1000px;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}
</style>
