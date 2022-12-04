import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BLOG_REPOSITORY } from '../database/constant';
import { Blog } from './entity/blog.entity';
import { Message } from '../database/config/messages';
import { User } from '../Auth/entities/user.entity';

@Injectable()
export class BlogsService {
  constructor(
    @Inject(BLOG_REPOSITORY) private readonly blogRepository: typeof Blog,
  ) {}

  async create(dto: Partial<CreateBlogDto>, userId: number) {
    const blog = await this.blogRepository.create<Blog>({
      ...dto,
      userId,
    });
    if (!blog) return new BadRequestException(Message.CREATE_BLOG_FAILED);
    return { data: blog, message: Message.CREATE_BLOG };
  }

  async findAll() {
    return await this.blogRepository.findAll({
      include: { model: User, attributes: ['username', 'profileImg'] },
    });
  }

  async findOne(id: number) {
    return await this.blogRepository.findOne({ where: { id } });
  }

  async update(id: number, userId: number, dto: UpdateBlogDto) {
    const [updated, user] = await this.blogRepository.update(dto, {
      where: {
        id,
        userId,
      },
      returning: true,
    });
    if (!updated) throw new BadRequestException(Message.UPDATE_FAILED);

    return { data: user[0], message: Message.UPDATE_BLOG };
  }

  async remove(userId: number, id: number) {
    const deleted = await this.blogRepository.destroy({
      where: { id, userId },
    });
    if (!deleted) throw new BadRequestException(Message.DELETE_FAILED);

    return { message: Message.DELETE_BLOG };
  }
}
