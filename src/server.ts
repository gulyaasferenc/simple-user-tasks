import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectToDb from './db'

import apiRoutes from './routes/api'
import { taskStatusCronJob } from './cron/checkTaskStatus'
import { logger } from './utils/logger/logger'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.use('/', (_, res) => {
  res.status(200).send('success')
})

connectToDb().then(() => {
  logger.info('started jobs:', taskStatusCronJob.lastExecution)
  app.listen(3000, () => logger.info('user-task is alive'))
})
