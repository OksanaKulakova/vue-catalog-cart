<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()

const countItems = computed<number>(() => store.countItems)
</script>

<template>
  <div>Корзина ({{ countItems }})</div>
</template>
