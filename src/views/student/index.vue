<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'

</script>
<template>
  <div class="sticky top-0 z-30">
    <BaseHeader />
  </div>
  <div>
    <router-view></router-view>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>