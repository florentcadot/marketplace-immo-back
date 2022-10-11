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
import { Company } from '../company/company'
import { User } from '../user/user'

@Table({ underscored: true })
export class CompanyInvitation extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @IsUUID(4)
  @ForeignKey(() => Company)
  @Column({ type: DataType.UUID })
  companyId: string

  @BelongsTo(() => Company)
  company: Company

  @IsUUID(4)
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string

  @BelongsTo(() => User)
  user: User

  @Column({ type: DataType.DATE })
  expirationDate: Date
}
