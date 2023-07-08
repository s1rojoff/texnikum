<script setup lang="ts">
const emits = defineEmits(['openPopup'])
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- <div>
    <div
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg  md:h-52 md:w-48 md:rounded-none md:rounded-l-lg"
        :src="props.cardData.url"
        alt=""
      />
      <div class="flex flex-col justify-between px-3 leading-normal">
        <h5 class="mb-1 text-center border-b text-base font-semibold text-gray-900 dark:text-white">
          {{ props.cardData.name }}
        </h5>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span class="font-bold">Lavozimi:</span> {{ props.cardData.lavozim }}
        </p>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span class="font-bold">Telefon:</span>{{ props.cardData.phone }}
        </p>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
          <span class="font-bold">Qabul vaqti:</span> {{ props.cardData.qabul }}
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          <span class="font-bold">E-mail:</span> {{ props.cardData.email }}
        </p>
        <p :id="props.id" @click="$emit('openPopup')" class="font-medium cursor-pointer text-main dark:text-white">
           Batafsil &RightArrow;
        </p>
        <div>
        </div>
      </div>
    </div>
  </div> -->

  <br />
  <div class="w-full rounded py-3 px-4 bg-gray-100">
    <div class="flex items-start gap-10">
      <div class="1/3">
        <img :src="props.cardData.url" :alt="props.cardData.id" class="md:h-52 bg-cover bg-center rounded md:w-48" />
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
          <div class="grid grid-cols-1 grid-rows-2">
            <p>Qabul kunlari</p>
            <p>{{ props.cardData.qabul }}</p>
          </div>
        </div>

        <div class="flex items-center gap-20 mt-16">
            <button class="toggle-btn">
                Ish tajribasi
            </button>
            <button class="toggle-btn">
                Majburiyatlari
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
 .toggle-btn{
  @apply rounded-2xl border bg-main text-white py-1 px-10
 }
</style>
