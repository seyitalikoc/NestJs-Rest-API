import {
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';
  
export class UserProfileDto {
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
  
    @IsInt()
    @IsNotEmpty()
    id: number;
}