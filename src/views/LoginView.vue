<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import {useSessionStore} from '@/stores';

const sessionStore = useSessionStore();
//ecode...
const onSubmit = (values: any) => {
  console.log(JSON.stringify(values, null, 2))
  sessionStore.login(values.email);

}
</script>

<template>
  <article class="card border-2 py-10 px-8 rounded-xl">
    <header><h2 class="text-center mb-8">The Movies!</h2></header>
    <Form @submit="onSubmit" class="flex flex-col gap-3 items-start">
      <Field type="email" name="email" />
      <Field type="password" name="password" />
      <button class="border-2 rounded-md px-2 py-1 bg-green-800 hover:bg-green-200 hover:text-green-800 hover:border-green-800">Login</button>
    </Form>
  </article>
</template>

<style scoped>
/* code... */
</style>
