import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Users } from '../user/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Users, users => users.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: Users;
}
