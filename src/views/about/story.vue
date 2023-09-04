<script setup lang="ts"></script>
<template>
  <div
    class="bg-[url('/about/about_us.jpg')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Biz haqimizda
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[2]"></div>
  </div>

  <div class="mx-auto 2xl:px-0 container px-4 lg:px-24">
    <div class="flex [@media(min-width:900px)]:justify-between [@media(min-width:900px)]:items-start gap-24 pt-20 justify-center items-center flex-wrap [@media(min-width:900px)]:flex-nowrap">
      <div class="[@media(min-width:900px)]:w-1/2">
        <video class="rounded-lg" controls>
          <source src="/videos/header2.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="[@media(min-width:900px)]:w-1/2">
        <span class="text-2xl 2xl:text-4xl text-main pb-1 font-semibold border-b-2 border-main"
          >Biz haqimizda</span
        >
        <p class="lg:text-base xl:mt-6 2xl:text-2xl mt-2">
          O’rta maxsus, kasb-hunar ta’limi Davlat ta’lim standartlari asosida o’quv, o’quv-uslubiy
          va o’quv-amaliy ishlarni tashkil etish, yosh pedagog kadrlarga o’quv-metodik yordam
          ko’rsatish, katta tajribaga ega bo’lgan pedagoglarning ish tajribalarini umumlashtirish va
          ommalashtirish, fan yo’nalishi bo’yicha mos bo’lgan oliy ta’lim muassasalari kafedralari
          va ishlab chikarish korxonalari bilan sifatli kadrlarni tayyorlash sohasida hamkorlik
          o’rnatish maqsadida kolejj direktori va o’quv ishlari buyicha direktor o’rinbosariga
        </p>
      </div>
    </div>
  </div>
</template>
