<script lang="ts" setup>
import BaseCard from '@/components/BaseCard/index.vue'
import { useAboutPage } from './composable'
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { department } = useAboutPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div
    class="bg-[url('/international/international.jpg')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
  <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Bo'lim haqida
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <!-- card -->
  <div class="mx-auto container lg:px-24 2xl:px-5 px-5">
    <div class="mt-10">
      <div>
        <BaseCard :cardData="department" />
      </div>
    </div>
    <!-- information about international department  -->
    <div class="mx-auto container pt-5 sm:pt-10 md:pt-15 lg:pt-20">
      <div>
        <p class="text-center sm:text-4xl font-light mb-7 lg:text-5xl text-2xl text-black">Bo'lim haqida ma'lumot</p>
      </div>
      <div class="flex-wrap justify-center">
        <div class="">
          <p class="text-lg lg:text-xl 2xl:text-2xl"> &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia illo voluptatem assumenda eaque, asperiores maxime expedita in voluptates! Ut aperiam quos maiores aliquid omnis, voluptas ratione optio voluptatem nulla adipisci odio! Veritatis repellendus omnis quia nobis aperiam, nostrum possimus hic voluptatibus, quidem adipisci quo repudiandae nihil dolorum impedit amet.</p>
        </div>
      </div>
    </div>
  </div>
</template>