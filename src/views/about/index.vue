<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import Management from '@/views/about/management.vue'
import Department from '@/views/about/departments.vue'
</script>

<template>
  <div class="sticky top-0 z-10">
    <div class="">
      <BaseHeader />
    </div>
  </div>
  <div class="bg-[url('/images/header.jpg')] h-screen bg-center bg-contain">
    <div class="text-center top-1/2">
      <p class="text-4xl font-extrabold text-white">"O'zbekiston Temir Yo'llari" AJ</p>
      <p class="text-4xl font-extrabold text-white">Toshkent Temir Yo'l Texnikumi</p>
    </div>
  </div>
  <div class="mx-auto container lg:px-24">
    <div class="flex justify-between items-start gap-24 pt-20">
      <div class="w-1/2">
        <video class="rounded-lg" controls>
          <source src="/videos/header2.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="w-1/2">
        <span class="text-2xl text-main pb-1 font-semibold border-b-2 border-main"
          >Biz haqimizda</span
        >
        <p class="lg:text-base mt-2">
          O’rta maxsus, kasb-hunar ta’limi Davlat ta’lim standartlari asosida o’quv, o’quv-uslubiy
          va o’quv-amaliy ishlarni tashkil etish, yosh pedagog kadrlarga o’quv-metodik yordam
          ko’rsatish, katta tajribaga ega bo’lgan pedagoglarning ish tajribalarini umumlashtirish va
          ommalashtirish, fan yo’nalishi bo’yicha mos bo’lgan oliy ta’lim muassasalari kafedralari
          va ishlab chikarish korxonalari bilan sifatli kadrlarni tayyorlash sohasida hamkorlik
          o’rnatish maqsadida kolejj direktori va o’quv ishlari buyicha direktor o’rinbosariga
        </p>
      </div>
    </div>

    <!-- Management section -->
    <div>
      <management />
    </div>
    <!-- Departments section -->
    <div>
      <department/>
    </div>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>
