<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import { useAboutStore } from '@/stores'
import BaseNewsCard from '@/components/BaseNewsCard/index.vue'
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div class="sticky top-0 z-10">
    <BaseHeader />
  </div>
  <div class="container mx-auto lg:px-24 mt-10">
    <div class="flex justify-between gap-5">
      <BaseNewsCard />
      <BaseNewsCard />
      <BaseNewsCard />
    </div>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>
