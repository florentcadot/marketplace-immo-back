import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common'
import { RequestWithUser } from '../authentication/dto/request-with-user'
import { UserRole } from './user-role'

export const RoleGuard = (roles: UserRole[]): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<RequestWithUser>()
      const user = request.user
      return roles.includes(user?.role)
    }
  }

  return mixin(RoleGuardMixin)
}
