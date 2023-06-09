<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
  <div class="mx-auto container lg:px-24">
    <div class="grid lg:grid-cols-2 lg:gap-48">
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
      <div>
        <div class="flex items-center justify-between gap-3">
          <base-input placeholder="Ism va familya"/>
          <base-input  placeholder="E-maill"/>
        </div>
          <textarea placeholder="Tavsif" class="border-main w-full lg:mt-4 border lg:rounded-2xl py-2 outline-none px-2" rows="5"></textarea>
          <base-button class="lg:mt-4"/>
      </div>
    </div>
  </div>
</template>
