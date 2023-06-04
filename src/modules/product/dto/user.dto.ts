import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  readonly address: string;
}
