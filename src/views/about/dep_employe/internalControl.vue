<script setup lang="ts">
import BaseCreatePage from '@/components/BaseCreatePage/index.vue'
import { usedepEmploye } from '@/views/about/dep_employe/composable'
import BaseCard from '@/components/BaseCard/index.vue'
const { depEmployes } = usedepEmploye()
const boss = {
  lavozim: "O‘quv-uslubiy bo‘lim boshlig'i",
  url: '/images/user.jpg',
  name: 'Firstname Lastname',
  phone: '97-000-00-00',
  email: 'example@gmail.com'
}
</script>
<template>
  <BaseCreatePage :page-info="depEmployes[6]" info-name="Bo'lim">
    <template #boss>
      <BaseCard :card-data="boss" />
    </template>
  </BaseCreatePage>
</template>
