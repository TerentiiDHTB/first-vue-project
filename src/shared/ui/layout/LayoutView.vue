<script setup>
import styles from "./Layout.module.scss"


</script>

<template>
  <div :class="styles.layoutWrapper">
    <div :class="styles.layoutTop">
      123213
    </div>

    <div :class="styles.layoutLeft">
      4345
    </div>

    <slot/>
  </div>
</template>