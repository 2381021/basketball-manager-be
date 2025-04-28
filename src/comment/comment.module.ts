import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Users } from '../user/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Users])],
  providers: [CommentService],
  controllers: [CommentController],
  exports:[CommentService],
  


})
export class CommentModule {}
