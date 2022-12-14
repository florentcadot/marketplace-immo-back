import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request } from 'express'
import { UserService } from '../user/user.service'
import { TokenPayloadDto } from './dto/token-payload.dto'

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token'
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Refresh
        },
      ]),
      secretOrKey: configService.get('JWT_REFRESH_TOKEN_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(request: Request, payload: TokenPayloadDto) {
    const refreshToken = request.cookies?.Refresh
    const response = this.userService.getUserIfRefreshTokenMatches(
      refreshToken,
      payload.userId
    )
    return response
  }
}
