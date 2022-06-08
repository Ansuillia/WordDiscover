import cloneDeep from 'lodash.clonedeep'
import { reactive, readonly } from 'vue'
import { verifyResult } from '@/utils'

const initialState = {
    word: "",
    win: false,
    results: [],
    errors: new Set()
}

const _state = reactive(cloneDeep(initialState))

const state = readonly(_state)

const actions = {
    setWord(word){
        _state.word = word
    },
    verify(testWord){
        var result = verifyResult(_state.word, testWord)

        _state.results.push(result.letterResult)

        result.errors.forEach(error => {
            _state.errors.add(error)
        });

        _state.win = result.letterResult.allCorrect
    }
}

export { state, actions }