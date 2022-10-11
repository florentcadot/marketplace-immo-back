import { IsBoolean, IsDate, IsNumber, IsUUID } from 'class-validator'

export class CreateOfferApplicationRequestDto {
  @IsUUID(4)
  id: string

  @IsUUID(4)
  offerId: string

  @IsDate()
  expirationDate: Date

  @IsNumber()
  price: number

  @IsBoolean()
  surveyCompensation: boolean

  @IsBoolean()
  workshopCompensation: boolean

  @IsBoolean()
  renovationCompensation: boolean
}

export interface CreateOfferApplicationResponseDto {
  id: string
  offerId: string
  expirationDate: Date
  price: number
  surveyCompensation: boolean
  workshopCompensation: boolean
  renovationCompensation: boolean
}
