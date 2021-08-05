import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@repositories/IUsersRepository';
import * as jwt from 'jsonwebtoken';
import { compare } from 'bcrypt';

import authconfig from '@config/auth';
import { IAuthUserDTO } from './AuthenticateUserDTO';

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IAuthUserDTO): Promise<{ token: string }> {
    const userAlreadyExists = await this.usersRepository
      .findByEmail(email);

    if (!userAlreadyExists) {
      throw new AppError('Email or passowrd incorrect.', 401);
    }

    const passwordMatched = await compare(password, userAlreadyExists.password);
    if (!passwordMatched) {
      throw new AppError('Email or passowrd incorrect.', 401);
    }

    const { secret, expiresIn } = authconfig.jwtInfo;

    const token = jwt.sign({}, secret,
      {
        subject: userAlreadyExists.userId,
        expiresIn,
      });

    return { token };
  }
}
