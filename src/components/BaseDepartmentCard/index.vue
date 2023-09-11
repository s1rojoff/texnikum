<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="shadow-lg flex shadow-indigo-500/40 w-full h-80 relative mb-5">
    <div class=" h-full w-1/3">
      <img class="object-cover w-full h-full" :src="props.cardData.url" alt="">
    </div>
    <div class="w-2/3 ml-6 flex flex-col gap-4 mt-5">
      <p class="text-xl uppercase border-l pl-5 border-l-indigo-500">{{ props.cardData.lavozim }}</p>
      <p class="text-2xl font-bold text-main border-l pl-5 border-l-indigo-500">{{ props.cardData.name }}</p>
      <p class="text-lg border-l pl-5 border-l-indigo-500">&phone; {{ props.cardData.phone }}</p>
      <p class="text-lg border-l pl-5 border-l-indigo-500"> {{ props.cardData.email}}</p>
    </div>
  </div>
</template>