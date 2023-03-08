import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import BoardView from '../BoardView.vue'

describe('BoardView.Vue', () => {
  function factory(state = {}) {
    const wrapper = mount(BoardView, {
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

    return { wrapper }
  }

  it('should create', () => {
    const { wrapper } = factory()
    expect(wrapper).toBeTruthy()
  })
})
