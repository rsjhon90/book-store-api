import { User } from '@models/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { getRepository } from 'typeorm';

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const userRepository = getRepository(User);

    const findUser = await userRepository.findOne(
      { where: { email } },
    );

    return findUser;
  }

  async save(data: User): Promise<void> {
    const userRepository = getRepository(User);

    await userRepository.save(data);
  }
}
