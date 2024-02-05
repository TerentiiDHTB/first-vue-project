<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import LayoutView from '@/shared/ui/layout/LayoutView.vue'

const route = useRoute()
const router = useRouter()
const currentPath = computed(() => route.name)
watch(currentPath, newCurrentPath => {if (newCurrentPath === "notFound"){
  router.push("/login")}})


</script>

<template>
  <LayoutView>
    <RouterView />
  </LayoutView>
</template>

<style scoped>

</style>
