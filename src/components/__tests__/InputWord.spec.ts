import { useWordStore } from '@/stores/word'
import { shallowMount } from '@vue/test-utils'
import { describe, it, vi, expect } from 'vitest'
import InputWord from '@/components/InputWord.vue'
import { createTestingPinia } from '@pinia/testing'

describe('InputWord.vue', () => {
  function factory(state = {}) {
    const wrapper = shallowMount(InputWord, {
      gobal: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubPatch: true,
            fakeApp: true,
            initialState: { ...state },
          }),
        ],
      },
    })

    const store = useWordStore()

    return { wrapper, store }
  }

  it('should create', () => {
    const { wrapper } = factory()
    expect(wrapper).toBeTruthy()
  })

  it('should have validate word if press enter', async () => {
    const { wrapper, store } = factory()
    const input = wrapper.find('input')
    await input.trigger('keyup.enter')
    expect(store.validateResult).toBeCalled()
  })

  it('should max length to be same length of word', async () => {
    const state = {
      word: {
        wordGame: 'test',
      },
    }
    const { wrapper } = factory(state)
    const input = wrapper.find('input')
    const max = Number(input.attributes('maxlength'))
    expect(max).toBe(state.word.wordGame.length)
  })

  it('button should have init disabled', async () => {
    const { wrapper } = factory()
    const button = wrapper.find('button')
    expect(button.attributes().disabled).toBeDefined()
  })

  it('button should have enable if attempt have same length of word', async () => {
    const state = {
      word: {
        wordGame: 'test',
      },
    }
    const { wrapper } = factory(state)
    const input = wrapper.find('input')
    input.setValue('test')
    await wrapper.vm.$nextTick()

    const button = wrapper.find('button')
    expect(button.attributes().disabled).toBeUndefined()
  })

  it('should have validate word if click on button', async () => {
    const state = {
      word: {
        wordGame: 'test',
      },
    }
    const { wrapper, store } = factory(state)
    const input = wrapper.find('input')
    input.setValue('test')
    await wrapper.vm.$nextTick()

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(store.validateResult).toBeCalled()
  })
})
