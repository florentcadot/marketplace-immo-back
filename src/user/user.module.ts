import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user'
import { UserController } from './user.controller'
import {OfferModule} from '../offer/offer.module'

@Module({
  imports: [SequelizeModule.forFeature([User]), OfferModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
