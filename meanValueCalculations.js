/**
 * @class MeanValueCalculations
 *
 * This class contains private and public methods related to making mean value calculations.
 */
class MeanValueCalculations {
  /**
   * The private method #sumNumbersInArray sums all numbers from an array and is used in method meanValue to   calculate the mean value from said array.
   */
  #sumNumbersInArray (numbers) {
    let totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSum += numbers[i]
    }
    return totalSum
  }

  /**
   * Calculates the man value from an array of numbers.
   */
  calculateMeanValue (numbers) {
    const totalSum = this.#sumNumbersInArray(numbers)
    return totalSum / numbers.length
  }

  /**
   * The private method #multiplyNumbersInArray multiplies all numbers in an array and is used in calculateGeometricMeanValue method.
   */
  #multiplyNumbersInArray (numbers) {
    let totalProduct = 1
    for (let i = 0; i < numbers.length; i++) {
      totalProduct *= numbers[i]
    }
    return totalProduct
  }

  /**
   * Calculates the geometric mean value from an array of numbers.
   */
  calculateGeometricMeanValue (numbers) {
    const totalProduct = this.#multiplyNumbersInArray(numbers)
    return Math.pow(totalProduct, 1 / numbers.length)
  }

  #sumReciprocalsInArray (numbers) {
    let totalSumOfReciprocals = 0
    for (let i = 0; i < numbers.length; i++) {
      totalSumOfReciprocals += 1 / numbers[i]
    }
    return totalSumOfReciprocals
  }

  calculateHarmonicMeanValue (numbers) {
    const sumOfReciprocals = this.#sumReciprocalsInArray(numbers)
    return numbers.length / sumOfReciprocals
  }
}
