<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue'
import {useAboutPage} from '@/views/about/composable'
const {managements}  = useAboutPage()
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia';
const store:any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div>
    <div class="flex justify-center pt-32 lg:pb-10">
      <span
        class="lg:text-3xl text-second text-2xl lg:font-extrabold border-main text-center md:border-b-4 border-b-4"
      >
        Rahbariyat
      </span>
    </div>
  </div>
  <div>
    <div class="flex  justify-center"><BaseCard :cardData="managements[0]" @openPopup="store.togglePopup"/></div>
    <div class="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5">
        <BaseCard :cardData="managements[1]"/>
        <BaseCard :cardData="managements[2]"/>
    </div>
    <div class="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5">
        <BaseCard :cardData="managements[3]"/>
        <BaseCard :cardData="managements[3]"/>
    </div>
  </div>
</template>
