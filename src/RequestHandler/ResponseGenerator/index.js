import getLaunchAppResponse from './LaunchResponse'
import getIntentResponse from './IntentResponse'
import getSessionEndResponse from './SessionEndResponse'

module.exports = (request, sessions) => {
  switch (request.type) {
    case 'LaunchRequest':
      return getLaunchAppResponse(request, sessions)
    case 'IntentRequest':
      return getIntentResponse(request, sessions)
    case 'SessionEndedRequest':
      return getSessionEndResponse(request, sessions)
    default:
      return defaultResponse
  }
}

const defaultResponse = {
  speechText: 'Unable to process the request, please try something else',
  endSession: false,
  sessionAttributes: {}
}
