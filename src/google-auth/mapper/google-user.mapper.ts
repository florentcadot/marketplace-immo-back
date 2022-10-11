import { CreateUserDto } from '../../user/dto/create-user.dto'
import { GoogleUser } from '../google-user'
import { v4 as uuid } from 'uuid'

export const toCreateUserDto = (props: GoogleUser): CreateUserDto => ({
  id: uuid(),
  firstname: props.given_name,
  lastname: props.family_name,
  email: props.email,
  photoLocation: props.picture,
  isActive: true,
  isRegisteredWithGoogle: true,
})
