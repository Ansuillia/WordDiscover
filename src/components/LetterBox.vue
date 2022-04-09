<template>
  <div
    class="letter-box"
    v-for="(letter, i) in [...word]"
    :key="i"
    :class="letterStatus[i]"
  >
    <span class="letter">{{ allCorrect ? letter : "" }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    letterStatus: Array,
    allCorrect: Boolean
  },
  computed: {
    ...mapGetters({
      word: "getWord"
    }),
  },
};
</script>

<style>

.letter-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60px;
  margin: 2px;
}

.letter {
  font-weight: bold;
  text-transform: uppercase;
}

.correct {
  background-color: green;
  color: white;
}

.incorrect {
  background-color: red;
  color: azure;
}

.outOfPlace {
  background-color: orange;
  color: aliceblue;
}
</style>