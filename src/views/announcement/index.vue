<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAboutStore } from '@/stores'
import BaseNewsCard from '@/components/BaseNewsCard/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import { useAnnouncementFn } from '@/views/announcement/composable'
import { useRouter } from 'vue-router'
const router = useRouter()
const {newsData} = useAnnouncementFn()
const store= useAboutStore()
storeToRefs(store)
const categories = ['Barchasi', 'Jamiyat', 'Sport', 'Texnikum', 'Rahbariyat']
function handleClicked(id:any){
  router.push({name: 'One of news', params:{newsId: id}})
}
</script>

<template>
  <div class="container mx-auto px-5 2xl:px-5 lg:px-24 mt-10">
    <div class="flex flex-wrap sm:flex-nowrap items-start gap-5">
      <div class=" flex sm:w-3/4 w-full gap-x-5 flex-wrap gap-y-5 order-2 sm:order-1">
        <BaseNewsCard v-for="(item, index) in newsData" @selectedNewsItem="handleClicked(item?.id)" :key="index" :news-data="item"/>
      </div>
      <div class="sm:w-1/4 w-full order-1 sm:order-2">
      <BaseInput placeholder="Search for" size="sm" type="search" />
        <p class="text-main text-start text-lg mt-5 font-medium">Kategoriyalar</p>
        <p class="border-b first:mt-2 custom-transition text-sm border-main py-3 cursor-pointer hover:pl-4 pl-2 transition hover:bg-slate-200" v-for="item in categories" :key="item">{{ item }}</p>
      </div>
    </div>
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
