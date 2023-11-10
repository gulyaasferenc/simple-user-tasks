import { Sequelize } from 'sequelize-typescript'

import * as models from './models'

const connectToDb = async () => {
  const sequelize = new Sequelize({
    username: 'user',
    password: 'password',
    database: 'db',
    host: '127.0.0.1',
    dialect: 'mysql',
    models: Object.values(models),
  })

  sequelize.authenticate()
}

export default connectToDb
