import { InputValidator } from '../inputValidator.js'
import { MedianValueCalculations } from './medianValueCalculations.js'

export class RangeValueCalculations extends InputValidator {
  calculateRangeValue (numbers) {
    this.validateInput(numbers)
    const lowestValue = this.#findLowestValue(numbers)
    const highestValue = this.#findHighestValue(numbers)
    return highestValue - lowestValue
  }

  #findLowestValue (numbers) {
    let lowestValue = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < lowestValue) {
        lowestValue = numbers[i]
      }
    }
    return lowestValue
  }

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
   * Public method used for calculating the interquartile range value from an array of numbers.
   * Interquartile range is the difference between the third quartile and the first quartile.
   */
  calculateInterquartileRangeValue (numbers) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

    const [lowerHalf, higherHalf] = this.#splitArrayInHalf(sortedNumbersFromArray)

    const firstQuartile = new MedianValueCalculations().calculateMedianValue(lowerHalf)
    const thirdQuartile = new MedianValueCalculations().calculateMedianValue(higherHalf)

    return thirdQuartile - firstQuartile
  }

  #sortNumbersInArray (numbers) {
    return numbers.slice().sort((a, b) => a - b)
  }

  #splitArrayInHalf (numbers) {
    const middleIndex = Math.floor(numbers.length / 2)
    const lowerHalf = numbers.slice(0, middleIndex)
    let higherHalf
    if (numbers.length % 2 === 0) {
      higherHalf = numbers.slice(middleIndex)
    } else {
      // Skip the middle number for odd-length arrays to make sure the high half starts correctly.
      higherHalf = numbers.slice(middleIndex + 1)
    }
    return [lowerHalf, higherHalf]
  }
}
