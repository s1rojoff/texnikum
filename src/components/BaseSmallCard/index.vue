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
      <div class="relative rounded-lg  shadow-xl shadow-black-500 overflow-hidden cursor-pointer sm:h-72 h-64 md:h-[300px] sm:w-64 md:min-w-[310px]">
        <img
          :src="itemInfo.url"
          class="bg-contain w-full object-cover  h-full bg-center hover:scale-110 transition"
          alt=""
        />
        <div class="absolute w-full py-4 pl-3 bottom-0 bg-iColor">
          <p class="text-[#474747] font-semibold uppercase text-[15px]">{{ itemInfo.name }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
