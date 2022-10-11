import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator'

export class UpdateUserReviewRequestDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsNumber()
  rating: number

  @IsOptional()
  @IsString()
  comment: string
}

export interface UpdateUserReviewResponseDto {
  id: string
  reviewedUserId: string
  rating: number
  comment: string
}
