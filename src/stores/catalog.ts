import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type State = catalogItem[]

export interface catalogItem {
  id: number
  name: string
  price: number
}

export const useCatalogStore = defineStore('catalog', () => {
  const state: Ref<State> = ref([
    { id: 1, name: 'Продукт 1', price: 111.11 },
    { id: 2, name: 'Продукт 2', price: 222.22 },
    { id: 3, name: 'Продукт 3', price: 333.33 },
    { id: 4, name: 'Продукт 4', price: 444 },
    { id: 5, name: 'Продукт 5', price: 555 },
    { id: 6, name: 'Продукт 6', price: 666 },
    { id: 7, name: 'Продукт 7', price: 777 },
    { id: 8, name: 'Продукт 8', price: 888 },
    { id: 9, name: 'Продукт 9', price: 999 },
    { id: 10, name: 'Продукт 10', price: 1000 },
    { id: 11, name: 'Продукт 11', price: 2000 }
  ])

  return { state }
})
