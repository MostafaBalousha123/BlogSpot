import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from './constant';
import databaseConfig from './config/enviroment';

import { User } from '../Auth/entities/user.entity';
import { Photo } from '../photos/entities/photo.entity';
import { Blog } from '../blogs/entity/blog.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Blog, User, Photo]);
      await sequelize.sync({ force: false });
      console.log('database connected');
      return sequelize;
    },
  },
];
