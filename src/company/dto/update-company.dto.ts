import { IsOptional, IsString, IsUUID } from 'class-validator'

export class UpdateCompanyRequestDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsString()
  group?: string

  @IsOptional()
  @IsString()
  phoneNumber?: string

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
  @IsString()
  registrationNumber?: string
}

export interface UpdateCompanyResponseDto {
  id: string
  group: string
  phoneNumber: string
  country: string
  region: string
  postCode: string
  city: string
  street: string
  buildingNumber: string
  registrationNumber: string
}
