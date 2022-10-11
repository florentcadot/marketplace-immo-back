import { IsString, IsUUID } from 'class-validator'

export class UpdateAssetReviewRequestDto {
  @IsUUID(4)
  id

  @IsString()
  comment
}

export interface UpdateAssetReviewResponseDto {
  id: string
  comment: string
}
