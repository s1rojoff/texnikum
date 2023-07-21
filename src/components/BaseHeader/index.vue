<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
import { routers } from '@/router/router'
import { useHeaderStore } from '@/stores'
import { ref } from 'vue'
const { topIconName } = useBaseHeader()
const store: any = useHeaderStore()
const { toggleNavbar, navLinks, toggleSubNav } = store
storeToRefs(store)
</script>
<template>
  <div>
    <!-- Logo and  icons for social media -->
    <div class="bg-white hidden md:block">
      <div
        class="lg:px-24 md:px-7 lg:py-2 mx-auto container md:flex md:items-center md:justify-between"
      >
        <router-link to="/" class="cursor-pointer"
          ><img src="/images/logo-header.png" class="w-32" alt=""
        /></router-link>
        <div class="md:flex md:items-center md:justify-end lg:gap-6 md:gap-2">
          <BaseIcon
            v-for="(icon, index) in topIconName"
            :key="index"
            :name="icon"
            class="lg:w-7 lg:h-7 md:w-6 md:h-6"
          />
        </div>
      </div>
    </div>

    <!-- Laptop view navbars -->
    <div class="bg-[#E2F0F9]">
      <div
        class="container mx-auto py-3 flex md:px-7 lg:px-24 px-5 items-center justify-between md:py-2 lg:py-6"
      >
        <BaseIcon
          class="lg:w-7 lg:h-7 cursor-pointe md:w-5 md:-5"
          @click="toggleNavbar"
          name="dashboard"
        />
        <div
          class="lg:text-lg relative uppercase lg:block hidden lg:font-normal text-main"
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="toggleSubNav(index)"
          @mouseleave="toggleSubNav(index)"
        >
          <p class="cursor-pointer">{{ link.name }}</p>

          <div
            v-if="navLinks[index].visible"
            class="h-auto py-2 w-64 absolute px-4 text-start rounded-lg bg-main"
          >
            <p
              v-for="(item, index) in link.subMenu"
              :key="index"
              class="text-white cursor-pointer text-xs py-1.5"
            >
              <router-link v-if="item.name != 'Direktorga murojaat qilish'" :to="item.route">
                {{ item.name }}
              </router-link>
              <a v-if="item.name == 'Direktorga murojaat qilish'" target="_blank" :href="item.route">{{ item.name }}</a>
            </p>
          </div>
        </div>
        <BaseIcon class="lg:w-7 lg:h-7 md:w-5 md:-5" name="search" />
      </div>
    </div>
    <!-- iPad view navbars -->
    <div
      class="bg-main py-9 px-14 rounded-br-3xl absolute block lg:hidden"
      v-if="store.$state.ipadNavs"
    >
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
  </div>
</template>
<style></style>
