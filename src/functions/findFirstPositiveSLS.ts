'use strict'
const findFirstPositiveSLS = async (event:any) => {
  const arr:Array<number> = JSON.parse(event.body)

  const numberInfo = arr.find((el) => typeof el === 'number' && el > 0)

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
