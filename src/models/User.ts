import { v4 as uuid } from 'uuid';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';

import { Profile } from './Profile';
import { RefreshToken } from './RefreshToken';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId?: string

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: false })
  isAdmin?: boolean;

  @Column({ nullable: true, default: false })
  isAuthor?: boolean;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile?: Profile;

  @OneToOne(() => RefreshToken, (refreshtoken) => refreshtoken.user)
  refreshToken?: RefreshToken

  @CreateDateColumn({ name: 'created_at' })
  private createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt?: Date;

  constructor(props: User) {
    Object.assign(this, props);

    if (!this.userId) {
      this.userId = uuid();
    }
    if (!this.isAdmin) {
      this.isAdmin = false;
    }
    if (!this.isAuthor) {
      this.isAuthor = false;
    }
  }
}
