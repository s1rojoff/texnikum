<script setup lang="ts">
import BaseBaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDepartment } from '@/views/about/departments/composable';
const {departments} = useDepartment()
</script>
<template>
    <BaseBaseCreatePage :division-page-info="departments[2]" info-name="Kafedra"/>
</template>