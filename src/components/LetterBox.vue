<template>
  <div class="results" v-for="(result, index) in results" :key="index">
    <div
      class="try"
      v-for="(letter, i) in [...word]"
      :key="i"
      :class="result.status[i]"
    >
      <span class="letter">{{ result.allCorrect ? letter : "" }}</span>
    </div>
  </div>
  <div class="try-box">
    <input type="text" v-model="teste" />
    <button @click="verify">Verificar</button>
  </div>
  <div>
    <span class="error" v-for="(error, index) in errors" :key=index>{{error}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "teste",
      teste: "teste",
      results: [
        {
          status: [],
          allCorrect: false,
        },
      ],
      errors: new Set()
    };
  },
  methods: {
    verify() {
      var result = { status: [], allCorrect: false };

      for (var i = 0; i < this.teste.length; i++) {
        if (this.teste[i] == this.word[i]) {
          result.status.push("correct");
          result.allCorrect = true;
        } else if (this.word.includes(this.teste[i])) {
          result.status.push("outOfPlace");
          result.allCorrect = false;
        } else {
          result.status.push("incorrect");
          result.allCorrect = false;

          this.errors.add(this.teste[i])
        }
      }

      this.results.push(result);
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

.letter {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  /* align-self: center; */
  justify-content: center;
  padding: 10px;
  text-transform: capitalize;
}

.error {
  font-size: 15px;
  font-weight: bold;
  color: red;
}

.results {
  display: block;
  margin-top: 4px;
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