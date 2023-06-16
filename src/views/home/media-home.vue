<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '@/assets/main.css'
import { EffectCards } from 'swiper'
const modules = [EffectCards]
const slides = ref(['/images/media1.png', '/images/media2.png', '/images/media1.png', '/images/media2.png','/images/media1.png'])
</script>

<template>
  <div class="container lg:px-24 md:px-7 px-5 mx-auto md:mt-20 mt-10 lg:mt-40">
    <div class="flex justify-center lg:pb-10">
      <span
        class="lg:text-3xl text-second text-2xl lg:font-extrabold border-main text-center md:border-b-8 border-b-4"
      >
        Mediateka
      </span>
    </div>
    <div class="hidden md:block">
      <div class="lg:block hidden">
        <div class="lg:flex lg:justify-between lg:items-center lg:gap-11">
          <div class="lg:rounded-[30px] lg:w-[320px] overflow-hidden cursor-pointer lg:h-[300px]">
            <img
              src="/images/media1.png"
              class="lg:rounded-[30px] hover:scale-110 transition lg:w-[320px] lg:h-[300px]"
              alt=""
            />
          </div>
          <div class="lg:rounded-[30px] lg:w-[320px] overflow-hidden cursor-pointer lg:h-[300px]">
            <img
              src="/images/media2.png"
              class="lg:rounded-[30px] hover:scale-110 transition lg:w-[320px] lg:h-[300px]"
              alt=""
            />
          </div>
          <div class="lg:w-1/3">
            <span class="font-semibold text-second text-2xl border-main border-b-2 pb-1"
              >Temir Yo'l texnikumi</span
            >
            <p class="text-xl lg:mt-4 font-medium">
              Toshkent temir yo’l texnikumi sifatida 1932 yilda tashkil topgan. O’zbekiston
              Respublikasi o’rta maxsus, kasb-hunar ta’limi Markazining 2004 yil 27 yanvardagi №
              16-sonli va “O’zbekiston temir yo’llari” Davlat aksiyadorlik jamiyatining 2004 yil 16
              fevraldagi №49-N sonli buyruqlari
            </p>
          </div>
        </div>
        <div class="lg:flex lg:justify-between lg:items-center mt-5 w-full lg:gap-11">
          <div class="lg:w-1/3">
            <span class="font-semibold text-second text-2xl border-main border-b-2 pb-1"
              >Temir Yo'l texnikumi</span
            >
            <p class="lg:text-xl lg:mt-4 font-medium">
              Toshkent temir yo’l texnikumi sifatida 1932 yilda tashkil topgan. O’zbekiston
              Respublikasi o’rta maxsus, kasb-hunar ta’limi Markazining 2004 yil 27 yanvardagi №
              16-sonli va “O’zbekiston temir yo’llari” Davlat aksiyadorlik jamiyatining 2004 yil 16
              fevraldagi №49-N sonli buyruqlari
            </p>
          </div>
          <div class="lg:rounded-[30px] lg:w-[320px] overflow-hidden cursor-pointer lg:h-[300px]">
            <img
              src="/images/media1.png"
              class="lg:rounded-[30px] hover:scale-110 transition lg:w-[320px] lg:h-[300px]"
              alt=""
            />
          </div>
          <div class="lg:rounded-[30px] lg:w-[320px] overflow-hidden cursor-pointer lg:h-[300px]">
            <img
              src="/images/media2.png"
              class="lg:rounded-[30px] hover:scale-110 transition lg:w-[320px] lg:h-[300px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="block lg:hidden md:mt-7">
        <div class="grid grid-cols-2 gap-10">
          <img src="/images/media1.png" alt="" />
          <img src="/images/media2.png" alt="" />
        </div>
        <div class="grid grid-cols-3 gap-6 mt-9">
          <img src="/images/media1.png" alt="" />
          <img src="/images/media2.png" alt="" />
          <img src="/images/media2.png" alt="" />
        </div>
      </div>
    </div>
    <div class="block md:hidden mt-7">
      <div class="w-full">
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="slide in slides" :key="slide">
            <img :src="slide" class="w-full min-h-full bg-contain" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
