import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common'
import { UserReviewService } from './user-review.service'

@Controller('user-review')
export class UserReviewController {
  constructor(private readonly userReviewService: UserReviewService) {}

  @Post()
  create() {
    return this.userReviewService.create()
  }

  @Get()
  findAll() {
    return this.userReviewService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userReviewService.findOne(+id)
  }

  @Patch(':id')
  update() {
    return this.userReviewService.update()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userReviewService.remove(+id)
  }
}
