import { mount } from "@vue/test-utils";

import WordBox from '@/components/WordBox'
import LetterBox from '@/components/LetterBox'

const testWord = 'test'
const $store = {
  getters: {
    getWord: testWord
  }
}

function getMountedComponent(props) {
  return mount(WordBox, {
    props,
    global: {
      mocks: {
        $store
      }
    }
  })
}

test(`component should have ${testWord.length} LetterBox`, () => {
  const props = {
    result: {
      letterStatus: ['correct'],
      allCorrect: false
    }
  }

  const wrapper = getMountedComponent(props)
  const letterBoxes = wrapper.findAllComponents(LetterBox)
  expect(letterBoxes.length).toBe(testWord.length)
})