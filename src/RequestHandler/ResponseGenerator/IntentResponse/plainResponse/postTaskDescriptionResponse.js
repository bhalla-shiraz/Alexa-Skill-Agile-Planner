module.exports = (request, session) => {
  const responseText = request.intent.slots.responseText.value
  const storyId = session.attributes.storyId
  let options = {
    speechText: 'Please tell me the hours requred for this task',
    endSession: false,
    sessionAttributes: {
      storyId: storyId,
      speakingTaskDescription: false,
      speakingTaskHours: true,
      description: responseText
    }
  }
  return options
}
