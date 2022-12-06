import { Injectable, Inject } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PHOTO_REPOSITORY } from '../database/constant';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @Inject(PHOTO_REPOSITORY) private readonly photoRepository: typeof Photo,
  ) {}
  async create(dto: CreatePhotoDto, userId: number) {
    return this.photoRepository.create({ ...dto, userId });
  }

  async findAll() {
    return await this.photoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.photoRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdatePhotoDto) {
    return await this.photoRepository.update(dto, { where: { id } });
  }

  async remove(userId: number, id: number) {
    return await this.photoRepository.destroy({ where: { id, userId } });
  }
}
