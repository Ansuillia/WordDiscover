<template>
  <div
    class="m-1 flex h-16 w-16 items-center justify-center text-xl font-bold"
    :class="status">
    <span>{{ isCorrect ? word[index] : '' }}</span>
  </div>
</template>

<script setup lang="ts">
import { EnumStatus } from '@/enums/EnumStatus'
import { useWordStore } from '@/stores/word'
import { computed } from 'vue'

const props = defineProps<{
  status: string
  index: number
}>()

const { word } = useWordStore()

let isCorrect = computed(() => props.status == EnumStatus.CORRECT)
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
