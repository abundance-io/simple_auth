import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './auth.entity';
import { AuthUserDto } from './dto/auth-user.dto';
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  createNewUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  authentiateUser(@Body() authUserDto: AuthUserDto): Promise<string> {
    return this.authService.signIn(authUserDto);
  }
}
