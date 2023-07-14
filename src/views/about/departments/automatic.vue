<script setup lang="ts">
import BaseBaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDepartment } from '@/views/about/departments/composable';
const {departments} = useDepartment()
</script>
<template>
    <BaseBaseCreatePage :page-info="departments[3]" info-name="Kafedra"/>
</template>