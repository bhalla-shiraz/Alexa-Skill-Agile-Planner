import getPlainResponse from './plainResponse'
import getStoryboardSummaryResponse from './StoryboardSummary'
import getStorySummaryResponse from './StorySummary'
import getStoryTasksSummaryResponse from './StoryTasksSummary'
import getAddATaskResponse from './AddATask'
import getAddAStoryResponse from './AddAStory'

module.exports = (request, session) => {
  switch (request.intent.name) {
    case 'plainResponse':
      return getPlainResponse(request, session)
    case 'StoryboardSummary':
      return getStoryboardSummaryResponse(request, session)
    case 'StorySummary':
      return getStorySummaryResponse(request, session)
    case 'StoryTasksSummary':
      return getStoryTasksSummaryResponse(request, session)
    case 'AddATaskRequest':
      return getAddATaskResponse(request, session)
    case 'AddAStoryRequest':
      return getAddAStoryResponse(request, session)
    default:
      return getDefaultResponse()
  }
}

const getDefaultResponse = () => {
  let options = {
    speechText: 'Sorry Bro!!! could not find what you are looking for',
    endSession: true,
    sessionAttributes: {
      storyId: storyId
    }
  }
}
