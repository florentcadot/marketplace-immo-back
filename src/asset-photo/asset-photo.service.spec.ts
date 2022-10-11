import { Test, TestingModule } from '@nestjs/testing'
import { AssetPhotoService } from './asset-photo.service'

describe('AssetPhotoService', () => {
  let service: AssetPhotoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetPhotoService],
    }).compile()

    service = module.get<AssetPhotoService>(AssetPhotoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
