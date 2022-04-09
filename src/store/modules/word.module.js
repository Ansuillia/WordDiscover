import Utils from '../../utils/index'

export default {
  state: {
    word: 'teste',
    results: [{
      letterStatus: ["correct","outOfPlace","incorrect","outOfPlace","correct"],
      allCorrect: false
    }],
    errors: new Set(['a', 'b', 'c']),
    win: true
  },
  getters: {
    getWord(state){
      return state.word
    },
    getResults(state) {
      return state.results
    },
    getErrors(state) {
      return state.errors
    },
    getWin(state) {
      return state.win
    },
    getWordLength(state) {
      return state.word.length
    }
  },
  mutations: {
    setResult(state, result) {
      state.results.push(result)
    },
    setErrors(state, errors) {
      state.errors = errors
    },
    setWin(state, isAllCorrect) {
      state.win = isAllCorrect
    }
  },
  actions: {
    verifyResult({ commit, state }, tryWord) {

      var result = Utils.VerifyResult(state.word, tryWord)

      commit('setResult', result.letterResult)
      commit('setErrors', result.errors)
      commit('setWin', result.allCorrect)
    }
  }
}