import { checkArraysInput } from './helperFunctions.js'

/**
 * Class used for calculation of the medain value from an array of numbers.
 */
export class MedianValueCalculations {
  /**
   * Private method used for sorting an array from smallest number to largest. Used in calculateMedianValue method.
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort(function (a, b) {
      return a - b
    })
  }

  /**
   * Private method used for calculating the median value from the sorted array. Used in calculateMedianValue in    order to achieve encapsulation.
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
   * Uses the helper function checkArraysInput for validation of the aray being used.
   */
  calculateMedianValue (numbers) {
    checkArraysInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)
    return this.#extractMedianValueFromSortedArray(sortedNumbersFromArray)
  }
}
