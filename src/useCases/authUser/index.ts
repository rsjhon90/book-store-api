import {
  PostgresUsersRepository,
} from '@repositories/implementations/PostgresUsersRepository';

import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

const postgresUsersRepository = new PostgresUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  postgresUsersRepository,
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
);

export { authenticateUserUseCase, authenticateUserController };
