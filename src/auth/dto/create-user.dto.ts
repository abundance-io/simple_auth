// create-Menu.dto.ts
import { IsNotEmpty, IsString, IsInt, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Field fullname must be added' })
  @IsString()
  fullname: string;

  @IsNotEmpty({ message: 'Field email must be added' })
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'Field password must be added' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: 'age must be added' })
  @IsInt({ message: 'age must be  number' })
  @IsPositive()
  age: number;
}
