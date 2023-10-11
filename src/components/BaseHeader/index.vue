<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
import { useHeaderStore } from '@/stores'
import { useI18n } from 'vue-i18n'
const { topIconName, locales } = useBaseHeader()
const store: any = useHeaderStore()
const { toggleNavbar, navLinks, toggleSubNav } = store
const handleClicked = (id: number) => {
  if (store.$state.phoneView != id) {
    store.$state.phoneView = id
  } else {
    store.$state.phoneView = 123
  }
}
const { t, locale, setLocaleMessage } = useI18n()
const selectedLanguage = ref(locale.value)
const changeLanguage = async () => {
  await setLocaleMessage(
    selectedLanguage.value,
    await import(`../../locale/${selectedLanguage.value}.json`)
  )
  locale.value = selectedLanguage.value
}
(store)
</script>
<template>
  <div>
    <marquee behavior="scroll" direction="left" scrollamount="10" class="absolute text-lg text-red-600 z-50">Сайт работает
      в тестовом режиме</marquee>
    <!-- Logo and  icons for social media -->
    <div class="bg-white hidden md:block">
      <div class="lg:px-24 2xl:px-5 md:px-7 lg:py-2 mx-auto container md:flex md:items-center md:justify-between">
        <router-link to="/" class="cursor-pointer" @click="store.$state.allMenus = false">
          <div class="w-fit flex justify-start items-center gap-1">
            <BaseIcon name="logo" />
            <p class="text-main uppercase mt-1.5 font-semibold leading-4 text-xs">Toshkent temir yo'l <br> texnikumi</p>
          </div>
        </router-link>
        <div class="md:flex md:items-center md:justify-end md:gap-2">
          <a href="https://instagram.com/ttytrailway?igshid=MzRlODBiNWFlZA==" target="_blank">
            <BaseIcon name="instagram" class="h-7 w-7" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <BaseIcon name="facebook" class="h-7 w-7" />
          </a>
          <a href="https://t.me/eduttyt" target="_blank">
            <BaseIcon name="telegram" class="h-7 w-7" />
          </a>
          <BaseIcon name="lightbulb" class="h-7 w-7" />
          <select v-model="selectedLanguage" @change="changeLanguage"
            class="w-7 h-7 rounded-full cursor-pointer text-sm text-white bg-main outline-none border-none text-center">
            <option v-for="(locale, index) in locales" :key="index" :value="locale">
              {{ locale.toUpperCase() }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Laptop view navbars -->
    <div class="bg-[#E2F0F9]">
      <div
        class="container mx-auto py-2 flex md:px-7 lg:px-24 2xl:px-5 px-5 items-center justify-between md:py-2 lg:py-4">
        <BaseIcon class="lg:w-5 lg:h-5 cursor-pointer md:w-5 md:-5" @click="toggleNavbar" name="dashboard" />

        <div class="lg:text-base relative lg:block hidden lg:font-normal xl:font-extrabold 2xl:text-[22px]"
          v-for="(link, index) in navLinks" :key="index" @mouseenter="toggleSubNav(index)"
          @mouseleave="toggleSubNav(index)">
          <p class="cursor-pointer uppercase text-main">{{ link.name }}</p>
          <div v-if="navLinks[index].visible && !store.$state.allMenus" class="absolute rounded-md bg-bgColor px-5 py-3"
            :style="{ 'width': `${Object.keys(link.subMenu).length * 300}px` }">
            <!-- <p v-for="(item, index) in link.subMenu" :key="index"
              class="menu-style text-black cursor-pointer text-xs font-bold m-3">
              <router-link v-slot="{ isExactActive }" v-if="item.name != 'Direktorga murojaat qilish'" :to="item.route">
                <span :class="{ 'text-main': isExactActive }">{{ item.name }}</span>
              </router-link>
              <a v-else target="_blank" :href="item.route">{{ item.name }}</a>
            </p> -->
            <div class="flex items-start justify-between gap-4">
              <div v-for="(item, index) in Object.keys(link.subMenu)" :key="index">
                <div>
                  <p class="text-main">{{ link.subMenu[item].name }}</p>
                  <div class="cursor-pointer menu-style" v-for="(subItem, index) in link.subMenu[item].childrens"
                    :key="index">
                    <router-link :to="subItem.route" v-if="subItem.name !== 'Videoroliklar'" class="text-sm  py-0.5">
                      {{ subItem.name }}
                    </router-link>
                    <a :href="subItem.route" v-else target="_blank" class="text-sm  py-0.5">{{ subItem.name }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/" class="cursor-pointer block md:hidden" @click="store.$state.allMenus = false"><img
            src="/images/logo-header.png" class="w-32" alt="" /></router-link>
        <!-- <BaseIcon class="lg:w-7 lg:h-7 md:w-5 md:-5 hidden md:block" name="search" /> -->
      </div>
    </div>
    <!-- All menues in navbar -->
    <div class="relative hidden md:block" v-if="store.$state.allMenus">
      <div class="bg-white absolute w-full h-80 xl:h-[470px] pl-10 pt-5">
        <div class="flex w-full items-start gap-5 justify-center">
          <div v-for="(item, index) in navLinks" :key="index">
            <p class="text-lg font-semibold pb-2">{{ item.name }}</p>
            <p v-for="(subItem, index) in item.subMenu" :key="index" @click="store.$state.allMenus = false"
              class="text-sm py-1 cursor-pointer all-submenu">
              <router-link v-slot="{ isExactActive }" :to="subItem.route"
                v-if="subItem.name != 'Direktorga murojaat qilish'">
                <p :class="{ 'text-main': isExactActive }">{{ subItem.name }}</p>
              </router-link>
              <a v-else target="_blank" :href="subItem.route">{{ subItem.name }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- phone view navbars -->

    <div v-if="store.$state.allMenus" class="block md:hidden bg-white w-full h-[100dvh] px-5">
      <div>
        <div v-for="(item, index) in navLinks" :key="index" class="pt-3">
          <div @click.stop="handleClicked(item.id)" class="flex items-center cursor-pointer justify-start gap-5">
            <p class="text-lg text-black font-medium">{{ item.name }}</p>
            <BaseIcon :class="store.$state.phoneView === index + 1 ? 'rotate-180' : ''"
              class="w-3 transition h-3 text-main" name="down" />
          </div>
          <div class="ml-3" v-if="store.$state.phoneView === index + 1">
            <p v-for="(subItem, subIndex) in item.subMenu" :key="subIndex" class="cursor-pointer block hover:text-main"
              @click="store.$state.allMenus = false">
              <router-link :to="subItem.route" v-if="subItem.name != 'Direktorga murojaat qilish'"
                v-slot="{ isExactActive }">
                <p :class="{ 'text-main': isExactActive }">{{ subItem.name }}</p>
              </router-link>
              <a v-else :href="subItem.route" target="_blank">
                {{ subItem.name }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
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
