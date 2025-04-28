import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    position: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    speciality: string;
  }
  