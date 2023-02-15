<template>
  <div class="word-box">
    <LetterBox
      v-for="(letter, i) in [...word]"
      :key="i"
      :letter="letter"
      :letterStatus="result.letterStatus[i]"
      :allCorrect="result.allCorrect"
    />
  </div>
</template>

<script setup></script>

<style>
.word-box {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
