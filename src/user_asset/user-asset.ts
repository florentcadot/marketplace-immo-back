import {
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  Table
} from 'sequelize-typescript'
import { User } from '../user/user'
import { Asset } from '../asset/asset'

@Table({ underscored: true })
export class UserAsset extends Model {
  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, comment: 'Owner Id' })
  userId: string

  @IsUUID(4)
  @ForeignKey(() => Asset)
  @Column({ type: DataType.UUID })
  assetId: string
}
