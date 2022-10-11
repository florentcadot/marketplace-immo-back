import {Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {OfferService} from './offer.service'
import {GetOffersRequestDto} from './dto/get-offers.dto'
import {GetOffersMapper} from './mapper/get-offers.mapper'
import {Offer} from './offer'
import JwtAccessTokenGuard from '../authentication/jwt-access-token.guard'

@Controller('/api/offer')
export class OfferController {

    constructor(private offerService: OfferService ) {}

    @Post()
    @UseGuards(JwtAccessTokenGuard)
    async getOffers(
        @Body() props: GetOffersRequestDto
    ): Promise<Offer[]> {
        const serviceProps = GetOffersMapper.toServiceProps(props)
        return  await this.offerService.findByFilters(serviceProps)
    }


    @Get(':id')
    @UseGuards(JwtAccessTokenGuard)
    async getOffer(
        @Param('id') id: string
    ): Promise<Offer> {
        return  await this.offerService.findById(id)
    }

}
