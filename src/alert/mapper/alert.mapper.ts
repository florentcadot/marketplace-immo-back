import { Alert } from '../alert'
import { CreateAlertResponseDto } from '../dto/create-alert.dto'
import { UpdateAlertResponseDto } from '../dto/update-alert.dto'

export class CreateAlertMapper {
  public static toDto = (props: Alert): CreateAlertResponseDto => {
    return {
      id: props.id,
      userId: props.userId,
      minPrice: props.minPrice,
      maxPrice: props.maxPrice,
      minArea: props.minArea,
      maxArea: props.maxArea,
      country: props.country,
      region: props.region,
      postCode: props.postCode,
      city: props.city,
      leaseTerm: props.leaseTerm,
      tags: props.tags,
    }
  }
}

export class UpdateAlertMapper {
  public static toDto = (props: Alert): UpdateAlertResponseDto => {
    return {
      id: props.id,
      minPrice: props.minPrice,
      maxPrice: props.maxPrice,
      minArea: props.minArea,
      maxArea: props.maxArea,
      country: props.country,
      region: props.region,
      postCode: props.postCode,
      city: props.city,
      leaseTerm: props.leaseTerm,
      tags: props.tags,
    }
  }
}
