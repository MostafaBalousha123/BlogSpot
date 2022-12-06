import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { photosProviders } from './photos.provider';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, ...photosProviders],
})
export class PhotosModule {}
