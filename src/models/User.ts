import {
  Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, default: false })
  isAdmin?: boolean;

  @Column({ nullable: true, default: false })
  isAuthor?: boolean;

  @CreateDateColumn({ name: 'created_at' })
  private createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  private updatedAt?: Date;

  constructor(props: User) {
    Object.assign(this, props);

    if (!this.isAdmin) {
      this.isAdmin = false;
    }
    if (!this.isAuthor) {
      this.isAuthor = false;
    }
  }
}
