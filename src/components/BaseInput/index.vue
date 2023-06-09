<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue:{
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <input
      class="border-main border w-full rounded-2xl py-2 outline-none px-2"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
