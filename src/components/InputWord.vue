<template>
  <div class="bottom-0 flex flex-col">
    <input
      class="border-b-2 border-b-green-300 text-center text-xl uppercase text-gray-500 outline-none focus:border-b-green-500"
      type="text"
      v-model="attempt"
      :maxlength="wordLength"
      placeholder="Digite uma palavra"
      @keyup.enter="validate()" />
    <button
      class="mt-1 rounded-sm bg-green-400 py-2 text-xl uppercase text-white disabled:bg-gray-400"
      @click="validate()"
      :disabled="disabled">
      Verificar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWordStore } from '@/stores/word'
const { validateResult, wordLength } = useWordStore()

let attempt = ref('')

function validate() {
  validateResult(attempt.value)
  attempt.value = ''
}

const disabled = computed(
  () => attempt.value.length < wordLength || attempt.value.length == 0
)
</script>

<style></style>
