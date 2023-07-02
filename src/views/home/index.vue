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
  <div class="sticky z-20 top-0">
    <div class="">
      <BaseHeader />
    </div>
  </div>
  <div class="h-auto overflow-hidden">
    <div class="h-auto lg:h-[75vh]">
      <video src="/videos/header1.mp4" type="video/mp4" class="w-screen" muted autoplay loop>

      </video>
    </div>
    <!-- <div class="bg-main absolute opacity-50 w-screen h-screen z-50"></div> -->
    <div class="md:bottom-5 bottom-0  absolute left-0">
      <BaseIcon class="w-full md:h-24 h-16 text-main" name="afrosiyob" />
      <p
        class="absolute text-sm md:text-lg top-[20%] tracking-wider pl-5 lg:pl-32 text-white z-[1] lg:text-lg"
      >
        "O'zbekiston Temir Yo'llari" AJ <br />Toshkent Temir Yo'l Texnikumi
      </p>
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
