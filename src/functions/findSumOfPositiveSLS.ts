'use strict'
const findSumOfPositiveSLS = async (event: any) => {
  const arr: Array<number> = JSON.parse(event.body)
  const sum: number = arr.reduce(function (prev, curr) {
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
