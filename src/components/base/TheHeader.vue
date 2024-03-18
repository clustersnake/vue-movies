<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="w-full border-b border-gray-500 flex justify-center py-2 md:mb-4 lg:mb-6 xl:mb-8 mb-2"
  >
    <nav class="container flex items-center">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
      </RouterLink>
      <h3 class="text-center w-full">The Movies!</h3>
    </nav>
  </section>
</template>

<style></style>
