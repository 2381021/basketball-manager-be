import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { Users } from '../user/user.entity';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class CommentService {
  async update(id: number, updateDto: UpdateCommentDto) {
    const comment = await this.commentRepository.findOne({ where: { id } });
  
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  
    if (updateDto.content) {
      comment.content = updateDto.content;
    }
  
    return this.commentRepository.save(comment);
  }
  
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const user = await this.userRepository.findOneBy({ id: createCommentDto.user_id });
    if (!user) throw new Error('User not found');

    const comment = this.commentRepository.create({
      content: createCommentDto.content,
      user,
    });
    return this.commentRepository.save(comment);
  }


  findAll() {
    return this.commentRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.commentRepository.findOne({ where: { id }, relations: ['user'] });
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}
