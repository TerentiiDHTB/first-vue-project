<script setup>
import styles from './Layout.module.scss'
import { ref } from 'vue'

const isMenuHidden = ref(false)

const handleClick = () => {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>

<template>
  <div :class="styles.layoutWrapper">
    <div :class="styles.layoutTop">
      <img @click="handleClick" height="100%" src="@/shared/assets/logos/arrow-to-down-left.svg" alt="logo"/>
      123213

      <div :class="styles.userInfo">
        <span> Terentii </span>
        <span> terentii@mail.ru </span>
      </div>
    </div>

    <div :class="styles.pageBodyWrapper">
        <div :class="styles.layoutLeft" v-if="isMenuHidden">
          <RouterLink to="#">Example</RouterLink>
          <RouterLink to="#">Example</RouterLink>
          <RouterLink to="#">Example</RouterLink>
          <RouterLink to="#">Example</RouterLink>
        </div>
        <slot/>
    </div>

  </div>
</template>