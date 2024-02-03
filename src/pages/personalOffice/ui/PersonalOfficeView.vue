<template>
  <div>
    test
    test
    tset
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/shared/api/ProductService.js';

onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();


</script>