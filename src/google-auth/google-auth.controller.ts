import {
  Controller,
  Post,
  ClassSerializerInterceptor,
  UseInterceptors,
  Body,
  Req
} from '@nestjs/common'
import { Request } from 'express'
import { GoogleAuthService } from './google-auth.service'
import { TokenVerificationDto } from './dto/token-verification.dto'

@Controller('/api/google-authentication')
@UseInterceptors(ClassSerializerInterceptor)
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Post()
  async authenticate(
    @Body() tokenData: TokenVerificationDto,
    @Req() request: Request
  ) {
    const { accessTokenCookie, refreshTokenCookie, user } =
      await this.googleAuthService.authenticate(tokenData.token)
    request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie])
    return user
  }
}
