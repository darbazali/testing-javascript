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

const test = (title, callback) => {
  try {
    callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }
}

test("sum should sum 2 numbers correctly", () => {
  expect(sum(1, 2)).toBe(3)
})
