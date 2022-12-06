import { Photo } from './entities/photo.entity';
import { PHOTO_REPOSITORY } from '../database/constant';

export const photosProviders = [
  {
    provide: PHOTO_REPOSITORY,
    useValue: Photo,
  },
];
