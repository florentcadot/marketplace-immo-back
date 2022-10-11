import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { ConfigService } from '@nestjs/config'
import { google, Auth } from 'googleapis'
import { AuthenticationService } from '../authentication/authentication.service'
import { User } from '../user/user'
import { toCreateUserDto } from './mapper/google-user.mapper'

@Injectable()
export class GoogleAuthService {
  oauthClient: Auth.OAuth2Client

  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly authenticationService: AuthenticationService
  ) {
    const clientID = this.configService.get('GOOGLE_AUTH_CLIENT_ID')
    const clientSecret = this.configService.get('GOOGLE_AUTH_CLIENT_SECRET')

    this.oauthClient = new google.auth.OAuth2(clientID, clientSecret)
  }

  async authenticate(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token)

    const email = tokenInfo.email

    try {
      const user = await this.userService.findByMail(email)
      return this.handleRegisteredUser(user)
    } catch (error) {
      if (error.status !== 404) {
        throw new error()
      }
      return this.registerUser(token)
    }
  }

  async registerUser(token: string) {
    const googleUser = await this.getUserData(token)
    const user = await this.userService.create(toCreateUserDto(googleUser))
    return this.handleRegisteredUser(user)
  }

  async handleRegisteredUser(user: User) {
    if (!user.isRegisteredWithGoogle) {
      throw new UnauthorizedException()
    }

    const { accessTokenCookie, refreshTokenCookie } =
      await this.getCookiesForUser(user)

    return {
      accessTokenCookie,
      refreshTokenCookie,
      user,
    }
  }

  async getUserData(token: string) {
    const userInfoClient = google.oauth2('v2').userinfo

    this.oauthClient.setCredentials({
      access_token: token,
    })

    const userInfoResponse = await userInfoClient.get({
      auth: this.oauthClient,
    })

    return userInfoResponse.data
  }

  async getCookiesForUser(user: User) {
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken({
        userId: user.id,
      })
    const { cookie: refreshTokenCookie, token: refreshToken } =
      this.authenticationService.getCookieWithJwtRefreshToken({
        userId: user.id,
      })

    await this.userService.setCurrentRefreshToken(refreshToken, user.id)

    return {
      accessTokenCookie,
      refreshTokenCookie,
    }
  }
}
