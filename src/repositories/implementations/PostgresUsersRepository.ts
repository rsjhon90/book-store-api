import { User } from '@models/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { getRepository } from 'typeorm';

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const userRepository = getRepository(User);

    const userFound = await userRepository.findOne(
      { where: { email } },
    );

    return userFound;
  }

  async findById(userId: string): Promise<User> {
    const userRepository = getRepository(User);

    const userFound = await userRepository.findOne(userId);

    return userFound;
  }

  async save(data: User): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.save(data);

    return user;
  }
}
