import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator'

export class UpdateAssetRequestDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsString()
  name?: string

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
  @IsString()
  street?: string

  @IsOptional()
  @IsString()
  buildingNumber?: string

  @IsOptional()
  @IsNumber()
  area?: number

  @IsOptional()
  @IsString()
  type?: string

  @IsOptional()
  @IsString()
  target?: string

  @IsOptional()
  @IsBoolean()
  standardsCompliance?: boolean

  @IsOptional()
  @IsString()
  standardsRehabilitation?: string

  @IsOptional()
  @IsString({ each: true })
  tags?: string[]
}
