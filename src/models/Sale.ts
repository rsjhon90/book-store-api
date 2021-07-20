import {
  Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,
} from 'typeorm';

import Book from './Book';
import Client from './Client';

@Entity()
export default class Sale extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'Sale_id' })
  SaleId: number;

  @Column()
  value: number;

  @Column()
  date: Date;

  @ManyToOne(() => Client)
  @Column({ name: 'client_id' })
  clientId: number;

  @ManyToOne(() => Book)
  @Column({ name: 'book_id' })
  bookId: number;
}
