<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import KeyboardIcon from '@/components/icons/KeyboardIcon.vue'
import KeyboardBase from '@/components/KeyboardBase.vue'

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

const isOpenKeyboard: Ref<boolean> = ref(false)

function changeOpenKeyboard() {
  isOpenKeyboard.value = !isOpenKeyboard.value
}

function addNumber(num: number) {
  if (count.value === 0) {
    count.value = num
  } else {
    count.value = Number(`${count.value}${num}`)
  }
}

function removeNumber() {
  const str = String(count.value)

  if (str.length === 1) {
    count.value = 0
  } else {
    count.value = Math.trunc(count.value / 10)
  }
}

function onClickAway() {
  changeOpenKeyboard()
}
</script>

<template>
  <div class="actions">
    <button class="button button--square" @click="changeOpenKeyboard">
      <KeyboardIcon />
    </button>
    <div class="count">{{ count }}</div>
    <button class="button button--square" @click="increment">+</button>
    <button class="button button--square" :disabled="disabledButton" @click="decrement">-</button>
    <button class="button button--square" :disabled="disabledButton" @click="addToCart">
      <CartIcon />
    </button>

    <div v-if="isOpenKeyboard" v-click-away="onClickAway" class="keyboard-container">
      <KeyboardBase @add="addNumber" @remove="removeNumber" />
    </div>
  </div>
</template>

<style scoped>
.actions {
  position: relative;
  display: flex;
}

.keyboard-container {
  position: absolute;
  top: 40px;
  z-index: 10;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  flex: none;
  padding: 10px;
}
</style>
