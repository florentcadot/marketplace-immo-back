import { Module } from '@nestjs/common';
import { CustomerNeedService } from './customer-need.service';
import { CustomerNeedController } from './customer-need.controller';
import {CustomerNeed} from './customer-need'
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([CustomerNeed])],
  controllers: [CustomerNeedController],
  providers: [CustomerNeedService],
})
export class CustomerNeedModule {}
