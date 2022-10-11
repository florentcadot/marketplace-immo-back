import { Test, TestingModule } from '@nestjs/testing'
import { AssetReviewService } from './asset-review.service'

describe('AssetReviewService', () => {
  let service: AssetReviewService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetReviewService],
    }).compile()

    service = module.get<AssetReviewService>(AssetReviewService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
