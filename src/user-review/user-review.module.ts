import { Module } from '@nestjs/common'
import { UserReviewService } from './user-review.service'
import { UserReviewController } from './user-review.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserReview } from './user-review'

@Module({
  imports: [SequelizeModule.forFeature([UserReview])],
  controllers: [UserReviewController],
  providers: [UserReviewService],
})
export class UserReviewModule {}
