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
  <div class="w-full">
    <div class="fixed w-full z-10 top-0 left-0">
      <BaseHeader />
    </div>
  </div>
  <div class="relative overflow-hidden">
      <video class="absolute w-full" muted autoplay loop>
        <source class="min-h-screen min-w-screen" src="/videos/header1.mp4" type="video/mp4" />
      </video>
      <div class="bg-main opacity-50 w-screen h-screen"></div>
    </div>
  <div class="relative">
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
