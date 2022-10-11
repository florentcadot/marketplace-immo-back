import { Test, TestingModule } from '@nestjs/testing';
import { CustomerNeedService } from './customer-need.service';

describe('CustomerNeedService', () => {
  let service: CustomerNeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerNeedService],
    }).compile();

    service = module.get<CustomerNeedService>(CustomerNeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
