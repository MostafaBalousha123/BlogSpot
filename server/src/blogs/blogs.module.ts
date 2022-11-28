import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { blogsProviders } from './blogs.providers';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService, ...blogsProviders],
  exports: [BlogsService],
})
export class BlogsModule {}
