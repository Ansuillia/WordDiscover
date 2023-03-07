import { useWordStore } from '@/stores/word'
import { mount } from '@vue/test-utils'
import { describe, expect, vi, test } from 'vitest'
import ErrorsBox from '@/components/ErrorsBox.vue'
import { createTestingPinia } from '@pinia/testing'

describe.only('ErrorsBox.vue', () => {
  function factory() {
    const wrapper = mount(ErrorsBox, {
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

  test('should create', () => {
    const { wrapper } = factory()
    expect(wrapper).toBeTruthy()
  })

  test('should have render title with text "Errors"', async () => {
    const { wrapper, store } = factory()

    store.$patch({ errors: new Set(['a', 'b', 'c']) })

    console.log(wrapper.vm.$pinia)

    await wrapper.vm.$nextTick()

    console.log(wrapper.html())

    //expect(wrapper.find('h2').text()).contain('Errors')
  })

  test('should not render title with text "Errors" when not have errors', async () => {
    const { wrapper } = factory()
  })
})
