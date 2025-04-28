import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateCommentDto {
  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsString()
  user?: string;

  
}
