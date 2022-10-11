import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Alert } from './alert'
import { CreateAlertRequestDto } from './dto/create-alert.dto'
import { UpdateAlertRequestDto } from './dto/update-alert.dto'

@Injectable()
export class AlertService {
  constructor(
    @InjectModel(Alert)
    private alertModel: typeof Alert
  ) {}

  async create(props: CreateAlertRequestDto): Promise<Alert> {
    return await this.alertModel.create({
      ...props,
    })
  }

  async findAll() {
    return await this.alertModel.findAll()
  }

  async findOne(id: string) {
    return await this.alertModel.findOne({ where: { id } })
  }

  async update(props: UpdateAlertRequestDto): Promise<Alert> {
    const response = await this.alertModel.upsert({ ...props })
    return response[0]
  }

  async remove(id: string) {
    return await this.alertModel.destroy({
      where: { id },
    })
  }
}
