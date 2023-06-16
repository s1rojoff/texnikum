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
  <div class="container mx-auto lg:px-24 md:px-7 px-5 md:mt-36">
    <div class="flex justify-center lg:pb-10 pt-10">
      <span
        class="lg:text-3xl text-second text-2xl lg:font-extrabold border-main text-center md:border-b-8 border-b-4"
      >
        Hamkor Tashkilotlar
      </span>
    </div>

    <div class="overflow-scroll scrollbar-hide mt-10 ">
      <div class="flex items-center justify-between md:gap-4 gap-2 partners">
        <div v-for="(item, index) in partners" :key="index">
          <img class="md:w-32 md:h-32 h-20 w-20" :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.partners {
  width: 2000px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .partners {
    width: 1500px;
  }
}
@media (max-width: 767px){
  .partners {
    width: 1000px;
  }
}
</style>
