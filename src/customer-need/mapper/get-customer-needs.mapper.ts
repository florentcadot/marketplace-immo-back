import {GetCustomerNeedsRequestDto} from '../dto/get-customer-needs.dto'
import {FindCustomerNeedsByFiltersProps} from '../props/find-customer-needs-by-filters.props'

export class GetCustomerNeedsMapper {
    public static toServiceProps =
        (props: GetCustomerNeedsRequestDto): FindCustomerNeedsByFiltersProps =>({
        startDate: props.startDate ? new Date(props.startDate) : undefined,
        endDate: props.endDate ? new Date(props.endDate) : undefined,
        minPrice:props.minPrice,
        maxPrice: props.maxPrice,
        minArea:props.minArea,
        maxArea:props.maxArea,
        city: props.city,
        region: props.region,
        warehouse: props.warehouse,
        workshop: props.workshop,
        office: props.office,
    })
}