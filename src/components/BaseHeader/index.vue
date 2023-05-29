<script setup lang="ts">
import { type NavLink } from '@/interfaces/index'
import type { PropType } from 'vue'
const props = defineProps({
  navlink: {
    type: Array as PropType<NavLink[]>,
    required: true
  }
})
</script>

<template>
  <div class="w-full fixed top-0  z-10 bg-white">
    <div class="flex mx-auto  container px-5 justify-between items-center">
      <img src="/images/logo.png" class="lg:w-24 lg:h-24" alt="" />
      <div class="flex items-center">
        <router-link
        to="/"
          class="lg:text-base uppercase lg:ml-6 cursor-pointer"
          v-for="(item, index) in props.navlink"
          :key="index"
          >{{ item.name }}</router-link>
  
      </div>
    </div>
  </div>
</template>
