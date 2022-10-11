import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { S3 } from 'aws-sdk'
import { v4 as uuid } from 'uuid'

@Injectable()
export class PrivateFileService {
    constructor(
        private readonly configService: ConfigService
    ) {}

    public async uploadFile(props: { file: Buffer, fileName: string}) {
        const s3 = new S3();
        return await s3.upload({
            Bucket: this.configService.get('AWS_PRIVATE_BUCKET_NAME'),
            Body: props.file,
            Key: `${uuid()}-${props.fileName}`,
        }).promise()
    }

    public async generatePresignedUrl(key: string) {
        const s3 = new S3();

        return s3.getSignedUrlPromise('getObject', {
            Bucket: this.configService.get('AWS_PRIVATE_BUCKET_NAME'),
            Key: key,
        })
    }
}