import { checkArraysInput } from './helperFunctions.js'
import { MedianValueCalculations } from './medianValueCalculations.js'

/**
 * Class used for calculation of the range value from an array of numbers.
 */
export class RangeValueCalculations {
  /**
   * Private method used to find the lowest value in an array. Used in calculateRangeValue method.
   */
  #findLowestValue (numbers) {
    let lowestValue =numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < lowestValue) {
        lowestValue = numbers[i]
      }
    }
    return lowestValue
  }

  /**
   * Private method used to find the highest value in an array. Used in calculateRangeValue method.
   */
  #findHighestValue (numbers) {
    let highestValue = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highestValue) {
        highestValue = numbers[i]
      }
    }
    return highestValue
  }

  /**
   * Public method that calculates the range value from an array of numbers.
   */
  calculateRangeValue (numbers) {
    checkArraysInput(numbers)
    const lowestValue = this.#findLowestValue(numbers)
    const highestValue = this.#findHighestValue(numbers)
    return highestValue - lowestValue
  }
  /**
   * Public method used for calculating the interquartile range value from an array of numbers.
   * Interquartile range is the difference between the third quartile and the first quartile.
   * Uses the helper function checkArraysInput for validation and the calculateMedianValue method from the
   * MedianValueCalculations class.
   */
  calculateInterquartileRangeValue (numbers) {
    checkArraysInput(numbers)
  }
}