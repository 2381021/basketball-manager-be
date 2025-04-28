import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsIn, IsDateString } from "class-validator";

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  opponent: string;
  
  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  date: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['Home', 'Away'])
  @ApiProperty({ enum: ['Home', 'Away'] })
  locationstatus: 'Home' | 'Away';
}
