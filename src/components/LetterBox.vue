<template>
  <div class="results"
    v-for="(result, index) in results" :key="index">
    <div
      class="try"
      v-for="(letter, i) in [...word]"
      :key="i"
      :class="results[index][i]"
    >{{ allCorrect ? letter : '' }}
    </div>
  </div>
  <div class="try-box">
    <input type="text" v-model="teste" />
    <button @click="verify">Verificar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "teste",
      teste: "tetsa",
      status: [],
      results:[],
      allCorrect: false
    };
  },
  methods: {
    verify() {
      this.status = [];
      for (var i = 0; i < this.teste.length; i++) {
        if (this.teste[i] == this.word[i]) {
          this.status.push("correct");
          this.allCorrect = true
        } else if (this.word.includes(this.teste[i])) {
          this.status.push("outOfPlace");
          this.allCorrect = false
        } else {
          this.status.push("incorrect");
          this.allCorrect = false
        }
      }
      this.results.push(this.status)
    },
  },
};
</script>

<style>

.try {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0px 2px 0px 2px;
}

.response {
  display: inline;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 2px;
}

.results {
  display: block;
  margin-top: 5px;
}

.try-box {
  margin-top: 20px;
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