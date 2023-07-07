<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import { useAboutStore } from '@/stores'
const store: any = useAboutStore()
storeToRefs(store)
</script>

<template>
  <div class="sticky top-0 z-10">
    <BaseHeader />
  </div>
  <router-view></router-view>
  <div>
    <BaseFooter />
  </div>
</template>
