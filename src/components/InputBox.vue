<template>
  <div class="inputBox">
    <input class="word" type="text" 
      v-model="value" 
      :maxlength="maxLength"
      @keyup.enter="verifyResult(value)"/>
    <button @click="verifyResult(value)">Verificar</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters({
      maxLength: "getWordLength",
    })
  },
  methods: {
    ...mapActions([
        'verifyResult'
    ])
  },
};
</script>

<style>
.inputBox {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
}

.word {
  height: 25px;
  width: 15%;
}
</style>