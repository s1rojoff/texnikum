<script setup lang="ts">
</script>

<template>
  <div
    class="bg-[url('/youthpolicy/scholarship.jpg')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]">
    <div class="mx-auto container top-2/3 text-start z-20">
      <p
        class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none">
        Tanlovlar, musobaqalar va stipendiyalar
      </p>
    </div>
    <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
  </div>
  <div class="mt-11 container mx-auto lg:px-24 px-5 2xl:px-5">
    <p class="text-center sm:text-4xl font-light text-2xl text-black">Tanlovlar va grantlar</p>
    <div class="mt-11 snap-x">
      <table class="border-collapse border border-slate-500 ...">
        <tbody>
          <tr>
            <td class="border border-slate-700 ...">Yurtimiz tarixi va milliy qadriyatlarga hurmat tuyg‘ulari bilan
              yo‘g‘rilgan “Ulug‘lar izidan” mavzuidagi ma’rifiy suhbatlar va shu nomdagi videoroliklar tanlovini
              o‘tkazish.</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har yili
              1 iyunga qadar</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Talaba-yoshlarda kasbiy etika va nutq odobi ko‘nikmalarini
              tarbiyalashga yo‘naltirilgan “Men notiqman” ko‘rik-tanlovini o‘tkazish,</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har yili
              20 noyabriga qadar</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">“Sport-salomatlik garovi” shiori ostida yosh o‘qituvchilar va
              talabalar o‘rtasida sport musobaqalari tashkil etish.</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har yili aprel oyida</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Talabalarning iqtidor va qobiliyatlarini yuzaga chiqarish maqsadida
              “World skils International” tizimi bo‘yicha kasblarning yosh vakillari milliy chempionatini o‘tkazish.</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har yili aprel-may</td>
          </tr>
        </tbody>
      </table>
      <p class="my-11 text-center sm:text-4xl font-light text-2xl text-black">Stipendiyalar</p>
      <table class="border-collapse border border-slate-500 ...">
        <tbody>
          <tr>
            <td class="border border-slate-700 ...">
              Ogahiy nomidagi rektor stipendiyasi</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ..."> Har o‘quv yili yakunlariga ko‘ra stipendiya nizomi asosida</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">“Eng yaxshi kitobxon” stipendiyasi</td>
            <td class="border border-slate-700 ...">Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har o‘quv yili yakunlariga ko‘ra stipendiya nizomi asosida</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">“Rektor stipendiyasi”</td>
            <td class="border border-slate-700 ..."> Universitet mablag‘lari hisobidan</td>
            <td class="border border-slate-700 ...">Har o‘quv yili fevral oyida stipendiya nizomi asosida</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
td:first-child {
  @apply w-2/4
}

td:nth-child(2) {
  @apply w-1/4
}

td:last-child {
  @apply w-1/4
}

td {
  @apply p-3
}
</style>