<template>
  <div class="word-box">
    <LetterBox
      v-for="(letter, i) in [...word]"
      :key="i"
      :letter="letter"
      :letterStatus="result.letterStatus[i]" 
      :allCorrect="result.allCorrect"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LetterBox from "./LetterBox.vue"

export default {
  components: {
    LetterBox,
  },
  props: {
    result: {
      letterStatus : Array,
      allCorrect: Boolean
    }
  },
  computed: {
    ...mapGetters({
      word: "getWord"
    }),
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