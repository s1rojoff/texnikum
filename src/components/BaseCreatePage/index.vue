<script setup lang="ts">
const props = defineProps({
  pageInfo: {
    type: Object,
    required: true
  },
  infoName: {
    type: String,
    default: "Bo'linma"
  }
})
</script>
<template>
  <div class="relative">
    <img class="w-full object-cover lg:h-[75vh]" :src="props.pageInfo.url" alt="" />
    <div class="absolute bottom-0 bg-main py-3 px-5 w-full">
      <p class="text-white lg:text-4xl font-semibold tracking-wider">{{ props.pageInfo.name }}</p>
    </div>
  </div>
  <div class="px-4 lg:px-24">
    <div class="mt-10"><slot name="boss"></slot></div>
    <div class="text-center mt-10">
      <span class="text-main text-4xl    border-b-2 border-main font-semibold"
        >{{ props.infoName }} haqida ma'lumot</span
      >
    </div>
    <p class="mt-4">
      {{ props.pageInfo.description }}
    </p>
  </div>
</template>
