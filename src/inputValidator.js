/**
 * Class used in all calculation subclasses for validation of the input array.
 *
 */
export class InputValidator {
  validateInput (numbers) {
    this.#checkArraysInput(numbers)
  }

  /**
   * Private method used for validation of the input array.
   * Throws an error if the input is not an array or if the array is empty or if any element in the array is wrong data type / not a number.
   */
  #checkArraysInput (numbers) {
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
}
