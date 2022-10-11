import { Injectable } from '@nestjs/common'

@Injectable()
export class UserReviewService {
  create() {
    return 'This action adds a new userReview'
  }

  findAll() {
    return `This action returns all userReview`
  }

  findOne(id: number) {
    return `This action returns a #${id} userReview`
  }

  update() {
    return `This action updates a # userReview`
  }

  remove(id: number) {
    return `This action removes a #${id} userReview`
  }
}
