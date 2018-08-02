import axios from 'axios'
module.exports = (description, hours) => {
  console.log({
    name: description,
    totalHours: hours,
    remainingHours: hours
  })

  axios
    .post('https://52da278e.ngrok.io/task', {
      name: description,
      totalHours: parseInt(hours),
      remainingHours: parseInt(hours)
    })
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log('error', '============================================')
      console.log('=====================================')
      console.log(error.response)
    })
}
