import * as fs from 'fs'
import _ from 'lodash'

function getWord(length: number): string {
  const words = fs
    .readFileSync('src/utils/words.ptbr.txt', 'utf-8')
    .split(/\r?\n/)
    .filter((w) => w.length == length)
  const word = _.sample(words)
  return word ?? words[Math.random() * words.length]
}

export { getWord }
