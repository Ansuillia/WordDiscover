import { EnumStatus } from './../../enums/EnumStatus'
import { setActivePinia, createPinia, type Store } from 'pinia'
import { useWordStore } from './../word'
import { beforeEach, expect, describe, it } from 'vitest'

describe('Word store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('init word should have be uppercase', () => {
    const store = useWordStore()

    const word = 'teste'
    store.wordGame = word
    expect(store.word === word.toUpperCase()).toBe(true)
  })

  it('init store should not have results', () => {
    const store = useWordStore()

    expect(store.results.length).toBe(0)
  })

  it('init store should not have errors', () => {
    const store = useWordStore()

    expect(store.errors.size).toBe(0)
  })

  it('call validate result should have add value to results', () => {
    const store = useWordStore()

    store.wordGame = 'teste'
    store.validateResult('teste')

    expect(store.results.length).toBe(1)
  })

  it('action validateResult with incorrect word should have to add error in errors', () => {
    const store = useWordStore()

    store.wordGame = 'Teste'
    store.validateResult('Testa')
    expect(store.errors.size).toBe(1)
  })

  it('action validateResult with outOfPlace letter should have to add result OutOfPlace', () => {
    const store = useWordStore()

    store.wordGame = 'Teste'
    store.validateResult('Tsate')
    expect(
      store.results.map((result) =>
        result.status.includes(EnumStatus.OUTOFPLACE)
      ).length
    ).toBe(1)
  })

  it('action validateResult without parameters should not throw error', () => {
    const store = useWordStore()

    store.wordGame = 'Teste'
    store.validateResult('')
    expect(store.results.length).toBe(0)
  })
})
