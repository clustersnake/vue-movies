<script setup lang="ts">
import { RouterView, } from 'vue-router'
// import layouts from '@/layouts';
import {useSessionStore} from '@/stores';
const store = useSessionStore();

</script>

<template>
  <component :is="store.layout || 'div'" class="">
    <router-view />
  </component>
</template>

<style scoped>
</style>
