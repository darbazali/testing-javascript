import test from "./test-lib.js"
import expect from "./assertion-lib.js"
import { sum, subtract } from "./math.js"

test("sum", () => {
  expect(sum(1, 2)).toBe(3)
})

test("subtract", () => {
  expect(subtract(1, 2)).toBe(-1)
})
