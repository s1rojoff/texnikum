<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['expInfo', 'manInfo'])
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
//currentExp: boolean, currentMan: boolean
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
  <div class="w-full rounded py-3 px-4 bg-gray-100">
    <div class="flex  items-start gap-10 ">
      <div class="1/3">
        <img
          :src="props.cardData.url"
          :alt="props.cardData.id"
          class="md:h-52 bg-cover bg-center rounded md:w-48"
        />
      </div>
      <div class="w-2/3">
        <p class="text-center text-lg">{{ props.cardData.lavozim }}</p>
        <p class="text-center text-2xl">{{ props.cardData.name }}</p>
        <div class="flex justify-between">
          <div class="grid grid-cols-1 grid-rows-2">
            <p>Telefon</p>
            <p>{{ props.cardData.phone }}</p>
          </div>
          <div class="grid grid-cols-1 grid-rows-2">
            <p>Email</p>
            <p>{{ props.cardData.email }}</p>
          </div>
          <div  v-if="props.cardData.qabul" class="grid grid-cols-1 grid-rows-2">
            <p>Qabul kunlari</p>
            <p>{{ props.cardData.qabul }}</p>
          </div>
        </div>

        <!-- Informations -->
        <div class="flex items-center gap-20 mt-16">
          <button
            :class="currentExp ? 'bg-main text-white' : 'bg-white text-main'"
            class="toggle-btn"
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
        </div>
      </div>
    </div>

    <div class="px-5 mt-5">
      <div v-if="currentExp">
        <p class="text-center text-xl text-main font-semibold">Ish tajribasi</p>
        <p class="mt-1">{{ props.cardData.experience }}</p>
      </div>
      <div v-if="currentMan">
        <p class="text-center text-xl text-main font-semibold">Majburiyatlari</p>
        <p class="mt-1">{{ props.cardData.mandate }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.toggle-btn {
  @apply rounded-2xl border-main border py-1 px-10 hover:bg-main hover:text-white transition;
}
</style>
