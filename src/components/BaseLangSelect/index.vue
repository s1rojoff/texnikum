<script setup lang="ts">
  import { ref, type PropType} from 'vue';
  interface optionInt {
    title: string;
    value: string;
  }
  defineProps({
    options: { type: Array as PropType<optionInt[]>, required: true }
  });
  const emit = defineEmits(['selectedItem']);
  const selectedElementValue = ref<string>('');
  const select = ref<boolean>(false);
  const SelectFn: any = (modalArg: any, arg: optionInt) => {
    if (modalArg == 'toogle') {
      select.value = !select.value;
    } else if (modalArg == 'noClose') {
      select.value = true;
    } else {
      select.value = false;
    }
    if (arg) {
      emit('selectedItem', arg?.value);
      selectedElementValue.value = arg?.title;
      select.value = false;
    }
  };
  window.addEventListener('click', SelectFn);
</script>

<template>
  <div class="w-10">
    <div
      @click.stop="SelectFn('toogle')"
      class="w-7 h-7 flex items-center bg-main relative rounded-full cursor-pointer">
      <div class="text-white text-sm mx-auto">{{ selectedElementValue || options[0].title }}</div>
    </div>
    <div v-if="select" class="absolute top-8 py-1 w-7 z-10 bg-main rounded-[3px]">
      <div @click.stop="SelectFn('noClose', item)" v-for="(item, i) in options" :key="i">
        <div class="flex items-start cursor-pointer w-full">
          <p class="text-white mx-auto whitespace-nowrap text-sm">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
