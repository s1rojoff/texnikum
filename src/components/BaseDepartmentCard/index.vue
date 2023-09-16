<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  },
  showInfo: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="shadow-lg flex flex-col justify-start gap-10 items-center p-5 sm:p-0 sm:flex-row  shadow-indigo-500/40 w-full h-auto  relative mb-5">
    <div class=" h-full text-start w-1/4">
      <img class="object-cover w-full h-full" :src="props.cardData.url" alt="">
    </div>
    <div class="w-2/4 ml-6 flex flex-col gap-4 mt-5">
      <p class="lg:text-xl sm:text-md text-sm uppercase border-l pl-5 border-l-indigo-500">{{ props.cardData.lavozim }}</p>
      <p class="lg:text-2xl sm:text-md text-sm font-bold text-main border-l pl-5 border-l-indigo-500">{{ props.cardData.name }}</p>
      <p class="lg:text-lg sm:text-md text-sm border-l pl-5 border-l-indigo-500">&phone; {{ props.cardData.phone }}</p>
      <p class="lg:text-lg sm:text-md text-sm border-l pl-5 border-l-indigo-500"> {{ props.cardData.email}}</p>
      <p class="lg:text-lg sm:text-md text-sm border-l pl-5 border-l-indigo-500" v-if="props.cardData.qabul">{{ props.cardData.qabul }}</p>
    </div>
  </div>
</template>