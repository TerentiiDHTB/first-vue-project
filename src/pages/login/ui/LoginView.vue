<script setup>
import {FormKit} from '@formkit/vue'
</script>

<template>
  <div>
    <div>
      <FormKit type="form" :actions="false">
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
        <FormKit
          type="submit"
          name="submit"
          id="submitbrn"
          label="Sign In"
        />

      </FormKit>
    </div>

    <div>
      <img/>
    </div>

  </div>
</template>

<style scoped>

</style>