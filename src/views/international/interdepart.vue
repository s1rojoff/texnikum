<script lang="ts" setup>
import BaseCard from '@/components/BaseCard/index.vue'
import { useAboutPage } from './composable'
const { Department } = useAboutPage()
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div
    class="bg-[url('/international/international.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="text-start top-2/3 mx-auto container">
      <p
        class="sm:text-5xl font-medium text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-4 text-3xl"
      >
        Xalqaro aloqalar
      </p>
      <p class="sm:text-4xl font-light text-2xl text-white">Bo'lim haqida</p>
    </div>
  </div>
  <!-- card -->
  <div class="mx-auto container">
    <div class="mt-10 container mx-auto lg:px-24">
      <div>
        <BaseCard :cardData="Department[0]" />
      </div>
    </div>
    <!-- information about international department  -->
    <div class="mx-auto container pt-5 sm:pt-10 md:pt-15 lg:pt-20">
      <div>
        <p class="text-center sm:text-4xl font-light text-2xl text-black">Bo'lim haqida ma'lumot</p>
      </div>
      <div class="flex-wrap justify-center px-24">
        <div class="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia illo voluptatem assumenda eaque, asperiores maxime expedita in voluptates! Ut aperiam quos maiores aliquid omnis, voluptas ratione optio voluptatem nulla adipisci odio! Veritatis repellendus omnis quia nobis aperiam, nostrum possimus hic voluptatibus, quidem adipisci quo repudiandae nihil dolorum impedit amet.</p>
        </div>
      </div>
    </div>
  </div>
</template>