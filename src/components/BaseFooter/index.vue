<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
const { navLinks } = useBaseHeader()
</script>

<template>
  <div class="bg-main w-full">
    <div class="container mx-auto lg:px-24 md:px-7 pt-10 mt-28 pb-3">
      <div class="grid grid-cols-3">
        <div>
          <!-- <img src="/images/logo-text-sariq.png" class="w-52 p-0" alt="" /> -->
          <div class="flex items-center justify-start">
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="location" />
            <span class="lg:text-sm text-xs text-white ml-2"
              >Toshkent shahar, Mirobod tumani, <br />
              Temiryo'lchilar ko'chasi 89, 100176</span
            >
          </div>
          <div class="flex items-center lg:mt-4 md:mt-2 justify-start">
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="phone" />
            <span class="lg:text-sm text-white ml-2 text-xs">Tel: (71) 299 04 00</span>
          </div>
          <div class="flex items-center lg:mt-4 md:mt-2 justify-start">
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="email" />
            <span class="lg:text-sm text-xs text-white ml-2">info@tpkjt.uz</span>
          </div>
        </div>
        <div>
          <p
            class="text-center text-sm font-normal uppercase pb-2 border-b border-white text-white"
          >
            Toshkent temir yo'l <br />
            texnikumi
          </p>
          <div class="flex justify-center gap-5 mt-2">
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="facebook-footer" />
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="telegram-footer" />
            <BaseIcon class="lg:w-7 md:w-5 lg:h-7 md:h-5" name="instagram-footer" />
          </div>
        </div>
        <div class="flex justify-end">
          <div class="">
            <router-link class="" v-for="(item, index) in navLinks" :key="index" :to="item.route">
              <p class="text-white lg:text-sm md:text-xs ">{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-1/2 mx-auto mt-5">
        <p class="text-white text-sm text-center border-t border-white">Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  </div>
</template>
