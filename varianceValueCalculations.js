import { MeanValueCalculations } from './meanValueCalculations.js'
import { checkArraysInput } from './helperFunctions.js'

export class VarianceValueCalculations {
/**
 * Constructs an instance of the VarianceValueCalculations class where MeanValueCalculations class is reused via
 * composition.
 */
  constructor () {
    this.meanValueCalculator = new MeanValueCalculations()
  }
  /**
   * Private method that calculates the squared difference between a number and the mean value of an array. Used in
   * calculateVarianceValue method.
   */
  #calculateTotalSquaredDifference (numbers, meanValue) {
    
  }
}
