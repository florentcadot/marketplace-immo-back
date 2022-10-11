import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { AlertService } from './alert.service'
import {
  CreateAlertRequestDto,
  CreateAlertResponseDto
} from './dto/create-alert.dto'
import {
  UpdateAlertRequestDto,
  UpdateAlertResponseDto
} from './dto/update-alert.dto'
import { CreateAlertMapper, UpdateAlertMapper } from './mapper/alert.mapper'

@Controller('/api/alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  async create(
    @Body() props: CreateAlertRequestDto
  ): Promise<CreateAlertResponseDto> {
    const alert = await this.alertService.create(props)
    return CreateAlertMapper.toDto(alert)
  }

  @Get()
  async findAll() {
    return await this.alertService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.alertService.findOne(id)
  }

  @Patch()
  async update(
    @Body() props: UpdateAlertRequestDto
  ): Promise<UpdateAlertResponseDto> {
    const alert = await this.alertService.update(props)
    return UpdateAlertMapper.toDto(alert)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.alertService.remove(id)
  }
}
