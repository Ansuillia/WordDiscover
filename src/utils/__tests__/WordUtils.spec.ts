import { describe, it, expect } from 'vitest'
import { getWord } from '../WordUtils'

describe('WordUtils', () => {
  it('getWord should have return word with informed length', () => {
    const word = getWord(5)
    expect(word.length).toBe(5)
  })
})
