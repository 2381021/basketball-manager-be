import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { APP_FILTER } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameService],
  controllers: [GameController],
  exports:[GameService]
})
export class GameModule {}
