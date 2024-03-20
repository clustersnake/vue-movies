<script setup lang="ts">
import TheHeader from '@/components/base/TheHeader.vue'
import TheFooter from '@/components/base/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <section>
    <slot />
  </section>
  <TheFooter />
</template>

<style scoped>
/* code... */
</style>
