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
export class Alert extends Model {
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

  @Column({ type: DataType.FLOAT, allowNull: true })
  minPrice: number

  @Column({ type: DataType.FLOAT, allowNull: true })
  maxPrice: number

  @Column({ type: DataType.INTEGER, allowNull: true })
  minArea: number

  @Column({ type: DataType.INTEGER, allowNull: true })
  maxArea: number

  @Column({ type: DataType.STRING, allowNull: true })
  country: string

  @Column({ type: DataType.STRING, allowNull: true })
  region: string

  @Column({ type: DataType.STRING, allowNull: true })
  postCode: string

  @Column({ type: DataType.STRING, allowNull: true })
  city: string

  @Column({
    type: DataType.INTEGER,
    comment: 'Number of days',
    allowNull: true,
  })
  leaseTerm: number

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  tags: string[]
}
