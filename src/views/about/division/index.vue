<script setup lang="ts">
import { useDivision } from '@/views/about/division/composable'
const { devisions } = useDivision()
</script>

<template>
  <div
    class="bg-[url('/about/header-about.avif')] lg:px-24 bg-no-repeat w-full bg-center bg-cover h-[75vh]"
  >
    <div class="text-start top-2/3">
      <p
        class="sm:text-5xl font-medium text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-4 text-3xl"
      >
        Toshkent temir yo'l texnikumi
      </p>
      <p class="sm:text-4xl font-light text-2xl text-white">Bo'linmalari</p>
    </div>
  </div>

  <div class="mx-auto container mt-16 lg:px-24">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(item, index) in devisions" :key="index">
        <router-link :to="item.path">
          <div class="relative rounded-lg overflow-hidden cursor-pointer h-64 w-full">
            <img
              :src="item.url"
              class="bg-contain w-full h-full bg-center hover:scale-110 transition"
              alt=""
            />
            <div class="absolute w-full py-1 pl-3 bottom-0 bg-main">
              <p class="text-white text-[15px]">{{ item.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
