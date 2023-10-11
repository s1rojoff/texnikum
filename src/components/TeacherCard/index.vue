<script setup lang="ts">
import { ref } from 'vue'
const isEnter = ref<boolean>(false)
</script>
<template>
    <div class="w-72 h-64 overflow-hidden teacher-card" @mouseenter="isEnter = true" @mouseleave="isEnter = false">
        <div class="rounded-md relative cursor-pointer w-72 overflow-hidden h-64 p-5 bg-main/50 backdrop-blur-md">
            <div class="absolute left-0 right-0 mx-auto bottom-0">
                <img src="/images/user.jpg" class="w-48 h-48 mx-auto rounded-full" alt="">
                <div class="flex justify-center py-2 bg-main/70 text-white">
                    <p>Username Lastname Middlename</p>
                </div>
            </div>
        </div>
        <div class="w-72 h-64 bg-black/70 rounded-md relative overlay">
            <p class="text-center py-2 px-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro
                quaerat sequi consequatur corporis
                soluta quam id tempora laudantium sunt.</p>
        </div>
    </div>
</template>
<style scoped>
.teacher-card .overlay{
    top: 0;
    transition: top 1s;
}
.teacher-card:hover .overlay {
    top: -256px;
}
</style>