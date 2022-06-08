<template>
  <h1>Welcome to Word Discover</h1>
  <h2>The word contains {{wordLength}} letters</h2>
  <ResultBox v-if="initiated" />
  <InputBox />
  <ErrorsBox />
</template>

<script setup>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

h1, h2 {
  margin: 5px;
}
</style>
