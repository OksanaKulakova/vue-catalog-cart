<script setup lang="ts">
const emit = defineEmits<{
  add: [number: number]
  remove: []
}>()

const numbers: number[] = [7, 8, 9, 4, 5, 6, 1, 2, 3]
</script>

<template>
  <div class="keyboard">
    <div class="keyboard-numbers">
      <button
        v-for="num in numbers"
        :key="num"
        class="button button--square"
        @click="emit('add', num)"
      >
        {{ num }}
      </button>
    </div>

    <button class="button keyboard-remove" @click="emit('remove')">&lt; &mdash;</button>
  </div>
</template>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: calc(122px + 4em);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  padding: 1em;

  &-numbers {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
}
</style>
