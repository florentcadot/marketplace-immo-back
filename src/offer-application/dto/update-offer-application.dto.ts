import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsUUID
} from 'class-validator'

export class UpdateOfferApplicationRequestDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsDate()
  expirationDate: Date

  @IsOptional()
  @IsNumber()
  price: number

  @IsOptional()
  @IsBoolean()
  surveyCompensation?: boolean

  @IsOptional()
  @IsBoolean()
  workshopCompensation?: boolean

  @IsOptional()
  @IsBoolean()
  renovationCompensation?: boolean
}

export interface UpdateOfferApplicationResponseDto {
  id: string
  offerId: string
  expirationDate: Date
  price: number
  surveyCompensation: boolean
  workshopCompensation: boolean
  renovationCompensation: boolean
}
