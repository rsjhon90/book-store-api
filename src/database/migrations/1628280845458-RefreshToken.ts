import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class RefreshToken1628280845458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'refresh_token',
        columns: [
          {
            name: 'refresh_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'expires_in',
            type: 'int',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'refresh_token',
      new TableForeignKey({
        name: 'RefreshTokenUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['user_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('refresh_token', 'RefreshTokenUser');
    await queryRunner.dropTable('refresh_token');
  }
}
