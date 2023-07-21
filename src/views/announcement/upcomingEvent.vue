<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseNewsCard from '@/components/BaseNewsCard/index.vue'
const categories = ['Barchasi', 'Jamiyat', 'Sport', 'Texnikum', 'Rahbariyat']
</script>

<template>
  <div class="sticky top-0 z-10">
    <BaseHeader />
  </div>
  <div
    class="bg-[url('/announcement/upcoming_event.png')] lg:px-24 bg-no-repeat w-full bg-center bg-cover h-[75vh]"
  >
    <div class="text-start top-2/3">
      <p
        class="sm:text-5xl font-light text-white border-solid z-[6] border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Yaqinlashib kelayotgan tadbirlar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[5]"></div>
  </div>
  <div class="container mx-auto lg:px-24 mt-10">
    <div class="flex items-start gap-5">
      <div class="grid grid-cols-2 w-3/4 gap-x-5 gap-y-5">
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
        <BaseNewsCard />
      </div>
      <div class="w-1/4">
        <BaseInput placeholder="Search for" size="sm" type="search" />
        <p class="text-main text-start text-lg mt-5 font-medium">Kategoriyalar</p>
        <p
          class="border-b first:mt-2 custom-transition text-sm border-main py-3 cursor-pointer hover:pl-4 pl-2 transition hover:bg-slate-200"
          v-for="item in categories"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>
