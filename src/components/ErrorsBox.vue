<template>
  <div class="flex flex-row mt-2" v-if="errors.size > 0">
    <h2 class="text-lg uppercase">Erros:</h2>
    <span class="text-red-600 text-xl uppercase font-bold mx-2" v-for="(error, index) in errors" :key="index">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { useWordStore } from '@/stores/word';

const { errors } = useWordStore()
</script>

