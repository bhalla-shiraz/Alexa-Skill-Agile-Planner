import { storiesThisWeek, storyTasks } from '../../mocks/storyMocks'

module.exports = (request, session) => {
  const storyId = session.attributes.storyId
  const storyMatches = storiesThisWeek.filter(story => story.id == storyId)
  const parsedStoryTasks = storyTasks.map(
    ({ id, task, hoursRemaining, hoursTotal }) =>
      `Task ${id}: ${task}. Completion status: ${hoursRemaining} of ${hoursTotal} hours remaining`
  )
  let reply = `story not found`
  if (storyMatches.length === 1) {
    reply = `Following are the tasks for this story. ${parsedStoryTasks.join('. ')} `
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
