<script setup lang="ts">
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
const currentMan = ref<boolean>(false)


function replaceInfoExp() {
  if (currentExp.value) {
    currentExp.value = false
  } else {
    currentExp.value = true
    if (currentMan.value) {
      currentMan.value = false
    }
  }
}
function replaceInfoMan() {
  if (currentMan.value) {
    currentMan.value = false
  } else {
    currentMan.value = true
    if (currentExp.value) {
      currentExp.value = false
    }
  }
}
</script>

<template>
  <br />
  <div class="w-full rounded py-5 px-4 bg-slate-100 shadow-lg shadow-indigo-500/50">
    <div class="flex items-start  md:flex-nowrap flex-wrap justify-between">
      <div class="1/3">
        <img
          :src="props.cardData.url"
          :alt="props.cardData.id"
          class="md:h-52 h-[200px] lg:h-64 lg:w-64 object-cover  sm:h-[300px] bg-cover bg-center rounded md:w-48"
        />
      </div>
      <div class="md:w-2/3 w-full">
        <p class="text-center text-lg">{{ props.cardData.lavozim }}</p>
        <p class="text-center text-2xl">{{ props.cardData.name }}</p>
        <div
          class="flex sm:justify-between mt-11 flex-wrap md:flex-row gap-4 flex-col"
          :class="{ 'mt-10': !props.cardData.experience && !props.cardData.mandate }"
        >
          <div class="grid grid-cols-1 grid-rows-2">
            <p class="2xl:text-2xl">Telefon</p>
            <p class="2xl:text-2xl">{{ props.cardData.phone }}</p>
          </div>
          <div class="grid grid-cols-1 grid-rows-2">
            <p class="2xl:text-2xl">Email</p>
            <p class="2xl:text-2xl">{{ props.cardData.email }}</p>
          </div>
          <div v-if="props.cardData.qabul" class="grid grid-cols-1 grid-rows-2">
            <p class="2xl:text-2xl">Qabul kunlari</p>
            <p class="2xl:text-2xl">{{ props.cardData.qabul }}</p>
          </div>
        </div>

        <!-- Informations -->
        <div
          class="flex items-center justify-around mt-16"
          v-if="props.cardData.experience && props.cardData.mandate"
        >
          <button
            :class="currentExp ? 'bg-main text-white' : 'bg-white text-main'"
            class="toggle-btn "
            @click="replaceInfoExp"
          >
            Ish tajribasi
          </button>
          <button
            :class="currentMan ? 'bg-main text-white' : 'bg-white text-main'"
            class="toggle-btn"
            @click="replaceInfoMan"
          >
            Majburiyatlari
          </button>
          <!-- <button v-if="props.cardData.qabul" class="toggle-btn bg-white text-main">
            Email orqali murojaat qilish
          </button> -->
        </div>
      </div>
    </div>

    <div class="px-5 mt-5">
      <div v-if="currentExp">
        <p class="title">Ish tajribasi</p>
        <p class="mt-1">{{ props.cardData.experience }}</p>
      </div>
      <div v-if="currentMan">
        <p class="title">Majburiyatlari</p>
        <p class="mt-1 2xl:text-xl">{{ props.cardData.mandate }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.toggle-btn {
  @apply rounded-md border-none border py-1 sm:px-10 px-3 hover:bg-blue-500/50 hover:text-white transition hover:hover:shadow-blue-500/50 shadow-lg; 
}
.title {
  @apply text-center text-xl 2xl:text-3xl text-main font-semibold;
}
</style>
