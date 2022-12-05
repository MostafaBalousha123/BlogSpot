import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { findAllQueryDTO } from './dto/find-all-query';
import { getUser } from '../Auth/decorator';
import { JwtAuthGuard } from '../Auth/strategy';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@getUser('id') userId: number, @Body() dto: CreateBlogDto) {
    return this.blogsService.create(dto, userId);
  }

  @Get()
  findAll(@Query() query: findAllQueryDTO) {
    const { userId } = query;
    return this.blogsService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.blogsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @getUser('id') userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ) {
    return this.blogsService.update(id, userId, updateBlogDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@getUser('id') userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.blogsService.remove(userId, id);
  }
}
