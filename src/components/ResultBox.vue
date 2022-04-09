<template>
  <div class="results" v-for="(result, index) in results" :key="index">
    <WordBox :result="result"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import WordBox from "./WordBox";
export default {
  components: {
    WordBox,
  },
  computed: {
    ...mapGetters({
      results: "getResults",
    }),
  },
};
</script>

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