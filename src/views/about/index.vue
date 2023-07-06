<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import Management from '@/views/about/management.vue'
import Department from '@/views/about/departments.vue'
import Story from '@/views/about/story.vue'
import BasePopup from '@/components/BasePopup/index.vue'
import { useAboutStore } from '@/stores'
import { useAboutPage } from '@/views/about/composable'
const { managements } = useAboutPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div class="sticky top-0 z-10">
    <BaseHeader />
  </div>

  <!-- Popup  -->
  <!-- <BasePopup
    :modal="store.$state.openModal"
    :popupData="{
      name: managements[store.cardId].name,
      url: managements[store.cardId].url,
      experience: managements[store.cardId].experience
    }"
    @closePopup="store.togglePopup"
  /> -->
  <div
    class="bg-[url('/about/header-about.avif')] lg:px-24 bg-no-repeat w-full bg-center bg-cover h-[75vh]"
  >
    <div class="text-start top-2/3 border-b-2 border-main">
      <!-- <p class="text-4xl font-extrabold text-white">"O'zbekiston Temir Yo'llari" AJ</p> -->
      <p class="text-4xl font-extrabold text-white">Toshkent Temir Yo'l Texnikumi</p>
      <p class="text-4xl font-extrabold text-white">Rahbariyati</p>
    </div>
  </div>
  <router-view>
  </router-view>
  <div>
    <BaseFooter />
  </div>
</template>
