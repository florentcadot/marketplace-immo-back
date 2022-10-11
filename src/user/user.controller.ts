import {Body, Controller, Get, Param, Patch, Query, UseGuards} from '@nestjs/common'
import JwtAccessTokenGuard from '../authentication/jwt-access-token.guard'
import {RoleGuard} from '../authorization/role.guard'
import {UserRole} from '../authorization/user-role'
import {GrantAdminRoleRequestDto} from './dto/grant-admin-role.dto'
import {UserService} from './user.service'
import {GetUserByOfferResponseDto} from './dto/get-user-by-offer.dto'
import {GetUserByOfferMapper} from './mapper/get-user-by-offer.mapper'
import {GetUserProfileMapper} from './mapper/get-user-profile.mapper'

@Controller('/api/user')
export class UserController {

    constructor(private userService: UserService) {}

    @Patch()
    @UseGuards(RoleGuard([UserRole.ADMIN]))
    @UseGuards(JwtAccessTokenGuard)
    async grantRole (
        @Body()
        props: GrantAdminRoleRequestDto
    ): Promise<void> {
        await this.userService.grantRole(props.email, props.role)
    }

    @Get(':id')
    @UseGuards(RoleGuard([UserRole.ADMIN, UserRole.OWNER]))
    @UseGuards(JwtAccessTokenGuard)
    async getUserProfile (
        @Param('id') id: string
    ): Promise<GetUserByOfferResponseDto> {
        const user = await this.userService.findById(id)
        return GetUserProfileMapper.toClient(user)
    }

    @Get()
    @UseGuards(RoleGuard([UserRole.ADMIN]))
    @UseGuards(JwtAccessTokenGuard)
    async getUserByOffer (
        @Query('offerId') offerId: string
    ): Promise<GetUserByOfferResponseDto> {
        const user =  await this.userService.getUserByOffer(offerId)
        return GetUserByOfferMapper.toClient(user)
    }

}
