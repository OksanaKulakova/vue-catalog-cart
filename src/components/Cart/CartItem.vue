<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { catalogItem } from '@/stores/catalog'

const props = defineProps({
  item: {
    type: Object as PropType<catalogItem>,
    default: () => ({}) as catalogItem
  },
  count: { type: Number, default: 0 }
})

const emit = defineEmits<{
  remove: [id: number]
}>()

const cost = computed(() => (props.count * props.item.price).toFixed(2))
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__name">{{ props.item.name }}</div>
    <div class="cart-item__price">{{ props.item.price }}</div>
    <div class="cart-item__count">{{ props.count }}</div>
    <div class="cart-item__cost">{{ cost }}</div>
    <div class="cart-item__delete">
      <button class="button button--delete" @click="emit('remove', props.item.id)">X</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 1em;

  & > div {
    flex: 0 0 auto;
  }

  & > div:nth-child(1) {
    flex: 0 0 50%;
  }

  & > div:nth-child(2) {
    flex: 0 0 10%;
  }

  & > div:nth-child(3) {
    flex: 0 0 10%;
  }

  & > div:nth-child(4) {
    flex: 0 0 10%;
  }
}
</style>
