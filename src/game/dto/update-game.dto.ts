// src/game/dto/update-game.dto.ts
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  opponent?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  locationstatus?: string;
}
