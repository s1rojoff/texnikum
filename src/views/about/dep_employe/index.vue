<script setup lang="ts">
import BaseSmallCard from '@/components/BaseSmallCard/index.vue'
import {usedepEmploye} from '@/views/about/dep_employe/composable'
const {depEmployes} = usedepEmploye()

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
      <p class="sm:text-4xl font-light text-2xl text-white">Bo'limlari</p>
    </div>
  </div>
  <div class="mx-auto container mt-16 lg:px-24">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(item, index) in depEmployes" :key="index">
        <BaseSmallCard :item-info="item" />
      </div>
    </div>
  </div>
</template>
