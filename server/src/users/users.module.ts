import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { usersProviders } from '../Auth/auth.providers';
import { AuthService } from '../Auth/auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService, ...usersProviders, JwtService],
})
export class UsersModule {}
