<script setup lang="ts">
import type { PropType } from 'vue'
import type { News } from '@/interfaces/announcement'
defineProps({
  newsData: {
    type: Object as PropType<News>,
    required: true
  }
})
</script>
<template>
  <div
    class="border w-96 h-96 border-gray-300 shadow-lg shadow-indigo-500/40 rounded-xl overflow-hidden"
  >
    <div class="h-1/2 relative">
      <img :src="newsData.imgUrl" class="h-full w-full bg-center bg-cover" alt="" />
      <span class="bg-main text-white text-sm px-5 py-1 top-0 right-0 rounded-tr-xl absolute">{{
        newsData.newsDate
      }}</span>
    </div>
    <div class="relative h-1/2 px-4 py-3 w-full">
      <p class="text-main font-medium">
        {{ newsData.title.split(' ').length > 20 ? newsData.title.split(' ').slice(0, 20).join(' ') + '...' : newsData.title }}
      </p>
      <a :href="newsData.postLink" target="_blank" class="text-main underline absolute bottom-3 left-4">Batafsil o'qish</a>
      <p class="text-gray-500 absolute bottom-3 right-4">{{ newsData.created }}</p>
    </div>
  </div>
</template>
<style scoped></style>
