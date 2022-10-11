import {CreateAssetOfferRequestDto} from '../dto/create-asset-offer.dto'
import {CreateAssetOfferProps} from '../props/create-asset-offer.props'

export class CreateAssetOfferMapper {
    public static toServiceProps = (props: CreateAssetOfferRequestDto & { userId: string }):
        CreateAssetOfferProps => {
        return {
            asset: {
                id: props.assetId,
                name: props.assetName,
                country: props.assetCountry,
                region: props.assetRegion,
                postCode: props.assetPostCode,
                city: props.assetCity,
                street: props.assetStreet,
                buildingNumber: props.assetBuildingNumber,
                area: props.assetArea,
                type: props.assetType,
                target: props.assetTarget,
                standardsCompliance: props.assetStandardsCompliance,
                standardsRehabilitation: props.assetStandardsRehabilitation,
            },
            offer: {
                id: props.offerId,
                title: props.offerTitle,
                description: props.offerDescription,
                startDate: new Date(props.offerStartDate),
                endDate: new Date(props.offerEndDate),
                price: props.offerPrice,
                area: props.offerArea,
                quantity: props.offerQuantity,
                state: props.offerState,
                premium: props.offerPremium,
                visible: props.offerVisible,
        },
            userId: props.userId,
        }
    }
}