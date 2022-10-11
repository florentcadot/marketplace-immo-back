import { Module } from '@nestjs/common'
import { CompanyInvitationService } from './company-invitation.service'
import { CompanyInvitationController } from './company-invitation.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CompanyInvitation } from './company-invitation'

@Module({
  imports: [SequelizeModule.forFeature([CompanyInvitation])],
  controllers: [CompanyInvitationController],
  providers: [CompanyInvitationService],
})
export class CompanyInvitationModule {}
