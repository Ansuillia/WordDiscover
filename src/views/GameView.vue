<template>
  <h1>Game</h1>
  <InputWord v-model="attempt" :maxlength="word.length" />

  <h3>Attempts:</h3>
  <WordTry v-for="(attempt, i) in attempts" :key="i" :word="attempt" />

  <button v-if="active" @click="AddAttempt">Try!</button>

  <div v-if="!active">
    <h3>Game over</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import InputWord from '@/components/InputWord.vue'
import WordTry from '@/components/WordTry.vue'

const word: Ref<string> = ref('tests')

const attempt: Ref<string> = ref('opa')

const attempts: Ref<[string]> = ref([''])
const active = computed(() => attempts.value.length <= word.value.length)


function AddAttempt() {
  attempts.value.push(attempt.value.toLocaleLowerCase())
}
</script>
