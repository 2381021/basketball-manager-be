import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { APP_FILTER } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
