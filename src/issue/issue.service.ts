import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Issue } from './issue'

@Injectable()
export class IssueService {
  constructor(
    @InjectModel(Issue)
    private issueModel: typeof Issue
  ) {}
  create() {
    return 'This action adds a new issue'
  }

  findAll() {
    return `This action returns all issue`
  }

  findOne(id: number) {
    return `This action returns a #${id} issue`
  }

  update(id: number) {
    return `This action updates a #${id} issue`
  }

  remove(id: number) {
    return `This action removes a #${id} issue`
  }
}
