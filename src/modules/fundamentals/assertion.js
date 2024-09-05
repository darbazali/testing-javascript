import { sum, subtract } from "./math.js"

const expect = (actual) => {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

expect(sum(4, 4)).toBe(8)
