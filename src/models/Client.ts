import { v4 as uuid } from 'uuid';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './User';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid', { name: 'client_id' })
  clientId: string;

  @Column()
  name: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  phone: string;

  @Column()
  address: string;

  @CreateDateColumn({ name: 'created_at' })
  private createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt?: Date;

  constructor() {
    if (!this.clientId) {
      this.clientId = uuid();
    }
  }
}
