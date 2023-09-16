<script setup lang="ts">
import { useInvestmentPage } from './composable'
import { useAboutStore } from '@/stores'
import { storeToRefs } from 'pinia'
const { investment } = useInvestmentPage()
const store: any = useAboutStore()
storeToRefs(store)
</script>
<template>
  <div
    class="bg-[url('/international/invest.webp')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh] relative"
  >
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
      >
        Jalb etilgan sarmoyalar va grantlar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="realtive px-5 2xl:px-5 lg:px-24  container mx-auto mt-10">
    <!-- ------------------------------- FOR PC -------------------------------------- -->
    <div class="forPC hidden lg:block">
      <div class="flex mb-2 sticky top-[143px] bg-white z-20">
        <p class="names w-1/4 p-1 flex justify-center items-center border border-opacityColor">
          Xalqaro grant nomi
        </p>
        <p class="names w-1/4 p-1 flex justify-center items-center border border-opacityColor">
          Amal qilayotgan yo'nalishi
        </p>
        <p class="names w-1/4 p-1 flex justify-center items-center border border-opacityColor">
          Qaysi o'quv yilidan boshlab, necha yil davom etadi? (muddat)
        </p>
        <p class="names w-1/4 p-1 flex justify-center items-center border border-opacityColor">
          Universitet tomonidan biriktirilgan rahbar F.I.SH. va lavozimi
        </p>
      </div>
      <div
        class="flex border mb-3 border-opacityColor z-10"
        v-for="(invest, index) in investment"
        :key="index"
      >
        <p class="border border-l-opacityColor bg-white w-1/4 p-1 grantName">
          {{ invest.grantName }}
        </p>
        <p class="border border-l-opacityColor bg-white w-1/4 p-1 direction">
          {{ invest.direction }}
        </p>
        <p class="border border-l-opacityColor bg-white w-1/4 p-1 period">{{ invest.period }}</p>
        <p class="border border-l-opacityColor bg-white w-1/4 p-1 leader">{{ invest.leader }}</p>
      </div>
    </div>

    <!-- -------------------------------- FOR MOBILE ----------------------------------------- -->
    <div class="firMobil block lg:hidden">
      <div>
        <table class="table-fixed border-collapse border border-slate-500 mb-4" v-for="(invest, index) in investment" :key="index">
          <thead>
            <tr class="text-center">
              <th class="border border-slate-600 bg-opacityColor">Xalqaro grant nomi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="p-2">
              <td class="border border-slate-700 pr-2">{{ invest.grantName }}</td>
            </tr>
          </tbody>
          <thead>
            <tr class="text-center">
              <th class="border border-slate-600 bg-opacityColor">Amal qilayotgan yo'nalishi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 pr-2">{{ invest.direction }}</td>
            </tr>
          </tbody>
          <thead>
            <tr class="text-center">
              <th class="border border-slate-600 bg-opacityColor">Qaysi o'quv yilidan boshlab, necha yil davom etadi? (muddat)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 pr-2">{{ invest.period }}</td>
            </tr>
          </tbody>
          <thead>
            <tr class="text-center">
              <th class="border border-slate-600 bg-opacityColor">Universitet tomonidan biriktirilgan rahbar F.I.SH. va lavozimi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 pr-2">{{ invest.leader }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>