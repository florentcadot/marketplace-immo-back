import { Injectable } from '@nestjs/common'

@Injectable()
export class AssetReviewService {
  create() {
    return 'This action adds a new assetReview'
  }

  findAll() {
    return `This action returns all assetReview`
  }

  findOne(id: number) {
    return `This action returns a #${id} assetReview`
  }

  update(id: number) {
    return `This action updates a #${id} assetReview`
  }

  remove(id: number) {
    return `This action removes a #${id} assetReview`
  }
}
