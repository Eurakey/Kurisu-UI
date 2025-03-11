<script setup lang="ts">
import Button from './components/Button/Button.vue';

import { ref, onMounted } from 'vue';
import type { ButtonInstance } from './components/Button/types';
import Collapse from './components/Collapse/Collapse.vue';
import Item from './components/Collapse/CollapseItem.vue';

const buttonRef = ref<ButtonInstance>();
const openedValue = ref(['a']);

onMounted(() => {
  console.log('ButtonRef',buttonRef.value?.ref);
});
</script>

<template>
  <main class="body">
    <!-- <Button ref="buttonRef" @click="open">Test Button</Button>
    <Button plain @click="close">Plain Button</Button> -->
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>

    <Collapse v-model="openedValue" accordion>
      <Item name="a" title="Title A">
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </Item>
      <Item name="b" title="Title B">
        <div> this is bbbbb test </div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </Item>
    </Collapse>
    {{openedValue}}
  </main>
</template>

<style scoped>
.body {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   flex-wrap: wrap;
   width: 70vw;
   margin: 0 auto;
}
</style>
