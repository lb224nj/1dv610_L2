/**
 * Helper function that is meant for internal validation ONLY. It is to be viewed as a "private" helper function.
 * The function checks whether the input is an array and that the specific array contains ata minimum one number.
 */
export function checkArraysInput (numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input should be an array')
  }
  if (numbers.length === 0) {
    throw new Error('The input must contain one number at a minimum')
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
      throw new Error('All elements in the array must be numbers')
    }
  }
}
