<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
const { topIconName, navLinks } = useBaseHeader()
</script>
<template>
  <div class="bg-white">
    <div class="lg:px-24 mx-auto container lg:flex lg:items-center lg:justify-between">
      <p class="lg:uppercase lg:text-xs lg:font-semibold text-main lg:py-4">
        TOSHKENT TEMIR YO'L TEXNIKUMI
      </p>
      <div class="lg:flex lg:items-center lg:justify-end gap-6">
        <BaseIcon v-for="(icon, index) in topIconName" :key="index" :name="icon" />
      </div>
    </div>
  </div>
  <div class="bg-[#E2F0F9]">
    <div class="container mx-auto lg:flex lg:px-24 lg:items-center lg:justify-between lg:py-6">
      <BaseIcon class="lg:w-7 lg:h-7 cursor-pointer" name="dashboard" />
      <p
        class="lg:text-[21px] lg:font-normal text-main"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <router-link :to="link.route">
          {{ link.name }}
        </router-link>
      </p>
      <BaseIcon class="lg:w-7 lg:h-7" name="search" />
    </div>
  </div>
</template>
