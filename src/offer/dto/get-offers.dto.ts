import {
    IsBoolean,
    IsDate,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID
} from 'class-validator'

export class GetOffersRequestDto {

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
    @IsString()
    type?: string

    tags?: string[]
}
