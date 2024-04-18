<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartItem from './CartItem.vue'

const store = useCartStore()
const router = useRouter()

const cart = computed(() => store.state)
const total = computed(() => store.totalCost)

function goToCatalog() {
  router.push('/')
}

function buy(): void {
  store.done()
  goToCatalog()
}

function cancel(): void {
  store.clear()
  goToCatalog()
}

function remove(id: number): void {
  store.removeItem(id)
}
</script>

<template>
  <div class="cart-list">
    <div class="cart-list__head">
      <div class="cart-list__header">Наименование</div>
      <div class="cart-list__header">Цена</div>
      <div class="cart-list__header">Количество</div>
      <div class="cart-list__header">Стоимость</div>
    </div>
    <div class="cart-list__body">
      <CartItem
        v-for="(item, index) in cart"
        :key="index"
        :item="item.item"
        :count="item.count"
        @remove="remove"
      />
    </div>
    <div class="cart-list__total">
      <div>Итого:</div>
      <div class="cart-list__sum">{{ total }}</div>
    </div>
    <div class="cart-list__footer">
      <button class="button" @click="buy">Берем!</button>
      <button class="button" @click="cancel">Пожалуй, откажусь</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100%;

  &__head {
    display: flex;
    gap: 1em;
    padding: 1em 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 12px;

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
  }

  &__header {
    &::before {
      content: '|';
      margin-right: 2px;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-height: 60%;
    overflow-y: auto;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    margin-left: auto;
    margin-right: 10%;
    border-top: 1px solid var(--color-border);
    padding: 1em 0;
    font-size: 12px;
  }

  &__sum {
    font-size: 20px;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    margin-top: auto;
    margin-right: 10%;
  }
}
</style>
