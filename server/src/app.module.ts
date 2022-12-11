import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

import { DatabaseModule } from './database/database.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './Auth/auth.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    BlogsModule,
    AuthModule,
    UsersModule,
    PhotosModule,
  ],
  providers: [],
})
export class AppModule {}
