import { useWordStore } from '@/stores/word'
import { mount } from '@vue/test-utils'
import { describe, expect, vi, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import ErrorsBox from '@/components/ErrorsBox.vue'

describe('ErrorsBox.vue', () => {
  function factory(state = {}) {
    const wrapper = mount(ErrorsBox, {
      gobal: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubPatch: false,
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

  it('should render title when there are errors', async () => {
    const state = {
      word: {
        errors: new Set(['a', 'b', 'c']),
      },
    }
    const { wrapper } = factory(state)

    expect(wrapper.find('h2')).toBeDefined()
  })

  it('should not render title when there are no errors', async (ctx) => {
    const { wrapper } = factory()
    expect(wrapper.html()).toBe('<!--v-if-->')
  })
})
