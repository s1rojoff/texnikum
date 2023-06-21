<script setup lang="ts">
// import { type Rahbariyat } from "@/interfaces"
const props = defineProps({
    cardData:{
        type: Any,
        required: true
    }
}) 
</script>

<template>
  <div>
    <div
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg  md:h-48 md:w-48 md:rounded-none md:rounded-l-lg"
        :src="props.cardData.url"
        alt=""
      />
      <div class="flex flex-col justify-between px-3 leading-normal">
        <h5 class="mb-2 text-center border-b text-base font-semibold text-gray-900 dark:text-white">
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
      </div>
    </div>
  </div>
</template>
