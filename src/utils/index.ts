export { verifyResult }

function verifyResult(baseWord, tryWord) {
  tryWord = tryWord.toUpperCase()
  baseWord = baseWord.toUpperCase()
  const result = {
    letterResult: {
      letterStatus: [],
      allCorrect: false,
    },
    errors: [],
  }

  if (tryWord.length == 0) {
    return
  }

  for (let i = 0; i < tryWord.length; i++) {
    if (tryWord[i] == baseWord[i]) {
      result.letterResult.letterStatus.push('correct')
      result.letterResult.allCorrect = true
    } else if (baseWord.includes(tryWord[i])) {
      result.letterResult.letterStatus.push('outOfPlace')
      result.letterResult.allCorrect = false
    } else {
      result.letterResult.letterStatus.push('incorrect')
      result.letterResult.allCorrect = false

      result.errors.push(tryWord[i])
    }
  }

  return result
}
