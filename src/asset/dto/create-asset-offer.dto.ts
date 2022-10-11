import {
    IsBoolean,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID
} from 'class-validator'
import {OfferState} from '../../offer/offer.type'

export class CreateAssetOfferRequestDto {

    @IsUUID()
    assetId: string

    @IsString()
    assetName: string

    @IsString()
    assetCountry: string

    @IsString()
    assetRegion: string

    @IsString()
    assetPostCode: string

    @IsString()
    assetCity: string

    @IsString()
    assetStreet: string

    @IsString()
    assetBuildingNumber: string

    @IsNumber()
    assetArea: number

    @IsString()
    assetType: string

    @IsString()
    assetTarget: string

    @IsBoolean()
    assetStandardsCompliance: boolean

    @IsString()
    assetStandardsRehabilitation: string

    @IsOptional()
    // @IsString()
    assetPhotos?: File[]

    @IsUUID()
    offerId: string

    @IsString()
    offerTitle: string

    @IsNumber()
    offerPrice: number

    @IsNumber()
    offerQuantity: number

    @IsString()
    offerDescription: string

    @IsNumber()
    offerArea: number

    @IsString()
    offerStartDate: string

    @IsString()
    offerEndDate: string

    @IsBoolean()
    offerPremium: boolean

    @IsBoolean()
    offerVisible: boolean

    @IsString()
    offerState: OfferState
}
