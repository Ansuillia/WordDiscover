<template>
  <div class="mx-auto flex flex-col">
    <h1 class="my-3 text-center text-2xl">Bem vindo ao WordDiscover!</h1>
    <hr class="mb-5" />
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
import { onBeforeMount } from 'vue'
import InputWord from '@/components/InputWord.vue'
import WordBox from '@/components/WordBox.vue'
import ErrorsBox from '@/components/ErrorsBox.vue'
import { useWordStore } from '@/stores/word'

const { setWord } = useWordStore()
onBeforeMount(() => {
  setWord()
})

</script>
