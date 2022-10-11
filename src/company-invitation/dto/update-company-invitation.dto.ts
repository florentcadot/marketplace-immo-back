import {
  IsDate,
  IsUUID
} from 'class-validator'

export class UpdateCompanyInvitationRequestDto {
  @IsUUID(4)
  id: string

  @IsDate()
  expirationDate: Date
}

export interface UpdateCompanyInvitationResponseDto {
  id: string
  companyId: string
  userId: string
  expirationDate: Date
}
