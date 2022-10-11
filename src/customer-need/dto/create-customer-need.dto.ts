import {
    IsArray,
    IsBoolean,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID
} from 'class-validator'

export class CreateCustomerNeedRequestDto {

    @IsUUID()
    id: string

    @IsOptional()
    @IsString()
    city: string

    @IsOptional()
    @IsString()
    country: string

    @IsOptional()
    @IsString()
    region: string

    @IsOptional()
    @IsString()
    postCode: string

    @IsOptional()
    @IsNumber()
    minArea: number

    @IsOptional()
    @IsNumber()
    maxArea: number

    @IsOptional()
    @IsString()
    startDate: string

    @IsOptional()
    @IsString()
    endDate: string

    @IsOptional()
    @IsNumber()
    price: number

    @IsOptional()
    @IsBoolean()
    office: boolean

    @IsOptional()
    @IsArray()
    officeType: string[]

    @IsOptional()
    @IsBoolean()
    warehouse: boolean

    @IsOptional()
    @IsBoolean()
    workshop: boolean

}
