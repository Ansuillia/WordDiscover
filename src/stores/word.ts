import { EnumStatus } from '@/enums/EnumStatus'
import { defineStore } from 'pinia'

class Result {
  status: EnumStatus[] = []
  correct: boolean = false
}

export const useWordStore = defineStore('word', {
  state: () => ({
    wordGame: '',
    results: [] as Result[],
    errors: new Set(),
  }),
  actions: {
    validateResult(attempt: string) {
      if (attempt.length == 0) {
        return
      }

      attempt = attempt.toUpperCase()

      const result = new Result()

      for (let i = 0; i < attempt.length; i++) {
        if (attempt[i] == this.word[i]) {
          result.status.push(EnumStatus.CORRECT)
          result.correct = true
        } else if (this.word.includes(attempt[i])) {
          result.status.push(EnumStatus.OUTOFPLACE)
          result.correct = false
        } else {
          result.status.push(EnumStatus.INCORRECT)
          result.correct = false
          this.errors.add(attempt[i])
        }
      }

      this.results.push(result)
    },
  },
  getters: {
    word: (state) => state.wordGame.toUpperCase(),
    wordLength: (state) => state.word.length,
  },
})
