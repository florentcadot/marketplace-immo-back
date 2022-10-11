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
import { Asset } from '../asset/asset'

@Table({ underscored: true })
export class AssetPhoto extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @ForeignKey(() => Asset)
  @Column({ type: DataType.UUID })
  assetId: string

  @BelongsTo(() => Asset)
  asset: Asset

  @Column({ type: DataType.STRING })
  photoS3Key: string

  @Column({ type: DataType.STRING, defaultValue: "" })
  title: string

  @Column({ type: DataType.STRING, defaultValue: "" })
  description?: string
}
