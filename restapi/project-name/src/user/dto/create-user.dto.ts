import {
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
export class CreateUserDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsString()
    profession: string;
  
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(2, { message: 'Password must have atleast 2 characters.' })
    @IsString()
    password: string;
}