import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/Auth/auth.service';

@Injectable()
export class UsersService {
  constructor(private authService: AuthService) {}

  findOne(id: number) {
    return this.authService.findOne(id);
  }
}
