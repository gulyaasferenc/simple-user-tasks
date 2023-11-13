import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'

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

// from now, exported sequelize from ./db/index.ts is a valid sequelize object with a db connection
connectToDb().then(() => {
  // no catch because without the db whole api is useless
  logger.info(
    `started scheduled job, task-checker; isRunning: ${taskStatusCronJob.running}`
  )
  app.listen(3000, () => logger.info('user-task is alive'))
})
