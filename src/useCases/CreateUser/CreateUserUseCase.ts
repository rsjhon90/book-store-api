import { AppError } from '@errors/AppError';
import { User } from '@models/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository
      .findByEmail(data.email);

    if (userAlreadyExists) {
      throw new AppError('User already exists', 401);
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
