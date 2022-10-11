import { IsEmail, IsString } from "class-validator"
import {UserRole} from '../../authorization/user-role'

export class GrantAdminRoleRequestDto {
    @IsEmail()
    email: string

    @IsString()
    role: UserRole
}