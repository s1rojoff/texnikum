<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
import BaseIcon from '@/components/BaseIcon/index.vue'
</script>
<template>
  <div class="relative hidden lg:block">
    <div class="w-full -z-10 lg:mt-24 flex items-center overflow-x-hidden absolute">
      <BaseIcon class="w-[55%] right-[5%]" name="lightway" />
      <BaseIcon class="w-1/2 left-[20%]" name="lightway" />
    </div>
  </div>
  <div id="connect">
    <div class="flex justify-center pt-10 lg:pb-10">
      <span
        class="lg:text-3xl text-second text-2xl lg:font-extrabold border-main text-center md:border-b-8 border-b-4"
      >
        Bog'lanish
      </span>
    </div>
    <div class="mx-auto container lg:px-24 md:px-7 px-5 md:mt-10">
      <div class="grid md:grid-cols-2 pt-10 md:pt-0 lg:gap-32 md:gap-20">
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
          <div class="flex items-center justify-between gap-1 md:gap-3">
            <base-input placeholder="Ism va familya" />
            <base-input placeholder="E-maill" />
          </div>
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
</template>
