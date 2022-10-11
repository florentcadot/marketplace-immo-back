import { IsDate, IsUUID } from 'class-validator'

export class CreateCompanyInvitationRequestDto {
  @IsUUID(4)
  id: string

  @IsUUID(4)
  companyId: string

  @IsUUID(4)
  userId: string

  @IsDate()
  expirationDate: Date
}

export interface CreateCompanyInvitationResponseDto {
  id: string
  companyId: string
  userId: string
  expirationDate: Date
}
