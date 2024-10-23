import { InputValidator } from '../inputValidator.js'
/**
 * Class used for calculation of the mean value from an array of numbers.
 */
export class MeanValueCalculations extends InputValidator {
  /**
   * The private method #sumNumbersInArray sums all numbers from an array and is used in method meanValue to   calculate the mean value from said array.
   *
   * @param {number[]} numbers - The array of numbers to sum.
   * @returns {number} - The sum of all numbers in the array.
   */
  #sumNumbersInArray (numbers) {
    let totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i]
    }
    return totalSum
  }

  /**
   * Calculates the mean value from an array of numbers. Uses validateInput method from parent class InputValidator for validation and the private method #sumNumbersInArray to sum all numbers in the array.
   *
   * @param {number[]} numbers - The array of numbers to calculate the mean value from.
   * @returns {number} - The mean value of the array.
   */
  calculateMeanValue (numbers) {
    this.validateInput(numbers)
    const totalSum = this.#sumNumbersInArray(numbers)
    return totalSum / numbers.length
  }

  /**
   * The private method #multiplyNumbersInArray multiplies all numbers in an array and is used in calculateGeometricMeanValue method.
   *
   * @param {number[]} numbers - The array of numbers to multiply.
   * @returns {number} - The product of all numbers in the array.
   */
  #multiplyNumbersInArray (numbers) {
    let totalProduct = 1
    for (let i = 0; i < numbers.length; i++) {
      totalProduct *= numbers[i]
    }
    return totalProduct
  }

  /**
   * Private method for controlling the numbers in array are positive. Used in calculateGeometricMeanValue
   * and calculateHarmonicMeanValue method.
   * Throws an error if a negative / zero number is found.
   *
   * @param {number[]} numbers - The array of numbers to check.
   */
  #checkIfNumbersFromArrayArePositive (numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] <= 0) {
        throw new Error('All numbers in the array must be positive in order to calculate a geometric / harmonic mean value.')
      }
    }
  }

  /**
   * Calculates the geometric mean value from an array of numbers. Uses validateInput method from parent class InputValidator for validation and the private method #multiplyNumbersInArray to multiply all numbers in the array.
   * It also uses the private method #checkIfNumbersFromArrayArePositive to ensure all numbers are positive.
   *
   * @param {number[]} numbers - The array of numbers to calculate the geometric mean value from.
   * @returns {number} - The geometric mean value of the array.
   */
  calculateGeometricMeanValue (numbers) {
    this.validateInput(numbers)
    this.#checkIfNumbersFromArrayArePositive(numbers)

    const totalProduct = this.#multiplyNumbersInArray(numbers)
    return Math.pow(totalProduct, 1 / numbers.length)
  }

  /**
   * Sums all reciprocals of all numbers in an array. Is used in calculateHarmonicMeanValue method.
   *
   * @param {number[]} numbers - The array of numbers to sum reciprocals from.
   * @returns {number} - The sum of all reciprocals in the array.
   */
  #sumReciprocalsInArray (numbers) {
    let totalSumOfReciprocals = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSumOfReciprocals += 1 / numbers[i]
    }
    return totalSumOfReciprocals
  }

  /**
   * Calculates the harmonic mean value from an array of numbers. Uses the validateInput method for validation and the private method #sumReciprocalsInArray to sum all reciprocals in the array.
   *
   * @param {number[]} numbers - The array of numbers to calculate the harmonic mean value from.
   * @returns {number} - The harmonic mean value of the array.
   */
  calculateHarmonicMeanValue (numbers) {
    this.validateInput(numbers)
    this.#checkIfNumbersFromArrayArePositive(numbers)

    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }

  /**
   * Private method for sorting the array from smallest to largest. Used in calculateTrimmedMeanValue method.
   *
   * @param {number[]} numbers - The array of numbers to sort.
   * @returns {number[]} - The sorted array
   */
  #sortNumbersInArray (numbers) {
    return numbers.slice().sort((a, b) => a - b)
  }

  /**
   * Private method that calculates how many numbers that should be remvoved from the array based on given percentage.
   * Used in calculateTrimmedMeanValue method.
   *
   * @param {number[]} numbers - The array of numbers to calculate the amount of numbers to be removed / trimmed.
   * @param {number} trimPercentage - The percentage of numbers to trim.
   * @returns {number} - The amount of numbers to remove / trim from array.
   */
  #calculateAmountOfNumbersToTrim (numbers, trimPercentage) {
    const totalAmountOfNumbers = numbers.length
    const amountOfNumbersToTrim = Math.floor((totalAmountOfNumbers * trimPercentage) / 100)
    return amountOfNumbersToTrim
  }

  /**
   * Private method used to trim the lowest and highest numbers from the array based on number of elements to trim.
   * Used in calculateTrimmedMeanValue method.
   *
   * @param {number[]} numbers - The array of numbers to be trimmed / removed.
   * @param {number} amountOfNumbersToTrim - The amount of numbers to trim / remove from the array.
   * @returns {number[]} - The trimmed array.
   */
  #trimNumbersInArray (numbers, amountOfNumbersToTrim) {
    const trimmedArray = []
    for (let i = amountOfNumbersToTrim; i < numbers.length - amountOfNumbersToTrim; i++) {
      trimmedArray.push(numbers[i])
    }
    return trimmedArray
  }

  /**
   * Public method to calculate the trimmed mean value form an array.
   * Trims a specified percentage from the smallest and largest values before calculating the mean.
   *
   * @param {number[]} numbers - The array of numbers to calculate the trimmed mean value from.
   * @param {number} trimPercentage - The percentage of numbers to trim from the array.
   * @returns {number} - The trimmed mean value of the array.
   */
  calculateTrimmedMeanValue (numbers, trimPercentage) {
    this.validateInput(numbers)
    const sortedNumbersFromArray = this.#sortNumbersInArray(numbers)

    const amountOfNumbersToTrim = this.#calculateAmountOfNumbersToTrim(sortedNumbersFromArray, trimPercentage)
    const trimmedArray = this.#trimNumbersInArray(sortedNumbersFromArray, amountOfNumbersToTrim)
    const totalSum = this.#sumNumbersInArray(trimmedArray)

    return totalSum / trimmedArray.length
  }
}
