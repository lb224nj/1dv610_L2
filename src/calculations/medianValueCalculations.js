import { InputValidator } from '../inputValidator.js'

/**
 * Class used for calculation of the median value from an array of numbers.
 */
export class MedianValueCalculations extends InputValidator {
  /**
   * Private method used for sorting an array from smallest number to largest. Used in calculateMedianValue method.
   *
   * @param {number[]} numbers - The array of numbers to sort.
   * @returns {number[]} - The sorted array of numbers.
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort(function (a, b) {
      return a - b
    })
  }

  /**
   * Private method used for calculating the median value from the sorted array. Used in calculateMedianValue in    order to achieve encapsulation.
   *
   * @param {number[]} sortedNumbersFromArray - The array of numbers sorted from smallest to largest.
   * @returns {number} - The median value of the array.
   */
  #extractMedianValueFromSortedArray (sortedNumbersFromArray) {
    const middleIndexInArray = Math.floor(sortedNumbersFromArray.length / 2)
    if (sortedNumbersFromArray.length % 2 !== 0) {
      return sortedNumbersFromArray[middleIndexInArray]
    } else {
      return (sortedNumbersFromArray[middleIndexInArray - 1] + sortedNumbersFromArray[middleIndexInArray]) / 2
    }
  }

  /**
   * Method that calculates the median value from an array of numbers.
   * Uses validateInput method from parent class InputValidator for validation of the aray being used.
   *
   * @param {number[]} numbers - The array of numbers to calculate the median value from.
   * @returns {number} - The median value of the array.
   */
  calculateMedianValue (numbers) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)
    return this.#extractMedianValueFromSortedArray(sortedNumbersFromArray)
  }
}
