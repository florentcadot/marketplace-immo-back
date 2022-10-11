import {User} from '../user'
import {GetUserProfileResponseDto} from '../dto/get-user-profile.dto'

export class GetUserProfileMapper {
    public static toClient = (props: User): GetUserProfileResponseDto => ({
        id: props.id,
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        phoneNumber: props.phoneNumber,
        jobTitle: props.jobTitle,
    })
}