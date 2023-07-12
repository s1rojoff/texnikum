<script setup lang="ts">
import Baseheader from '@/components/BaseHeader/index.vue'
import Basefooter from '@/components/BaseFooter/index.vue'

</script>
<template>
  <!-- Header -->
  <div class="sticky top-0 z-10">
    <Baseheader />
  </div>
  <router-view></router-view>
  <!-- footer -->
  <div>
    <Basefooter />
  </div>
</template>
<style>
</style>