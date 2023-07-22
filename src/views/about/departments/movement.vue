<script setup lang="ts">
import BaseBaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDepartment } from '@/views/about/departments/composable'
const { departments } = useDepartment()
import BaseCard from '@/components/BaseCard/index.vue'
const boss = {
  lavozim: "Infrastruktura bo'limi boshlig'i",
  url: '/images/user.jpg',
  name: 'Firstname Lastname',
  phone: '97-000-00-00',
  email: 'example@gmail.com'
}
</script>
<template>
  <BaseBaseCreatePage :page-info="departments[2]" info-name="Kafedra">
    <template #boss> <BaseCard :card-data="boss" /></template>
  </BaseBaseCreatePage>
</template>
