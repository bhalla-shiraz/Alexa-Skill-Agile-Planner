import requestHandler from './RequestHandler'
const express = require('express')
const bodyParser = require('body-parser')
const querystring = require('querystring')
const http = require('http')
const fs = require('fs')
const axios = require('axios')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send("Welcome to Alexa's Personal Agile Planner API"))
app.post('/alexa', (req, res) => {
  res.send(requestHandler(req.body))
})

app.listen(4200, () => console.log('Example app listening on port 4200!'))
