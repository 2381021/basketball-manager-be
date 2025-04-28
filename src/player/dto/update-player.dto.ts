// src/game/dto/update-game.dto.ts
import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdatePlayerDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @IsString()
  speciality?: string;
}
