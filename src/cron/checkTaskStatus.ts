import { CronJob } from 'cron'
import { Task } from '../db/models'
import { sequelize } from '../db'
import { Op } from 'sequelize'
import { logger } from '../utils/logger/logger'

export const taskStatusCronJob = CronJob.from({
  cronTime: '*/20 * * * *', // in every 20 minutes
  onTick: async () => {
    logger.info('Task checker job run')
    // Use transaction to avoid anomaly if an error occurs during the updates
    // Either all tasks will be updated or none
    const t = await sequelize.transaction()

    try {
      const tasks = await Task.findAll({
        where: { status: 'pending', endDate: { [Op.lt]: new Date() } },
      })

      if (tasks.length) {
        // I do not use Promise.all in such cases because it can cause massive perforamce issue.
        for (const task of tasks) {
          await task.update(
            {
              status: 'done',
            },
            { transaction: t }
          )
        }
      }
      await t.commit()
      tasks.length && logger.info(`${tasks.length} tasks were updated`)
    } catch (error) {
      logger.error('CRON ERROR', error)
      await t.rollback()
    }
  },
  start: true,
  timeZone: 'Europe/Budapest',
})
