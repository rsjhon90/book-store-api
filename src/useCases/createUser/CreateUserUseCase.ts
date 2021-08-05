import { AppError } from '@errors/AppError';
import { User } from '@models/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { hash } from 'bcrypt';

import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository
      .findByEmail(data.email);

    if (userAlreadyExists) {
      throw new AppError('User already exists', 401);
    }
    const hashedPassword = await hash(data.password, 10);
    // eslint-disable-next-line no-param-reassign
    data.password = hashedPassword;

    const user = await this.usersRepository.save(new User(data));

    return user;
  }
}
