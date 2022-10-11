import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserAsset } from './user-asset'

@Module({
  imports: [SequelizeModule.forFeature([UserAsset])],
})
export class UserAssetModule {}
