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

  meanValue (numbers) {
    const totalSum = this.#sumNumbersInArray(numbers)
    return totalSum / numbers.length
  }

  #multiplyNumbersInArray (numbers) {
    let totalProduct = 1
    for (let i = 0; i < numbers.length; i++) {
      totalProduct *= numbers[i]
    }
    return totalProduct
  }
}
