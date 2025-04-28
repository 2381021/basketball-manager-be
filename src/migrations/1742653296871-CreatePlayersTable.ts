import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlayersTable1742653296871 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE player (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            position VARCHAR(50),       -- Assuming position can be null
            speciality VARCHAR(100)     -- Assuming speciality can be null
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE player;`);
  }
}