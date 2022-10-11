import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { OfferApplicationService } from './offer-application.service'

@Controller('offer-application')
export class OfferApplicationController {
  constructor(
    private readonly offerApplicationService: OfferApplicationService
  ) {}

  @Post()
  create() {
    return this.offerApplicationService.create()
  }

  @Get()
  findAll() {
    return this.offerApplicationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offerApplicationService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.offerApplicationService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offerApplicationService.remove(+id)
  }
}
