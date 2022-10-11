import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { AssetPhoto } from '../asset-photo/asset-photo'
import { User } from '../user/user'
import { UserAsset } from '../user_asset/user-asset'
import { Offer } from '../offer/offer'
import { AssetOffer } from '../asset_offer/asset-offer'
import { AssetReview } from '../asset-review/asset-review'

@Table({ underscored: true })
export class Asset extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @Column({ type: DataType.STRING })
  name: string

  @Column({ type: DataType.STRING })
  country: string

  @Column({ type: DataType.STRING })
  region: string

  @Column({ type: DataType.STRING })
  postCode: string

  @Column({ type: DataType.STRING })
  city: string

  @Column({ type: DataType.STRING })
  street: string

  @Column({ type: DataType.STRING })
  buildingNumber: string

  @Column({ type: DataType.FLOAT })
  area: number

  @Column({
    type: DataType.STRING,
    comment: 'Offices, warehouses, accommodation, service, retail, mall, authorities',
  })
  type: string

  @Column({
    type: DataType.STRING,
    comment: 'Startups, artists  ....',
  })
  target: string

  @Column({ type: DataType.BOOLEAN })
  standardsCompliance: boolean

  @Column({
    type: DataType.STRING,
    comment: 'Describe what you should to to rehabilitate the asset.',
  })
  standardsRehabilitation: string

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  tags?: string[]

  @HasMany(() => AssetPhoto)
  photos: AssetPhoto[]

  @HasMany(() => AssetReview)
  reviews: AssetReview[]

  @BelongsToMany(() => User, () => UserAsset)
  users: User[]

  @BelongsToMany(() => Offer, () => AssetOffer)
  offers: Offer[]
}
