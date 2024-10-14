import { MeanValueCalculations, MedianValueCalculations } from './mathOperations.js'

const meanValueCalculator = new MeanValueCalculations()
const medianValueCalculator = new MedianValueCalculations()

// Test array for manual testing of median value calculations.
const testNumbersForMeanValue = [4, 8, 12, 16, 20, 24]
// Test array for manual testing of mean value calculations with a value of 0 included.
const secondTestNumbersForMeanValue = [4, 8, 12, 16, 20, 24, 0]

// Manual testing of mean value calculations.
const meanValue = meanValueCalculator.calculateMeanValue(testNumbersForMeanValue)
console.log(`Mean value of [${testNumbersForMeanValue}] is:`, meanValue)

const secondMeanValue = meanValueCalculator.calculateMeanValue(secondTestNumbersForMeanValue)
console.log(`Mean value of [${secondTestNumbersForMeanValue}] is:`, secondMeanValue)

// Manual testing of geometric mean value calculations.
const geometricMeanValue = meanValueCalculator.calculateGeometricMeanValue(testNumbersForMeanValue)
console.log(`Geometric mean value of [${testNumbersForMeanValue}] is:`, geometricMeanValue)

const secondGeometricMeanValue = meanValueCalculator.calculateGeometricMeanValue(secondTestNumbersForMeanValue)
console.log(`Geometric mean value of [${secondTestNumbersForMeanValue}] is:`, secondGeometricMeanValue)

// Manual testing of harmonic mean value calculations.
const harmonicMeanValue = meanValueCalculator.calculateHarmonicMeanValue(testNumbersForMeanValue)
console.log(`Harmonic mean value of [${testNumbersForMeanValue}] is:`, harmonicMeanValue)

const secondHarmonicMeanValue = meanValueCalculator.calculateHarmonicMeanValue(secondTestNumbersForMeanValue)
console.log(`Harmonic mean value of [${secondTestNumbersForMeanValue}] is:`, secondHarmonicMeanValue)
