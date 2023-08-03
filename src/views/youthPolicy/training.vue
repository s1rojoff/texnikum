<script setup lang="ts">
import BaseCardInfo from '@/components/BaseCardInfo/index.vue'
import { useTrainingPage } from '@/views/youthPolicy/composable'
import { useAboutStore } from '@/stores';
import { storeToRefs } from 'pinia';
const { trainings } = useTrainingPage()
const store: any = useAboutStore()
storeToRefs(store)

</script>
<template>
  <div
      class="bg-[url('/youthpolicy/training.png')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
    >
      <div class="mx-auto container top-2/3 text-start z-20">
        <p
          class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
        >
          To'garaklar va klublar
        </p>
      </div>
      <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
    </div>

    <div class="mx-auto container px-5 lg:px-24 mt-10">
      <BaseCardInfo
          v-for="(training, index) in trainings"
          :key="index"
          :id = "`${training.id}`"
          :cardData = "training"
          :showInfo = "store.visibleInfo"
          @expoInfo = "store.toggleInfo"
      />
    </div>
</template>