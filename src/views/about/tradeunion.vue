<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue'
const boss = {
  lavozim: "Toshkent temir yo'l transporti texnikumining Kasaba uyushmasi raisi",
  url: '/images/user.jpg',
  name: 'Firstname Lastname',
  phone: '+99871 299 07 17',
  email: 'example@gmail.com',
  qabul: 'Ish kunlari'
}
</script>

<template>
  <div
      class="bg-[url('/about/strcuture.webp')] lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh]"
    >
      <div class="mx-auto container top-2/3 text-start z-20">
        <p
          class="sm:text-5xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none"
        >
          Kasaba uyushmasi
        </p>
      </div>
      <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-[3]"></div>
    </div>
  <div class="container lg:px-24 mx-auto">
    <div class="lg:mt-5">
      <BaseCard :card-data="boss" />
    </div>
    <p class="text-main text-center mt-10 text-3xl border-b-2 pb-2 border-main font-semibold">
      Kasaba uyushmasi haqida ma'lumot
    </p>
    <p class="text-base lg:mt-4">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
      alteration in some form, by injected humour, or randomised words which don't look even
      slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators
      on the Internet tend to repeat predefined chunks as necessary, making this the first true
      generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
      handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
      generated Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc. Contrary to popular belief, Lorem Ipsum is not simply random
      text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
      years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
      up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
      through the cites of the word in classical literature, discovered the undoubtable source.
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
      Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
      of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
      dolor sit amet..", comes from a line in section 1.10.32.
    </p>
  </div>
</template>
