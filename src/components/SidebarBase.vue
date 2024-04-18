<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CartInfo from '@/components/Cart/CartInfo.vue'
</script>

<template>
  <nav>
    <RouterLink to="/" class="button button--link">Каталог</RouterLink>
    <RouterLink to="/cart" class="button button--link"><CartInfo /></RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 200px;
  flex: none;
}
</style>
