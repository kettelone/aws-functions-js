'use strict'

const sortUserInputSLS = async (event: any) => {
  //sort by first and last name
  const sortedByName = (list:any) => {
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
  const sortedByDate = (list:any) => {
    return list.sort((a, b) => (a.birthDate < b.birthDate ? 1 : -1))
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      sortedByDate: sortedByDate(JSON.parse(event.body)),
      sortedByName: sortedByName(JSON.parse(event.body)),
    }),
  }
  return response
}

module.exports = {
  handler: sortUserInputSLS,
}
