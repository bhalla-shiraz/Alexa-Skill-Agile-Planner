module.exports = options => {
  const response = {
    version: '1.0',
    sessionAttributes: options.sessionAttributes ? options.sessionAttributes : {},
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: options.speechText
      },
      shouldEndSession: options.endSession
    }
  }

  if (options.repromptText) {
    response.response.reprompt = {
      outputSpeech: {
        type: 'PlainText',
        text: options.repromptText
      }
    }
  }
  return response
}
