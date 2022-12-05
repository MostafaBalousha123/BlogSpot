import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from 'src/database/constant';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private usersRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async signup(dto: UserDto) {
    const checkEmail = await this.validateUser(dto.email);
    if (checkEmail) throw new ForbiddenException('this email used already');

    const hashed = await bcrypt.hash(dto.password, 10);
    try {
      const user = await this.usersRepository.create<User>({
        email: dto.email,
        username: dto.username,
        password: hashed,
        profileImg: dto.profileImg,
      });
      return this.generateToken(user.id, user.email);
    } catch (err) {
      throw err;
    }
  }

  async signin(dto: Partial<UserDto>) {
    try {
      const user = await this.validateUser(dto.email);
      if (!user) throw new ForbiddenException('user not found');

      const checkPassword = await bcrypt.compare(dto.password, user.password);
      if (!checkPassword) throw new ForbiddenException('password not match');

      return this.generateToken(user.id, user.email);
    } catch (err) {
      throw err;
    }
  }

  validateUser(email: string) {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({
      attributes: [
        'id',
        'email',
        'username',
        'profileImg',
        'createdAt',
        'updatedAt',
        'bio',
      ],
      where: { id },
    });
  }

  generateToken(id: number, email: string) {
    return {
      access_token: this.jwtService.sign({ sub: id, email }),
    };
  }
}
