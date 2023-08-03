<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
  <div class="sticky top-0 z-30">
    <BaseHeader />
  </div>
  <div
    class="bg-[url('/images/connect.jpg')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh] relative"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Biz bilan bog'lanish
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="mt-20">
    <div class="mx-auto container lg:px-24 md:px-7 px-5 md:mt-10">
      <div class="grid md:grid-cols-2 pt-10 md:pt-0 gap-10">
        <div class="rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1355116936695!2d69.27773040419449!3d41.28120560612432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba30158aa2d%3A0x54fbad6086074567!2sToshkent%20temiryo%CA%BBllari%20texnikumi!5e0!3m2!1suz!2sus!4v1686290219355!5m2!1suz!2sus"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="pt-5 md:pt-0">
          <base-input placeholder="Ism" />
          <base-input class="mt-5" placeholder="Familya" />
          <base-input class="mt-5" placeholder="Telefon" />
          <textarea
            placeholder="Tavsif"
            class="border-main resize-none w-full md:mt-4 mt-2 border rounded-2xl py-2 outline-none px-2"
            rows="5"
          ></textarea>
          <base-button class="lg:mt-4 mt-3" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <BaseFooter />
  </div>
</template>
