import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ForeignKeyClientUser1627471379323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'ClientToUsers',
        columnNames: ['user'],
        referencedTableName: 'users',
        referencedColumnNames: ['email'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('clients', 'ClientToUsers');
  }
}
