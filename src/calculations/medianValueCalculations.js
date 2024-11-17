import { InputValidator } from '../inputValidator.js'

export class MedianValueCalculations extends InputValidator {
  calculateMedianValue (numbers) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)
    return this.#extractMedianValueFromSortedArray(sortedNumbersFromArray)
  }

  /**
   * Sorts array from smallest to largest number to prepare for median calculation.
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort(function (a, b) {
      return a - b
    })
  }

  /**
   * Private method used for calculating the median value from the sorted array. Used to achieve encapsulation.
   */
  #extractMedianValueFromSortedArray (sortedNumbersFromArray) {
    const middleIndexInArray = Math.floor(sortedNumbersFromArray.length / 2)
    if (sortedNumbersFromArray.length % 2 !== 0) {
      return sortedNumbersFromArray[middleIndexInArray]
    } else {
      return (sortedNumbersFromArray[middleIndexInArray - 1] + sortedNumbersFromArray[middleIndexInArray]) / 2
    }
  }
}
