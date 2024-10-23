import { InputValidator } from '../inputValidator.js'
import { MedianValueCalculations } from './medianValueCalculations.js'

/**
 * Class used for calculation of the range value from an array of numbers.
 */
export class RangeValueCalculations extends InputValidator {
  /**
   * Private method used to find the lowest value in an array. Used in calculateRangeValue method.
   *
   * @param {number[]} numbers - The array of numbers to find the lowest value from.
   * @returns {number} - The lowest value from the array.
   */
  #findLowestValue (numbers) {
    let lowestValue = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < lowestValue) {
        lowestValue = numbers[i]
      }
    }
    return lowestValue
  }

  /**
   * Private method used to find the highest value in an array. Used in calculateRangeValue method.
   *
   * @param {number[]} numbers - The array of numbers to find the highest value from.
   * @returns {number} - The highest value from the array.
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
   * Public method that calculates the range value from an array of numbers. Uses the validateInput method from parent class InputValidator for validation.
   *
   * @param {number[]} numbers - The array of numbers to calculate the range value from.
   * @returns {number} - The calculated range value from the array
   */
  calculateRangeValue (numbers) {
    this.validateInput(numbers)
    const lowestValue = this.#findLowestValue(numbers)
    const highestValue = this.#findHighestValue(numbers)
    return highestValue - lowestValue
  }

  /**
   * Private method for sorting the array from smallest to largest. Used in calculateInterquartileRangeValue method.
   *
   * @param {number[]} numbers - The array of numbers to sort.
   * @returns {number[]} - The sorted array of numbers.
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort((a, b) => a - b)
  }

  /**
   * Private method for splitting the array into two halves. Used in calculateInterquartileRangeValue method.
   *
   * @param {number[]} numbers - The array of numbers to split in half.
   * @returns {number[][]} - The two halves
   */
  #splitArrayInHalf (numbers) {
    const middleIndex = Math.floor(numbers.length / 2)
    const lowerHalf = numbers.slice(0, middleIndex)
    let higherHalf
    if (numbers.length % 2 === 0) {
      higherHalf = numbers.slice(middleIndex)
    } else {
      higherHalf = numbers.slice(middleIndex + 1)
    }
    return [lowerHalf, higherHalf]
  }

  /**
   * Public method used for calculating the interquartile range value from an array of numbers.
   * Interquartile range is the difference between the third quartile and the first quartile.
   * Uses the validateInput method from parent class InputValidator for validation and the calculateMedianValue method from the MedianValueCalculations class for calculating the different quartiles.
   *
   * @param {number[]} numbers - The array of numbers to calculate the interquartile range value from.
   * @returns {number} - The calculated interquartile range value from the array.
   */
  calculateInterquartileRangeValue (numbers) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

    const [lowerHalf, higherHalf] = this.#splitArrayInHalf(sortedNumbersFromArray)

    const firstQuartile = new MedianValueCalculations().calculateMedianValue(lowerHalf)
    const thirdQuartile = new MedianValueCalculations().calculateMedianValue(higherHalf)

    return thirdQuartile - firstQuartile
  }
}
