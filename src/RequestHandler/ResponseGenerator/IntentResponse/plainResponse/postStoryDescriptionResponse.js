module.export = (request, session) => {
  const responseText = request.intent.slots.responseText.value
  let options = {
    speechText: 'Congratulations, Your story has been created',
    endSession: false,
    sessionAttributes: {
      storyId: '',
      speakingTaskDescription: false,
      speakingTaskHours: true,
      description: responseText
    }
  }
  console.log('API call once created')

  return options
}
