<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import LayoutView from '@/shared/ui/layout/LayoutView.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.name === "notFound"){
    router.push("/login")
  }
})

</script>

<template>
  <LayoutView>
    <RouterView />
  </LayoutView>
</template>

<style scoped>

</style>
