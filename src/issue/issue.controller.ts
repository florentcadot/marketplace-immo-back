import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { IssueService } from './issue.service'

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  create() {
    return this.issueService.create()
  }

  @Get()
  findAll() {
    return this.issueService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.issueService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueService.remove(+id)
  }
}
