<script setup lang="ts">
import { toRefs, type PropType } from 'vue';
import BaseInput from '../BaseInput/index.vue'
import BaseTextarea from '../BaseTextarea/index.vue'
const props = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})
const emit = defineEmits(['handleClicked'])
toRefs(props)
function tedt(val: string) {
  if (val === 'send') {
    emit('handleClicked', 'send')
  }if (val === 'close') {
    emit('handleClicked', 'close')
  }
}
</script>
<template>
  <div v-if="props.isOpen" class="fixed top-0 left-0   w-full h-[100vh] backdrop-blur-sm bg-white/30 flex justify-center items-center ">
    <div class=" relative p-5  mx-auto my-auto modal w-[800px] h-[500px] bg-white rounded-md">
      <div>
        <p class="text-center sm:text-3xl font-light text-xl text-black">Email orqali murojaat qilish</p>
      </div>
      <div class="h-3/4 input-textarea flex justify-between gap-4 items-center">
        <div class="input w-1/2 flex flex-col gap-5">
          <BaseInput  placeholder="Ismingiz" type="text" />
          <BaseInput placeholder="Familiyangiz" type="text" />
          <BaseInput placeholder="Guruhingiz va bosqichingiz" type="text" />
          <BaseInput placeholder="Telefon raqamingiz" type="text" />
        </div>
        <div class="w-1/2">
          <BaseTextarea placeholder="Something" type="text" class="textarea h-[300px]" />
        </div>
      </div>
      <div class="text-end  flex justify-between items-center w-full h-1/4">
        <button @click="tedt('close')" class="toggle-btn text-start">
          Bekor qilish
        </button>
        <button @click="$emit('handleClicked', 'send')" class="toggle-btn text-end">
          Yuborish
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.toggle-btn {
  @apply rounded-md border-none border py-1 sm:px-10 px-3 hover:bg-blue-500/50 hover:text-white transition hover:hover:shadow-blue-500/50 shadow-lg;
}
</style>
