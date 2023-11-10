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
} from 'sequelize-typescript'
import { Task } from './task.model'

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
