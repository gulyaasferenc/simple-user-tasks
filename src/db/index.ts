import { Sequelize } from 'sequelize-typescript'

import * as models from './models'

export let sequelize: Sequelize

const connectToDb = async () => {
  sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    models: Object.values(models),
  })

  sequelize.authenticate()
}

export default connectToDb
