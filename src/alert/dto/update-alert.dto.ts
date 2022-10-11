import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdateAlertRequestDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsNumber()
  minPrice?: number

  @IsOptional()
  @IsNumber()
  maxPrice?: number

  @IsOptional()
  @IsNumber()
  minArea?: number

  @IsOptional()
  @IsNumber()
  maxArea?: number

  @IsOptional()
  @IsString()
  country?: string

  @IsOptional()
  @IsString()
  region?: string

  @IsOptional()
  @IsString()
  postCode?: string

  @IsOptional()
  @IsString()
  city?: string

  @IsOptional()
  @IsNumber()
  leaseTerm?: number

  @IsOptional()
  @IsString({ each: true })
  tags?: string[]
}

export interface UpdateAlertResponseDto {
  id: string
  minPrice: number
  maxPrice: number
  minArea: number
  maxArea: number
  country: string
  region: string
  postCode: string
  city: string
  leaseTerm: number
  tags: string[]
}
