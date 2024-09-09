const sum = (a, b) => a + b
const subtract = (a, b) => a - b

const asyncSum = (a, b) =>
  new Promise((resolve) => setTimeout(() => resolve(a + b), 1000))

const asyncSubtract = (a, b) =>
  new Promise((resolve) => setTimeout(() => resolve(a - b), 1000))

export { sum, subtract, asyncSum, asyncSubtract }
