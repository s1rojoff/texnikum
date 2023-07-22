<script setup lang="ts">
import BaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { useDivision } from '@/views/about/division/composable'
const { devisions } = useDivision()
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
  <div>
    <BaseCreatePage :page-info="devisions[1]">
      <template #boss> <BaseCard :card-data="boss" /></template
    ></BaseCreatePage>
  </div>
</template>
