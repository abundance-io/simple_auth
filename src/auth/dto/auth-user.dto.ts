// create-Menu.dto.ts
import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';

export class AuthUserDto {
  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Field password must be added' })
  @IsString()
  password: string;
}
