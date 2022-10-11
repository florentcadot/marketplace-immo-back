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
import { Offer } from '../offer/offer'

@Table({ underscored: true })
export class OfferApplication extends Model {
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
  @ForeignKey(() => Offer)
  @Column({ type: DataType.UUID })
  offerId: string

  @BelongsTo(() => Offer)
  offer: Offer

  @Column({ type: DataType.DATE })
  expirationDate: Date

  @Column({ type: DataType.FLOAT })
  price: number

  @Column({ type: DataType.STRING })
  surveyCompensation: boolean

  @Column({ type: DataType.STRING })
  workshopCompensation: boolean

  @Column({ type: DataType.STRING })
  renovationCompensation: boolean
}
