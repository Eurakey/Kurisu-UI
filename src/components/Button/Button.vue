<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :is-disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
  <slot></slot>
  </button>

</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import type { ButtonProps } from './types';
import { ref, onMounted } from 'vue';

defineOptions({
  name: 'vkButton'
});

const {nativeType = 'button'} = defineProps<ButtonProps>();

const _ref = ref<HTMLButtonElement>();

onMounted(() => {
  console.log(_ref.value);
});

defineExpose({
  ref: _ref
});

</script>

<style lang="less" scoped></style>
