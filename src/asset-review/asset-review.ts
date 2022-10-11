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
import { Asset } from '../asset/asset'

@Table({ underscored: true })
export class AssetReview extends Model {
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
  userId: string

  @BelongsTo(() => User)
  user: User

  @IsUUID(4)
  @ForeignKey(() => Asset)
  @Column({ type: DataType.UUID })
  assetId: string

  @BelongsTo(() => Asset)
  asset: Asset

  @Column({ type: DataType.INTEGER })
  rating: number

  @Column({ type: DataType.STRING })
  comment?: string
}
