<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/index.vue'
import { useBaseHeader } from '@/components/BaseHeader/composable'
const { navLinks } = useBaseHeader()
</script>

<template>
  <div class="bg-main w-full">
    <div class="container mx-auto lg:px-24 pt-10 mt-28 pb-3">
      <div class="grid grid-cols-3">
        <div>
          <!-- <img src="/images/logo-text-sariq.png" class="w-52 p-0" alt="" /> -->
          <div class="flex items-center justify-start">
            <BaseIcon class="w-7 h-7" name="location" />
            <span class="text-sm text-white ml-2"
              >Toshkent shahar, Mirobod tumani, <br />
              Temiryo'lchilar ko'chasi 89, 100176</span
            >
          </div>
          <div class="flex items-center mt-4 justify-start">
            <BaseIcon class="w-7 h-7" name="phone" />
            <span class="text-sm text-white ml-2">Tel: (71) 299 04 00</span>
          </div>
          <div class="flex items-center mt-4 justify-start">
            <BaseIcon class="w-7 h-7" name="email" />
            <span class="text-sm text-white ml-2">info@tpkjt.uz</span>
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
            <BaseIcon class="w-7 h-7" name="facebook-footer" />
            <BaseIcon class="w-7 h-7" name="telegram-footer" />
            <BaseIcon class="w-7 h-7" name="instagram-footer" />
          </div>
        </div>
        <div class="flex justify-end">
          <div class="">
            <router-link v-for="(item, index) in navLinks" :key="index" :to="item.route">
              <p class="text-white mt-2 first:mt-0">{{ item.name }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-3/4 mx-auto mt-5">
        <p class="text-white text-center border-t border-white">Barcha huquqlar himoyalangan</p>
      </div>
    </div>
  </div>
</template>
