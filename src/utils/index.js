
export default {
  VerifyResult(baseWord, tryWord) {
    tryWord = tryWord.toUpperCase()
    baseWord = baseWord.toUpperCase()
    var result = {
      letterResult: {
        letterStatus: [],
        allCorrect: false
      },
      errors: new Set()
    }
    for (var i = 0; i < tryWord.length; i++) {
      if (tryWord[i] == baseWord[i]) {
        result.letterResult.letterStatus.push("correct");
        result.letterResult.allCorrect = true;
      } else if (baseWord.includes(tryWord[i])) {
        result.letterResult.letterStatus.push("outOfPlace");
        result.letterResult.allCorrect = false;
      } else {
        result.letterResult.letterStatus.push("incorrect");
        result.letterResult.allCorrect = false;

        result.errors.add(tryWord[i])
      }
    }

    return result
  }
}