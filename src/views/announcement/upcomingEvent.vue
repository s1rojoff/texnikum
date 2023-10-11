<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseNewsCard from '@/components/BaseNewsCard/index.vue'
import { useAnnouncementFn } from '@/views/announcement/composable'
import { useAnnouncementStore } from '@/views/announcement/store'
const store = useAnnouncementStore()
const {newsId} = storeToRefs(store)
import { useRouter } from 'vue-router'
const router = useRouter()
const categories = ['Barchasi', 'Jamiyat', 'Sport', 'Texnikum', 'Rahbariyat']
const { newsData } = useAnnouncementFn()
function handleClicked(id:any){
  router.push({name: 'one of  upcoming-event', params:{id: id}})
  newsId.value = id
}
</script>

<template>
  <div class="container mx-auto px-5 2xl:px-5 lg:px-24 mt-10">
    <div class="flex flex-wrap items-start sm:flex-nowrap gap-5">
      <div class="flex flex-wrap sm:w-3/4 w-full gap-x-5 gap-y-5 sm:order-1 order-2">
        <BaseNewsCard v-for="(item, index) in newsData" @selectedNewsItem="handleClicked(item?.id)" :key="index" :newsData="item" />
      </div>
      <div class="sm:w-1/4 w-full sm:order-2 order-1">
        <BaseInput placeholder="Search for" size="sm" type="search" />
        <p class="text-main text-start text-lg mt-5 font-medium">Kategoriyalar</p>
        <p class="border-b first:mt-2 custom-transition text-sm border-main py-3 cursor-pointer hover:pl-4 pl-2 transition hover:bg-slate-200"
          v-for="item in categories" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
