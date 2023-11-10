import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectToDb from './db'
import users from './routes/users'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/users', users)

app.use('/', (_, res) => {
  res.status(200).send('success')
})

connectToDb().then(() =>
  app.listen(3000, () => console.log('user-task is alive'))
)
