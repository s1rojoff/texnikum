<script setup lang="ts">
const props = defineProps({
  itemInfo: {
    type: Object,
    default: {},
    required: true,
  },
});
</script>
<template>
  <div class="px-4">
    <router-link :to="itemInfo.path">
      <div class="relative rounded-lg overflow-hidden cursor-pointer h-64 sm:w-64 w-[300px]">
        <img
          :src="itemInfo.url"
          class="bg-contain w-full object-cover  h-full bg-center hover:scale-110 transition"
          alt=""
        />
        <div class="absolute w-full py-1 pl-3 bottom-0 bg-main">
          <p class="text-white text-[15px]">{{ itemInfo.name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
