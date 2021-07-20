import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateBook1626765064149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'book_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'increment',
            default: 'uuid_generate_v4()',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'stock',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'author_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'books',
      new TableForeignKey({
        name: 'booksToAuthor',
        referencedTableName: 'authors',
        referencedColumnNames: ['author_id'],
        columnNames: ['author_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('books', 'booksToAuthor');
    await queryRunner.dropTable('books');
  }
}
