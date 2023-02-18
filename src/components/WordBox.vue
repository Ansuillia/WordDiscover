<template>
  <div class="flex flex-row" v-for="(result, i) in results" :key="i">
    <div v-for="(status, j) in result.status" :key="j">
      <LetterBox :status="status" :index="j" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LetterBox from '@/components/LetterBox.vue'
import { useWordStore } from '@/stores/word'

const { results } = useWordStore()
</script>
