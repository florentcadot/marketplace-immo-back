import {
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
export class CustomerNeed extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id: string

    @Column({ type: DataType.DATE })
    createdAt: Date

    @Column({ type: DataType.DATE })
    updatedAt: Date

    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    userId: string

    @Column({ type: DataType.STRING })
    city: string

    @Column({ type: DataType.STRING })
    country: string

    @Column({ type: DataType.STRING })
    region: string

    @Column({ type: DataType.STRING })
    postCode: string

    @Column({ type: DataType.FLOAT })
    minArea: number

    @Column({ type: DataType.FLOAT })
    maxArea: number

    @Column({ type: DataType.DATE })
    startDate: Date

    @Column({ type: DataType.DATE })
    endDate: Date

    @Column({ type: DataType.FLOAT })
    price: number

    @Column({ type: DataType.BOOLEAN })
    office: boolean

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    officeType: string[]

    @Column({ type: DataType.BOOLEAN })
    warehouse: boolean

    @Column({ type: DataType.BOOLEAN })
    workshop: boolean

}
