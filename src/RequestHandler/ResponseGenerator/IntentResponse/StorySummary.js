import { storiesThisWeek } from '../../mocks/storyMocks'
module.exports = (request, session) => {
  let storyId = request.intent.slots.storyId.value
  const storyMatches = storiesThisWeek.filter(story => story.id == storyId)
  let reply = `story not found`
  if (storyMatches.length === 1) {
    reply = `Story: ${storyMatches[0].story} has been opened. What do you want to do next`
  }
  let options = {
    speechText: reply,
    endSession: false,
    sessionAttributes: {
      storyId: storyId
    }
  }
  return options
}
