<script setup lang="ts">
import BaseDivision from '@/components/BaseDivision/index.vue'
import { useDivision } from '@/views/about/division/composable'
const { devisions } = useDivision()
</script>
<template>
  <div>
    <BaseDivision :division-page-info="devisions[2]"/>
  </div>
</template>
