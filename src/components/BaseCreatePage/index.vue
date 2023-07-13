<script setup lang="ts">
const props = defineProps({
  divisionPageInfo:{
    type: Object,
    required: true
  },
  infoName:{
    type: String,
    default: "Bo'lim"
  }
}) 
</script>
<template>
  <div class="relative">
    <img class="w-full lg:h-[75vh]" :src="props.divisionPageInfo.url" alt="" />
    <div class="absolute bottom-0 bg-main py-3 px-5">
      <p class="text-white lg:text-4xl font-semibold tracking-wider">{{ props.divisionPageInfo.name }}</p>
    </div>
  </div>
  <div class="lg:px-24">
    <div class="text-center mt-10">
      <span class="text-main text-4xl border-b-2 border-main font-semibold">{{ props.infoName }} haqida</span>
    </div>
    <p class="mt-4">
      {{ props.divisionPageInfo.description }}
    </p>
  </div>
</template>
