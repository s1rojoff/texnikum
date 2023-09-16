<script setup lang="ts">
import { useDepartment } from '@/views/about/departments/composable'
import BaseSmallPage from '@/components/BaseSmallCard/index.vue'
const { departments } = useDepartment()
</script>
<template>
  <div
    class="bg-[url('/about/teacher.webp')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Kafedralar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[2]"></div>
  </div>
  <div class="mx-auto 2xl:px-5 container px-4  mt-16 lg:px-24">
    <div class="flex justify-center  gap-5  flex-wrap">
      <div v-for="(item, index) in departments" :key="index">
        <BaseSmallPage :item-info="item" />
      </div>
    </div>
  </div>
</template>
