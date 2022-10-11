import { Module } from '@nestjs/common'
import { IssueService } from './issue.service'
import { IssueController } from './issue.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Issue } from './issue'

@Module({
  imports: [SequelizeModule.forFeature([Issue])],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
