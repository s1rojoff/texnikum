<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue'
import { useAboutPage } from '@/views/about/composable'
import BaseModal from '@/components/BaseModal/index.vue'
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { managements, openModal, clickModal } = useAboutPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div class="z-30">
    <BaseModal :isOpen="openModal" @handleClicked="clickModal"/>
  </div>
 <div
    class="bg-[url('/about/management.webp')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto  container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Rahbariyat
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[2]"></div>
  </div>
  <div class="mt-10 2xl:px-5 container px-4 mx-auto lg:px-24">
    <div>
      <BaseCard
        v-for="(management, index) in managements"
        :key="index"
        :id="`${management.id}`"
        :cardData="management"
        :showInfo="store.visibleInfo"
        @expInfo="store.toggleInfo"
        @byEmailAppeal="openModal = !openModal"
      />
    </div>
  </div>
</template>
