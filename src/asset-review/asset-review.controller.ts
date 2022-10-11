import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { AssetReviewService } from './asset-review.service'

@Controller('asset-review')
export class AssetReviewController {
  constructor(private readonly assetReviewService: AssetReviewService) {}

  @Post()
  create() {
    return this.assetReviewService.create()
  }

  @Get()
  findAll() {
    return this.assetReviewService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetReviewService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.assetReviewService.update(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetReviewService.remove(+id)
  }
}
