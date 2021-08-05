import {
  PostgresUsersRepository,
} from '@repositories/implementations/PostgresUsersRepository';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

const postgresUsersRepositories = new PostgresUsersRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  postgresUsersRepositories,
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
);

export { authenticateUserUseCase, authenticateUserController };
