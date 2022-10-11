import { IsString, IsUUID } from 'class-validator'

export class CreateIssueRequestDto {
  @IsUUID(4)
  id: string

  @IsUUID(4)
  offerId: string

  @IsString()
  description: string
}

export interface CreateIssueResponseDto {
  id: string
  offerId: string
  description: string
  isOpen: string
}
