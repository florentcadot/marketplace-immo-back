import { Module } from '@nestjs/common'
import { AssetReviewService } from './asset-review.service'
import { AssetReviewController } from './asset-review.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { AssetReview } from './asset-review'

@Module({
  imports: [SequelizeModule.forFeature([AssetReview])],
  controllers: [AssetReviewController],
  providers: [AssetReviewService],
})
export class AssetReviewModule {}
