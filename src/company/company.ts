import {
  Column,
  DataType,
  HasMany,
  IsUrl,
  IsUUID,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { CompanyInvitation } from '../company-invitation/company-invitation'
import { User } from '../user/user'

@Table({ underscored: true })
export class Company extends Model {
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
  group?: string

  @Column({ type: DataType.STRING })
  phoneNumber: string

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

  @Column({ type: DataType.STRING })
  registrationNumber: string

  @IsUrl
  @Column({ type: DataType.STRING })
  kbisLocation?: string

  @IsUrl
  @Column({ type: DataType.STRING })
  photoLocation?: string

  @HasMany(() => CompanyInvitation)
  companyInvitations: CompanyInvitation[]

  @HasMany(() => User)
  users: User[]
}
