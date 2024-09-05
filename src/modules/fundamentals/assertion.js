import { sum } from "./math.js"

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        console.log('actual: ', actual)
        console.log('expected: ', expected)
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

expect(sum(3, 7)).toBe(10)