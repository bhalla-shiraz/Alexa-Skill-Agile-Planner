import { storiesThisWeek } from '../../mocks/storyMocks'
module.exports = (request, session) => {
  const storiesParsedArray = storiesThisWeek.map(({ id, story }) => {
    return `Story ${id} : ${story}`
  })
  let options = {
    speechText: `Let's go through all your stories for this week.
    ${storiesParsedArray.join('. ')}
    `,
    endSession: false
  }
  return options
}
