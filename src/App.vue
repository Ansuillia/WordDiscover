<template>
  <h1>Welcome to Word Discover</h1>
  <h2>The word contains {{wordLength}} letters</h2>
  <ResultBox/>
  <InputBox />
  <ErrorsBox />
</template>

<script>
import ResultBox from './components/ResultBox'
import InputBox from './components/InputBox'
import ErrorsBox from './components/ErrorsBox'

import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    ResultBox,
    InputBox,
    ErrorsBox
  },
  computed: {
    ...mapGetters({
      wordLength: "getWordLength",
    })
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

h1, h2 {
  margin: 5px;
}
</style>
