module.exports = (description, hours) => {
  console.log({
    name: description,
    totalHours: hours,
    remainingHours: hours
  })

  // return axios
  //   .post('https://8746ee8d.ngrok.io/task?origin=*', {
  //     name: description,
  //     totalHours: hours,
  //     remainingHours: hours
  //   })
  //   .then(function(response) {
  //     return response
  //   })
  //   .catch(function(error) {
  //     return error
  //   })
}
