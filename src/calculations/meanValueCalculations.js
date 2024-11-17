import { InputValidator } from '../inputValidator.js'
/**
 * Class used for calculation of different mean values from an array of numbers.
 */
export class MeanValueCalculations extends InputValidator {
  calculateMeanValue (numbers) {
    this.validateInput(numbers)
    const totalSum = this.#sumNumbersInArray(numbers)
    return totalSum / numbers.length
  }

  #sumNumbersInArray (numbers) {
    let totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i]
    }
    return totalSum
  }

  calculateGeometricMeanValue (numbers) {
    this.validateInput(numbers)
    this.#checkIfNumbersFromArrayArePositive(numbers)

    const totalProduct = this.#multiplyNumbersInArray(numbers)
    // Gets the root of the product based on how many numbers there are in the array.
    return Math.pow(totalProduct, 1 / numbers.length)
  }

  #checkIfNumbersFromArrayArePositive (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) {
        throw new Error('All numbers in the array must be positive in order to calculate a geometric / harmonic mean value.')
      }
    }
  }

  #multiplyNumbersInArray (numbers) {
    let totalProduct = 1
    for (let i = 0; i < numbers.length; i++) {
      totalProduct *= numbers[i]
    }
    return totalProduct
  }

  /**
   * Calculates the harmonic mean value from an array of numbers, which is the reciprocal of the average of the reciprocals of the numbers.
   */
  calculateHarmonicMeanValue (numbers) {
    this.validateInput(numbers)
    this.#checkIfNumbersFromArrayArePositive(numbers)

    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }

  /**
   * Sums all reciprocals of all numbers in an array (by dividing 1 with each number in the array).
   */
  #sumReciprocalsInArray (numbers) {
    let totalSumOfReciprocals = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSumOfReciprocals += 1 / numbers[i]
    }
    return totalSumOfReciprocals
  }

  calculateTrimmedMeanValue (numbers, trimPercentage) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

    const amountOfNumbersToTrim = this.#calculateAmountOfNumbersToTrim(sortedNumbersFromArray, trimPercentage)
    const trimmedArray = this.#trimNumbersInArray(sortedNumbersFromArray, amountOfNumbersToTrim)
    const totalSum = this.#sumNumbersInArray(trimmedArray)

    return totalSum / trimmedArray.length
  }

  #sortNumbersInArray (numbers) {
    return numbers.slice().sort((a, b) => a - b)
  }

  /**
   * Private method that calculates how many numbers that should be remvoved from the array based on given percentage.
   * Used in calculateTrimmedMeanValue method.
   */
  #calculateAmountOfNumbersToTrim (numbers, trimPercentage) {
    const totalAmountOfNumbers = numbers.length
    const amountOfNumbersToTrim = Math.floor((totalAmountOfNumbers * trimPercentage) / 100)
    return amountOfNumbersToTrim
  }

  /**
   * Private method used to trim the lowest and highest numbers from the array based on number of elements to trim.
   */
  #trimNumbersInArray (numbers, amountOfNumbersToTrim) {
    const trimmedArray = []
    for (let i = amountOfNumbersToTrim; i < numbers.length - amountOfNumbersToTrim; i++) {
      trimmedArray.push(numbers[i])
    }
    return trimmedArray
  }
}
