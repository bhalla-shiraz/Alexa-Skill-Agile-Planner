const express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Welcome to Alexa's Personal Agile Planner API"))
app.post('/alexa', (req, res) => {
  res.send(handler(req.body))
})

app.get('/alexa', (req, res) => {
  res.send('req')
})
app.listen(4200, () => console.log('Example app listening on port 3000!'))

const getStoriesThisWeek = () => [
  {
    id: 1,
    story: 'Grocery shopping'
  },
  {
    id: 2,
    story: 'Trek to Mission Peak'
  },
  {
    id: 3,
    story: 'React Application Development'
  }
]

const getStoryTasks = () => [
  {
    id: 1,
    task: 'Build UI engine baseline',
    hoursRemaining: 5,
    hoursTotal: 8
  },
  {
    id: 2,
    task: 'Build redux store',
    hoursRemaining: 8,
    hoursTotal: 10
  },
  {
    id: 3,
    task: 'write unit test cases',
    hoursRemaining: 5,
    hoursTotal: 5
  }
]

const handler = event => {
  try {
    const request = event.request
    const session = event.session
    const requestType = request.type
    console.log(session)
    // 3 requests - launchRequest, IntentRequest and sessionEndedRequest
    if (requestType === 'LaunchRequest') {
      let options = {
        speechText: 'Welcome to Personal Agile Planner. What would you like to do?',
        repromptText: 'you can ask for help or say exit to quit ',
        endSession: false
      }
      const response = buildResponse(options)
      return response
    } else if (requestType === 'IntentRequest') {
      if (request.intent.name === 'StoryboardSummary') {
        const storiesThisWeek = getStoriesThisWeek()
        const storiesParsedArray = storiesThisWeek.map(({ id, story }) => {
          return `Story ${id} : ${story}`
        })
        let options = {
          speechText: `Let's go through all your stories for this week.
          ${storiesParsedArray.join('. ')}
          `,
          endSession: false
        }
        const response = buildResponse(options)
        return response
      } else if (request.intent.name === 'StorySummary') {
        let storyId = request.intent.slots.storyId.value
        const storyMatches = getStoriesThisWeek().filter(story => story.id == storyId)
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
        const response = buildResponse(options)
        return response
      } else if (request.intent.name === 'StoryTasksSummary') {
        const storyId = session.attributes.storyId
        const storyMatches = getStoriesThisWeek().filter(story => story.id == storyId)
        const storyTasks = getStoryTasks()
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
        const response = buildResponse(options)
        return response
      } else {
        let options = {
          speechText: 'what the hell?',
          endSession: true
        }
        const response = buildResponse(options)
        return response
      }
    } else if (requestType === 'SessionEndedRequest') {
    } else {
    }
  } catch (e) {
    console.log('test')
  }
}

const buildResponse = options => {
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
