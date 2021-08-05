import {
  MigrationInterface, QueryRunner, TableForeignKey,
} from 'typeorm';

export class ForeignKeyProfileUser1627471379323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('profiles', 'user', 'user_id');

    await queryRunner.createForeignKey(
      'profiles',
      new TableForeignKey({
        name: 'ProfileToUsers',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('profiles', 'ProfileToUsers');
    await queryRunner.renameColumn('profiles', 'user_id', 'user');
  }
}
