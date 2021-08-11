import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from './User';

@Entity('refresh_token')
export class RefreshToken {
  @PrimaryGeneratedColumn('uuid', { name: 'refresh_id' })
  refreshId?: string;

  @Column({ name: 'expires_in' })
  expiresIn: number;

  @Column({ name: 'user_id' })
  userId: string;

  @OneToOne(() => User, (user) => user.refreshToken)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @CreateDateColumn({ name: 'created_at' })
  private createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt?: Date;

  constructor(props: RefreshToken) {
    Object.assign(this, props);

    if (!this.refreshId) {
      this.refreshId = uuid();
    }
  }
}
