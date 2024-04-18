<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useCatalogStore } from '@/stores/catalog'
import json from '@/stores/catalog.json'
import CatalogItem from './CatalogItem.vue'

const store = useCatalogStore()
const catalog = computed(() => store.state)

onBeforeMount(() => {
  const data = JSON.parse(JSON.stringify(json))

  store.$patch({
    state: data
  })
})
</script>

<template>
  <div class="catalog-list">
    <div class="catalog-list__head">
      <div class="catalog-list__header">Наименование</div>
      <div class="catalog-list__header">Цена</div>
      <div class="catalog-list__header">Действия</div>
    </div>
    <div class="catalog-list__body">
      <CatalogItem v-for="item in catalog" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog-list {
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
      flex: 0 0 20%;
    }

    & > div:nth-child(3) {
      flex: 0 0 30%;
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
    gap: 8px;
    max-height: 80%;
    overflow-y: auto;
  }
}
</style>
