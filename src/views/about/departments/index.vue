<script setup lang="ts">
import { useDepartment } from '@/views/about/departments/composable';
const {departments} = useDepartment()
</script>
<template>
    <div class="mx-auto container mt-16 lg:px-24">
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(item, index) in departments" :key="index">
        <router-link :to="item.path">
          <div class="relative rounded-lg overflow-hidden cursor-pointer h-64 w-full">
            <img
              :src="item.url"
              class="bg-contain w-full h-full bg-center hover:scale-110 transition"
              alt=""
            />
            <div class="absolute w-full py-1 pl-3 bottom-0 bg-main">
              <p class="text-white text-[15px]">{{ item.name }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>