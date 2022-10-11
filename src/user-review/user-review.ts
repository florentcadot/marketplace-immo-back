import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { User } from '../user/user'

@Table({ underscored: true })
export class UserReview extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  reviewerUserId: string

  @BelongsTo(() => User, 'reviewerUserId')
  reviewerUser: User

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  reviewedUserId: string

  @BelongsTo(() => User, 'reviewedUserId')
  reviewedUser: User

  @Column({ type: DataType.INTEGER })
  rating: number

  @Column({ type: DataType.STRING })
  comment?: string
}
