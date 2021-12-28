'use strict'

const hello = async (event:Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v2.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

module.exports = {
  handler: hello,
}
