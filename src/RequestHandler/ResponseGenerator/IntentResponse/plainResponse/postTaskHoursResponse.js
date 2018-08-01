import createTask from '../../../../apiHandlers/createTask'

module.exports = (request, session) => {
  const responseText = request.intent.slots.responseText.value
  const storyId = session.attributes.storyId
  let options = {
    speechText: 'Congratulations, your tasks have been added',
    endSession: false,
    sessionAttributes: {
      storyId: storyId,
      speakingTaskDescription: false,
      speakingHours: false,
      description: ''
    }
  }
  createTask(session.attributes.description, responseText)
  return options
}
