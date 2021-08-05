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

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid', { name: 'profile_id' })
  profileId?: string;

  @Column()
  name: string;

  @Column({ name: 'user_id' })
  userId: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column({ unique: true })
  phone: string;

  @Column()
  address: string;

  @Column()
  type: 'client' | 'author';

  @CreateDateColumn({ name: 'created_at' })
  private createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt?: Date;

  constructor(props: Profile) {
    Object.assign(this, props);

    if (!this.type) {
      this.type = 'client';
    }

    if (!this.profileId) {
      this.profileId = uuid();
    }
  }
}
