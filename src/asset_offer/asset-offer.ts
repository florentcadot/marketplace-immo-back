import {
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  Table
} from 'sequelize-typescript'
import { Asset } from '../asset/asset'
import { Offer } from '../offer/offer'

@Table({ underscored: true })
export class AssetOffer extends Model {
  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @IsUUID(4)
  @ForeignKey(() => Asset)
  @Column({ type: DataType.UUID })
  assetId: string

  @IsUUID(4)
  @ForeignKey(() => Offer)
  @Column({ type: DataType.UUID })
  offerId: string
}
