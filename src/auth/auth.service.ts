import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserLogin } from './auth.types';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly authRepository: Repository<User>;
  async signIn(authUserDto: AuthUserDto): Promise<string> {
    const user = await this.authRepository.findOne({
      where: {
        email: authUserDto.email,
      },
    });
    if (user) {
      const isMatch = await bcrypt.compare(authUserDto.password, user.password);
      if (isMatch) {
        return 'User logged in';
      } else {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      }
    } else {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const prevUser = this.authRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (prevUser) {
      const hashedpassword = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hashedpassword;
      const user = this.authRepository.create(createUserDto);
      return await this.authRepository.save(user);
    } else {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }
}
