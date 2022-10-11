import { Module } from '@nestjs/common'
import { AlertService } from './alert.service'
import { AlertController } from './alert.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Alert } from './alert'

@Module({
  imports: [SequelizeModule.forFeature([Alert])],
  controllers: [AlertController],
  providers: [AlertService],
})
export class AlertModule {}
