import { Request } from 'express'
import { User } from '../../user/user'

export interface RequestWithUser extends Request {
  user: User
}
