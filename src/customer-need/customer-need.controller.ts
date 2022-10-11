import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common'
import {CustomerNeedService} from './customer-need.service'
import {CreateCustomerNeedRequestDto} from './dto/create-customer-need.dto'
import JwtAccessTokenGuard from '../authentication/jwt-access-token.guard'
import {RequestWithUser} from '../authentication/dto/request-with-user'
import {RoleGuard} from '../authorization/role.guard'
import {UserRole} from '../authorization/user-role'
import {GetCustomerNeedsRequestDto} from './dto/get-customer-needs.dto'
import {CustomerNeed} from './customer-need'
import {GetCustomerNeedsMapper} from './mapper/get-customer-needs.mapper'

@Controller('/api/customer-need')
export class CustomerNeedController {
  constructor(private readonly customerNeedService: CustomerNeedService) {}

  @Post('/new')
  @UseGuards(JwtAccessTokenGuard)
  async create(
      @Body() props: CreateCustomerNeedRequestDto,
      @Req()  request: RequestWithUser
): Promise<void> {
    return await this.customerNeedService.create({...props, userId: request.user.id})
  }

  @Post()
  @UseGuards(RoleGuard([UserRole.ADMIN, UserRole.OWNER]))
  @UseGuards(JwtAccessTokenGuard)
  async getCustomerNeeds(
      @Body() props: GetCustomerNeedsRequestDto
): Promise<CustomerNeed[]> {
    const serviceProps = GetCustomerNeedsMapper.toServiceProps(props)
    return await this.customerNeedService.findByFilters(serviceProps)
  }

}
