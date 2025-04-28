import { Controller, Get, Post, Put, Body, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Put(':id')
update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdatePlayerDto) {
  return this.playerService.update(id, updateDto);
}


  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
