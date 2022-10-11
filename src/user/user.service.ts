import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {CreateUserDto} from './dto/create-user.dto'
import {InjectModel} from '@nestjs/sequelize'
import {User} from './user'
import {UpdateUserDto} from './dto/update-user.dto'
import * as bcrypt from 'bcrypt'
import {UserRole} from '../authorization/user-role'
import {OfferService} from '../offer/offer.service'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private offerService: OfferService
  ) {}

  async create(props: CreateUserDto): Promise<User> {
    return await this.userModel.create({
      ...props,
      role: props.email === "florentcadot.dev@gmail.com" ? UserRole.ADMIN : UserRole.USER,
    })
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { id } })
    if(!user){
      throw new HttpException(
        'User with this id does not exist',
        HttpStatus.NOT_FOUND
      )
    } else {
      return user
    }
  }

  async findByMail(email: string) {
    const user = await this.userModel.findOne({ where: { email } })
    if (!user) {
      throw new HttpException(
        'User with this email does not exist',
        HttpStatus.NOT_FOUND
      )
    } else {
      return user
    }
  }

  async update(props: UpdateUserDto): Promise<User> {
    const response = await this.userModel.upsert({ ...props })
    const user = response[0]
    return user
  }

  async remove(id: string) {
    return await this.userModel.destroy({
      where: { id },
    })
  }

  async setCurrentRefreshToken(
    refreshToken: string,
    userId: string
  ): Promise<void> {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10)
    await this.userModel.upsert({
      id: userId,
      currentHashedRefreshToken,
    })
  }

  async getUserIfRefreshTokenMatches(
    refreshToken: string,
    userId: string
  ): Promise<User> {
    const user = await this.findById(userId)
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken
    )
    if (isRefreshTokenMatching) {
      return user
    }
  }

  async removeRefreshToken(userId: string) {
    return this.update({
      id: userId,
      currentHashedRefreshToken: null,
    })
  }

  async grantRole(email: string, role: UserRole): Promise<void> {
    await this.userModel.update({
      role: role,
    }, {
      where: {
        email,
      },
    })
  }

  async getUserByOffer(offerId: string): Promise<User> {
     const offer = await this.offerService.findByIdWithUser(offerId)
     const asset = offer.assets[0]
     return asset.users[0]
  }

}
