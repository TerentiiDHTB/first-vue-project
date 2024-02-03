<script setup>
import {FormKit} from '@formkit/vue'
</script>

<template>
  <div>
    <FormKit type="form" submit-label="Sign In">
      <FormKit
        type="email"
        name="email"
        id="email"
        label="Your Name"
      />
      <FormKit
        type="password"
        name="password"
        id="password"
        label="Your Password"
      />
      <FormKit
        type="checkbox"
        name="rememberme"
        id="rememberme"
        label="Remember this device?"
      />

    </FormKit>
  </div>
</template>

<style scoped>

</style>