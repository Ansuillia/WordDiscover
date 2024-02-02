<template>
  <button
    @click="AddAttempt"
    class="flex w-2/6 justify-center rounded-md bg-blue-600 px-10 py-3 text-lg font-bold hover:bg-blue-500 hover:text-blue-800"
  >
    Try!
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['AddAttempt'])

function AddAttempt() {
  emit('AddAttempt')
}
</script>
