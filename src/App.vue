<template>
  <div class="body">
    <Button ref="buttonRef" type="primary" size="large">dsfa</Button>
    <Button ref="buttonRef" type="primary" size="small" plain round>dsfa</Button>
    <Button ref="buttonRef" type="success" size="medium" round>dsfa</Button>
    <Button ref="buttonRef" type="primary" size="small" plain round>dsfa</Button>
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue';
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/Button/types';

const buttonRef = ref<ButtonInstance>();

onMounted(() => {
  console.log('ButtonRef',buttonRef.value?.ref);
});
</script>

<style scoped>
.body {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}
</style>
