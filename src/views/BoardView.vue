<template>
  <div class="flex flex-col mx-auto">
    <h1 class="text-2xl text-center my-3">Bem vindo ao WordDiscover!</h1>
    <hr class="mb-5">
    <div class="min-h-[50vh]">
      <WordBox />
    </div>
    <InputWord />
    <div class="mx-auto">
      <ErrorsBox />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputWord from '@/components/InputWord.vue'
import WordBox from '@/components/WordBox.vue'
import ErrorsBox from '@/components/ErrorsBox.vue'
</script>
