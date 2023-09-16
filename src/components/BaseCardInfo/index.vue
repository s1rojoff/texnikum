<script lang="ts" setup>
import { ref } from 'vue'
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

const currentExp = ref<boolean>(false)
function replaceInfoExp() {
  if (currentExp.value) {
    currentExp.value = false
  } else {
    currentExp.value = true
  }
}
</script>
<template>
  <div class="hover:shadow-blue-500/50 shadow-lg border ronded-[10px] p-4">
    <div class="box relative">
      <div class="float-left">
        <img class="img" :src="props.cardData.url" :alt="props.cardData.id" />
      </div>
      <div class="flex items-end justify-between lg:flex-nowrap flex-wrap w-full">
        <div class="flex  flex-col gap-5">
          <p class=" text-xl md:text-2xl 2xl:text-4xl">{{ props.cardData.title }}</p>
          <p class=" text-base/6 max-w-[400px] 2xl:max-w-[600px] lg:text-xl">{{ props.cardData.subtitle }}</p>
          <p v-if= "props.cardData.date" class="font-thin">{{ props.cardData.date }}</p>
        </div>
        <button
            class="float-right  button border rounded-md bg-blue-500/50 px-3 py-1 right-0 text-white hover:bg-white hover:shadow-blue-500/50 shadow-lg hover:text-second select-none h-9 "
            @click="replaceInfoExp"
          >
            Batafsil
          </button>
      </div>
      
    </div>
    <div v-if="currentExp">
      <p class="description mt-2">{{ props.cardData.description }}</p>
    </div>
  </div>
</template>
<style>
.box {
  @apply md:flex  flex-wrap grid justify-items-center gap-10 md:flex-nowrap;
}
.img {
  @apply rounded-md w-[300px] sm:w-[600px] h-[200px] object-cover;
}
</style>