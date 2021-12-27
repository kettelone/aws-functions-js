'use strict'

const findFirstPositiveSLS = async (event) => {
  let arr = JSON.parse(event.body).array
  let numberInfo = null

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      numberInfo = { number: arr[i], index: i }
      break
    }
  }
  return numberInfo != null
    ? { statusCode: 200, body: JSON.stringify(numberInfo) }
    : {
        statusCode: 200,
        body: JSON.stringify('There is no positive number...'),
      }
}

module.exports = {
  handler: findFirstPositiveSLS,
}
