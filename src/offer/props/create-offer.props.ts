import {OfferState} from '../offer.type'

export interface CreateOfferProps {
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
}