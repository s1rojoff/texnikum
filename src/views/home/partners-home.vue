<script setup lang="ts">
import { ref } from 'vue'

const partners = ref<string[]>([
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png',
  '/partners/partner1.png',
  '/partners/partner2.png',
  '/partners/partner3.png',
  '/partners/partner4.png',
  '/partners/partner5.png',
  '/partners/partner6.png'
])
</script>

<template>
  <div class="container mx-auto lg:px-24 md:px-7 mt-36">
    <div class="flex justify-center lg:pb-14 md:pb-9">
      <span
        class="lg:text-3xl text-second lg:font-extrabold border-main text-center border-b-8 pb-1"
      >
        Hamkor Tashkilotlar
      </span>
    </div>

    <div class="overflow-scroll scrollbar-hide">
      <div class="flex items-center justify-between md:gap-4 partners lg:gap-10">
        <div v-for="(item, index) in partners" :key="index">
          <img class="lg:w-40 lg:h-40" :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbar-hide{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.partners{
  width: 2500px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .partners{
  width: 1500px;
}
}
</style>