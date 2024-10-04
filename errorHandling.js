function catchErrors (methodToRun, ...parameters) {
  try {
    return methodToRun(...parameters)
  } catch (error) {
    console.error('Error catched:', error.message)
    return null
  }
}
