import { Blog } from './entity/blog.entity';
import { BLOG_REPOSITORY } from '../database/constant';

export const blogsProviders = [
  {
    provide: BLOG_REPOSITORY,
    useValue: Blog,
  },
];
