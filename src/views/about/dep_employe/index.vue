<script setup lang="ts">
import BaseSmallCard from '@/components/BaseSmallCard/index.vue'
import BaseDepartmentCard from '@/components/BaseDepartmentCard/index.vue'
import { useAboutStore } from '@/stores';
import {usedepEmploye} from '@/views/about/dep_employe/composable'
import { storeToRefs } from 'pinia'
const store: any = useAboutStore()
storeToRefs(store)

const {depEmployes, departments} = usedepEmploye()

</script>
<template>
  <div
    class="bg-[url('/about/employee.webp')] px-4  lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Bo'limlar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[2]"></div>
  </div>
  <div class="mx-auto container mt-16 px-5 2xl:px-5  lg:px-24">
    <div class=" flex flex-wrap justify-between  gap-y-10">
      <div v-for="(item, index) in depEmployes" :key="index">
        <BaseSmallCard :item-info="item" />
      </div>
    </div>
    <!-- <BaseDepartmentCard
      v-for="(department, index) in departments"
      :key="index"
      :cardData = "department"
      :showInfo="store.visibleInfo"
    /> -->
  </div>
</template>
