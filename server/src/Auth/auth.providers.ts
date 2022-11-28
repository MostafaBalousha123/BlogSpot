import { User } from './entities/user.entity';
import { USER_REPOSITORY } from '../database/constant';
export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
