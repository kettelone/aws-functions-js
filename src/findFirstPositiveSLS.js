'use strict'

const findFirstPositiveSLS = async (event) => {
  let arr = JSON.parse(event.body).array

  let numberInfo = arr.find((el) => el > 0)

  return numberInfo
    ? { statusCode: 200, body: JSON.stringify(numberInfo) }
    : {
        statusCode: 200,
        body: JSON.stringify('There is no positive number...'),
      }
}

module.exports = {
  handler: findFirstPositiveSLS,
}
