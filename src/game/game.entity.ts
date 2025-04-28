import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  opponent: string;

  @Column({ type: 'date' }) // Menyimpan hanya tanggal (YYYY-MM-DD)
  date: string;

  @Column({
    type: 'enum',
    enum: ['Home', 'Away'],
  })
  locationstatus: 'Home' | 'Away';
}
