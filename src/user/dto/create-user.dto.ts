import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID
} from 'class-validator'
import { UserRole } from '../../authorization/user-role'

export class CreateUserDto {
  @IsUUID(4)
  id: string

  @IsString()
  firstname: string

  @IsString()
  lastname: string

  @IsEmail()
  email: string

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
  @IsUUID('4')
  companyId?: string

  @IsOptional()
  @IsString()
  jobTitle?: string

  @IsOptional()
  @IsString()
  role?: UserRole

  @IsOptional()
  @IsString()
  isActive?: boolean

  @IsOptional()
  @IsBoolean()
  isRegisteredWithGoogle?: boolean
}
