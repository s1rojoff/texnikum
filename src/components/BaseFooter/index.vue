<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useHeaderStore } from '@/stores'
const store: any = useHeaderStore()
const { navLinks } = store
</script>

<template>
  <div class="bg-main w-full">
    <div class="container 2xl:px-0 mx-auto px-5 lg:px-24 md:px-7 pt-7 md:mt-28  pb-3">
      <div class="hidden md:block">
        <div class="grid md:grid-cols-3 grid-cols-1">
          <div class="">
            <div class="flex items-center justify-start">
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="location" />
              <span class="lg:text-sm text-xs 2xl:text-xl text-white ml-2"
                >Toshkent shahar, Mirobod tumani, <br />
                Temiryo'lchilar ko'chasi 89, 100176</span
              >
            </div>
            <div class="flex items-center lg:mt-4 md:mt-2 justify-start">
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="phone" />
              <span class="lg:text-sm 2xl:text-xl text-white ml-2 text-xs"
                >Tel: (71) 299 04 00</span
              >
            </div>
            <div class="flex items-center lg:mt-4 md:mt-2 justify-start">
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="email" />
              <span class="lg:text-sm text-xs 2xl:text-xl text-white ml-2">info@tpkjt.uz</span>
            </div>
          </div>
          <div>
            <div class="w-full border-b pb-1 border-white">
              <BaseIcon name="logo-white" class="mx-auto" />
              <p class="text-white text-center uppercase mt-1 font-semibold leading-4 text-sm">
                Toshkent temir yo'l texnikumi
              </p>
            </div>
            <div class="flex justify-center gap-5 mt-2">
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="facebook-footer" />
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="telegram-footer" />
              <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="instagram-footer" />
            </div>
          </div>
          <div class="flex justify-end">
            <div class="hidden md:block">
              <router-link class="" v-for="(item, index) in navLinks" :key="index" :to="item.route">
                <p class="text-white lg:text-sm 2xl:text-xl md:text-xs pt-1.5">{{ item.name }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="block md:hidden">
        <div>
          <div class="flex justify-center">
            <p
              class="text-center text-sm font-normal 2xl:text-xl uppercase pb-2 border-b border-white text-white"
            >
              Toshkent temir yo'l <br />
              texnikumi
            </p>
          </div>
          <div class="flex justify-center items-center gap-5 mt-2">
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="facebook-footer" />
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="telegram-footer" />
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="instagram-footer" />
          </div>
        </div>
        <div class="mt-10">
          <BaseIcon class="mx-auto w-12 h-12" name="location" />
          <p class="text-base text-center text-white mt-2">
            Toshkent shahar, Mirobod tumani, <br />
            Temiryo'lchilar ko'chasi 89, 100176
          </p>
        </div>
        <div class="mt-5">
          <BaseIcon class="mx-auto w-12 h-12" name="phone" />
          <p class="text-base text-center text-white mt-2">Tel: (71) 299 04 00</p>
        </div>
        <div class="mt-5">
          <BaseIcon class="mx-auto w-12 h-12" name="email" />
          <p class="text-base text-center text-white mt-2">info@tpkjt.uz</p>
        </div>
      </div>
      <div class="md:w-1/2 w-3/4 mx-auto">
        <p class="text-white text-sm text-center border-t border-white">
          Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
  </div>
</template>
