import responseGenerator from './ResponseGenerator'
import responseBuilder from '../utils/responseBuilder'

module.exports = event => {
  try {
    const request = event.request
    const session = event.session
    session.attributes = session.attributes || {}
    return responseBuilder(responseGenerator(request, session))
  } catch (error) {
    console.log('error', error)
  }
}
