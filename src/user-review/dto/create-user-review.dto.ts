import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateUserReviewRequestDto {
  @IsUUID(4)
  id: string

  @IsUUID(4)
  reviewedUserId: string

  @IsNumber()
  rating: number

  @IsOptional()
  @IsString()
  comment: string
}

export interface CreateUserReviewResponseDto {
  id: string
  reviewedUserId: string
  rating: number
  comment: string
}
