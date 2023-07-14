<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
</script>
<template>
  <!-- header -->
  <div class="z-50 sticky top-0">
    <BaseHeader />
  </div>
  <!-- main -->
  <div
    class="bg-[url('/acceptance/bg-jpg.jpg')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
  >
    <div class="mx-auto containers top-2/3 text-start">
      <p
        class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl"
      >
        Qabul komissiyasi
      </p>
    </div>
  </div>
  <div class="container mx-auto lg:mt-20 px-24">
    <div>
      <p class="title">Qabul komissiyasi faoliyati</p>
      <p class="subtitle">
        Toshkent temir yo‘l texnikumi temir yo‘l transporti uchun boshlang‘ich, o‘rta, o‘rta-maxsus
        professional ta‘lim dasturlari bo‘yicha mutaxassislar tayyorlash, qayta tayyorlash va
        ularning malakasini oshirish boʼyicha tayanch professional taʼlim muassasasi hisoblanadi.
        <br />
        Texnikumlarga abituriyentlarning hujjatlarini qabul qilish jarayoni har yili 10-avgustdan
        10-sentabrga (shu kuni ham) qadar amalga oshiriladi. (2020-yil 11-noyabrdagi Vazirlar
        Mahkamasining 715-son qarori)
      </p>
    </div>
    <div>
      <p class="title">Texnikumning kunduzgi ta'lim shakliga qabul</p>
      <div>
        <img src="/acceptance/kunduzgi.png" alt="" />
      </div>
    </div>
    <div>
      <p class="title">Texnikumning sirtqi ta'lim shakliga qabul</p>
      <div>
        <img src="/acceptance/sirtqi.png" alt="" />
      </div>
    </div>
    <div>
      <p class="title">Texnikumning dual ta'lim shakliga qabul</p>
      <div>
        <img src="/acceptance/dual.png" alt="" />
      </div>
    </div>
    <div>
      <p class="subtitle last">
        • Xorijiy fuqorolar qabuli texnikumga qabul jarayonlari amalga oshirilayotgan vaqtda amalga
        oshiriladi <br />
        <br />
        • O'qishni tiklash vao’quvchilar o'qishini ko'chirish
        <br />
        <br />
        • O‘qishni ko‘chirish yoki qayta tiklash qoidaga ko‘ra, yozgi ta’til davrida, tegishli kurs
        (semestr)da o‘quv mashg‘ulotlari boshlanishiga qadar amalga oshiriladi.( Vazirlar
        Mahkamasining 466-son qarori)
        <br />
        <br />
        Toshkent temir yo'l texnikumida o'qishni ko'chirish bo'yicha o'quvchilardan arizalar
        3-iyuldan 9-avgustga qadar qabul qilinadi.
        <br />
        <br />
        • O‘qishni ko‘chirish yoki qayta tiklash o‘quvchining (o‘quvchi voyaga yetmagan bo‘lsa uning
        ota-onasidan birining yoki ularning o‘rnini bosuvchi shaxslarning) arizasi va professional
        ta’lim muassasasi tomonidan berilgan akademik ma’lumotnoma, o‘quvchining kursdan kursga
        o‘tganligi to‘g‘risidagi buyruqdan ko‘chirma, o‘quvchi pasporti nusxasi, voyaga yetmagani
        sababli pasporti bo‘lmaganda tug‘ilganlik to‘g‘risidagi guvohnoma hamda ota-onasi (yoki
        ularning o‘rnini bosuvchi shaxslar)ning doimiy yashash joyi ko‘rsatilgan pasporti nusxasidan
        iborat hujjatlar yig‘ma jildi asosida ko‘rib chiqiladi.
        <br />
        <br />
        • O‘quvchilarning o‘qishini ko‘chirish yoki qayta tiklashda professional ta’lim muassasasi
        direktori tomonidan ta’lim dasturlaridagi farqlarni yoki qarzlarni topshirish tartibi va
        muddatlari (ikki oydan ortiq bo‘lmagan), shuningdek, o‘quvchilarni o‘qitish kursi
        belgilanadi.
        <br />
        <br />
        • Professional ta’lim muassasasi miqyosida bir darajadagi ta’lim dasturlari bo‘yicha
        o‘qishni ko‘chirish yoki ta’lim shaklini o‘zgartirish masalasi mazkur professional ta’lim
        muassasasi tomonidan ko‘rib chiqiladi. <br />
        • Xalqaro ta'lim dasturlari
        <br />
        <br />
        • "O‘zbekiston temir yo‘llari" AJ homiyligi asosida Rossiya Federatsiyasi OTMlarida grant
        asosida o‘qish imkoniyati mavjud.
        <br />
        <br />
        • Ma‘lumotlarni “Xalqaro aloqalar” bo’limining 71-299-05-40 telefon raqami yoki
        “Qabul-2023(RF) ” -- "O‘zbekiston temir yo‘llari" AJ homiyligi asosida Rossiya Federatsiyasi
        OTMlarida 2023 yil qabuliga oid ma‘lumotlarni olish bo‘yicha ochilgan
        <span><a href="https://t.me/+A5gCSVvpVjYyNDQy" class="text-main">telegram guruhi</a></span>
        telegram guruhi orqali olishingiz mumkin. <br />
        <br />
        • Qabul komissiyasi haqida ma‘lumotlarni 71-299-05-67 telefon raqami yoki Toshkent temir
        yo'l texnikumi
        <span><a href="https://t.me/eduttyt" class="text-main">telegram kanali</a></span> orqali
        olishingiz mumkin.
      </p>
    </div>
  </div>
  <!-- footer -->
  <div>
    <BaseFooter />
  </div>
</template>
<style>
.title {
  @apply sm:text-5xl font-light text-black border-solid border-l-stone-400 sm:pb-10 sm:mb-2 border-b-2 text-3xl text-center sm:pt-10;
}
.subtitle {
  @apply sm:text-2xl mt-12;
}
.subtitle.last {
  @apply sm:text-2xl mt-12   border-solid border-l-stone-400 border-t-2 pt-10;
}
</style>