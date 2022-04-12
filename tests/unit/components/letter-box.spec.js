import { mount } from "@vue/test-utils";

import LetterBox from '@/components/LetterBox'

const testWord = 'test'
const $store = {
  getters: {
    getWord: testWord
  }
}

function getMountedComponent(props){
  return mount(LetterBox, {
    props
  })
}

test('component shoud have class: "correct"', () => {
  const props = {
    letterStatus: 'correct',
    allCorrect: false
  }

  const wrapper = getMountedComponent(props)
  const divs = wrapper.find('div');
  expect(divs.classes()).toContain('correct')
})

test('component shoud have class: "incorrect"', () => {
  const props = {
    letterStatus: 'incorrect',
    allCorrect: false
  }

  const wrapper = getMountedComponent(props)
  const divs = wrapper.find('div');
  expect(divs.classes()).toContain('incorrect')
})

test('component shoud have class: "outOfPlace"', () => {
  const props = {
    letterStatus: 'outOfPlace',
    allCorrect: false
  }

  const wrapper = getMountedComponent(props)
  const divs = wrapper.find('div');
  expect(divs.classes()).toContain('outOfPlace')
})