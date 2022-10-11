import { Module } from '@nestjs/common'
import { AssetService } from './asset.service'
import { AssetController } from './asset.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Asset } from './asset'
import {UserModule} from '../user/user.module'
import {OfferModule} from '../offer/offer.module'
import { ConfigModule } from '@nestjs/config'
import {AssetPhotoModule} from '../asset-photo/asset-photo.module'
import {PrivateFileModule} from '../private-file/private-file.module'

@Module({
  imports: [
    SequelizeModule.forFeature([Asset]),
    UserModule,
    OfferModule,
    ConfigModule,
    AssetPhotoModule,
    PrivateFileModule,
  ],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
