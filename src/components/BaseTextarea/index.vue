<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type something'
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <textarea
    :placeholder="props.placeholder"
    class="border border-[#33509d] w-full rounded-lg p-2 resize-none outline-none focus:border-sky-500"
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  ></textarea>
</template>
