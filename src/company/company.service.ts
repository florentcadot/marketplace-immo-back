import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Company } from './company'

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private companyModel: typeof Company
  ) {}

  create() {
    return 'This action adds a new company'
  }

  findAll() {
    return `This action returns all company`
  }

  findOne(id: number) {
    return `This action returns a #${id} company`
  }

  update(id: number) {
    return `This action updates a #${id} company`
  }

  remove(id: number) {
    return `This action removes a #${id} company`
  }
}
