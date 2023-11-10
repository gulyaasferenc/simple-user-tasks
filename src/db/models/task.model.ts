import {
  Model,
  Column,
  Table,
  PrimaryKey,
  IsUUID,
  BelongsTo,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  DataType,
  Default,
} from 'sequelize-typescript'
import { User } from './user.model'

@Table({
  underscored: true,
})
export class Task extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING)
  id: string

  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  description: string

  @Column(DataType.STRING)
  status: 'todo' | 'pending' | 'done'

  @Column(DataType.DATE)
  nextExecuteDateTime: Date

  @CreatedAt
  creationDate: Date

  @UpdatedAt
  updatedOn: Date

  @ForeignKey(() => User)
  @Column(DataType.STRING)
  userId: string

  @BelongsTo(() => User)
  user: User
}
