<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
import { useHeaderStore } from '@/stores'
const { topIconName } = useBaseHeader()
const store: any = useHeaderStore()
const { toggleNavbar, navLinks, toggleSubNav } = store
const handleClicked = (id: number) => {
  if (store.$state.phoneView != id) {
    store.$state.phoneView = id
  } else {
    store.$state.phoneView = 123
  }
}
storeToRefs(store)
</script>
<template>
  <div>
    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="10"
      class="absolute text-lg text-red-600 z-50"
      >Сайт работает в тестовом режиме</marquee
    >
    <!-- Logo and  icons for social media -->
    <div class="bg-white hidden md:block">
      <div
        class="lg:px-24 md:px-7 lg:py-2 mx-auto container md:flex md:items-center md:justify-between"
      >
        <router-link to="/" class="cursor-pointer" @click="store.$state.allMenus = false"
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
          class="lg:w-7 lg:h-7 cursor-pointer md:w-5 md:-5"
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
            v-if="navLinks[index].visible && !store.$state.allMenus"
            class="h-auto py-2 w-64 absolute px-4 text-start bg-bgColor drop-shadow-md"
          >
            <p
              v-for="(item, index) in link.subMenu"
              :key="index"
              class="menu-style text-black font-medium cursor-pointer text-xs py-1.5 m-3"
            >
              <router-link v-if="item.name != 'Direktorga murojaat qilish'" :to="item.route">
                {{ item.name }}
              </router-link>
              <a
                v-if="item.name == 'Direktorga murojaat qilish'"
                target="_blank"
                :href="item.route"
                >{{ item.name }}</a
              >
            </p>
          </div>
        </div>
        <router-link
          to="/"
          class="cursor-pointer block md:hidden"
          @click="store.$state.allMenus = false"
          ><img src="/images/logo-header.png" class="w-32" alt=""
        /></router-link>
        <BaseIcon class="lg:w-7 lg:h-7 md:w-5 md:-5 hidden md:block" name="search" />
      </div>
    </div>
    <!-- All menues in navbar -->
    <div class="relative hidden md:block" v-if="store.$state.allMenus">
      <div class="bg-white absolute w-full h-80 pl-10 pt-5">
        <div class="flex w-full items-start gap-5 justify-center">
          <div v-for="(item, index) in navLinks" :key="index">
            <p class="text-lg font-semibold pb-2">{{ item.name }}</p>
            <p
              v-for="(subItem, index) in item.subMenu"
              :key="index"
              @click="store.$state.allMenus = false"
              class="text-sm py-1 cursor-pointer all-submenu"
            >
              <router-link :to="subItem.route" v-if="subItem.name != 'Direktorga murojaat qilish'">
                {{ subItem.name }}
              </router-link>
              <a
                v-if="subItem.name == 'Direktorga murojaat qilish'"
                target="_blank"
                :href="subItem.route"
                >{{ subItem.name }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- phone view navbars -->

    <div v-if="store.$state.allMenus" class="block md:hidden bg-white w-full h-[100dvh] px-5">
      <div>
        <div v-for="(item, index) in navLinks" :key="index" class="pt-3">
          <div
            @click.stop="handleClicked(item.id)"
            class="flex items-center cursor-pointer justify-start gap-5"
          >
            <p class="text-lg text-black font-medium">{{ item.name }}</p>
            <BaseIcon
              :class="store.$state.phoneView === index + 1 ? 'rotate-180' : ''"
              class="w-3 transition h-3 text-main"
              name="down"
            />
          </div>
          <div class="ml-3" v-if="store.$state.phoneView === index + 1">
            <router-link
              v-for="(subItem, subIndex) in item.subMenu"
              :key="subIndex"
              class="cursor-pointer block hover:text-main"
              :to="subItem.route"
              @click="store.$state.allMenus = false"
            >
              {{ subItem.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.menu-style::after {
  content: '';
  width: 0;
  height: 1px;
  background-color: rgba(51, 80, 157, 1);
  left: 0;
  bottom: 0;
  transition: all 0.4s linear;
  position: absolute;
}
.menu-style:hover::after {
  width: 100%;
}
.menu-style::before {
  content: '';
  width: 0;
  background-color: rgba(51, 80, 157, 1);
  right: 0;
  top: 0;
  transition: all 0.4s linear;
  position: absolute;
}
.menu-style:hover::before {
  width: 100%;
}

.all-submenu::after {
  content: '';
  width: 0;
  height: 1px;
  background-color: rgba(51, 80, 157, 1);
  left: 0;
  bottom: 0;
  transition: all 0.4s linear;
  position: absolute;
}
.all-submenu:hover::after {
  width: 100%;
}
.all-submenu::before {
  content: '';
  width: 0;
  background-color: rgba(51, 80, 157, 1);
  right: 0;
  top: 0;
  transition: all 0.4s linear;
  position: absolute;
}
.all-submenu:hover::before {
  width: 100%;
}
</style>
