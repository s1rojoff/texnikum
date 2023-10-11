<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader/index.vue'
import BaseFooter from '@/components/BaseFooter/index.vue'
</script>
<template>
    <div class="sticky top-0 z-30">
        <BaseHeader />
    </div>
    <!-- <div
        class="bg-[url('/announcement/upcoming_event.png')] px-4 lg:px-24 bg-no-repeat w-full bg-center bg-cover lg:h-[75vh] sm:h-[50vh] h-[35vh] relative">
        <div class="mx-auto container top-2/3 text-start z-20">
            <p
                class="sm:text-5xl 2xl:text-7xl font-light text-white border-solid border-l-stone-400 sm:pb-2 sm:mb-2 border-b-2 text-3xl select-none">
                Yaqinlashib kelayotgan tadbirlar
            </p>
        </div>
        <div class="bg-opacityColor absolute w-full h-full top-0 left-0 z-10"></div>
    </div> -->
    <router-view></router-view>
    <div>
        <BaseFooter />
    </div>
</template>