<template>
  <div
    class="flex h-16 w-16 items-center justify-center font-bold text-xl m-1"
    :class="status">
    <span>{{ status == EnumStatus.CORRECT ? word[index] : '' }}</span>
  </div>
</template>

<script setup lang="ts">
import { EnumStatus } from '@/enums/EnumStatus'
import { useWordStore } from '@/stores/word'

defineProps<{
  status: string
  index: number
}>()

const { word } = useWordStore()
</script>

<style>
.correct {
  @apply bg-green-500 text-white;
}

.incorrect {
  @apply bg-red-500 text-white;
}

.outOfPlace {
  @apply bg-orange-500 text-white;
}
</style>
