import {
    IsBoolean,
    IsDate,
    IsNumber,
    IsOptional,
    IsString
} from 'class-validator'

export class GetCustomerNeedsRequestDto {

    @IsOptional()
    @IsString()
    startDate?: string

    @IsOptional()
    @IsString()
    endDate?: string

    @IsOptional()
    @IsNumber()
    minPrice?:number

    @IsOptional()
    @IsNumber()
    maxPrice?: number

    @IsOptional()
    @IsNumber()
    minArea?:number

    @IsOptional()
    @IsNumber()
    maxArea?:number

    @IsOptional()
    @IsString()
    city?: string

    @IsOptional()
    @IsString()
    region?: string

    @IsOptional()
    @IsBoolean()
    office?: boolean

    @IsOptional()
    @IsBoolean()
    warehouse?: boolean

    @IsOptional()
    @IsBoolean()
    workshop?: boolean

}
