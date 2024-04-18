<script setup lang="ts">
import { type PropType } from 'vue'
import type { catalogItem } from '@/stores/catalog'
import CatalogActions from './CatalogActions.vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  item: {
    type: Object as PropType<catalogItem>,
    default: () => ({}) as catalogItem
  }
})

const store = useCartStore()

function addToCart(count: number): void {
  store.addItem({ item: props.item, count: count })
}
</script>

<template>
  <div class="catalog-item">
    <div class="catalog-item__name">{{ props.item.name }}</div>
    <div class="catalog-item__price">{{ props.item.price }}</div>
    <div class="catalog-item__actions"><CatalogActions @addToCart="addToCart" /></div>
  </div>
</template>

<style lang="scss" scoped>
.catalog-item {
  display: flex;

  & > div {
    flex: 0 0 auto;
    padding: 6px;
  }

  & > div:nth-child(1) {
    flex: 0 0 50%;
  }

  & > div:nth-child(2) {
    flex: 0 0 20%;
  }

  & > div:nth-child(3) {
    flex: 0 0 30%;
  }
}
</style>
