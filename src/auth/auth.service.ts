import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    console.log('login', { email, password });
    try {
      let user = await this.usersService.findOneByEmail(email);
      console.log('user', user);
      if (user && password !== user.password) {
        throw new UnauthorizedException();
      }

      if (!user) {
        user = await this.usersService.create({
          username: '',
          email,
          password,
          role: 'user',
        });
      }
      console.log('after create', user);
      return {
        access_token: this.jwtService.sign({
          email: user?.email,
          sub: user?.id,
          role: user?.role,
        }),
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
