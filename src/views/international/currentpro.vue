<script lang="ts" setup>
import BaseCardInfo from '@/components/BaseCardInfo/index.vue'
import { useprojectsPage } from '@/views/international/composable'
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { currentPros } = useprojectsPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div
    class="bg-[url('/international/loyiha.webp')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Amaldagi loyihalar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="mx-auto container px-5 lg:px-24 mt-10">
    <BaseCardInfo
      class="mb-20"
      v-for="(currentPro, index) in currentPros"
      :key="index"
      :id="`${currentPro.id}`"
      :cardData="currentPro"
      :showInfo="store.visibleInfo"
      @expoInfo="store.toggleInfo"
    />
  </div>
</template>
<style></style>
