import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { CompanyInvitationService } from './company-invitation.service'

@Controller('company-invitation')
export class CompanyInvitationController {
  constructor(
    private readonly companyInvitationService: CompanyInvitationService
  ) {}

  @Post()
  create() {
    return this.companyInvitationService.create()
  }

  @Get()
  findAll() {
    return this.companyInvitationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyInvitationService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.companyInvitationService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyInvitationService.remove(+id)
  }
}
