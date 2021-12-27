'use strict'

const findSumAndProductSLS = async (event) => {
  let arr = JSON.parse(event.body).array
  let n = JSON.parse(event.body).n
  let sum = 0
  let product = 1

  for (let i = 0; i < n; i++) {
    if (typeof arr[i] == 'number') {
      sum += arr[i]
      product *= arr[i]
    }
  }
  const responseString = `sum is ${sum}, product is ${product}`
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseString),
  }
  return response
}

module.exports = {
  handler: findSumAndProductSLS,
}
