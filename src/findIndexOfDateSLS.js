'use strict'

const findIndexOfDateSLS = async (event) => {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth()
  let currentDay = currentDate.getDate()

  let dayIndex = currentDay

  for (let month = 0; month < currentMonth; month++) {
    console.log(new Date(currentYear, month + 1, 0).getDate())
    dayIndex += new Date(currentYear, month + 1, 0).getDate()
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({ dayIndex: dayIndex }),
  }
  return response
}

module.exports = {
  handler: findIndexOfDateSLS,
}
