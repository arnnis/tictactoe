import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import './db'
require("dotenv").config();

import sessionsRouter from './routes/sessions'

export const app = express()


app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.use('/sessions', sessionsRouter)

app.use((error, request, response, next) => {
  response.header('Content-Type', 'application/json')

  const status = error.statusCode || 400
  response.status(status).send(error.message)
})

app.listen(process.env.PORT || 8000, () => console.log('Server running ' + process.env.PORT || 8000))
