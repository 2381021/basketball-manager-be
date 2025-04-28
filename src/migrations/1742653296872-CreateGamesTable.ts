import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGamesTable1742653296872 implements MigrationInterface {
  name = 'CreateGamesTable1742653296872'; // Optional: Add name property for clarity in logs

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the ENUM type first
    await queryRunner.query(`
        DO $$
        BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'game_location_status') THEN
                CREATE TYPE game_location_status AS ENUM ('Home', 'Away');
            END IF;
        END$$;

    `);

    // Create the table using the ENUM type
    await queryRunner.query(`
        CREATE TABLE game (
            id SERIAL PRIMARY KEY,
            opponent VARCHAR(100) NOT NULL,
            date TIMESTAMP NOT NULL,                 -- Use TIMESTAMP for date and potentially time
            locationStatus game_location_status NOT NULL -- Use the created ENUM type
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the table first
    await queryRunner.query(`DROP TABLE game;`);
    // Then drop the ENUM type
    await queryRunner.query(`DROP TYPE game_location_status;`);
  }
}