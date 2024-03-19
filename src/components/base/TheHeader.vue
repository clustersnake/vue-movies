<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section
    class="w-full border-b border-gray-500 py-2 md:mb-4 lg:mb-6 xl:mb-8 mb-2"
  >
    <nav class="container flex mx-auto justify-between">
      <RouterLink to="/">
        <img alt="logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
      </RouterLink>
      <h3 class="">The Movies!</h3>
      <RouterLink to="/">
      Logout
      </RouterLink>
    </nav>
  </section>
</template>

<style></style>
