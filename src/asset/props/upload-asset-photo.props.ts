export interface UploadAssetPhotoProps {
    assetPhotoId: string
    assetId: string
    photoFile: Buffer
    photoName: string
    title?: string
    description?: string
}