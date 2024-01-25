<template>
  <div>
    <label for="word-try"
      >Word:
      <input
        type="text"
        name="word_try"
        placeholder="Type your try"
        :maxlength="maxlength"
        v-model="attempt"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  maxlength: Number
})

const attempt = defineModel()

</script>
