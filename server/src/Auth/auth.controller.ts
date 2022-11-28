import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post('signup')
  create(@Body() dto: UserDto) {
    return this.usersService.signup(dto);
  }

  @Post('signin')
  find(@Body() dto: Partial<UserDto>) {
    return this.usersService.signin(dto);
  }
}
