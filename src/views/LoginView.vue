<script setup lang="ts">
import { useSessionStore } from '@/stores'
import { useForm, useField } from 'vee-validate'
import { string, object } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const sessionStore = useSessionStore()

const { errors, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    object({
      email: string().email(),
      password: string().min(6).max(8)
    })
  )
})

// const [ email, emailAttrs ] = defineField('email')
const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit((values: any) => {
  values.email.endsWith('@gmail.com')
  // console.log(JSON.stringify(values, null, 2))

  sessionStore.login(values.email)
})
</script>

<template>
  <article class="card border-2 py-10 px-8 rounded-xl">
    <header><h2 class="text-center mb-8">The Movies!</h2></header>
    <form @submit="onSubmit" class="flex flex-col gap-3 items-start" novalidate>
      <input type="email" name="email" v-model="email" class="text-black" />
      <div>{{ errors.email }}</div>
      <input type="password" name="password" v-model="password" class="text-black" />
      <div>{{ errors.password }}</div>
      <button
        class="border-2 rounded-md px-2 py-1 bg-green-800 hover:bg-green-200 hover:text-green-800 hover:border-green-800"
      >
        Login
      </button>
    </form>
  </article>
</template>

<style scoped>
/* code... */
</style>
