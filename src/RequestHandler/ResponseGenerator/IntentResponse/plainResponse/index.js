import getPostTaskDescriptionResponse from './postTaskDescriptionResponse'
import getPostStoryDescriptionResponse from './postStoryDescriptionResponse'
import getPostTaskHoursResponse from './postTaskHoursResponse'

module.exports = (request, session) => {
  if (session.attributes.speakingTaskDescription) {
    return getPostTaskDescriptionResponse(request, session)
  } else if (session.attributes.speakingTaskDescription) {
    return getPostStoryDescriptionResponse(request, session)
  } else if (session.attributes.speakingTaskHours) {
    return getPostTaskHoursResponse(request, session)
  }
}
