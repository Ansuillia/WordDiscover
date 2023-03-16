import { EnumStatus } from '@/enums/EnumStatus'
import _ from 'lodash'
import { defineStore } from 'pinia'

class Result {
  status: EnumStatus[] = []
  correct: boolean = false
}

export const useWordStore = defineStore('word', {
  state: () => ({
    wordGame: '',
    results: [] as Result[],
    errors: new Set<string>(),
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
          this.errors = new Set<string>([...this.errors, attempt[i]].sort())
        }
      }

      this.results.push(result)
    },
    setWord() {
      fetch('/src/utils/words.ptbr.txt')
        .then((response) => response.text())
        .then((text) => {
          const words = text.split(/\r?\n/).filter((w) => w.length == 5)
          const word = _.sample(words)
          this.wordGame = word ?? words[Math.random() * words.length]
        })
    },
  },
  getters: {
    word(): string {
      return this.wordGame.toUpperCase()
    },
    wordLength(): number {
      return this.word.length
    },
  },
})
