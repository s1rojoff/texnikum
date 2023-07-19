<script setup lang="ts">
import { useDivision } from '@/views/about/division/composable'
import BaseSmallPage from '@/components/BaseSmallCard/index.vue'
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
      Bo'linmalar
      </p>
    </div>
  </div>

  <div class="mx-auto container mt-16 lg:px-24">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(item, index) in devisions" :key="index">
        <BaseSmallPage :item-info="item" />
      </div>
    </div>
  </div>
</template>
