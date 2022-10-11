import { Module } from '@nestjs/common'
import { AssetPhotoService } from './asset-photo.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { AssetPhoto } from './asset-photo'

@Module({
  imports: [SequelizeModule.forFeature([AssetPhoto])],
  providers: [AssetPhotoService],
  exports: [AssetPhotoService],
})
export class AssetPhotoModule {}
