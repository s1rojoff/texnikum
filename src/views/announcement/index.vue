<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import { useAboutStore } from '@/stores'
import BaseNewsCard from '@/components/BaseNewsCard/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import { useAnnouncementFn } from '@/views/announcement/composable'
const {newsData} = useAnnouncementFn()
const store= useAboutStore()
storeToRefs(store)
const categories = ['Barchasi', 'Jamiyat', 'Sport', 'Texnikum', 'Rahbariyat']
</script>

<template>
  <div class="sticky top-0 z-40">
    <BaseHeader />
  </div>
  <div
    class="bg-[url('/images/news.png')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh] relative"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Yangiliklar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="container mx-auto px-4 lg:px-24 mt-10">
    <div class="flex flex-wrap sm:flex-nowrap items-start gap-5">
      <div class=" flex sm:w-3/4 w-full gap-x-5 flex-wrap gap-y-5 order-2">
        <BaseNewsCard v-for="(item, index) in newsData" :key="index" :news-data="item"/>
      </div>
      <div class="sm:w-1/4 w-full order-1">
      <BaseInput placeholder="Search for" size="sm" type="search" />
        <p class="text-main text-start text-lg mt-5 font-medium">Kategoriyalar</p>
        <p class="border-b first:mt-2 custom-transition text-sm border-main py-3 cursor-pointer hover:pl-4 pl-2 transition hover:bg-slate-200" v-for="item in categories" :key="item">{{ item }}</p>
      </div>
    </div>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>

<style scoped>
.select-category {
  @apply border-none w-48 border;
}
.custom-transition{
  transition: all 0.4s ease;
}
</style>
