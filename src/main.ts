import { NestFactory } from '@nestjs/core'
import { Module, ValidationPipe } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { UserAssetModule } from './user_asset/user-asset.module'
import { OfferApplicationModule } from './offer-application/offer-application.module'
import { IssueModule } from './issue/issue.module'
import { CompanyInvitationModule } from './company-invitation/company-invitation.module'
import { CompanyModule } from './company/company.module'
import { AssetPhotoModule } from './asset-photo/asset-photo.module'
import { AssetOfferModule } from './asset_offer/asset-offer.module'
import { AssetModule } from './asset/asset.module'
import { AlertModule } from './alert/alert.module'
import { UserReviewModule } from './user-review/user-review.module'
import { AssetReviewModule } from './asset-review/asset-review.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { OfferModule } from './offer/offer.module'
import { AuthenticationModule } from './authentication/authentication.module'
import { GoogleAuthModule } from './google-auth/google-auth.module'
import { ConfigModule } from '@nestjs/config'
import * as cookieParser from 'cookie-parser'
import { DatabaseModule } from './database/database.module'
import { ConfigService } from '@nestjs/config'
import { config } from 'aws-sdk'
import {PrivateFileModule} from './private-file/private-file.module'
import {CustomerNeedModule} from './customer-need/customer-need.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({}),
    AlertModule,
    AssetModule,
    AssetOfferModule,
    AssetPhotoModule,
    CompanyModule,
    CompanyInvitationModule,
    IssueModule,
    OfferModule,
    OfferApplicationModule,
    UserReviewModule,
    AssetReviewModule,
    UserModule,
    UserAssetModule,
    AuthenticationModule,
    GoogleAuthModule,
    PrivateFileModule,
    CustomerNeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  })

  app.use(cookieParser())

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  const configService = app.get(ConfigService)
  config.update({
    accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
    secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
    region: configService.get('AWS_REGION'),
  })

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Marketplace immo API')
    .setDescription('Marketplace immo back-end REST API')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
