import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator'
import { UserRole } from '../../authorization/user-role'

export class UpdateUserDto {
  @IsUUID(4)
  id: string

  @IsOptional()
  @IsString()
  firstname?: string

  @IsOptional()
  @IsString()
  lastname?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  password?: string

  @IsOptional()
  @IsString()
  phoneNumber?: string

  @IsOptional()
  @IsString()
  photoLocation?: string

  @IsOptional()
  @IsString()
  companyId?: string

  @IsOptional()
  @IsString()
  jobTitle?: string

  @IsOptional()
  @IsString()
  role?: UserRole

  @IsOptional()
  @IsString()
  currentHashedRefreshToken?: string
}
