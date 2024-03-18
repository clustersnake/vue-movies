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
  <h1>Login vue</h1>
  <div class="text-black">
    <Form @submit="onSubmit">
      <Field type="email" name="email" />
      <button>Log in</button>
    </Form>
  </div>
</template>

<style scoped>
/* code... */
</style>
