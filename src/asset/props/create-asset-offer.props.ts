
import {OfferState} from '../../offer/offer.type'

export interface CreateAssetOfferProps {
    asset: {
        id: string
        name: string
        country: string
        region: string
        postCode: string
        city: string
        street: string
        buildingNumber: string
        area: number
        type: string
        target: string
        standardsCompliance: boolean
        standardsRehabilitation: string
        tags?: string[]
    },
    offer: {
        id: string
        title: string
        description: string
        startDate: Date
        endDate: Date
        price: number
        area: number
        quantity: number
        state: OfferState
        premium: boolean
        visible: boolean
    },
    userId: string
}
