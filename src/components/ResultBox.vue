<template>
  <div class="results" v-for="(result, index) in results" :key="index">
    <WordBox :result="result" :word="word" />
  </div>
</template>

<script setup></script>

<style>
.results {
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  align-content: center;
  justify-content: center;
  margin-top: 3px;
}
</style>
