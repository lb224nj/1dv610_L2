function sumNumbersInArray (numbers) {
  let totalSum = 0
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i]
  }
  return totalSum
}

function meanValue (numbers) {
  const totalSum = sumNumbersInArray(numbers)
  return totalSum / numbers.length
}

function multiplyNumbersInArray (numbers) {
  let totalProduct = 1
  for (let i = 0; i < numbers.length; i++) {
    totalProduct *= numbers[i]
  }
  return totalProduct
}
