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
import { OfferApplication } from '../offer-application/offer-application'
import { Issue } from '../issue/issue'
import { Asset } from '../asset/asset'
import { AssetOffer } from '../asset_offer/asset-offer'
import { OfferState } from './offer.type'

@Table({ underscored: true })
export class Offer extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @Column({ type: DataType.STRING })
  title: string

  @Column({ type: DataType.STRING })
  description: string

  @Column({ type: DataType.DATE, comment: 'Offer available date' })
  startDate: Date

  @Column({ type: DataType.DATE, comment: 'Offer expiration date' })
  endDate: Date

  @Column({ type: DataType.FLOAT, comment: 'Monthly rent price' })
  price: number

  @Column({ type: DataType.FLOAT })
  area: number

  @Column({ type: DataType.INTEGER })
  quantity: number

  @Column({
    type: DataType.STRING,
    comment:
      'Offer state : pending if offer available (asset is not rent) ' +
      'or rent if offer not available (asset already rent)',
  })
  state: OfferState

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  premium: boolean

  @Column({ type: DataType.BOOLEAN, defaultValue: false,
    comment: 'True = Public (everybody can see it on the marketplace), ' +
        'False = Private only the user who\'s created the offer can access',
  })
  visible: boolean

  @HasMany(() => OfferApplication)
  offerApplications: OfferApplication[]

  @HasMany(() => Issue)
  issues: Issue[]

  @BelongsToMany(() => Asset, () => AssetOffer)
  assets: Asset[]
}
