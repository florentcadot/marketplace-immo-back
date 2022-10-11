import { Module } from '@nestjs/common'
import { GoogleAuthController } from './google-auth.controller'
import { GoogleAuthService } from './google-auth.service'
import { AuthenticationModule } from '../authentication/authentication.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from '../user/user.module'

@Module({
  imports: [AuthenticationModule, ConfigModule, UserModule],
  controllers: [GoogleAuthController],
  providers: [GoogleAuthService],
})
export class GoogleAuthModule {}
