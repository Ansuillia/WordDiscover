<template>
  <h1>Welcome to Word Discover</h1>
  <LetterBox/>
</template>

<script>
import LetterBox from './components/LetterBox'

export default {
  name: 'App',
  components: {
    LetterBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
