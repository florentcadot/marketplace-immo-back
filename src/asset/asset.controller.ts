import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UseInterceptors,
  Param,
  UploadedFile
} from '@nestjs/common'
import { AssetService } from './asset.service'
import JwtAccessTokenGuard from '../authentication/jwt-access-token.guard'
import {RequestWithUser} from '../authentication/dto/request-with-user'
import {Asset} from './asset'
import {CreateAssetOfferMapper} from './mapper/create-asset-offer.mapper'
import {CreateAssetOfferRequestDto} from './dto/create-asset-offer.dto'
import { FileInterceptor } from '@nestjs/platform-express';
import {UploadAssetPhotoRequestDto} from './dto/upload-asset-photo.dto'

@Controller('/api/asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  @UseGuards(JwtAccessTokenGuard)
  async createAssetOffer(
      @Body() props: CreateAssetOfferRequestDto,
      @Req()  request: RequestWithUser
  ): Promise<Asset> {
    const serviceProps = CreateAssetOfferMapper.toServiceProps({...props, userId: request.user.id})
    return  await this.assetService.createAssetOffer(serviceProps)
  }

  @Post('/:id/photo')
  @UseGuards(JwtAccessTokenGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadAssetPhoto(
      @Body() props: UploadAssetPhotoRequestDto,
      @Param('id') id: string,
      @UploadedFile() file: Express.Multer.File
  ): Promise<string> {
    return await this.assetService.uploadAssetPhoto({
      assetPhotoId: props.id,
      assetId: id,
      photoFile: file.buffer,
      photoName: file.filename,
      title: props.title,
      description: props.description,
    })
  }

}
