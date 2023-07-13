<script setup lang="ts">
import BaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDivision } from '@/views/about/division/composable'
const { devisions } = useDivision()
</script>
<template>
  <div>
    <BaseCreatePage :division-page-info="devisions[1]"/>
  </div>
</template>
