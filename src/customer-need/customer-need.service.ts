import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {CustomerNeed} from './customer-need'
import {CreateCustomerNeedProps} from './props/create-customer-need.props'
import { Op } from 'sequelize';
import {FindCustomerNeedsByFiltersProps} from './props/find-customer-needs-by-filters.props'

@Injectable()
export class CustomerNeedService {

  constructor(
      @InjectModel(CustomerNeed)
      private customerNeedModel: typeof CustomerNeed
  ) {}

  async create(props: CreateCustomerNeedProps): Promise<void> {
     await this.customerNeedModel.create({...props})
  }

async findByFilters(props: FindCustomerNeedsByFiltersProps) {

      const {
        startDate,
        minArea,
        maxArea,
        city,
        region,
        office,
        warehouse,
        workshop,
      } =  props

    const filters = {
        ...(city ? {city} : {}),
        ...(region ? {region} : {}),
        ...(office ? {office} : {}),
        ...(warehouse ? {warehouse} : {}),
        ...(workshop ? {workshop} : {}),
        ...(startDate ? {startDate: {[Op.gt]: startDate}} : {}),
        ...(minArea ? {minArea: {[Op.gt]: minArea}} : {}),
        ...(maxArea ? {maxArea: {[Op.lt]: maxArea}} : {}),
    }
    return await this.customerNeedModel.findAll({where: filters})
}

}
