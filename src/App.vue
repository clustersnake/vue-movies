<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/base/TheHeader.vue'
import TheFooter from '@/components/base/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style scoped>
</style>
