<script setup lang="ts"></script>
<template>
  <div
    class="border w-96  h-96 border-gray-300 shadow-lg shadow-indigo-500/40 rounded-xl overflow-hidden"
  >
    <div class="h-1/2 relative">
      <img src="/images/header1.png" class="h-full w-full" alt="" />
      <span class="bg-main text-white text-sm px-5 py-1 top-0 right-0 rounded-tr-xl absolute"
        >11.12.2023</span
      >
    </div>
    <div class="relative h-1/2 px-4 py-3 w-full">
      <p class="text-main font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit.
      </p>

      <p class="news-info left-4 text-red-500">Sport</p>
      <p class="news-info right-4 text-gray-500">2 kun oldin</p>
    </div>
  </div>
</template>
<style scoped>
.news-info{
 @apply absolute font-medium bottom-3
}
</style>
