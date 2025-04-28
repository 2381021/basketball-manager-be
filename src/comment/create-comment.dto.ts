import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {
    user_id: number;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    content: string;
  }
  