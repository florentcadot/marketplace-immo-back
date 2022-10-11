import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {PrivateFileService} from './private-file.service'

@Module({
    imports: [ConfigModule],
    providers: [PrivateFileService],
    exports: [PrivateFileService],
})
export class PrivateFileModule {}
