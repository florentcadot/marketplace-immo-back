import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Asset } from './asset'
import {UserService} from '../user/user.service'
import {OfferService} from '../offer/offer.service'
import {CreateAssetOfferProps} from './props/create-asset-offer.props'
import {UploadAssetPhotoProps} from './props/upload-asset-photo.props'
import {AssetPhotoService} from '../asset-photo/asset-photo.service'
import {PrivateFileService} from '../private-file/private-file.service'

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset)
    private assetModel: typeof Asset,
    private readonly userService: UserService,
    private readonly offerService: OfferService,
    private readonly assetPhotoService: AssetPhotoService,
    private readonly privateFileService: PrivateFileService
  ) {}

  async createAssetOffer(props: CreateAssetOfferProps): Promise<Asset> {
    const asset = await this.assetModel.create({
      ...props.asset,
    })
    const user = await this.userService.findById(props.userId)
    await user.$add('assets', asset)
    const offer =  await this.offerService.create(props.offer)
    await asset.$add('offers', offer)
    return asset
  }

  async uploadAssetPhoto(props: UploadAssetPhotoProps): Promise<string> {

    const uploadedPhoto = await this.privateFileService.uploadFile({
      file: props.photoFile,
      fileName: props.photoName,
    })

    await this.assetPhotoService.create({
      id: props.assetPhotoId,
      assetId: props.assetId,
      photoS3Key: uploadedPhoto.Key,
      title: props.title,
      description: props.description,
    })
    return await this.privateFileService.generatePresignedUrl(uploadedPhoto.Key)
  }

}
