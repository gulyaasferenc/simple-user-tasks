import { pino } from 'pino'

export const logger = pino({ name: 'user-task-api', edgeLimit: 150 })
