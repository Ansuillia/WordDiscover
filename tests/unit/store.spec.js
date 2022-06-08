const store = jest.createMockFromModule('@/store')

const correctResult = {
  letterStatus: ["correct", "correct", "correct", "correct"],
  allCorrect: true,
  errors: []
}

const outOfPlaceResult = {
  letterStatus: ["outOfPlace", "outOfPlace", "outOfPlace", "outOfPlace"],
  allCorrect: false,
  errors: []
}

describe('Store', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return state.word equals empty string', () => {
    expect(store.state.word).toBeEmpty()
  })

  it('should return state.win equals false', () => {
    expect(store.state.win).toBeFalse()
  })

  it('should return state.results equals empty array', () => {
    expect(store.state.results).toBeEmpty()
  })

  it('should return state.errors equals empty Set', () => {
    expect(store.state.errors).toBeEmpty()
  })

  it('call setWord method with "test" should return word "test"', () => {
    jest.spyOn(store.actions, 'setWord')
      .mockReturnValue(store.state.word = "test")
    expect(store.state.word).toBe("test")
  })

  it('call verify method with "etts" should add result in state.results', () => {
    jest.spyOn(store.actions, 'verify')
      .mockReturnValue(store.state.results = [outOfPlaceResult])

    expect(store.state.results).toBeArrayOfSize(1)
  })

  it('call verify method with "aloh" should set four letters in state.errors', () => {

    jest.spyOn(store.actions, 'verify')
      .mockReturnValue(store.state.errors = new Set(["a", "l", "o", "h"]))

    expect(store.state.errors.size).toBe(4)

  })

  it('call verify method with "test" should add result in state.results with allCorrect param true and set win to true', () => {
    
    jest.spyOn(store.actions, 'verify')
      .mockReturnValue(store.state.results = [correctResult])

    expect(store.state.results[0].allCorrect).toBeTrue()
  })
})