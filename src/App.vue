<script setup lang="ts">
import { RouterView, } from 'vue-router'
import {useSessionStore} from '@/stores';
const store = useSessionStore();

</script>

<template>
  <component :is="store.layout || 'div'">
    <router-view />
  </component>
</template>

<style scoped>
</style>
