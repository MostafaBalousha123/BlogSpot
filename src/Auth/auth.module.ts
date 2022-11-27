import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { usersProviders } from './auth.providers';
import { JwtStrategy } from './strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWTKEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ...usersProviders],
})
export class AuthModule {}
