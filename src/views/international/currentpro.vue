
<script lang="ts" setup>
import BaseCardInfo from '@/components/BaseCardInfo/index.vue';
import { useprojectsPage } from '@/views/international/composable';
import { useAboutStore } from '@/stores';
import { storeToRefs } from 'pinia';
const { currentPros } = useprojectsPage()
const  store: any = useAboutStore()
  storeToRefs(store)

</script>

<template >
  <div
    class="bg-[url('/international/international.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="text-start top-2/3 mx-auto container">
      <p
        class="sm:text-5xl font-medium text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-4 text-3xl"
      >
        Xalqaro aloqalar
      </p>
      <p class="sm:text-4xl font-light text-2xl text-white">Amaldagi loyihalar</p>
    </div>
  </div>
  <div class="mx-auto container px-5 lg:px-24 mt-10">
    <BaseCardInfo
    class="mb-20"
      v-for="( currentPro, index) in currentPros"
      :key="index"
      :id="`${currentPro.id}`"
      :cardData = "currentPro"
      :showInfo = "store.visibleInfo"
      @expoInfo = "store.toggleInfo"
    />
  </div>
</template>
<style>
</style>
