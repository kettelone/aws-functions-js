'use strict'

const sortUserInputSLS = async (event) => {
  //sort by first and last name
  const sortedByName = (list) => {
    return list.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return 1
      } else if (a.firstName < b.firstName) {
        return -1
      } else if (a.firstName === b.firstName && a.lastName > b.lastName) {
        return 1
      } else if (a.firstName === b.firstName && a.lastName < b.lastName) {
        return -1
      }
    })
  }
  //  sort by date of birth
  const sortedByDate = (list) => {
    return list.sort((a, b) => (a.birthDate < b.birthDate ? 1 : -1))
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      sortedByDate: sortedByDate(JSON.parse(event.body).names),
      sortedByName: sortedByName(JSON.parse(event.body).names),
    }),
  }
  return response
}

module.exports = {
  handler: sortUserInputSLS,
}
