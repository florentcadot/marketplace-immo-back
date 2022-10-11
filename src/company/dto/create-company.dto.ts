import { IsString, IsUUID } from 'class-validator'

export class CreateCompanyRequestDto {
  @IsUUID(4)
  id: string

  @IsString()
  group: string

  @IsString()
  phoneNumber: string

  @IsString()
  country: string

  @IsString()
  region: string

  @IsString()
  postCode: string

  @IsString()
  city: string

  @IsString()
  street: string

  @IsString()
  buildingNumber: string

  @IsString()
  registrationNumber: string
}

export interface CreateCompanyResponseDto {
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
