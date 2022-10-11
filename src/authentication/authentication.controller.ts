import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import JwtAccessTokenGuard from './jwt-access-token.guard'
import { AuthenticationService } from './authentication.service'
import JwtRefreshGuard from './jwt-refresh-token.guard'
import { UserService } from '../user/user.service'
import { RequestWithUser } from './dto/request-with-user'

@Controller('api/authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly userService: UserService
  ) {}

  @Get()
  @UseGuards(JwtAccessTokenGuard)
  authenticate(@Req() request: any) {
    const user = request.user
    user.password = undefined
    return user
  }

  @Get('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Req() request: RequestWithUser) {
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken({
        userId: request.user.id,
      })
    request.res.setHeader('Set-Cookie', accessTokenCookie)
    return request.user
  }

  @Post('logout')
  @UseGuards(JwtAccessTokenGuard)
  @HttpCode(200)
  async logout(@Req() request: RequestWithUser) {
    await this.userService.removeRefreshToken(request.user.id)
    request.res.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookiesForLogout()
    )
  }
}
