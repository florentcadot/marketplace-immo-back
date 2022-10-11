import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { AssetPhoto } from './asset-photo'
import {CreateAssetPhotoProps} from './props/create-asset-photo.props'

@Injectable()
export class AssetPhotoService {
  constructor(
    @InjectModel(AssetPhoto)
    private assetPhotoModel: typeof AssetPhoto
) {}

  async create(props: CreateAssetPhotoProps) {
    await this.assetPhotoModel.create({
      id: props.id,
      assetId: props.assetId,
      photoS3Key: props.photoS3Key,
      title: props.title,
      description: props.description,
    })
  }
}
