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
  },
  size:{
    type: String,
    default: 'md'
  }
})
</script>

<template>
  <div>
    <input
      class="border-main border w-full rounded-2xl py-1 outline-none px-2"
      :class="{'py-2' : (props.size == 'md'), 'py-1' :(props.size == 'sm') }"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
