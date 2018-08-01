module.exports = (request, session) => {
  const storyId = session.attributes.storyId
  let options = {
    speechText: 'Please tell me the task description',
    endSession: false,
    sessionAttributes: {
      storyId: storyId,
      speakingStoryDescription: true
    }
  }
  return options
}
