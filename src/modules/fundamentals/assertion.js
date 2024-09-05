import { sum, subtract } from "./math"

let result = sum(3, 7)
let expected = 10

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(4, 4)
expected = 0

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
