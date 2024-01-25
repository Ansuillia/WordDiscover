<template>
  <div class="flex">
    <div class="flex flex-row" v-for="letter, i in word" :key="i">{{ letter.toUpperCase() }}</div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  word: String
})
</script>