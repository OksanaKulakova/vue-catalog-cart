import { defineStore } from 'pinia'
import { ref, computed, type Ref } from 'vue'
import type { catalogItem } from '@/stores/catalog'

type State = cartItem[]

export interface cartItem {
  item: catalogItem
  count: number
}

export const useCartStore = defineStore('cart', () => {
  const state: Ref<State> = ref([])

  const countItems = computed<number>(() => state.value.reduce((sum, item) => sum + item.count, 0))

  const totalCost = computed<number>(() => {
    const sum = state.value.reduce((sum, item) => sum + item.count * item.item.price, 0)
    return Number(sum.toFixed(2))
  })

  function addItem(payload: cartItem): void {
    const itemIndex = state.value.findIndex((value) => value.item.id === payload.item.id)

    if (itemIndex < 0) {
      state.value = [...state.value, payload]
    } else {
      const newCount = state.value[itemIndex].count + payload.count
      state.value[itemIndex].count = newCount
    }
  }

  function removeItem(id: number): void {
    state.value = state.value.filter((value) => value.item.id !== id)
  }

  function clear(): void {
    state.value = []
  }

  function done(): void {
    const json = JSON.stringify(state.value)
    console.log(json)
  }

  return { state, countItems, totalCost, addItem, removeItem, clear, done }
})
