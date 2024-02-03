<script setup>
import styles from './Layout.module.scss'
</script>

<template>
  <div :class="styles.layoutWrapper">
    <div :class="styles.layoutTop">
      123213

      <div :class="styles.userInfo">
        <span> Terentii </span>
        <span> terentii@mail.ru </span>
      </div>
    </div>

    <div :class="styles.layoutLeft">4345</div>

    <slot />
  </div>
</template>
