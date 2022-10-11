import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { CompanyService } from './company.service'

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create() {
    return this.companyService.create()
  }

  @Get()
  findAll() {
    return this.companyService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.companyService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id)
  }
}
