import {User} from '../user'
import {GetUserByOfferResponseDto} from '../dto/get-user-by-offer.dto'

export class GetUserByOfferMapper {
    public static toClient = (props: User): GetUserByOfferResponseDto => ({
        id: props.id,
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        phoneNumber: props.phoneNumber,
        jobTitle: props.jobTitle,
    })
}