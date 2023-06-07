<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
import AboutHome from '@/views/home/about-home.vue'
import MediaHome from '@/views/home/media-home.vue'
</script>
<template>
  <div class="w-full">
    <div class="fixed w-full z-10 top-0 left-0">
      <BaseHeader />
    </div>
    <div class="bg-[url('/images/header1.png')] relative bg-cover bg-center lg:w-full lg:h-screen">
      <div class="absolute bottom-10">
        <div class="relative py-7">
          <BaseIcon name="afrosiyob" class="absolute top-0 left-0" />
          <p class="text-white containe text-center text-xl lg:pl-32">
            Toshkent Temir Yo'l Texnikumi
          </p>
        </div>
      </div>
    </div>
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
  </div>
</template>
<style></style>
