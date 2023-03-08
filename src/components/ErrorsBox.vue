<template>
  <div class="mt-2 flex flex-row" v-if="errors.size > 0">
    <h2 class="text-lg uppercase">Errors:</h2>
    <span
      class="mx-2 text-xl font-bold uppercase text-red-600"
      v-for="(error, index) in errors"
      :key="index"
      >{{ error }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useWordStore } from '@/stores/word'

const { errors } = useWordStore()
</script>
