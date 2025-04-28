import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './create-game.dto';
import { UpdateGameDto } from './dto//update-game.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Put(':id')
update(@Param('id') id: number, @Body() updateDto: UpdateGameDto) {
  return this.gameService.update(id, updateDto);
}


  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(+id);
  }
}
