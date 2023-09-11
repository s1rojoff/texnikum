<script setup lang="ts">
import { useDivision } from '@/views/about/division/composable'
// import BaseSmallPage from '@/components/BaseSmallCard/index.vue'
import BaseDepartmentCard from '@/components/BaseDepartmentCard/index.vue'
import { storeToRefs } from 'pinia'
import { useAboutStore } from '@/stores';
const store: any = useAboutStore()
storeToRefs(store)
const { devisions, bosses } = useDivision()
</script>

<template>
 <div
    class="bg-[url('/about/depart.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl lg:px-24 2xl:px-5 font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Bo'linmalar
      </p>
    </div>
    <div class="bg-opacityColor lg:px-24 2xl:px-5 px-5 absolute w-full h-full top-0 left-0 z-[2]"></div>
  </div>

  <div class="mx-auto container 2xl:px-5  mt-16 px-5 lg:px-24">
    <div class=" gap-5 flex flex-wrap justify-center">
      <!-- <div 
        v-for="(item, index) in devisions" 
        :key="index"
        >
        <BaseSmallPage :item-info="item" />
      </div> -->
      <BaseDepartmentCard 
        v-for="(boss, index) in bosses"
        :key="index"
        :cardData = "boss" 
        :showInfo="store.visibleInfo"
      />
    </div>
  </div>
</template>
