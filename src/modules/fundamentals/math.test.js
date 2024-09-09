import test from "./test-lib.js"
import expect from "./assertion-lib.js"
import { sum, subtract, asyncSum, asyncSubtract } from "./math.js"

test("sum", () => {
  expect(sum(1, 2)).toBe(3)
})

test("subtract", () => {
  expect(subtract(1, 2)).toBe(-1)
})

test("asyncSum", async () => {
  expect(await asyncSum(1, 2)).toBe(3)
})

test("asyncSubtract", async () => {
  expect(await asyncSubtract(1, 2)).toBe(-1)
})
