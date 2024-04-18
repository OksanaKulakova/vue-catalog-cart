<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import CartIcon from '@/components/icons/CartIcon.vue'

const emit = defineEmits<{
  addToCart: [count: number]
}>()

const count: Ref<number> = ref(0)

const disabledButton = computed<boolean>(() => count.value === 0)

function increment(): void {
  count.value++
}

function decrement(): void {
  if (count.value > 0) {
    count.value--
  }
}

function addToCart(): void {
  emit('addToCart', count.value)
  count.value = 0
}
</script>

<template>
  <div class="actions">
    <div class="count">{{ count }}</div>
    <button class="button button--square" @click="increment">+</button>
    <button class="button button--square" :disabled="disabledButton" @click="decrement">-</button>
    <button class="button button--square" :disabled="disabledButton" @click="addToCart">
      <CartIcon />
    </button>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  flex: none;
}
</style>
