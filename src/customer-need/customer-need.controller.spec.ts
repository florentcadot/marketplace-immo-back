import { Test, TestingModule } from '@nestjs/testing';
import { CustomerNeedController } from './customer-need.controller';
import { CustomerNeedService } from './customer-need.service';

describe('CustomerNeedController', () => {
  let controller: CustomerNeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerNeedController],
      providers: [CustomerNeedService],
    }).compile();

    controller = module.get<CustomerNeedController>(CustomerNeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
