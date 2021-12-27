'use strict'

const findSumOfPositiveSLS = async (event) => {
  let arr = JSON.parse(event.body).array
  let sum = arr.reduce(function (prev, curr) {
    return curr > 0 ? prev + curr : prev
  }, 0)

  const response = {
    statusCode: 200,
    body: 'Sum is: ' + JSON.stringify(sum),
  }
  return response
}

module.exports = {
  handler: findSumOfPositiveSLS,
}
