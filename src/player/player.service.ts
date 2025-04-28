import { Injectable, NotFoundException } from '@nestjs/common'; // Tambah NotFoundException
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findOneBy({ id });
  }

  async update(id: number, updateDto: UpdatePlayerDto) {
    const player = await this.playerRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException('Player not found');
    }
    Object.assign(player, updateDto);
    return this.playerRepository.save(player);
  }

  remove(id: number) {
    return this.playerRepository.delete(id);
  }
}