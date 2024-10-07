export function checkArraysInput (numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input should be an array')
  }
  if (numbers.length === 0) {
    throw new Error('The input must contain one number at a minimum')
  }
}