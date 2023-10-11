<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAnnouncementStore } from '@/views/announcement/store'
const store = useAnnouncementStore()
const { newsId } = storeToRefs(store)
import { useAnnouncementFn } from '@/views/announcement/composable';
const { newsData } = useAnnouncementFn()
</script>
<template>
    <div class="lg:px-24 container mx-auto pt-5">
        <h3 class="text-2xl font-semibold text-neutral-700 pb-2">{{ newsData[newsId].title }}</h3>
        <span class="text-neutral-500">
            {{ newsData[newsId].newsDate }}
        </span>
        <img :src="newsData[newsId].imgUrl" class="w-full h-[70dvh] py-2 object-fill" alt="">
        <p class="text-base text-neutral-600 font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id quae ut dolor tempore eligendi nisi voluptatem
            veniam recusandae corrupti distinctio unde repellat excepturi cum facilis, ducimus atque omnis magnam.
            Exercitationem iusto aperiam voluptatem eligendi cupiditate repellendus, tempora eius quaerat ab laborum quam
            libero a quas perferendis, ex fugiat. Omnis veniam dicta cumque totam, sint expedita voluptatibus ipsum
            dignissimos? Maiores consequuntur quibusdam est expedita tempore voluptatem, vel nam deserunt corrupti porro
            ipsum! Sequi, quo provident nisi labore a voluptatibus cupiditate eligendi odio ipsum voluptate ipsam nemo est
            perspiciatis cumque distinctio corporis dolor numquam quae velit consequuntur et? Rerum, architecto ratione!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id quae ut dolor tempore eligendi nisi voluptatem
            veniam recusandae corrupti distinctio unde repellat excepturi cum facilis, ducimus atque omnis magnam.
            Exercitationem iusto aperiam voluptatem eligendi cupiditate repellendus, tempora eius quaerat ab laborum quam
            libero a quas perferendis, ex fugiat. Omnis veniam dicta cumque totam, sint expedita voluptatibus ipsum
            dignissimos? Maiores consequuntur quibusdam est expedita tempore voluptatem, vel nam deserunt corrupti porro
            ipsum! Sequi, quo provident nisi labore a voluptatibus cupiditate eligendi odio ipsum voluptate ipsam nemo est
            perspiciatis cumque distinctio corporis dolor numquam quae velit consequuntur et? Rerum, architecto ratione!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia id quae ut dolor tempore eligendi nisi voluptatem
            veniam recusandae corrupti distinctio unde repellat excepturi cum facilis, ducimus atque omnis magnam.
            Exercitationem iusto aperiam voluptatem eligendi cupiditate repellendus, tempora eius quaerat ab laborum quam
            libero a quas perferendis, ex fugiat. Omnis veniam dicta cumque totam, sint expedita voluptatibus ipsum
            dignissimos? Maiores consequuntur quibusdam est expedita tempore voluptatem, vel nam deserunt corrupti porro
            ipsum! Sequi, quo provident nisi labore a voluptatibus cupiditate eligendi odio ipsum voluptate ipsam nemo est
            perspiciatis cumque distinctio corporis dolor numquam quae velit consequuntur et? Rerum, architecto ratione!
        </p>
    </div>
</template>