import { sum } from "./math.js"

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

const result = sum(7, 3)
const expected = 10

expect(result).toBe(expected)
