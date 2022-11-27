import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../Auth/strategy';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
