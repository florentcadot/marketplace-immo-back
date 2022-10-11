import { Test, TestingModule } from '@nestjs/testing'
import { AssetReviewController } from './asset-review.controller'
import { AssetReviewService } from './asset-review.service'

describe('AssetReviewController', () => {
  let controller: AssetReviewController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetReviewController],
      providers: [AssetReviewService],
    }).compile()

    controller = module.get<AssetReviewController>(AssetReviewController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
