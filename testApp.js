import { MeanValueCalculations, MedianValueCalculations } from './mathOperations.js'

const meanValueCalculator = new MeanValueCalculations()
const medianValueCalculator = new MedianValueCalculations()

const testNumbersForMeanValue = [1, 4, 8, 10, 20, 24]
const meanValue = meanValueCalculator.calculateMeanValue(testNumbersForMeanValue)
console.log(`Mean value of [${testNumbersForMeanValue}] is:`, meanValue)
