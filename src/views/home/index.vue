<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import { useHomeFunctional } from '@/views/home/index'
const { navlinks } = useHomeFunctional()
</script>
<template>
  <div class="w-full">
    <BaseHeader :navlink="navlinks" />
    <div class="bg-[url('/images/header.jpg')] w-full bg-cover h-screen">
    <p class="text-3xl tex-black text-center top-1/2">text</p>
    </div>
  </div>
</template>
