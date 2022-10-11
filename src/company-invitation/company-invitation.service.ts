import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CompanyInvitation } from './company-invitation'

@Injectable()
export class CompanyInvitationService {
  constructor(
    @InjectModel(CompanyInvitation)
    private companyInvitationModel: typeof CompanyInvitation
  ) {}

  create() {
    return 'This action adds a new companyInvitation'
  }

  findAll() {
    return `This action returns all companyInvitation`
  }

  findOne(id: number) {
    return `This action returns a #${id} companyInvitation`
  }

  update(id: number) {
    return `This action updates a #${id} companyInvitation`
  }

  remove(id: number) {
    return `This action removes a #${id} companyInvitation`
  }
}
