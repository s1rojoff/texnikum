<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
import AboutHome from '@/views/home/about-home.vue'
import MediaHome from '@/views/home/media-home.vue'
import CoverageHome from '@/views/home/coverage-home.vue'
import ConnectHome from '@/views/home/connect-home.vue'
import PartnersHome from '@/views/home/partners-home.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
</script>
<template>
  <div class="">
    <div class="fixed w-full z-10 top-0 left-0">
      <BaseHeader />
    </div>
  </div>
  <div class="pt-10 mt-5 h-auto  overflow-hidden">
    <video class=" w-full" muted autoplay loop>
      <source class="min-w-screen" src="/videos/header2.mp4" type="video/mp4" />
    </video>
    <!-- <div class="bg-main absolute opacity-50 w-screen h-screen z-50"></div> -->
    <div class=" md:bottom-5  bottom-0 absolute left-0">
      <BaseIcon class="w-full md:h-24 h-16 text-main" name="afrosiyob" />
      <p class="absolute text-sm md:text-lg top-[20%] tracking-wider pl-5 lg:pl-32 text-white z-[1] lg:text-lg">
        "O'zbekiston Temir Yo'llari" AJ  <br>Toshkent Temir Yo'l Texnikumi</p>
    </div>
  </div>
  

  <div class="relative hidden md:block">
    <div class="w-full -z-10 -top-96 overflow-x-hidden absolute">
      <BaseIcon class="left-[60%]" name="lightway" />
      <BaseIcon class="right-[15%]" name="lightway" />
    </div>
  </div>
  <div>
    <about-home />
    <media-home />
    <coverage-home />
    <connect-home />
    <partners-home />
    <base-footer />
  </div>
</template>
<style></style>
