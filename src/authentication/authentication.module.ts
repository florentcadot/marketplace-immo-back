import { Module } from '@nestjs/common'
import { AuthenticationService } from './authentication.service'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config'
import { JwtAccessTokenStrategy } from './jwt-access-token.strategy'
import { JwtRefreshTokenStrategy } from './jwt-refresh-token.strategy'
import { AuthenticationController } from './authentication.controller'

@Module({
  imports: [UserModule, ConfigModule, JwtModule.register({})],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    JwtAccessTokenStrategy,
    JwtRefreshTokenStrategy,
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
