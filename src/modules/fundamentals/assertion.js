import { sum , subtract} from "./math.js"

const expect = actual => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

const test = (title, callback) => {
  try {
    callback()
    console.log(`${title}`)
  } catch (error) {
    console.error(title)
    console.error(error)
  }
}

test('sum', () => {
  expect(sum(3, 7)).toBe(10)
})

test('subtract', () => {
  expect(subtract(7, 7)).toBe(0)
})