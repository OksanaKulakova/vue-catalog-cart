<script setup lang="ts">
import CartList from './CartList.vue'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
</script>

<template>
  <CartList v-if="store.countItems"> </CartList>
  <div v-else>Корзина пуста</div>
</template>
