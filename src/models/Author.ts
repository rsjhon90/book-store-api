import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm';

@Entity()
export default class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'author_id' })
  authorId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
