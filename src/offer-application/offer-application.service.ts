import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { OfferApplication } from './offer-application'

@Injectable()
export class OfferApplicationService {
  constructor(
    @InjectModel(OfferApplication)
    private offerApplicationModel: typeof OfferApplication
  ) {}

  create() {
    return 'This action adds a new offerApplication'
  }

  findAll() {
    return `This action returns all offerApplication`
  }

  findOne(id: number) {
    return `This action returns a #${id} offerApplication`
  }

  update(id: number) {
    return `This action updates a #${id} offerApplication`
  }

  remove(id: number) {
    return `This action removes a #${id} offerApplication`
  }
}
