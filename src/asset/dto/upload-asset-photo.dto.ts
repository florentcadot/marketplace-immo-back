import { IsOptional, IsString, IsUUID } from "class-validator";

export class UploadAssetPhotoRequestDto {

    @IsUUID('4')
    id: string

    @IsOptional()
    @IsString()
    title?: string

    @IsOptional()
    @IsString()
    description?: string
}