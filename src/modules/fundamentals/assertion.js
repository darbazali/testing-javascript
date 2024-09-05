import { sum, subtract } from "./math"

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

let result = sum(3, 7)
let expected = 10

expect(result).toBe(expected)

result = subtract(4, 4)
expected = 0

expect(result).toBe(expected)
