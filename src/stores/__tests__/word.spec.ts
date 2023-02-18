import { setActivePinia, createPinia } from 'pinia'
import { useWordStore } from './../word'
import { beforeEach, expect, describe, it } from 'vitest'

describe('Word store', () => {
  let store = null

  beforeEach(() => {
    setActivePinia(createPinia())
    store = null
    store = useWordStore()
  })

  it('init word should have be uppercase', () => {
    const word = 'teste'
    store.wordGame = word
    expect(store.word === word.toUpperCase()).toBe(true)
  })

  it('init store should not have results', () => {
    expect(store.results.length).toBe(0)
  })

  it('init store should not have errors', () => {
    expect(store.errors.size).toBe(0)
  })

  it('call validate result should have add value to results', () => {
    store.wordGame = 'teste'
    store.validateResult('teste')

    expect(store.results.length).toBe(1)
  })

  it('action validateResult with incorrect word should have to add erros in errors', () => {
    store.wordGame = 'Teste'
    store.validateResult('Testa')
    expect(store.errors.size).toBe(1)
  })
})
