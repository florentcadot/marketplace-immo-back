import { Test, TestingModule } from '@nestjs/testing'
import { OfferApplicationController } from './offer-application.controller'
import { OfferApplicationService } from './offer-application.service'

describe('OfferApplicationController', () => {
  let controller: OfferApplicationController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferApplicationController],
      providers: [OfferApplicationService],
    }).compile()

    controller = module.get<OfferApplicationController>(
      OfferApplicationController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
