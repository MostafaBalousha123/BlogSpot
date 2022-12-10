import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { getUser } from '../Auth/decorator';
import { JwtAuthGuard } from '../Auth/strategy';
import { findAllQueryDTO } from './dto/find-all-query';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @getUser('id') userId: number,
    @Body() createPhotoDto: CreatePhotoDto,
  ) {
    return this.photosService.create(createPhotoDto, userId);
  }

  @Get()
  findAll(@Query() query: findAllQueryDTO) {
    const { userId } = query;
    return this.photosService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.photosService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePhotoDto) {
    return this.photosService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@getUser('id') userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.photosService.remove(userId, id);
  }
}
