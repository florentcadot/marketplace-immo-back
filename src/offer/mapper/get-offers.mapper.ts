import {GetOffersRequestDto} from '../dto/get-offers.dto'
import {FindOffersByFiltersProps} from '../props/find-offers-by-filters.props'

export class GetOffersMapper {
    public static toServiceProps = (props: GetOffersRequestDto): FindOffersByFiltersProps =>({
        startDate: props.startDate ? new Date(props.startDate) : undefined,
        endDate: props.endDate ? new Date(props.endDate) : undefined,
        minPrice:props.minPrice,
        maxPrice: props.maxPrice,
        minArea:props.minArea,
        maxArea:props.maxArea,
        tags: props.tags,
        city: props.city,
        region: props.region,
        type: props.type,
    })
}