import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { AttemptResult } from '@/types/interfaces/AttemptResult'
import { EnumStatus } from '@/types/enums/EnumStatus'

export const useGameStore = defineStore('game', () => {
  const word = ref('tests')
  const attempts = ref<AttemptResult[]>([])
  const win = ref(false)

  function AddAttempt(attempt: string) {
    attempts.value!.push({
      word: attempt.toLowerCase(),
      result: VerifyAttempt(attempt)
    })
  }

  function VerifyAttempt(attempt: string) {
    if (attempt.toLowerCase() == word.value.toLowerCase()) {
      win.value = true
    }

    const result: [
      {
        position: number
        status: EnumStatus
      } | null
    ] = [null]

    result.pop()

    attempt
      .toLocaleLowerCase()
      .split('')
      .forEach((letter, i) => {
        if (letter == word.value[i]) {
          result.push({
            position: i,
            status: EnumStatus.Correct
          })
        } else if (word.value.includes(letter)) {
          result.push({
            position: i,
            status: EnumStatus.OutOfOrder
          })
        } else {
          result.push({
            position: i,
            status: EnumStatus.Incorrect
          })
        }
      })

    return result
  }

  return { word, attempts, win, AddAttempt }
})
