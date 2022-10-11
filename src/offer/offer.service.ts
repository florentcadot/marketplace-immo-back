import { Injectable } from '@nestjs/common'
import {Offer} from './offer'
import { InjectModel } from '@nestjs/sequelize'
import {FindOffersByFiltersProps} from './props/find-offers-by-filters.props'
import {CreateOfferProps} from './props/create-offer.props'
import {Asset} from '../asset/asset'
import { Op } from 'sequelize'
import {User} from '../user/user'

@Injectable()
export class OfferService {
  constructor(
      @InjectModel(Offer)
      private offerModel: typeof Offer
  ) {}
  async create(props: CreateOfferProps) {
    return await this.offerModel.create({
      ...props,
    })
  }

  async findByFilters(props: FindOffersByFiltersProps) {

    const {
      startDate,
      endDate,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      city,
      region,
      type,
    } =  props


    const filters = {
      visible: false,
      ...(startDate ? {startDate: {[Op.gt]: startDate}} : {}),
      ...(endDate ? {endDate: {[Op.lt]: startDate}} : {}),
      ...(minArea ? {area: {[Op.gt]: minArea}} : {}),
      ...(maxArea ? {area: {[Op.lt]: maxArea}} : {}),
      ...(minPrice ? {price: {[Op.gt]: minPrice}} : {}),
      ...(maxPrice ? {price: {[Op.lt]: maxPrice}} : {}),
    }

    const assetFilters = {
      ...(city ? {city} : {}),
      ...(region ? {region} : {}),
      ...(type ? {type} : {}),
    }

    return await this.offerModel.findAll({
      where: filters,
      include: {
        model: Asset,
        where: assetFilters,
      },
    })
  }

  async findById(id: string) {
    return await this.offerModel.findOne({
      where: { id },
      include: {
        model: Asset,
      },
    })
  }

  async findByIdWithUser(id: string) {
    return await this.offerModel.findOne({
      where: { id },
      include: {
        model: Asset,
        include: [User],
      },
    })
  }


}
