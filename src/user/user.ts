import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  IsEmail,
  IsUrl,
  IsUUID,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { Company } from '../company/company'
import { Alert } from '../alert/alert'
import { UserReview } from '../user-review/user-review'
import { Issue } from '../issue/issue'
import { OfferApplication } from '../offer-application/offer-application'
import { CompanyInvitation } from '../company-invitation/company-invitation'
import { Asset } from '../asset/asset'
import { UserAsset } from '../user_asset/user-asset'
import { AssetReview } from '../asset-review/asset-review'
import { UserRole } from '../authorization/user-role'

@Table({ underscored: true })
export class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string

  @Column({ type: DataType.DATE })
  createdAt: Date

  @Column({ type: DataType.DATE })
  updatedAt: Date

  @Column({ type: DataType.STRING })
  firstname: string

  @Column({ type: DataType.STRING })
  lastname: string

  @IsEmail
  @Column({ type: DataType.STRING })
  email: string

  @Column({ type: DataType.STRING, allowNull: true })
  password: string

  @Column({ type: DataType.STRING, allowNull: true })
  phoneNumber: string

  @IsUrl
  @Column({ type: DataType.STRING, allowNull: true })
  photoLocation: string

  @IsUUID(4)
  @ForeignKey(() => Company)
  @Column({ type: DataType.UUID, allowNull: true })
  companyId: string

  @BelongsTo(() => Company)
  company: Company

  @Column({ type: DataType.STRING, allowNull: true })
  jobTitle: string

  @Column({
    type: DataType.ENUM(UserRole.USER, UserRole.ADMIN, UserRole.OWNER),
    defaultValue: UserRole.USER,
  })
  role: UserRole

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isActive: boolean

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isRegisteredWithGoogle: boolean

  @Column({ type: DataType.STRING, allowNull: true })
  currentHashedRefreshToken?: string

  @HasMany(() => Alert)
  alerts: Alert[]

  @HasMany(() => UserReview, 'reviewerUserId')
  givenReviews: UserReview[]

  @HasMany(() => UserReview, 'reviewedUserId')
  receivedReviews: UserReview[]

  @HasMany(() => AssetReview)
  assetReviews: AssetReview[]

  @HasMany(() => Issue)
  issues: Issue[]

  @HasMany(() => OfferApplication)
  offerApplications: OfferApplication[]

  @HasMany(() => CompanyInvitation)
  companyInvitations: CompanyInvitation[]

  @BelongsToMany(() => Asset, () => UserAsset)
  assets: Asset[]
}
