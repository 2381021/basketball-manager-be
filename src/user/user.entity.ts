import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from '../comment/comment.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @Column({ type: 'text' })
    password_hash: string;
}
