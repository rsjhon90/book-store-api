import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { compare } from 'bcrypt';

import { IAuthUserRequest, ITokenResponse } from './AuthenticateUserDTO';
import {
  generateRefreshTokenProvider,
  generateTokenProvider,
} from '../refreshTokenUser';

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    email, password,
  }: IAuthUserRequest): Promise<ITokenResponse> {
    const userAlreadyExists = await this.usersRepository
      .findByEmail(email);

    if (!userAlreadyExists) {
      throw new AppError('Email or passowrd incorrect.', 401);
    }

    const passwordMatched = await compare(password, userAlreadyExists.password);
    if (!passwordMatched) {
      throw new AppError('Email or passowrd incorrect.', 401);
    }

    const { refreshId } = await generateRefreshTokenProvider.execute(
      userAlreadyExists.userId,
    );

    const token = generateTokenProvider.execute(
      userAlreadyExists.userId,
    );

    return { token, refreshToken: refreshId };
  }
}
