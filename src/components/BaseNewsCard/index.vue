<script setup lang="ts">
import type { PropType } from 'vue'
const emits = defineEmits(['selectedNewsItem'])
import type { News } from '@/interfaces/announcement'
defineProps({
  newsData: {
    type: Object as PropType<News>,
    required: true
  }
})
</script>
<template>
  <!-- --------------------------------for MOBILE---------------------------------------- -->
  <div
    class=" md:hidden block border w-96 h-96 border-gray-300 shadow-lg shadow-indigo-500/40 rounded-xl overflow-hidden">
    <div class="h-1/2 relative">
      <img :src="newsData?.imgUrl" class="h-full w-full bg-center bg-cover" alt="" />
      <span class="bg-main text-white text-sm px-5 py-1 top-0 right-0 rounded-tr-xl absolute">{{
        newsData?.newsDate
      }}</span>
    </div>
    <div class="relative h-1/2 px-4 py-3 w-full">
      <p class="text-main font-medium">
        {{ newsData?.title.split(' ').length > 20 ? newsData?.title.split(' ').slice(0, 20).join(' ') + '...' :
          newsData?.title }}
      </p>
      <div @click="$emit('selectedNewsItem')" class="text-main underline absolute cursor-pointer bottom-3 left-4">Batafsil o'qish</div>
      <p class="text-gray-500 absolute bottom-3 right-4">{{ newsData?.created }}</p>
    </div>
  </div>

  <!-- --------------------------------------- for PC---------------------------------------------- -->
  <div
    class=" hidden  border w-full lg:h-64 h-48 border-gray-300 shadow-lg md:flex gap-4 mb-5 shadow-indigo-500/40 rounded-xl overflow-hidden">
    <div class="w-2/3 h-full relative">
      <img :src="newsData?.imgUrl" class="h-full rounded-tr-xl object-cover w-full bg-center bg-cover" alt="" />
      <span class="bg-main text-white text-sm px-5 py-1 top-0 right-0 rounded-tr-xl absolute">{{
        newsData?.newsDate
      }}</span>
    </div>
    <div class=" w-1/3relative px-4 py-3 w-full">
      <p class="text-main font-medium">
        {{ newsData?.title.split(' ').length > 20 ? newsData?.title.split(' ').slice(0, 20).join(' ') + '...' :
          newsData?.title }}
      </p>
      <div @click="$emit('selectedNewsItem')" class="text-main underline absolute cursor-pointer bottom-3 left-4">Batafsil o'qish</div>
      <p class="text-gray-500 absolute bottom-3 right-4">{{ newsData?.created }}</p>
    </div>
  </div>
</template>
<style scoped></style>
