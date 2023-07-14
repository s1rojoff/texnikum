<script setup lang="ts">
import BaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { usedepEmploye } from '@/views/about/dep_employe/composable'
const { depEmployes } = usedepEmploye()
</script>
<template>
  <BaseCreatePage :page-info="depEmployes[0]" info-name="Bo'lim" />
</template>