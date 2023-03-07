import { EnumStatus } from './../../enums/EnumStatus'
import { describe, vi, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import WordBox from '@/components/WordBox.vue'
import LetterBox from '@/components/LetterBox.vue'
import { useWordStore } from '@/stores/word'

describe('WordBox.vue', () => {
  function factory() {
    const wrapper = mount(WordBox, {
      gobal: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubPatch: false,
            fakeApp: true,
            initialState: {
              word: {
                results: [
                  {
                    status: [
                      EnumStatus.CORRECT,
                      EnumStatus.INCORRECT,
                      EnumStatus.OUTOFPLACE,
                    ],
                    isCorrect: false,
                  },
                  {
                    status: [
                      EnumStatus.INCORRECT,
                      EnumStatus.OUTOFPLACE,
                      EnumStatus.CORRECT,
                    ],
                    isCorrect: false,
                  },
                ],
              },
            },
          }),
        ],
      },
    })

    const results = useWordStore()

    return { wrapper, results }
  }

  it('should create', () => {
    const { wrapper } = factory()
    expect(wrapper).toBeTruthy()
  })

  it('should render correct result on component', () => {
    const { wrapper } = factory()

    expect(wrapper.findAll('.wordboxDiv').length).toBe(2)

    expect(wrapper.findAllComponents(LetterBox).length).toBe(6)
  })
})
