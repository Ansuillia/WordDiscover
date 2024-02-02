<template>
  <div class="flex justify-center px-6">
    <label class="w-3/6 text-lg" for="attempt"
      >Word:
      <input
        class="w-full rounded-md border border-green-800 px-3 py-2"
        type="text"
        name="atttempt"
        placeholder="Type your try"
        autofocus
        :maxlength="maxlength"
        v-model="attempt"
        :disabled="isDisabled"
        @keyup.enter="AddAttempt"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  maxlength: Number,
  isDisabled: Boolean
})

const emit = defineEmits(['AddAttempt'])

function AddAttempt() {
  emit('AddAttempt')
  attempt.value = ''
}

const attempt = defineModel()
</script>
