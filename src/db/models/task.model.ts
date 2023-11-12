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
  Scopes,
  Unique,
} from 'sequelize-typescript'
import { User } from './user.model'

@Scopes(() => ({
  withUsers: {
    include: [User],
  },
}))
@Table({
  underscored: true,
})
export class Task extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.STRING)
  id: string

  @Unique
  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  description: string

  @Default('todo')
  @Column(DataType.STRING)
  status: 'todo' | 'pending' | 'done'

  @Column(DataType.DATE)
  endDate: Date

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
