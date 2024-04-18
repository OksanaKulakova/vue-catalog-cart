import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type State = catalogItem[]

export interface catalogItem {
  id: number
  name: string
  price: number
}

export const useCatalogStore = defineStore('catalog', () => {
  const state: Ref<State> = ref([])

  return { state }
})
