<script setup lang="ts">
import BaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDivision } from '@/views/about/division/composable'
const { devisions } = useDivision()
</script>
<template>
  <div>
    <BaseCreatePage :page-info="devisions[4]">
          
    </BaseCreatePage>
  </div>
</template>
