import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AssetOffer } from './asset-offer'

@Module({
  imports: [SequelizeModule.forFeature([AssetOffer])],
})
export class AssetOfferModule {}
