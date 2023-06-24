<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon/index.vue";
const emits= defineEmits(['closePopup'])
const props = defineProps({
  modal: {
    type: Boolean,
    required: true,
    default: true,
  },
  popupData:{
    type: Object,
    required: true
  }
});
</script>
<template>
  <div v-if="props.modal">
    <div @click="$emit('closePopup')" class="fixed z-30 top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
    <div class="fixed z-40 top-0 w-full">
      <div class="w-1/2 h-[80vh] left-1/4 py-4 px-6 top-[10vh] rounded-lg bg-white">
        <div class="flex justify-between">
          <p class="text-xl text-main font-semibold text-center">
           {{ props.popupData.name }}
          </p>
          <BaseIcon class="w-3.5 h-3.5 cursor-pointer text-main" name="close" @click="$emit('closePopup')" />
        </div>
        <div class="mt-5 h-[65vh] overflow-y-scroll">
          <div class="w-[170px] overflow-hidden h-40 float-left pr-3">
            <img
            :src="props.popupData.url"
          class="bg-cover"
            alt=""
            style=""
          />
          </div>
          <div class="mt-5">
            <p class="text-center text-xl text-main font-semibold">Ish tajribasi</p>
            <p class="mt-1">
              {{ props.popupData.experience }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
