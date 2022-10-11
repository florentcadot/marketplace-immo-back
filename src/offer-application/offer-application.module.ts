import { Module } from '@nestjs/common'
import { OfferApplicationService } from './offer-application.service'
import { OfferApplicationController } from './offer-application.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { OfferApplication } from './offer-application'

@Module({
  imports: [SequelizeModule.forFeature([OfferApplication])],
  controllers: [OfferApplicationController],
  providers: [OfferApplicationService],
})
export class OfferApplicationModule {}
