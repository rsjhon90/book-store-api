import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,
} from 'typeorm';
import Author from './Author';

@Entity()
export default class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'book_id' })
  bookId: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  stock: number;

  @ManyToOne(() => Author)
  @Column({ name: 'author_id' })
  authorId: number;
}
