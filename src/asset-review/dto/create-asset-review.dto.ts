import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateAssetReviewRequestDto {
  @IsUUID(4)
  id

  @IsUUID(4)
  assetId

  @IsNumber()
  rating

  @IsOptional()
  @IsString()
  comment
}

export interface CreateAssetReviewResponseDto {
  id: string
  assetId: string
  rating: string
  comment: string
}
