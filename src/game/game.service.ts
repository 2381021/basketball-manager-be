import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { CreateGameDto } from './create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  async update(id: number, updateDto: UpdateGameDto) {
    const game = await this.gameRepository.findOneBy({ id });
    if (!game) {
      throw new Error(`Game with ID ${id} not found`);
    }
    const updatedGame = Object.assign(game, updateDto);
    return this.gameRepository.save(updatedGame);
  }
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  create(createGameDto: CreateGameDto) {
    const game = this.gameRepository.create(createGameDto);
    return this.gameRepository.save(game);
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.gameRepository.delete(id);
  }

  
}
