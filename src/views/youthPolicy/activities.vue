<script setup lang="ts">
import { useNewsPage } from '@/views/youthPolicy/composable'
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { activities } = useNewsPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>
<template>
  <div 
    class="bg-[url('/youthpolicy/madaniy.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh] relative"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Ma'daniy va ma'rifiy tadbirlar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="container mx-auto lg:px-24 px-4 mt-12"
    v-for="(activity, index) in activities"
    :key="index"
  >
    <p class="text-center sm:text-4xl font-light text-2xl text-black">{{ activity.title }}</p>
    <div class="md:flex-nowrap flex items-center justify-around gap-10 flex-wrap mt-7">
      
        <img class="mb-6 md:mb-0 rounded-md w-full h-full object-cover md:w-1/3   shadow-lg shadow-black " :src="activity.url" alt="" />
      
      <div class="md:w-1/2">
        <p class="font-medium text-black text-xl">
          &nbsp; &nbsp; &nbsp; {{ activity.subtitle }}
        </p>
      </div>
    </div>
  </div>

</template>