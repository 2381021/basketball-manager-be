import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    username: string;
  }
  