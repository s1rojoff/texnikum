<script setup lang="ts">
import { storeToRefs } from 'pinia';
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
import { useHeaderStore } from '@/stores';
const { topIconName, navLinks } = useBaseHeader()
const store = useHeaderStore()
const {toggleNavbar} = store
storeToRefs(store)
</script>
<template>
  <div class="bg-white">
    <div class="lg:px-24 md:px-7 mx-auto container md:flex md:items-center md:justify-between">
      <p class="lg:uppercase lg:text-xs md:text-xs lg:font-semibold text-main lg:py-4 md:py-3">
        TOSHKENT TEMIR YO'L TEXNIKUMI
      </p>
      <div class="md:flex md:items-center md:justify-end lg:gap-6 md:gap-2">
        <BaseIcon v-for="(icon, index) in topIconName" :key="index" :name="icon" class="lg:w-7 lg:h-7 md:w-6 md:h-6" />
      </div>
    </div>
  </div>
  <div class="bg-[#E2F0F9]">
    <div
      class="container mx-auto md:flex md:px-7 lg:px-24 md:items-center md:justify-between md:py-2 lg:py-6"
    >
      <BaseIcon class="lg:w-7 lg:h-7 cursor-pointe md:w-5 md:-5" @click="toggleNavbar" name="dashboard" />
      <p
        class="lg:text-[21px] lg:block hidden lg:font-normal text-main"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <router-link :to="link.route">
          {{ link.name }}
        </router-link>
      </p>
      <BaseIcon class="lg:w-7 lg:h-7 md:w-5 md:-5" name="search" />
    </div>
  </div>
  <div class="bg-main py-9 px-14 rounded-br-3xl absolute hidden md:block lg:hidden" v-if="store.$state.ipadNavs">
      <p
        class="lg:text-[21px] border-b border-white last:border-none pb-4 mt-4 first:mt-0 lg:font-normal lg:text-main md:text-white"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <router-link :to="link.route">
          {{ link.name }}
        </router-link>
      </p>
    </div>
</template>
