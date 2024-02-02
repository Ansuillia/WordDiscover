<template>
  <WordTry v-for="(attempt, i) in attempts" :key="i" :attempt="attempt" />
  <InputWord
    v-if="active"
    class="mt-3"
    v-model="attempt"
    :maxlength="word.length"
    :is-disabled="win"
    @add-attempt="AddAttempt(attempt)"
  />

  <div v-if="win">
    <h4>Congratulations!</h4>
  </div>
  <div v-else class="mt-5 flex items-center justify-center">
    <ButtonTry @add-attempt="AddAttempt(attempt)" :active="active" v-if="active" />

    <div v-if="!active">
      <h3>Game over</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

import ButtonTry from '@/components/ButtonTry.vue'
import InputWord from '@/components/InputWord.vue'
import WordTry from '@/components/WordTry.vue'

import { useGameStore } from '@/stores/game'

const store = useGameStore()

const { word, attempts, win } = storeToRefs(store)

const { AddAttempt } = store

const attempt = ref('')

let active = computed(() => attempts.value!.length + 1 <= word.value.length)
</script>
