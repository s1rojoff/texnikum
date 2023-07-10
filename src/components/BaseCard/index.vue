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
 
  <br />
  <div class="w-full rounded py-3 px-4 bg-gray-100">
    <div class="flex items-start gap-10">
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
          <div class="grid grid-cols-1 grid-rows-2">
            <p>Qabul kunlari</p>
            <p>{{ props.cardData.qabul }}</p>
          </div>
        </div>

        <div class="flex items-center gap-20 mt-16">
          <button class="toggle-btn">Ish tajribasi</button>
          <button class="toggle-btn">Majburiyatlari</button>
        </div>
      </div>
    </div>
    <div class="px-5 mt-5">
      <p class="text-center text-xl text-main font-semibold">Ish tajribasi</p>
      <p class="mt-1">
        
      </p>
    </div>
  </div>
</template>
<style>
.toggle-btn {
  @apply rounded-2xl border-main border bg-white text-main py-1 px-10 hover:bg-main hover:text-white transition;
}
</style>
