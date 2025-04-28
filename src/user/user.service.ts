import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { CreateUserDto } from './create-user.dto'; // Make sure this is exported from its file

@Injectable()
export class UserService { // Ensure this 'export' keyword is present
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  // Method used by AuthService during registration
  async findByEmailOrUsername(email: string, username: string): Promise<Users | null> {
    return this.userRepository.findOne({
       where: [
         { email: email },
         { username: username }
       ]
    });
  }

  // Method used by AuthService during sign-in
  async findByEmail(email: string): Promise<Users | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  // Method used by AuthService after hashing password during registration
  async save(user: Users): Promise<Users> {
    return this.userRepository.save(user);
  }

  // Your original create method (might be redundant now, or used elsewhere)
  create(createUserDto: CreateUserDto) {
    // Ensure CreateUserDto only contains fields matching User entity properties
    // Be careful not to accidentally try saving a raw password here if CreateUserDto has it
    const user = this.userRepository.create(createUserDto);
    // Note: This 'create' method doesn't hash the password, AuthService does.
    // Ensure you are not calling this 'create' method directly with a plain password DTO.
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find({ relations: ['comments'] });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id }, relations: ['comments'] });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}