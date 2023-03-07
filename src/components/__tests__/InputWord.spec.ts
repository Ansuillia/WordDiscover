import { useWordStore } from '@/stores/word'
import { shallowMount } from '@vue/test-utils'
import { describe, it, vi, expect } from 'vitest'
import InputWord from '@/components/InputWord.vue'
import { createTestingPinia } from '@pinia/testing'

describe('InputWord.vue', () => {
  function factory() {
    const wrapper = shallowMount(InputWord, {
      gobal: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubPatch: false,
            fakeApp: true,
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

  it('should have validate word if press enter', () => {
    const { wrapper } = factory()
    console.log(wrapper)

  })
})
