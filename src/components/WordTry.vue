<template>
  <div class="mb-3 flex justify-center space-x-4">
    <div
      class="flex h-24 w-24 items-center justify-center"
      :class="EnumStatus[props.attempt.result[i]!.status].toLowerCase()"
      v-for="(letter, i) in props.attempt!.word"
      :key="i"
    >
      <span class="text-4xl font-bold">{{ letter.toUpperCase() }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AttemptResult } from '@/types/interfaces/AttemptResult'
import { EnumStatus } from '@/types/enums/EnumStatus'

const props = defineProps<{
  attempt: AttemptResult
}>()
</script>

<style scoped>
.correct {
  @apply bg-green-600;
}
.incorrect {
  @apply bg-red-600;
}
.outoforder {
  @apply bg-yellow-600;
}
</style>
