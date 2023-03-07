<template>
  <div class="wordboxDiv flex flex-row" v-for="(result, i) in results" :key="i">
    <LetterBox
      v-for="(status, j) in result.status"
      :key="j"
      :status="status"
      :index="j" />
  </div>
</template>

<script setup lang="ts">
import LetterBox from '@/components/LetterBox.vue'
import { useWordStore } from '@/stores/word'

const { results } = useWordStore()
</script>
