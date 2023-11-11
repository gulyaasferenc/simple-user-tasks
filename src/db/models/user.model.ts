import {
  Model,
  Column,
  Table,
  HasMany,
  PrimaryKey,
  IsUUID,
  CreatedAt,
  UpdatedAt,
  DataType,
  Default,
  Scopes,
} from 'sequelize-typescript'
import { Task } from './task.model'

@Scopes(() => ({
  withTasks: {
    include: [Task],
  },
}))
@Table({
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING)
  id: string

  @Column(DataType.STRING)
  firstName: string

  @Column(DataType.STRING)
  lastName: string

  @Column(DataType.STRING)
  username: string

  @CreatedAt
  creationDate: Date

  @UpdatedAt
  updatedOn: Date

  @HasMany(() => Task)
  tasks?: Task[]

  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}
