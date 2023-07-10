<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue'
import { useAboutPage } from '@/views/about/composable'
const { managements } = useAboutPage()
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store: any = useAboutStore()
storeToRefs(store)

</script>

<template>
  <div
    class="bg-[url('/about/header-about.avif')] lg:px-24 bg-no-repeat w-full bg-center bg-cover h-[75vh]"
  >
    <div class="text-start top-2/3 ">
      <p class="text-4xl font-extrabold border-b-2 border-white text-white">Toshkent temir yo'l texnikumi</p>
      <p class="text-3xl font-bold text-white">Rahbariyati</p>
    </div>
  </div>
  <div class="mt-10 container mx-auto lg:px-24">
    <div>
      <BaseCard
        v-for="(management, index) in managements"
        :key="index"
        :id="`${management.id}`"
        :cardData="management"
        :showInfo="store.visibleInfo"
        @expInfo="store.toggleInfo"
      />
    </div>
  </div>
</template>
