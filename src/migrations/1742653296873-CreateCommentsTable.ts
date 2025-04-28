import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCommentsTable1742653296873 implements MigrationInterface {
  name = 'CreateCommentsTable1742653296873'; // Optional: Add name property

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE comment (
            id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,                      -- Foreign key column (snake_case convention)
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_comment_user                 -- Naming the constraint is good practice
                FOREIGN KEY(user_id)                   -- This column...
                REFERENCES users(id)                   -- ...references the id column in the users table
                ON DELETE CASCADE                      -- Action on user deletion (e.g., CASCADE, SET NULL, RESTRICT)
        );
    `);
    // Add an index on the foreign key for performance
    await queryRunner.query(`
        CREATE INDEX idx_comment_user_id ON comment(user_id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the index first (if it exists)
    await queryRunner.query(`DROP INDEX IF EXISTS idx_comment_user_id;`);
    // Then drop the table (this also drops the FK constraint)
    await queryRunner.query(`DROP TABLE comments;`);
  }
}