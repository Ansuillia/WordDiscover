<template>
  <div class="word-box">
    <LetterBox 
      :letterStatus="result.letterStatus" 
      :allCorrect="result.allCorrect"/>
  </div>
</template>

<script>
import LetterBox from "./LetterBox.vue";
export default {
  components: {
    LetterBox,
  },
  props: {
    result: {
      letterStatus : Array,
      allCorrect: Boolean
    }
  }
};
</script>

<style>
.word-box {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>