import { User } from '../models/User';

export interface IUsersRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(userId: string): Promise<User>;
}
