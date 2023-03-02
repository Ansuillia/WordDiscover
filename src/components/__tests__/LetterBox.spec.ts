import { vi, describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useWordStore } from './../../stores/word'
import LetterBox from '@/components/LetterBox.vue'

describe('LetterBox.vue', () => {
  function factory() {
    const wrapper = mount(LetterBox, {
      gobal: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubPatch: false,
            fakeApp: true,
            initialState: {
              word: {
                wordGame: 'teste',
              },
            },
          }),
        ],
      },
      props: {
        status: 'correct',
        index: 0,
      },
    })

    const word = useWordStore()

    return { wrapper, word }
  }

  it('expect component should have correct class', async () => {
    const { wrapper } = factory()

    await wrapper.setProps({
      status: 'correct',
      index: 0,
    })
    expect(wrapper.classes().includes('correct')).toBe(true)
  })

  it('expect component to have incorrect class', async () => {
    const { wrapper } = factory()

    await wrapper.setProps({
      status: 'incorrect',
      index: 0,
    })
    expect(wrapper.classes().includes('incorrect')).toBe(true)
  })

  it('expect component to have outOfPlace class', async () => {
    const { wrapper } = factory()

    await wrapper.setProps({
      status: 'outOfPlace',
      index: 0,
    })
    expect(wrapper.classes().includes('outOfPlace')).toBe(true)
  })

  it('one correct letter should have print letter on span', async () => {
    const span = '[data-testid=span-letter]'

    const { wrapper } = factory()

    const expectedLetter = 't'

    await wrapper.setProps({
      status: 'correct',
      index: 0,
    })

    expect(wrapper.find(span).text()).toBe(expectedLetter.toUpperCase())
  })
})
