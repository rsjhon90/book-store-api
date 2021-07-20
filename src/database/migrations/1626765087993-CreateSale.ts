import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateSale1626765087993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales',
        columns: [
          {
            name: 'sale_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'increment',
            default: 'uuid_generate_v4()',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'client_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'book_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys(
      'sales',
      [
        new TableForeignKey({
          name: 'salesToClient',
          referencedTableName: 'clients',
          referencedColumnNames: ['client_id'],
          columnNames: ['client_id'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
        new TableForeignKey({
          name: 'salesToBook',
          referencedTableName: 'books',
          referencedColumnNames: ['book_id'],
          columnNames: ['book_id'],
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      ],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sale', 'salesToBook');
    await queryRunner.dropForeignKey('sale', 'salesToClient');
    await queryRunner.dropTable('sales');
  }
}
